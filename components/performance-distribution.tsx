"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Низкая", value: 15, color: "#FFA500" },
    { name: "Средняя", value: 45, color: "#90A3BF" },
    { name: "Высокая", value: 30, color: "#3C6CF8" },
    { name: "Исключительная", value: 10, color: "#4CAF50" },
];

export function PerformanceDistribution() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Распределение продуктивности</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
