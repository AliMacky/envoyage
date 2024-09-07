"use server"
import {createClient} from "@/lib/supabase/server";

export async function getAffiliation(id) {
    const supabase = createClient()

    const {data, error} = await supabase.from("chats").select("affiliation").eq("id", id)
    console.log(data)
    return data
}