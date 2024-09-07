import {HeadsetIcon, NotebookIcon, PanelLeftCloseIcon, RocketIcon, UserIcon} from "lucide-react";
import Link from "next/link";

const Sidebar = ({isMC = false}) => {
    return <div className="flex flex-1 w-80 h-full bg-zinc-900 rounded-2xl flex-col text-white m-1.5">
        <div className="flex flex-row p-6 items-center justify-center">
            <div className="flex flex-1 flex-row gap-4">
                <img src="/envoyage.svg" alt="logo" className="invert w-8 h-8"/>
                <h1 className="font-[Orbitron] text-2xl">ENVOYAGE</h1>
            </div>
            <button className="p-1.5 hover:bg-zinc-700 rounded-lg transition ease-in-out duration-300">
                <PanelLeftCloseIcon className="w-5 h-5 text-neutral-400"/>
            </button>
        </div>
        <div className="flex flex-1 flex-col gap-1 px-6 text-neutral-400">
            <Link
                href={"/dashboard"}
                className="flex flex-row gap-2 w-full hover:bg-zinc-700 p-3 rounded-md transition ease-in-out text-sm duration-300">
                <RocketIcon className="w-5 h-5"/>
                Spacecraft
            </Link>
            <Link
                href={"/"}
                className="flex flex-row gap-2 w-full hover:bg-zinc-700 p-3 rounded-md transition ease-in-out text-sm duration-300">
                <HeadsetIcon className="w-5 h-5"/>
                Mission Control
            </Link>
            <Link
                href={"/journal"}
                className="flex flex-row gap-2 w-full hover:bg-zinc-700 p-3 rounded-md transition ease-in-out text-sm duration-300">
                <NotebookIcon className="w-5 h-5"/>
                Journal
            </Link>
        </div>
        <div className="py-4 px-3">
            <button
                className="flex flex-row gap-2 justify-center mx-auto w-full border border-zinc-700 hover:bg-zinc-700 p-3 rounded-lg transition ease-in-out text-sm duration-300">
                <UserIcon className="w-5 h-5"/>
                Profile
            </button>
        </div>
    </div>
}

export default Sidebar;