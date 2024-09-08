"use client"
import Sidebar from "@/components/sidebar";
import {CalendarIcon, ChevronDown, ChevronRight, SendIcon} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import * as React from "react";
import {useState} from "react";
import {createJournalEntry} from "@/lib/actions/createJournalEntry";
import {getUser} from "@/lib/actions/getUser";

const Home = () => {
    const [journalEntry, setJournalEntry] = useState("");

    const handleSendEntry = async () => {
        if (journalEntry.trim() === "") return;

        const user = await getUser();
        if (user) {
            await createJournalEntry(journalEntry, user.id);
            setJournalEntry(""); // Clear the textarea after sending
        } else {
            console.error("User not found");
            // You might want to add some error handling or user feedback here
        }
    };

    return <div>
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex flex-col flex-1 w-full gap-2 p-4">
                <div className="text-sm text-gray-500 flex gap-1 items-center">
                    Envoyage <ChevronRight size={15}/> Journal
                </div>
                <div className="font-semibold text-4xl tracking-tight">
                    Journal
                </div>
                <button className="flex flex-col mt-2">
                    <div
                        className="flex flex-row gap-2 px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-white transition ease-in-out duration-300 justify-center items-center rounded-md w-fit text-xs">
                        <CalendarIcon className="h-4 w-4"/>
                        January 2024
                        <ChevronDown className="h-3 w-3"/>
                    </div>
                </button>
                <Textarea
                    placeholder="Start journaling"
                    className="w-full h-full bg-zinc-900 rounded-xl p-4 mt-2"
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                />
                <button
                    className="self-end flex flex-row gap-2 w-fit items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white transition ease-in-out duration-300 px-4 py-2 rounded-md"
                    onClick={handleSendEntry}
                >
                    Send
                    <SendIcon className="w-4 h-4"/>
                </button>
            </div>
        </div>
    </div>;
}

export default Home;