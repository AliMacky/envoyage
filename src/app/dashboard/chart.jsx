"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"
import { LabelList, Line, LineChart, } from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A simple area chart"

const oxygenChartData = [
    { day: "Tuesday", mmHg: 80 },
    { day: "Wednesday", mmHg: 72 },
    { day: "Thursday", mmHg: 83 },
    { day: "Friday", mmHg: 67 },
    { day: "Saturday", mmHg: 78 },
    { day: "Sunday", mmHg: 91 },
]

const oxygenChartConfig = {
    mmHg: {
        label: "mmHg",
        color: "blue",
    },
}

export function OxygenChart() {
    return (
        <ChartContainer config={oxygenChartConfig}>
            <AreaChart
                accessibilityLayer
                data={oxygenChartData}
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
                    content={<ChartTooltipContent indicator="line" className={"bg-black"} />}
                />
                <Area
                    dataKey="mmHg"
                    type="natural"
                    fill="blue"
                    fillOpacity={0.4}
                    stroke="blue"
                />
            </AreaChart>
        </ChartContainer>
    )
}

const co2ChartData = [
    { day: "Tuesday", ppm: 510 },
    { day: "Wednesday", ppm: 789 },
    { day: "Thursday", ppm: 432 },
    { day: "Friday", ppm: 499 },
    { day: "Saturday", ppm: 532 },
    { day: "Sunday", ppm: 422 },
]

const co2ChartConfig = {
    ppm: {
        label: "ppm",
        color: "blue",
    },
}

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
                    content={<ChartTooltipContent indicator="line" className={"bg-black"} />}
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
    )
}

const pChartData = [
    { day: "Tuesday", kPa: 97 },
    { day: "Wednesday", kPa: 88 },
    { day: "Thursday", kPa: 85 },
    { day: "Friday", kPa: 79 },
    { day: "Saturday", kPa: 87 },
    { day: "Sunday", kPa: 92 },
]

const pChartConfig = {
    kPa: {
        label: "kPa",
        color: "blue",
    },
}

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
                    content={<ChartTooltipContent indicator="line" className={"bg-black"} />}
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
    )
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
        <div style={{ width: '100%', height: '250px' }}>
            <ChartContainer
                config={fuelChartConfig}
                className="h-full w-full"
            >
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
                    <RadialBar dataKey="visitors" background cornerRadius={10} />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
        <div style={{ width: '100%', height: '250px' }}>
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
                    <RadialBar dataKey="visitors" background cornerRadius={10} />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
        <div style={{ width: '100%', height: '250px' }}>
            <ChartContainer
                config={powerChartConfig}
                className="h-full w-full"
            >
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
                    <RadialBar dataKey="visitors" background cornerRadius={10} />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
]
const tempChartConfig = {
    desktop: {
        label: "Degrees °F",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
}
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
                            content={<ChartTooltipContent indicator="line" className={"bg-black"} />}
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
    )
}
