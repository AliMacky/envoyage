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

const bloodOChartData = [
    { day: "Tuesday", "%": Math.random() * (99 - 92) + 92 },
    { day: "Wednesday", "%": Math.random() * (99 - 92) + 92 },
    { day: "Thursday", "%": Math.random() * (99 - 92) + 92 },
    { day: "Friday", "%": Math.random() * (99 - 92) + 92 },
    { day: "Saturday", "%": Math.random() * (99 - 92) + 92 },
    { day: "Sunday", "%": Math.random() * (99 - 92) + 92 },
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
            <LineChart
                accessibilityLayer
                data={bloodOChartData}
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
                    dataKey="%"
                    type="natural"
                    stroke="blue"
                    strokeWidth={2}
                    dot={{
                        fill: "blue",
                    }}
                    activeDot={{
                        r: 6,
                    }}
                ></Line>
            </LineChart>
        </ChartContainer>
    );
}

const bodyTempData = [
    { day: "Tuesday", desktop: Math.random() * (102 - 93) + 93 },
    { day: "Wednesday", desktop: Math.random() * (102 - 93) + 93 },
    { day: "Thursday", desktop: Math.random() * (102 - 93) + 93 },
    { day: "Friday", desktop: Math.random() * (102 - 93) + 93 },
    { day: "Saturday", desktop: Math.random() * (102 - 93) + 93 },
    { day: "Sunday", desktop: Math.random() * (102 - 93) + 93 },
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
                ></Line>
            </LineChart>
        </ChartContainer>
    );
}
