import * as React from "react";
import Sidebar from "@/components/sidebar";
import { ChevronRight, Users } from "lucide-react";
import { getUserChats } from "@/lib/actions/getUserChats";
import { getChatInfo } from "@/lib/actions/getChatInfo";
import Link from "next/link";
import { IconMessage } from "@tabler/icons-react";
import ControllerChats from "@/app/chat/controllers/controllerChats";

const page = async () => {
    const chatIds = await getUserChats();
    const chats = await getChatInfo(chatIds);

    const controllerChats = chats.filter((chat) =>
        chat.users.every((user) => user.role === "control")
    );

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar />
            </div>
            <div className="flex-1 w-full p-4">
                <div
                    className={"text-sm text-gray-500 flex gap-1 items-center"}
                >
                    Envoyage <ChevronRight size={15} /> Collaborate
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Collaborate
                </div>
                <ControllerChats controllerChats={controllerChats}/>
            </div>
        </div>
    );
};

export default page;
