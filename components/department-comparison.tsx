"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const data = [
    { department: "Инженерия", productivity: 87, engagement: 82 },
    { department: "Дизайн", productivity: 84, engagement: 86 },
    { department: "Маркетинг", productivity: 82, engagement: 79 },
    { department: "Отдел продаж", productivity: 90, engagement: 88 },
    {
        department: "Служба поддержки клиентов",
        productivity: 78,
        engagement: 81,
    },
];

export function DepartmentComparison() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Сравнение отделов</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="department" stroke="#888888" />
                        <YAxis stroke="#888888" />
                        <Tooltip />
                        <Bar
                            dataKey="productivity"
                            fill="#3C6CF8"
                            name="Продуктивность"
                        />
                        <Bar
                            dataKey="engagement"
                            fill="#90A3BF"
                            name="Вовлеченность"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
