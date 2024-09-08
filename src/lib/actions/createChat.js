"use server"

import {createClient} from "@/lib/supabase/server";

export async function CreateChat(me, you) {
    const supabase = createClient()

    const {data: chatData, error: chatError} = await supabase
        .from('chats')
        .insert({messages: [], uids: [me, you]})
        .select()

    if (chatError) {
        console.error("Error creating chat:", chatError)
        return
    }

    const newChatId = chatData[0].id

    async function updateUserChatIds(userId) {
        const {data: userData, error: fetchError} = await supabase
            .from('users')
            .select('chat_ids')
            .eq('uid', userId)
            .single()

        if (fetchError) {
            console.error(`Error fetching chat_ids for user ${userId}:`, fetchError)
            return
        }

        const updatedChatIds = [...(userData.chat_ids), newChatId]

        const {error: updateError} = await supabase
            .from('users')
            .update({chat_ids: updatedChatIds})
            .eq('uid', userId)

        if (updateError) {
            console.error(`Error updating chat_ids for user ${userId}:`, updateError)
        }
    }

    await updateUserChatIds(me)
    await updateUserChatIds(you)
}