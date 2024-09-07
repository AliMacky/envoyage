import Sidebar from "@/components/sidebar";
import {CalendarIcon, ChevronDown, ChevronRight, SendIcon} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";

const Home = () => {
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
                    <div className="flex flex-row gap-2 px-2 py-1 bg-zinc-900 hover:bg-zinc-700 transition ease-in-out duration-300 justify-center items-center text-white rounded-md w-fit text-xs">
                        <CalendarIcon className="h-4 w-4"/>
                        January 2024
                        <ChevronDown className="h-3 w-3"/>
                    </div>
                </button>
                <Textarea placeholder="Start hournaling" className="w-full h-full rounded-xl p-4 mt-2" />
                <button className="self-end flex flex-row gap-2 w-fit items-center justify-center hover:bg-zinc-700 transition ease-in-out duration-300 px-4 py-2 rounded-md bg-zinc-900 text-white">
                    Send
                    <SendIcon className="w-4 h-4"/>
                </button>
            </div>
        </div>
    </div>;
}

export default Home;