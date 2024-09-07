"use server"
import {createClient} from "@/lib/supabase/server";

export async function sendMessage(chatId, message, uid, chatHistory) {
    chatHistory.push({uid, message})
    const supabase = createClient()
    const {data, error} = await supabase.from("chats").update({messages: chatHistory}).eq('id', chatId)
}