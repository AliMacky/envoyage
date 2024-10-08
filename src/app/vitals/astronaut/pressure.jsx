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
    { month: "Tuesday", desktop: Math.random() * (130 - 110) + 110, mobile: Math.random() * (70 - 90) + 70 },
    { month: "Wednesday", desktop: Math.random() * (130 - 110) + 110, mobile: Math.random() * (70 - 90) + 70 },
    { month: "Thursday", desktop: Math.random() * (130 - 110) + 110, mobile: Math.random() * (70 - 90) + 70 },
    { month: "Friday", desktop: Math.random() * (130 - 110) + 110, mobile: Math.random() * (70 - 90) + 70 },
    { month: "Saturday", desktop: Math.random() * (130 - 110) + 110, mobile: Math.random() * (70 - 90) + 70 },
    { month: "Sunday", desktop: Math.random() * (130 - 110) + 110, mobile: Math.random() * (70 - 90) + 70 },
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
