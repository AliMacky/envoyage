"use client";

import Link from "next/link";
import { IconMessage } from "@tabler/icons-react";
import { TowerControl, Users } from "lucide-react";
import { motion } from "framer-motion";

const ControllerChats = ({ controllerChats }) => {
    return (
        <div className="mt-4 space-y-4">
            {controllerChats.map((chat, index) => (
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    delay={500}
                    transition={{
                        type: "spring",
                        duration: 0.6,
                    }}
                    key={chat.chatId}
                    className=""
                >
                    <Link href={`/chat/${chat.chatId}`} key={chat.chatId}>
                        <div className="p-4 my-3 bg-zinc-800 rounded-lg border border-zinc-600 hover:bg-zinc-700 transition-colors flex gap-4 items-center">
                            <div>
                                <Icon
                                    iconNode={astronautHelmet}
                                    size={50}
                                    strokeWidth={1}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {chat.users[1].user_name}
                                </h3>
                                {/* <div
                                className={
                                    "text-sm border-gray-600 border w-fit py-1 px-2 rounded flex gap-1 items-center mt-1"
                                }
                            >
                                <Users size={15}/>
                                Participants:{" "}
                                {chat.users
                                    .map((user) => user.user_name)
                                    .join(", ")}
                            </div> */}
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default ControllerChats;
