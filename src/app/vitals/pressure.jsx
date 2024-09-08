"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
    { month: "Tuesday", desktop: 117, mobile: 86 },
    { month: "Wednesday", desktop: 120, mobile: 73 },
    { month: "Thursday", desktop: 111, mobile: 72 },
    { month: "Friday", desktop: 130, mobile: 77 },
    { month: "Saturday", desktop: 112, mobile: 77 },
    { month: "Sunday", desktop: 122, mobile: 78 },
];

const chartConfig = {
    desktop: {
        label: "Systolic",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Diastolic",
        color: "hsl(var(--chart-2))",
    },
};

export function PressureChart() {
    return (
        <ChartContainer config={chartConfig}>
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
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
                    className="bg-black"
                    content={<ChartTooltipContent />}
                />
                <Line
                    dataKey="desktop"
                    type="monotone"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={{
                        fill: "blue",
                    }}
                    activeDot={{
                        r: 6,
                    }}
                />
                <Line
                    dataKey="mobile"
                    type="monotone"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={{
                        fill: "green",
                    }}
                    activeDot={{
                        r: 6,
                    }}
                />
            </LineChart>
        </ChartContainer>
    );
}
