import { Chat } from "@/app/chat/[Id]/chat";
import { getHistory } from "@/lib/actions/getHistory";
import { getUser } from "@/lib/actions/getUser";
import { getAffiliation } from "@/lib/actions/getAffiliation";
import { getRole } from "@/lib/actions/getRole";
import Sidebar from "@/components/sidebar";
import {getChatInfo} from "@/lib/actions/getChatInfo";
export default async function Home(Id) {
    const history = await getHistory(Id.params.Id);
    const user = await getUser();
    const affiliation = await getAffiliation(user.id);
    const role = await getRole(user.id);
    const chats = await getChatInfo([Id.params.Id]);

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar />
            </div>

            <Chat
                chatId={Id.params.Id}
                history={history}
                uid={user.id}
                affiliation={affiliation}
                role={role}
                users={chats[0].users}
            />
        </div>
    );
}
