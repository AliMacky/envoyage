"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";
import {
    Activity,
    CornerDownRight,
    FileClock,
    HeadsetIcon,
    NotebookIcon,
    PanelLeftCloseIcon,
    PanelLeftOpenIcon,
    RocketIcon,
    UserIcon,
} from "lucide-react";
import Link from "next/link";

const linkTextVariants = {
    open: {opacity: 1, display: "block"},
    closed: {opacity: 0, display: "none"},
};

const ClientSidebar = ({role, controllerChats}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const sidebarVariants = {
        open: {width: "20rem"},
        closed: {width: "5rem"},
    };

    return (
        <motion.div
            className="flex flex-col h-full bg-zinc-900 rounded-xl text-white m-1.5 border overflow-hidden"
            initial="open"
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
            transition={{duration: 0.3, ease: "easeInOut"}}
        >
            <div className="flex flex-row p-6 items-center justify-between">
                <Link href={"/"} className="flex flex-row gap-4">
                    <img
                        src="/envoyage.svg"
                        alt="logo"
                        className="invert w-8 h-8"
                    />
                    <motion.h1
                        className="font-[Orbitron] text-2xl"
                        variants={linkTextVariants}
                    >
                        ENVOYAGE
                    </motion.h1>
                </Link>
                {isOpen && (
                    <button
                        onClick={toggleSidebar}
                        className="p-1.5 hover:bg-zinc-800 rounded-lg transition ease-in-out duration-300"
                    >
                        <PanelLeftCloseIcon className="w-5 h-5 text-neutral-400"/>
                    </button>
                )}
            </div>
            <div
                className={`flex flex-1 flex-col ${
                    isOpen ? "px-6" : "mx-auto"
                } gap-1 text-neutral-400`}
            >
                {!isOpen && (
                    <button
                        onClick={toggleSidebar}
                        className="hover:bg-zinc-800 p-3 rounded-md transition ease-in-out text-sm duration-300 mb-3"
                    >
                        <PanelLeftOpenIcon className="w-5 h-5 text-neutral-400"/>
                    </button>
                )}
                <SidebarLink
                    href="/dashboard"
                    icon={<RocketIcon className="w-5 h-5"/>}
                    text="Spacecraft"
                    isOpen={isOpen}
                />
                <SidebarLink
                    href="/chat/astronauts"
                    icon={<HeadsetIcon className="w-5 h-5"/>}
                    text="Mission Control"
                    isOpen={isOpen}
                />
                <SidebarLink
                    href={
                        role === "astronaut" ? "/vitals/astronaut" : "/vitals"
                    }
                    icon={<Activity className="w-5 h-5"/>}
                    text={"Vitals"}
                    isOpen={isOpen}
                />
                {role === "astronaut" && (
                    <SidebarLink
                        href="/journal"
                        icon={<NotebookIcon className="w-5 h-5"/>}
                        text="Journal"
                        isOpen={isOpen}
                    />
                )}
                {role === "astronaut" && (
                    <SidebarLink
                        href="/journal-history"
                        icon={<FileClock className="w-5 h-5"/>}
                        text="Journal History"
                        isOpen={isOpen}
                    />
                )}
                {role === "control" &&
                    <div className="flex flex-col">
                        <motion.span
                            variants={linkTextVariants}
                            transition={{duration: 0, ease: "easeInOut"}}
                        >
                            <p className="pl-3 pt-4 pb-1 font-semibold">Collaborate</p>
                            <div
                                className={`flex flex-1 flex-col gap-1 pl-6 text-neutral-400`}>
                                {controllerChats.map((chat, index) => (
                                    <div className="flex flex-row gap-2 items-center" key={index}>
                                        <CornerDownRight/>
                                        <SidebarLink
                                            href={`/chat/${chat.chatId}`}
                                            icon={<UserIcon className="w-5 h-5"/>}
                                            text={chat.users
                                                .map((user) => user.user_name)
                                                .join(", ")
                                            }
                                            isOpen={isOpen}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.span>
                    </div>
                }
            </div>
            <div className="py-4 px-3">
                <SidebarLink
                    href="/profile"
                    icon={<UserIcon className="w-5 h-5"/>}
                    text="Profile"
                    isOpen={isOpen}
                    isProfile
                />
            </div>
        </motion.div>
    );
};

const SidebarLink = ({href, icon, text, isOpen, isProfile = false}) => {
    return (
        <Link
            href={href}
            className={`inline-flex flex-row gap-2 items-center w-full hover:bg-zinc-800 p-3 rounded-md overflow-hidden transition ease-in-out text-sm duration-300 ${
                isProfile ? "justify-center border border-zinc-700" : ""
            }`}
        >
            {icon}
            <motion.span
                variants={linkTextVariants}
                transition={{duration: 0, ease: "easeInOut"}}
            >
                {text}
            </motion.span>
        </Link>
    );
};

export default ClientSidebar;
