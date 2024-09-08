"use server"

import { createClient } from "@/lib/supabase/server";

export async function getChatInfo(chatIds) {
    const supabase = createClient();
    const chatInfo = [];

    for (const chatId of chatIds) {
        const { data: chatData, error: chatError } = await supabase
            .from('chats')
            .select('*')
            .eq('id', chatId)
            .single();

        if (chatError) {
            console.error(`Error fetching chat info for chat ${chatId}:`, chatError);
            continue;
        }

        const { data: userData, error: userError } = await supabase
            .from('users')
            .select('uid, user_name, affiliation, role')
            .in('uid', chatData.uids);

        if (userError) {
            console.error(`Error fetching user info for chat ${chatId}:`, userError);
            continue;
        }

        chatInfo.push({
            chatId: chatId,
            chatData: chatData,
            users: userData
        });
    }

    return chatInfo && chatInfo.length > 0 ? chatInfo : null
}
