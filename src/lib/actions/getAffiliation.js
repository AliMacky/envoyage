"use server"
import {createClient} from "@/lib/supabase/server";

export async function getAffiliation(uid) {
    const supabase = createClient()

    const {data, error} = await supabase.from("users").select("affiliation").eq("uid", uid)
    return data && data.length > 0 ? data[0].affiliation : null
}