"use server"

import {createClient} from "@/lib/supabase/server";

export async function getJournalEntries(uid) {
    const supabase = createClient()

    const {data, error} = await supabase
        .from('journals')
        .select()
        .eq("uid", uid)
    return data
}