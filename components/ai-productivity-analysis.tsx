import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const productivityData = [
    { department: "Инженерия", productivity: 87, potential: 95 },
    { department: "Маркетинг", productivity: 76, potential: 85 },
    { department: "Отдел продаж", productivity: 82, potential: 90 },
    {
        department: "Служба поддержки клиентов",
        productivity: 79,
        potential: 88,
    },
    { department: "HR", productivity: 85, potential: 92 },
];

export function AIProductivityAnalysis() {
    return (
        <Card className="col-span-1">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#3C6CF8]">
                    Анализ продуктивности
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={productivityData}>
                        <XAxis dataKey="department" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                            dataKey="productivity"
                            fill="#3C6CF8"
                            name="Текущая продуктивность"
                        />
                        <Bar
                            dataKey="potential"
                            fill="#90A3BF"
                            name="Потенциальная продуктивность"
                        />
                    </BarChart>
                </ResponsiveContainer>
                <p className="mt-4 text-sm text-gray-600">
                    На приведенной выше диаграмме показаны текущие уровни
                    продуктивности по сравнению с потенциальной продуктивностью,
                    рассчитанной с помощью искусственного интеллекта для каждого
                    отдела.
                </p>
            </CardContent>
        </Card>
    );
}
