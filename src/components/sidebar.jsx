import ClientSidebar from "@/components/sidebar-client";
import {getUserInfo} from "@/lib/actions/getUserInfo";

export default async function Sidebar() {
    const user = await getUserInfo()

    return(<ClientSidebar role={user[0].role}/>)
}