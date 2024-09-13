"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, newChart: 50, newBar: 60 },
  { month: "February", desktop: 305, mobile: 200, newChart: 70, newBar: 90 },
  { month: "March", desktop: 237, mobile: 120, newChart: 30, newBar: 40 },
  { month: "April", desktop: 73, mobile: 190, newChart: 90, newBar: 50 },
  { month: "May", desktop: 209, mobile: 130, newChart: 100, newBar: 70 },
  { month: "June", desktop: 214, mobile: 140, newChart: 110, newBar: 80 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
  newChart: {
    label: "New Chart",
    color: "#ff2200",
  },
  newBar: {
    label: "New Bar",
    color: "#34d399",
  },
} satisfies ChartConfig

export function ChartCard() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        <Bar dataKey="newChart" fill="var(--color-newChart)" radius={4} />
        <Bar dataKey="newBar" fill="var(--color-newBar)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
