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
    { day: "Tuesday", "%": 98.4 },
    { day: "Wednesday", "%": 99.1 },
    { day: "Thursday", "%": 98.4 },
    { day: "Friday", "%": 95.7 },
    { day: "Saturday", "%": 96.1 },
    { day: "Sunday", "%": 97.8 },
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

const bodyTempData = [
    { day: "Tuesday", desktop: 98.3, mobile: 80 },
    { day: "Wednesday", desktop: 97.8, mobile: 200 },
    { day: "Thursday", desktop: 98.5, mobile: 120 },
    { day: "Friday", desktop: 96.4, mobile: 190 },
    { day: "Saturday", desktop: 98.9, mobile: 130 },
    { day: "Sunday", desktop: 97.5, mobile: 140 },
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
