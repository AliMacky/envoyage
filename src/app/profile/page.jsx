import Sidebar from "@/components/sidebar";
import { ChevronRight, LogOut } from "lucide-react";
import * as React from "react";
import { getUser } from "@/lib/actions/getUser";
import { getUserInfo } from "@/lib/actions/getUserInfo";

const Home = async () => {
    const user = await getUserInfo();

    return (
        <div>
            <div className="h-screen w-screen flex flex-row">
                <div className="flex flex-col h-full">
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-1 w-full gap-2 p-4">
                    <div className="text-sm text-gray-500 flex gap-1 items-center">
                        Envoyage <ChevronRight size={15} /> Profile
                    </div>
                    <div className="font-semibold text-4xl tracking-tight">
                        Profile
                    </div>
                    <div className="border rounded-lg flex p-4 gap-4 mt-2">
                        <div
                            className={
                                "flex items-center justify-center aspect-square w-28 bg-zinc-900 text-5xl font-extralight h-28 border rounded-full p-4"
                            }
                        >
                            {user.user_name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div className={"flex gap-4"}>
                                <p className={"text-3xl font-semibold"}>
                                    {user.user_name}
                                </p>
                                <div className={"text-3xl"}>
                                    {user.affiliation === "USA"
                                        ? "🇺🇸"
                                        : user.affiliation === "CHN"
                                        ? "🇨🇳"
                                        : "🇷🇺"}
                                </div>
                            </div>
                            <p className={"text-gray-500"}>{user.role}</p>
                        </div>
                    </div>
                    <a
                        href={"/logout"}
                        className="mt-2 flex flex-row gap-2 w-fit items-center justify-center hover:bg-zinc-700 transition ease-in-out duration-300 px-4 py-2 rounded-md bg-zinc-800"
                    >
                        Logout
                        <LogOut className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
