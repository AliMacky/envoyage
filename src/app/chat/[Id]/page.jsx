import {Chat} from "@/app/chat/[Id]/chat";
import {getHistory} from "@/lib/actions/getHistory";
import {getUser} from "@/lib/actions/getUser";

export default async function Home(Id) {
    const history = await getHistory(Id.params.Id)
    const user = await getUser()

    return (
        <Chat chatId={Id.params.Id} history={history} uid={user.id}/>
    )
}