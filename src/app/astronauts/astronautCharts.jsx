"use client";

import {Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart,} from "recharts";
import {ChartContainer} from "@/components/ui/chart";
import {useEffect} from "react";

const healthChartConfig = {
    score: {
        label: "Health Score",
        color: (score) => {
            if (score >= 80) return "hsl(152, 100%, 50%)"; // Green
            if (score >= 50) return "hsl(39, 100%, 50%)"; // Orange
            return "hsl(0, 100%, 50%)"; // Red
        },
    },
};

export function AstronautHealthChart({status}) {
    // const [healthData, setHealthData] = useState([]);

    // useEffect(() => {
    //     const fetchHealthData = async () => {
    //         const data = [];
    //         for (let i = 0; i < journalEntries.length; i++) {
    //             const entry = journalEntries[i];
    //             const health = await getAstronautHealth(entry.content);
    //             data.push({
    //                 date: entry.date,
    //                 score: parseInt(health.score),
    //                 justification: health.justifications,
    //             });
    //         }
    //         setHealthData(data);
    //     };

    //     fetchHealthData();
    // }, [journalEntries]);

    const latestScore = status.score;
    useEffect(() => {
        console.log(status);
    }, []);

    return (
        <div className="flex flex-1">
            <div className="flex flex-col gap-4 justify-center items-center text-center max-h-[400px] w-[200px]">
                <ChartContainer config={healthChartConfig} className="h-[80%] w-full">
                    <RadialBarChart
                        data={[{score: latestScore}]}
                        startAngle={0}
                        endAngle={latestScore * (360 / 100)}
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
                            dataKey="score"
                            background
                            cornerRadius={10}
                            fill={healthChartConfig.score.color(latestScore)}
                            minAngle={15}
                        />
                        <PolarRadiusAxis
                            tick={false}
                            tickLine={false}
                            axisLine={false}
                            angle={90}
                            domain={[0, 100]}
                        >
                            <Label
                                content={({viewBox}) => {
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
                                                    {latestScore}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-white"
                                                >
                                                    Latest Stress Score
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
                <div>
                    <p className="text-sm">
                        {status.justifications || "No data available"}
                    </p>
                </div>
            </div>
        </div>
    );
}

const chartData = [
    {browser: "safari", visitors: 200, fill: "var(--color-safari)"},
];
const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
};

export function Component() {
    return (
        <div className="flex flex-col flex-1">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
            >
                <RadialBarChart
                    data={chartData}
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
                    <RadialBar dataKey="visitors" background cornerRadius={10}/>
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({viewBox}) => {
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
                                                className="fill-foreground text-4xl font-bold"
                                            >
                                                {chartData[0].visitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                Visitors
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