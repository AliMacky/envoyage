"use server"

import {createClient} from "@/lib/supabase/server";

export async function CreateChat(me, you) {
    const supabase = createClient()

    // Create new chat
    const {data: chatData, error: chatError} = await supabase
        .from('chats')
        .insert({messages: [], uids: [me, you]})
        .select()

    if (chatError) {
        console.error("Error creating chat:", chatError)
        return
    }

    const newChatId = chatData[0].id

    // Function to update user's chat_ids
    async function updateUserChatIds(userId) {
        // Fetch current chat_ids
        const {data: userData, error: fetchError} = await supabase
            .from('users')
            .select('chat_ids')
            .eq('uid', userId)
            .single()

        if (fetchError) {
            console.error(`Error fetching chat_ids for user ${userId}:`, fetchError)
            return
        }

        // Append new chat ID to existing chat_ids
        const updatedChatIds = [...(userData.chat_ids), newChatId]

        // Update user's chat_ids
        const {error: updateError} = await supabase
            .from('users')
            .update({chat_ids: updatedChatIds})
            .eq('uid', userId)

        if (updateError) {
            console.error(`Error updating chat_ids for user ${userId}:`, updateError)
        }
    }

    // Update chat_ids for both users
    await updateUserChatIds(me)
    await updateUserChatIds(you)
}