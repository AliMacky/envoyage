"use client";

import {
    Area,
    AreaChart,
    CartesianGrid,
    Label,
    Line,
    LineChart,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
    Tooltip,
    XAxis
} from "recharts";

import {ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart";

export const description = "A simple area chart";

const oxygenChartData = [
    {day: "Tue", mmHg: Math.random() * (90 - 65) + 65},
    {day: "Wed", mmHg: Math.random() * (90 - 65) + 65},
    {day: "Thu", mmHg: Math.random() * (90 - 65) + 65},
    {day: "Fri", mmHg: Math.random() * (90 - 65) + 65},
    {day: "Sat", mmHg: Math.random() * (90 - 65) + 65},
    {day: "Sun", mmHg: Math.random() * (90 - 65) + 65},
];

const oxygenChartConfig = {
    mmHg: {
        label: "mmHg",
        color: "blue",
    },
};

const isAnomaly = (value) => value < 70 || value > 85;

const CustomTooltip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        const mmHg = payload[0].value;
        const isAnomalous = isAnomaly(mmHg);
        return (
            <div className="bg-white p-2 border border-gray-300 rounded shadow">
                <p className={`text-sm ${isAnomalous ? "text-red-500" : "text-blue-500"}`}>
                    <span className="font-bold">Oxygen: </span> {mmHg.toFixed(2)} mmHg
                </p>
                {isAnomalous && (
                    <p className="text-xs text-red-500">Anomaly detected</p>
                )}
            </div>
        );
    }
    return null;
};

export function OxygenChart() {
    return (
        <div className="w-full h-64">
            <ChartContainer config={oxygenChartConfig}>
                <AreaChart
                    data={oxygenChartData}
                    margin={{left: 12, right: 12}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="day"
                           tickLine={false}
                           axisLine={false}/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Area
                        dataKey="mmHg"
                        type="natural"
                        fill="blue"
                        fillOpacity={0.4}
                        stroke="blue"
                        dot={(props) => {
                            const isAnomalous = isAnomaly(props.payload.mmHg);
                            return (
                                <circle
                                    cx={props.cx}
                                    cy={props.cy}
                                    r={4}
                                    fill={isAnomalous ? "#ef4444" : "#3b82f6"}
                                    stroke={isAnomalous ? "#ef4444" : "#3b82f6"}
                                />
                            );
                        }}
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    );
}


const co2ChartData = [
    {day: "Tuesday", ppm: Math.random() * (600 - 400) + 400},
    {day: "Wednesday", ppm: Math.random() * (600 - 400) + 400},
    {day: "Thursday", ppm: Math.random() * (600 - 400) + 400},
    {day: "Friday", ppm: Math.random() * (600 - 400) + 400},
    {day: "Saturday", ppm: Math.random() * (600 - 400) + 400},
    {day: "Sunday", ppm: Math.random() * (600 - 400) + 400},
];

const co2ChartConfig = {
    ppm: {
        label: "ppm",
        color: "blue",
    },
};

export function CO2Chart() {
    return (
        <ChartContainer config={co2ChartConfig}>
            <AreaChart
                accessibilityLayer
                data={co2ChartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false}/>
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={
                        <ChartTooltipContent
                            indicator="line"
                            className={"bg-black"}
                        />
                    }
                />
                <Area
                    dataKey="ppm"
                    type="natural"
                    fill="blue"
                    fillOpacity={0.4}
                    stroke="blue"
                />
            </AreaChart>
        </ChartContainer>
    );
}

const pChartData = [
    {day: "Tuesday", kPa: Math.random() * (98 - 80) + 80},
    {day: "Wednesday", kPa: Math.random() * (98 - 80) + 80},
    {day: "Thursday", kPa: Math.random() * (98 - 80) + 80},
    {day: "Friday", kPa: Math.random() * (98 - 80) + 80},
    {day: "Saturday", kPa: Math.random() * (98 - 80) + 80},
    {day: "Sunday", kPa: Math.random() * (98 - 80) + 80},
];

const pChartConfig = {
    kPa: {
        label: "kPa",
        color: "blue",
    },
};

export function PChart() {
    return (
        <ChartContainer config={pChartConfig}>
            <AreaChart
                accessibilityLayer
                data={pChartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false}/>
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={
                        <ChartTooltipContent
                            indicator="line"
                            className={"bg-black"}
                        />
                    }
                />
                <Area
                    dataKey="kPa"
                    type="natural"
                    fill="blue"
                    fillOpacity={0.4}
                    stroke="blue"
                />
            </AreaChart>
        </ChartContainer>
    );
}

const fuelValue = Math.floor(Math.random() * (30000 - 25000) + 25000);
const fuelChartData = [
    {browser: "safari", visitors: fuelValue, fill: fuelValue < 28000 ? "hsl(var(--chart-2))" : "yellow"},
];

const fuelChartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
    },
};

