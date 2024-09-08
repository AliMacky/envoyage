"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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

export const description = "A radar chart";

const chartData = [
    { month: "CO2 Levels", desktop: Math.random() * (300 - 200) + 200 },
    { month: "Glucose Levels", desktop: Math.random() * (300 - 200) + 200 },
    { month: "Hydration", desktop: Math.random() * (300 - 200) + 200 },
    { month: "Muscle Activity", desktop: Math.random() * (300 - 200) + 200 },
    { month: "C. React Time", desktop: Math.random() * (300 - 200) + 200 },
    { month: "Stress Levels", desktop: Math.random() * (300 - 200) + 100 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "blue",
    },
};

export function Component() {
    return (
        <ChartContainer config={chartConfig} className="mx-auto max-h-[30vh]">
            <RadarChart data={chartData}>
                {/* <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                /> */}
                <PolarAngleAxis dataKey="month" />
                <PolarGrid />
                <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ChartContainer>
    );
}
