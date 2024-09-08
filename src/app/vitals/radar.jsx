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
    { month: "CO2 Levels", desktop: 186 },
    { month: "Glucose Levels", desktop: 305 },
    { month: "Hydration", desktop: 237 },
    { month: "Muscle Activity", desktop: 273 },
    { month: "Cog. Reaction Time", desktop: 209 },
    { month: "Stress Levels", desktop: 214 },
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
