"use server"
import {createClient} from "@/lib/supabase/server";
import {translateText} from "@/lib/actions/translate";

export async function sendMessage(chatId, message, uid, chatHistory, affiliation) {
    const messages = await translateText(message, affiliation)
    chatHistory.push({uid, affiliation, messages})
    const supabase = createClient()
    const {data, error} = await supabase.from("chats").update({messages: chatHistory}).eq('id', chatId)
}