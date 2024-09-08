import {getJournalEntry} from "@/lib/actions/getJournalEntry";
import Sidebar from "@/components/sidebar";
import {ChevronRight} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";

const Home = async (Id) => {
    const id = Id.params.Id
    const entry = await getJournalEntry(id)

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex-1 w-full p-4 flex flex-col">
                <div className="text-sm text-gray-500 flex gap-1 items-center">
                    Envoyage <ChevronRight size={15}/> Journal History <ChevronRight
                    size={15}/> {new Date(entry.created_at).toLocaleString()}
                </div>
                <div className="font-semibold text-4xl tracking-tight mt-2">
                    Journal History
                </div>
                <div className="mt-4 flex-grow flex flex-col">
                    <Textarea
                        className="w-full resize-none flex-grow bg-zinc-900 rounded-xl p-4"
                        value={entry.content}
                        readOnly={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
