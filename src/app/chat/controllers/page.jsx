import * as React from 'react';
import Sidebar from "@/components/sidebar";
import {ChevronRight} from "lucide-react";
import {getUserChats} from "@/lib/actions/getUserChats";
import {getChatInfo} from "@/lib/actions/getChatInfo";
import Link from 'next/link';

const page = async () => {
    const chatIds = await getUserChats()
    const chats = await getChatInfo(chatIds)
    
    const controllerChats = chats.filter(chat =>
        chat.users.every(user => user.role === 'control')
    )

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex-1 w-full p-4">
                <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
                    Envoyage <ChevronRight size={15}/> Controller Chats
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Controller Chats
                </div>
                <div className="mt-4 space-y-4">
                    {controllerChats.map((chat, index) => (
                        <Link href={`/chat/${chat.chatId}`} key={chat.chatId}>
                            <div className="p-4 my-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
                                <h3 className="text-lg font-semibold">Controler Chat {index + 1}</h3>
                                <p className="text-sm text-gray-400">
                                    Participants: {chat.users.map(user => user.user_name).join(', ')}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
