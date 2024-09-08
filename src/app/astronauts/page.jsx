import { getJournalEntries } from "@/lib/actions/getJournalEntries";
import { getUser } from "@/lib/actions/getUser";
import getAstronautHealth from "@/lib/actions/astronautHealthAI";
import Sidebar from "@/components/sidebar";
import { ChevronRight } from "lucide-react";
import { AstronautHealthChart } from "./astronautCharts";

const Home = async () => {
  const user = await getUser();
  const journals = await getJournalEntries(user.id);
  const data = [];
  for (let i = 0; i < journals.length; i++) {
    const entry = journals[i];
    const health = await getAstronautHealth(entry.content);
    data.push({
      date: entry.date,
      score: parseInt(health.score),
      justification: health.justifications,
    });
  }

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="flex flex-col h-full">
        <Sidebar />
      </div>
      <div className="flex-1 w-full p-4">
        <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
          Envoyage <ChevronRight size={15} /> Vitals
        </div>
        <div className={"font-semibold text-4xl tracking-tight mt-2"}>
          Astronaut Vitals
        </div>
        <div className={"text-sm text-white flex gap-1 items-center my-2"}>
          Monitor the health of your astronauts over time.
        </div>
        <div className={"mt-4"}>
          <div className={"flex flex-row gap-8 mx-auto"}>
            <AstronautHealthChart healthData={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
