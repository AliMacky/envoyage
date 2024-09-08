"use server"
import {createClient} from "@/lib/supabase/server";

export default async function getSubordinates(affiliation) {
    const supabase = createClient()
        const {data, error} = await supabase
            .from('users')
            .select()
            .eq("affiliation", affiliation)
            .eq("role", "astronaut")

    return data && data.length > 0 ? data : null
}