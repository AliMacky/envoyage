"use client";

import {CalendarIcon, ChevronDown, ChevronRight, SendIcon} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import {useState} from "react";
import {createJournalEntry} from "@/lib/actions/createJournalEntry";

const Journal = ({user}) => {
    const [journalEntry, setJournalEntry] = useState("");

    const handleSubmit = async () => {
        if (journalEntry.trim() === "") return;

        if (user) {
            await createJournalEntry(journalEntry, user.id);
            setJournalEntry("");
        } else {
            console.error("User not found");
        }
    };

    return <div className="flex flex-col flex-1 w-full gap-2 p-4">
        <div className="text-sm text-gray-500 flex gap-1 items-center">
            Envoyage <ChevronRight size={15}/> Journal
        </div>
        <div className="font-semibold text-4xl tracking-tight">
            Journal
        </div>
        <Textarea
            placeholder="Start journaling"
            className="w-full h-full bg-zinc-900 rounded-xl p-4 mt-2"
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
        />
        <button
            className="self-end flex flex-row gap-2 w-fit items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white transition ease-in-out duration-300 px-4 py-2 rounded-md"
            onClick={handleSubmit}
        >
            Send
            <SendIcon className="w-4 h-4"/>
        </button>
    </div>;
};

export default Journal;
