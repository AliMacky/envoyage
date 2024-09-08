"use client";

import { Radar, TrendingUp } from "lucide-react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    PolarAngleAxis,
    RadarChart,
    XAxis,
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts";
import { LabelList, Line, LineChart } from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const bloodPChartData = [
    { day: "Tuesday", "%": 80 },
    { day: "Wednesday", "%": 72 },
    { day: "Thursday", "%": 83 },
    { day: "Friday", "%": 67 },
    { day: "Saturday", "%": 78 },
    { day: "Sunday", "%": 91 },
];

const bloodPChartConfig = {
    "%": {
        label: "%",
        color: "blue",
    },
};

export function BloodPChart() {
    return (
        <ChartContainer config={bloodPChartConfig}>
            <AreaChart
                accessibilityLayer
                data={bloodPChartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
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
                    dataKey="%"
                    type="natural"
                    fill="blue"
                    fillOpacity={0.4}
                    stroke="blue"
                />
            </AreaChart>
        </ChartContainer>
    );
}

const bloodOChartData = [
    { day: "Tuesday", "%": 510 },
    { day: "Wednesday", "%": 789 },
    { day: "Thursday", "%": 432 },
    { day: "Friday", "%": 499 },
    { day: "Saturday", "%": 532 },
    { day: "Sunday", "%": 422 },
];

const bloodOChartConfig = {
    "%": {
        label: "%",
        color: "blue",
    },
};

export function BloodOChart() {
    return (
        <ChartContainer config={bloodOChartConfig}>
            <AreaChart
                accessibilityLayer
                data={bloodOChartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
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
                    dataKey="%"
                    type="natural"
                    fill="blue"
                    fillOpacity={0.4}
                    stroke="blue"
                />
            </AreaChart>
        </ChartContainer>
    );
}

const bodyTempData = [
    { day: "Tuesday", desktop: 97 },
    { day: "Wednesday", desktop: 88 },
    { day: "Thursday", desktop: 85 },
    { day: "Friday", desktop: 79 },
    { day: "Saturday", desktop: 87 },
    { day: "Sunday", desktop: 92 },
];

const bodyTempConfig = {
    desktop: {
        label: "Degrees °F",
        color: "blue",
    },
};

export function BodyTempChart() {
    return (
        <ChartContainer config={bodyTempConfig}>
            <LineChart
                accessibilityLayer
                data={bodyTempData}
                margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
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
                >
                    <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                    />
                </Line>
            </LineChart>
        </ChartContainer>
    );
}

const fuelChartData = [
    { browser: "safari", visitors: 247, fill: "var(--color-safari)" },
];

const fuelChartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "blue",
    },
};

const batteryChartData = [
    { browser: "safari", visitors: 97, fill: "var(--color-safari)" },
];

const batteryChartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "blue",
    },
};

const powerChartData = [
    { browser: "safari", visitors: 887, fill: "var(--color-safari)" },
];

const powerChartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "blue",
    },
};

export function FuelChart() {
    return (
        <div style={{ width: "100%", height: "250px" }}>
            <ChartContainer config={fuelChartConfig} className="h-full w-full">
                <RadialBarChart
                    data={fuelChartData}
                    startAngle={0}
                    endAngle={250}
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
                            content={({ viewBox }) => {
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
                                                Fuel
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
        <div style={{ width: "100%", height: "250px" }}>
            <ChartContainer
                config={batteryChartConfig}
                className="h-full w-full"
            >
                <RadialBarChart
                    data={batteryChartData}
                    startAngle={0}
                    endAngle={350}
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
                            content={({ viewBox }) => {
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
                                                {batteryChartData[0].visitors.toLocaleString()}
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
        <div style={{ width: "100%", height: "250px" }}>
            <ChartContainer config={powerChartConfig} className="h-full w-full">
                <RadialBarChart
                    data={powerChartData}
                    startAngle={0}
                    endAngle={310}
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
                            content={({ viewBox }) => {
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
                                                {powerChartData[0].visitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-white"
                                            >
                                                Power
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
    { month: "Tuesday", desktop: 77, mobile: 80 },
    { month: "Wednesday", desktop: 72, mobile: 200 },
    { month: "Thursday", desktop: 73, mobile: 120 },
    { month: "Friday", desktop: 75, mobile: 190 },
    { month: "Saturday", desktop: 67, mobile: 130 },
    { month: "Sunday", desktop: 74, mobile: 140 },
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
                <CartesianGrid vertical={false} />
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
                >
                    <LabelList
                        position="top"
                        offset={12}
                        className="text-white"
                        fontSize={12}
                    />
                </Line>
            </LineChart>
        </ChartContainer>
    );
}
