"use server";

import {createClient} from "@/lib/supabase/server";
import {getUser} from "@/lib/actions/getUser";

export async function getUserInfo() {
    const supabase = createClient()
    const user = await getUser()

    const {data, error} = await supabase.from("users").select().eq("uid", user.id)
    return data
}