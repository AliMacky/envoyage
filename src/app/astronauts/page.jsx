import {getJournalEntries} from "@/lib/actions/getJournalEntries";
import {getUser} from "@/lib/actions/getUser";
import getAstronautHealth from "@/lib/actions/astronautHealthAI";
import Sidebar from "@/components/sidebar";
import {ChevronRight} from "lucide-react";
import {AstronautHealthChart} from "./astronautCharts";

const Home = async () => {
    const user = await getUser();
    const journals = await getJournalEntries(user.id);
    const status = await getAstronautHealth(journals.at(-1).content);

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex flex-col flex-1 w-full p-4">
                <div></div>
                <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
                    Envoyage <ChevronRight size={15}/> Vitals
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Astronaut Vitals
                </div>
                <div className={"text-sm text-white flex gap-1 items-center my-2"}>
                    Monitor the health of your astronauts over time.
                </div>
                <div className={"flex-1 h-full mt-4"}>
                    <div className={"flex flex-1 flex-row gap-8 h-full mx-auto"}>
                        <AstronautHealthChart status={status}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
