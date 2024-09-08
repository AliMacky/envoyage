import * as React from "react";
import Sidebar from "@/components/sidebar";
import {ChevronRight, Users} from "lucide-react";
import {getUserChats} from "@/lib/actions/getUserChats";
import {getChatInfo} from "@/lib/actions/getChatInfo";
import Link from "next/link";
import {IconMessage} from "@tabler/icons-react";
import {motion} from "framer-motion";
import AstronautChats from "@/app/chat/astronauts/astronautChats";

const page = async () => {
    const chatIds = await getUserChats();
    const chats = await getChatInfo(chatIds);

    const astronautChats = chats.filter((chat) =>
        chat.users.some((user) => user.role === "astronaut")
    );
    console.log(astronautChats);

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex-1 w-full p-4">
                <div
                    className={"text-sm text-gray-500 flex gap-1 items-center"}
                >
                    Envoyage <ChevronRight size={15}/> Mission Control
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Mission Control
                </div>
                <AstronautChats astronautChats={astronautChats}/>
            </div>
        </div>
    );
};

export default page;
