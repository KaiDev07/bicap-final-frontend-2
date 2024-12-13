"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Янв", productivity: 67, industry: 65 },
    { name: "Фев", productivity: 72, industry: 68 },
    { name: "Март", productivity: 75, industry: 70 },
    { name: "Апр", productivity: 81, industry: 72 },
    { name: "Май", productivity: 85, industry: 75 },
    { name: "Июнь", productivity: 83, industry: 76 },
];

export function ProductivityChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Тенденция продуктивности</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#888888" />
                        <YAxis stroke="#888888" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="productivity"
                            stroke="#3C6CF8"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="industry"
                            stroke="#90A3BF"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
