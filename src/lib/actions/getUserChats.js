"use server"
import {getUser} from "@/lib/actions/getUser";
import {createClient} from "@/lib/supabase/server";

export async function getUserChats() {
    const supabase = createClient()
    const user = await getUser()

    const {data, error} = await supabase.from("users").select().eq("uid", user.id)
    return data && data.length > 0 ? data[0].chat_ids : null
}