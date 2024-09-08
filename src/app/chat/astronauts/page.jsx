import * as React from "react";
import Sidebar from "@/components/sidebar";
import { ChevronRight, Users } from "lucide-react";
import { getUserChats } from "@/lib/actions/getUserChats";
import { getChatInfo } from "@/lib/actions/getChatInfo";
import Link from "next/link";
import { IconMessage } from "@tabler/icons-react";

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
                <Sidebar />
            </div>
            <div className="flex-1 w-full p-4">
                <div
                    className={"text-sm text-gray-500 flex gap-1 items-center"}
                >
                    Envoyage <ChevronRight size={15} /> Mission Control
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Mission Control
                </div>
                <div className="mt-4 space-y-4">
                    {astronautChats.map((chat, index) => (
                        <Link href={`/chat/${chat.chatId}`} key={chat.chatId}>
                            <div className="p-4 my-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors flex gap-4 items-center">
                                <div>
                                    <IconMessage size={50} strokeWidth={1} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Astronaut Chat {index + 1}
                                    </h3>
                                    <div
                                        className={
                                            "text-sm border-gray-600 border w-fit py-1 px-2 rounded flex gap-1 items-center mt-1"
                                        }
                                    >
                                        <Users size={15} />
                                        Participants:{" "}
                                        {chat.users
                                            .map((user) => user.user_name)
                                            .join(", ")}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
