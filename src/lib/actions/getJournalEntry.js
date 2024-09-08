"use server"

import {createClient} from "@/lib/supabase/server";

export async function getJournalEntry(id) {
    const supabase = createClient()

    const {data, error} = await supabase
        .from('journals')
        .select()
        .eq("id", id)
    return data && data.length > 0 ? data[0] : null
}