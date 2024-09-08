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
  Tooltip,
} from "recharts";
import { LabelList, Line, LineChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const getBloodOData = () => {
  const chance = Math.random() < 0.05;
  return chance
    ? Math.random() * (95 - 80) + 80
    : Math.random() * (99 - 92) + 92;
};

const bloodOChartData = [
  { day: "Tuesday", "%": getBloodOData() },
  { day: "Wednesday", "%": getBloodOData() },
  { day: "Thursday", "%": getBloodOData() },
  { day: "Friday", "%": getBloodOData() },
  { day: "Saturday", "%": getBloodOData() },
  { day: "Sunday", "%": getBloodOData() },
];

const bloodOChartConfig = {
  "%": {
    label: "%",
    color: "blue",
  },
};

const isBloodOAnomaly = (value) => value < 92;
const BloodOTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const bloodO = payload[0].value;
    const isAnomalous = isBloodOAnomaly(bloodO);
    return (
      <div className="bg-zinc-800 p-2 border border-zinc-700 rounded shadow">
        <p
          className={`text-sm ${
            isAnomalous ? "text-red-500" : "text-blue-500"
          }`}
        >
          <span className="font-bold">Level: </span> {bloodO.toFixed(2)}%
        </p>
        {isAnomalous && (
          <p className="text-xs text-red-500">Anomaly detected</p>
        )}
      </div>
    );
  }
  return null;
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
        <Tooltip content={<BloodOTooltip />} />
        <Line
          dataKey="%"
          type="natural"
          stroke="blue"
          strokeWidth={2}
          dot={(props) => {
            const isAnomalous = isBloodOAnomaly(props.payload["%"]);
            return (
              <circle
                cx={props.cx}
                cy={props.cy}
                r={4}
                fill={isAnomalous ? "#ef4444" : "blue"}
                stroke={isAnomalous ? "#ef4444" : "blue"}
              />
            );
          }}
          activeDot={{
            r: 6,
          }}
        ></Line>
      </LineChart>
    </ChartContainer>
  );
}

const getBodyTemp = () => {
  const chance = Math.random() < 0.15;
  return chance
    ? Math.random() * (105 - 90) + 90
    : Math.random() * (98 - 96) + 95;
};

const bodyTempData = [
  { day: "Tuesday", desktop: getBodyTemp() },
  { day: "Wednesday", desktop: getBodyTemp() },
  { day: "Thursday", desktop: getBodyTemp() },
  { day: "Friday", desktop: getBodyTemp() },
  { day: "Saturday", desktop: getBodyTemp() },
  { day: "Sunday", desktop: getBodyTemp() },
];

const bodyTempConfig = {
  desktop: {
    label: "Degrees °F",
    color: "blue",
  },
};

const isBodyTempAnomaly = (value) => value < 95 || value > 99;
const BodyTempTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const temp = payload[0].value;
    const isAnomalous = isBodyTempAnomaly(temp);
    return (
      <div className="bg-zinc-800 p-2 border border-zinc-700 rounded shadow">
        <p
          className={`text-sm ${
            isAnomalous ? "text-red-500" : "text-blue-500"
          }`}
        >
          <span className="font-bold">Temp: </span> {temp.toFixed(2)}°F
        </p>
        {isAnomalous && (
          <p className="text-xs text-red-500">Anomaly detected</p>
        )}
      </div>
    );
  }
  return null;
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
        <Tooltip content={<BodyTempTooltip />} />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={(props) => {
            const isAnomalous = isBodyTempAnomaly(
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
      </LineChart>
    </ChartContainer>
  );
}
