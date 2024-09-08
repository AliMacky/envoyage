import * as React from 'react';
import Sidebar from "@/components/sidebar";
import {ChevronRight} from "lucide-react";
import {OxygenChart, FuelChart, TemperatureChart, CO2Chart, PChart, BatteryChart, PowerChart} from "@/app/dashboard/chart";

const page = () => {
    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex-1 w-full p-4">
                <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
                    Envoyage <ChevronRight size={15}/> Dashboard
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Dashboard
                </div>
                <div className={"text-sm text-white flex gap-1 items-center my-2"}>
                    Track the vitals of your spacecraft.
                </div>
                <div className={"mt-4"}>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div className={"border rounded-lg flex flex-col overflow-hidden"}>
                            <div className={"bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"}>
                                OXYGEN
                            </div>
                            <div className={"py-2 px-4"}>
                                <div className={"my-2 text-sm text-gray-500 pb-2"}>Oxygen levels over time</div>
                                <OxygenChart/>
                            </div>
                        </div>
                        <div className={"border rounded-lg flex flex-col overflow-hidden"}>
                            <div className={"bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"}>
                                CARBON DIOXIDE
                            </div>
                            <div className={"py-2 px-4"}>
                                <div className={"my-2 text-sm text-gray-500 pb-2"}>Carbon Dioxide levels over time</div>
                                <CO2Chart />
                            </div>
                        </div>
                        <div className={"border rounded-lg flex flex-col overflow-hidden"}>
                            <div className={"bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"}>
                                PRESSURE
                            </div>
                            <div className={"py-2 px-4"}>
                                <div className={"my-2 text-sm text-gray-500 pb-2"}>Pressure levels over time</div>
                                <PChart/>
                            </div>
                        </div>
                        <div className={"border rounded-lg flex flex-col overflow-hidden col-span-2"}>
                            <div className={"bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"}>
                                POWER
                            </div>
                            <div className={"py-2 px-4"}>
                                <div className={"my-2 text-sm text-gray-500 pb-2"}>Power levels over time</div>
                                <div className="grid grid-cols-3 gap-4 flex flex-1 items-center">
                                    <FuelChart />
                                    <BatteryChart />
                                    <PowerChart />
                                </div>
                            </div>
                        </div>
                        <div className={"border rounded-lg flex flex-col overflow-hidden"}>
                            <div className={"bg-zinc-900 text-white px-4 py-1 text-lg font-semibold"}>
                                TEMPERATURE
                            </div>
                            <div className={"px-4 pb-2"}>
                                <div className={"my-2 text-sm text-gray-500 pb-2"}>Temperature over time</div>
                                <TemperatureChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page