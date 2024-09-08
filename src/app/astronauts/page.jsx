import {getJournalEntries} from "@/lib/actions/getJournalEntries";
import {getUser} from "@/lib/actions/getUser";
import getAstronautHealth from "@/lib/actions/astronautHealthAI";
import Sidebar from "@/components/sidebar";
import Astronauts from "@/app/astronauts/astronauts";

const Home = async () => {
    const user = await getUser();
    const journals = await getJournalEntries(user.id);

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <Astronauts journals={journals}/>
        </div>
    );
};

export default Home;
