import {getJournalEntries} from "@/lib/actions/getJournalEntries";
import {getUser} from "@/lib/actions/getUser";
import Sidebar from "@/components/sidebar";
import {ChevronRight, Clock, FileText, NotepadText, StickyNote} from "lucide-react";
import Link from "next/link";

export default async function Home() {
    const user = await getUser();
    const journals = await getJournalEntries(user.id)

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex-1 w-full p-4">
                <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
                    Envoyage <ChevronRight size={15}/> Journal History
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Journal History
                </div>
                <div className="mt-4 space-y-4">
                    {journals !== null && journals.map((journal, index) => (
                        <Link href={`/journal/${journal.id}`} key={journal.id}>
                            <div className="p-4 my-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors flex gap-4 items-center">
                                <div>
                                    <FileText size={50} strokeWidth={1} />
                                </div>
                                <div>
                                <div className="flex flex-row items-center">
                                    <h3 className="text-lg font-semibold">Journal {index + 1} </h3>
                                    <p className="pl-3 text-gray-500 truncate max-w-2xl">{journal.content}</p>
                                </div>
                                <div className={"text-sm border-gray-600 border w-fit py-1 px-2 rounded flex gap-1 items-center mt-1"}>
                                    <Clock size={15} />
                                    {new Date(journal.created_at).toLocaleString()}
                                </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}