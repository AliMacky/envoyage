import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";

export default async function Home() {
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect("/");

    return (
        <></>
    )
}