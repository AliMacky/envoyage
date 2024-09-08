"use client"
import {createClient} from "@/lib/supabase/client";
import {redirect} from "next/navigation";

export default function Home() {
    const supabase = createClient()
    supabase.auth.signOut()
    redirect('/')

    return (
        <></>
    )
}