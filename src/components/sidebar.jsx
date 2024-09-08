import ClientSidebar from "@/components/sidebar-client";
import {getUserInfo} from "@/lib/actions/getUserInfo";
import {getUserChats} from "@/lib/actions/getUserChats";
import {getChatInfo} from "@/lib/actions/getChatInfo";

export default async function Sidebar() {
    const user = await getUserInfo()
    const chatIds = await getUserChats();
    const chats = await getChatInfo(chatIds);
    const controllerChats = chats.filter((chat) =>
        chat.users.every((user) => user.role === "control")
    );

    return(<ClientSidebar role={user.role} uid={user.uid} controllerChats={controllerChats}/>)
}