const batteryValue = Math.floor(Math.random() * 100);
const batteryChartData = [
    {browser: "safari", visitors: batteryValue, fill: batteryValue > 50 ? "hsl(var(--chart-2))" : "yellow"},
];

const batteryChartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
    },
};

const powerDrawData = Math.floor(Math.random() * (140 - 75) + 75);
const powerChartData = [
    {browser: "safari", visitors: powerDrawData, fill: powerDrawData < 100 ? "hsl(var(--chart-2))" : "red"},
];

const powerChartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
    },
};

export function FuelChart() {
    return (
        <div style={{width: "100%", height: "250px"}}>
            <ChartContainer config={fuelChartConfig} className="h-full w-full">
                <RadialBarChart
                    data={fuelChartData}
                    startAngle={0}
                    endAngle={fuelValue / 30000 * 360}
                    innerRadius={80}
                    outerRadius={110}

                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-muted last:fill-background"
                        polarRadius={[86, 74]}
                    />
                    <RadialBar
                        dataKey="visitors"
                        background
                        cornerRadius={10}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                    >
                        <Label
                            content={({viewBox}) => {
                                if (
                                    viewBox &&
                                    "cx" in viewBox &&
                                    "cy" in viewBox
                                ) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-white text-4xl font-bold"
                                            >
                                                {fuelChartData[0].visitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-white"
                                            >
                                                Km/H
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                </RadialBarChart>
            </ChartContainer>
        </div>
    );
}

export function BatteryChart() {
    return (
        <div style={{width: "100%", height: "250px"}}>
            <ChartContainer
                config={batteryChartConfig}
                className="h-full w-full"
            >
                <RadialBarChart
                    data={batteryChartData}
                    startAngle={0}
                    endAngle={batteryValue / 100 * 360}
                    innerRadius={80}
                    outerRadius={110}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-muted last:fill-background"
                        polarRadius={[86, 74]}
                    />
                    <RadialBar
                        dataKey="visitors"
                        background
                        cornerRadius={10}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                    >
                        <Label
                            content={({viewBox}) => {
                                if (
                                    viewBox &&
                                    "cx" in viewBox &&
                                    "cy" in viewBox
                                ) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-white text-4xl font-bold"
                                            >
                                                {batteryChartData[0].visitors.toLocaleString() + "%"}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-white"
                                            >
                                                Battery
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                </RadialBarChart>
            </ChartContainer>
        </div>
    );
}

export function PowerChart() {
    return (
        <div style={{width: "100%", height: "250px"}}>
            <ChartContainer config={powerChartConfig} className="h-full w-full">
                <RadialBarChart
                    data={powerChartData}
                    startAngle={0}
                    endAngle={powerDrawData / 140 * 360}
                    innerRadius={80}
                    outerRadius={110}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-muted last:fill-background"
                        polarRadius={[86, 74]}
                    />
                    <RadialBar
                        dataKey="visitors"
                        background
                        cornerRadius={10}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                    >
                        <Label
                            content={({viewBox}) => {
                                if (
                                    viewBox &&
                                    "cx" in viewBox &&
                                    "cy" in viewBox
                                ) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-white text-4xl font-bold"
                                            >
                                                {powerChartData[0].visitors.toLocaleString() + " kW"}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-white"
                                            >
                                                    Power Draw /15m

                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                </RadialBarChart>
            </ChartContainer>
        </div>
    );
}

const tempChartData = [
    {month: "Tuesday", desktop: Math.random() * (77 - 66) + 66},
    {month: "Wednesday", desktop: Math.random() * (77 - 66) + 66},
    {month: "Thursday", desktop: Math.random() * (77 - 66) + 66},
    {month: "Friday", desktop: Math.random() * (77 - 66) + 66},
    {month: "Saturday", desktop: Math.random() * (77 - 66) + 66},
    {month: "Sunday", desktop: Math.random() * (77 - 66) + 66},
];
const tempChartConfig = {
    desktop: {
        label: "Degrees °F",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
};

export function TemperatureChart() {
    return (
        <ChartContainer config={tempChartConfig}>
            <LineChart
                accessibilityLayer
                data={tempChartData}
                margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false}/>
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={
                        <ChartTooltipContent
                            indicator="line"
                            className={"bg-black"}
                        />
                    }
                />
                <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={{
                        fill: "var(--color-desktop)",
                    }}
                    activeDot={{
                        r: 6,
                    }}
                ></Line>
            </LineChart>
        </ChartContainer>
    );
}
