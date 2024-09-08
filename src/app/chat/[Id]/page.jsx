import {Chat} from "@/app/chat/[Id]/chat";
import {getHistory} from "@/lib/actions/getHistory";
import {getUser} from "@/lib/actions/getUser";
import {getAffiliation} from "@/lib/actions/getAffiliation";
import {getRole} from "@/lib/actions/getRole";

export default async function Home(Id) {
    const history = await getHistory(Id.params.Id)
    const user = await getUser()
    const affiliation = await getAffiliation(user.id)
    const role = await getRole(user.id)
    return (
        <Chat chatId={Id.params.Id} history={history} uid={user.id} affiliation={affiliation} role = {role}/>
    )
}