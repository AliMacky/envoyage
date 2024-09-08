"use server"
import {createClient} from "@/lib/supabase/server";
import ClientNavbar from "@/components/ui/navbar-client";

export default async function Navbar() {
    const supabase = createClient()
    const user = await supabase.auth.getUser()
    return(<ClientNavbar isAuthed={user.data.user !== null} />)
}