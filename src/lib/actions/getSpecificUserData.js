"use server"
import {createClient} from "@/lib/supabase/server";

export default async function getSpecificUserData(uid) {
    const supabase = createClient()
    const {data, error} = await supabase
        .from('users')
        .select('uid, user_name, affiliation, role')
        .eq('uid', uid);

    return data && data.length > 0 ? data[0] : null
}