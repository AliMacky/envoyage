"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useState, useEffect } from "react";
import getAstronautHealth from "@/lib/actions/astronautHealthAI";

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

export function AstronautHealthChart({ healthData }) {
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

  const latestScore = healthData[healthData.length - 1]?.score || 0;

  return (
    <div className="flex flex-row gap-8 space-y-8">
      <div className="flex flex-col gap-4 justify-center items-center text-center h-[240px] w-[200px]">
        <ChartContainer config={healthChartConfig} className="h-full w-full">
          <RadialBarChart
            data={[{ score: latestScore }]}
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
            {healthData[healthData.length - 1]?.justification ||
              "No data available"}
          </p>
        </div>
      </div>

      <ChartContainer config={healthChartConfig}>
        <LineChart
          data={healthData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip
            contentStyle={{ backgroundColor: "white", color: "black" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke={healthChartConfig.score.color(latestScore)}
            activeDot={{ r: 8 }}
            dot={{
              fill: (entry) => healthChartConfig.score.color(entry.score),
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
