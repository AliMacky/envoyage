"use server"
import {createClient} from "@/lib/supabase/server";

export async function getRole(uid) {
    const supabase = createClient()

    const {data, error} = await supabase.from("users").select("role").eq("uid", uid)
    return data[0].role
}