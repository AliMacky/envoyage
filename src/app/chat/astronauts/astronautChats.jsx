"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { Icon, Satellite, TowerControl, Users } from "lucide-react";
import { astronautHelmet } from "@lucide/lab";

const AstronautChats = ({ astronautChats, userInfo }) => {
    return (
        <div className="mt-4 space-y-4">
            {astronautChats.map((chat, index) => (
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
                    <Link href={`/chat/${chat.chatId}`}>
                        <div className="p-4 my-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 border border-zinc-600 transition-colors flex gap-4 items-center">
                            <div>
                                {userInfo.role === "astronaut" ? (
                                    <div>
                                        <TowerControl
                                            size={50}
                                            strokeWidth={1}
                                        />
                                    </div>
                                ) : (
                                    <Icon
                                        iconNode={astronautHelmet}
                                        size={50}
                                        strokeWidth={1}
                                    />
                                )}
                            </div>
                            <div className="flex gap-4 items-center">
                                <h3 className="text-lg font-semibold">
                                    {userInfo.role === "astronaut"
                                        ? chat.users[0].user_name
                                        : chat.users[1].user_name}
                                </h3>
                                {/* <div
                                    className={
                                        "text-sm border-gray-600 border w-fit py-1 px-2 rounded flex gap-1 items-center mt-1"
                                    }
                                >
                                    <Users size={15} />
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

export default AstronautChats;
