"use server"

import {createClient} from "@/lib/supabase/server";
import {revalidatePath} from "next/cache";

export async function createJournalEntry(message, uid) {
    const supabase = createClient()

    const {data, error} = await supabase
        .from('journals')
        .insert({uid: uid, content: message})

    revalidatePath("/journal-history")
    return data
}