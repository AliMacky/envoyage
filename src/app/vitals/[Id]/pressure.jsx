"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, Tooltip } from "recharts";

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
const getSysData = () => {
  const chance = Math.random() < 0.05;
  return chance
    ? Math.random() * (150 - 105) + 110
    : Math.random() * (120 - 110) + 110;
};

const getDiaData = () => {
  const chance = Math.random() < 0.05;
  return chance
    ? Math.random() * (110 - 70) + 70
    : Math.random() * (80 - 60) + 60;
};
const chartData = [
  {
    month: "Tuesday",
    desktop: getSysData(),
    mobile: getDiaData(),
  },
  {
    month: "Wednesday",
    desktop: getSysData(),
    mobile: getDiaData(),
  },
  {
    month: "Thursday",
    desktop: getSysData(),
    mobile: getDiaData(),
  },
  {
    month: "Friday",
    desktop: getSysData(),
    mobile: getDiaData(),
  },
  {
    month: "Saturday",
    desktop: getSysData(),
    mobile: getDiaData(),
  },
  {
    month: "Sunday",
    desktop: getSysData(),
    mobile: getDiaData(),
  },
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
const isPressureAnomaly = (sys, dia) => sys > 135 || dia > 83;
const PressureTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const systolic = payload[0].value;
    const diastolic = payload[1].value;
    const isAnomalous = isPressureAnomaly(systolic, diastolic);
    return (
      <div className="bg-zinc-800 p-2 border border-zinc-700 rounded shadow">
        <p
          className={`text-sm ${
            isAnomalous ? "text-red-500" : "text-blue-500"
          }`}
        >
          <span className="font-bold">Systolic: </span> {systolic.toFixed(2)}
          <br />
          <span className="font-bold">Diastolic: </span> {diastolic.toFixed(2)}
        </p>
        {isAnomalous && (
          <p className="text-xs text-red-500">Anomaly detected</p>
        )}
      </div>
    );
  }
  return null;
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
        <Tooltip content={<PressureTooltip />} />
        <Line
          dataKey="desktop"
          type="monotone"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={(props) => {
            const isAnomalous = isPressureAnomaly(
              props.payload.desktop,
              props.payload.mobile
            );
            return (
              <circle
                cx={props.cx}
                cy={props.cy}
                r={4}
                fill={isAnomalous ? "#ef4444" : "var(--color-desktop)"}
                stroke={isAnomalous ? "#ef4444" : "var(--color-desktop)"}
              />
            );
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
          dot={(props) => {
            const isAnomalous = isPressureAnomaly(
              props.payload.desktop,
              props.payload.mobile
            );
            return (
              <circle
                cx={props.cx}
                cy={props.cy}
                r={4}
                fill={isAnomalous ? "#ef4444" : "var(--color-mobile)"}
                stroke={isAnomalous ? "#ef4444" : "var(--color-mobile)"}
              />
            );
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
