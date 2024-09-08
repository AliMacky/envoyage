import * as React from "react";
import Sidebar from "@/components/sidebar";
import { ChevronRight } from "lucide-react";
import {
    OxygenChart,
    FuelChart,
    TemperatureChart,
    CO2Chart,
    PChart,
    BatteryChart,
    PowerChart,
} from "@/app/dashboard/chart";
import { BloodOChart, BloodPChart, BodyChart, BodyTempChart } from "./chart";
import { Component } from "./radar";

const page = () => {
    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar />
            </div>
            <div className="flex-1 w-full p-4">
                <div
                    className={"text-sm text-gray-500 flex gap-1 items-center"}
                >
                    Envoyage <ChevronRight size={15} /> My Health
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    My Health
                </div>
                <div
                    className={
                        "text-sm text-white flex gap-1 items-center my-2"
                    }
                >
                    Track your most important vitals.
                </div>
                <div className={"mt-4"}>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div
                            className={
                                "border rounded-lg flex flex-col overflow-hidden"
                            }
                        >
                            <div
                                className={
                                    "bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"
                                }
                            >
                                BLOOD PRESSURE %
                            </div>
                            <div className={"py-2 px-4"}>
                                <div
                                    className={
                                        "my-2 text-sm text-gray-500 pb-2"
                                    }
                                >
                                    Oxygen levels over time
                                </div>
                                <BloodPChart />
                            </div>
                        </div>
                        <div
                            className={
                                "border rounded-lg flex flex-col overflow-hidden"
                            }
                        >
                            <div
                                className={
                                    "bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"
                                }
                            >
                                BLOOD OXYGEN %
                            </div>
                            <div className={"py-2 px-4"}>
                                <div
                                    className={
                                        "my-2 text-sm text-gray-500 pb-2"
                                    }
                                >
                                    Carbon Dioxide levels over time
                                </div>
                                <BloodOChart />
                            </div>
                        </div>
                        <div
                            className={
                                "border rounded-lg flex flex-col overflow-hidden"
                            }
                        >
                            <div
                                className={
                                    "bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"
                                }
                            >
                                BODY TEMPERATURE
                            </div>
                            <div className={"py-2 px-4"}>
                                <div
                                    className={
                                        "my-2 text-sm text-gray-500 pb-2"
                                    }
                                >
                                    Pressure levels over time
                                </div>
                                <BodyTempChart />
                            </div>
                        </div>
                        <div
                            className={
                                "border rounded-lg flex flex-col overflow-hidden col-span-2"
                            }
                        >
                            <div
                                className={
                                    "bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"
                                }
                            >
                                POWER
                            </div>
                            <div className={"py-2 px-4"}>
                                <div
                                    className={
                                        "my-2 text-sm text-gray-500 pb-2"
                                    }
                                >
                                    Power levels over time
                                </div>
                                <Component />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
