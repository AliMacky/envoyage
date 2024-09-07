"use server"
import {createClient} from "@/lib/supabase/server";

export async function getHistory(id) {
    const supabase = createClient()

    const {data, error} = await supabase.from("chats").select("messages").eq("id", id)
    return data[0].messages
}