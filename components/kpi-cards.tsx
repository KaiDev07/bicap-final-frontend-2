import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, TrendingUp, Award } from "lucide-react";

const kpiData = [
    {
        title: "Общее количество сотрудников",
        value: "250",
        icon: Users,
        color: "text-[#3C6CF8]",
    },
    {
        title: "Средняя производительность",
        value: "87%",
        icon: TrendingUp,
        color: "text-[#3C6CF8]",
    },
    {
        title: "Среднее время работы",
        value: "7.5ч",
        icon: Clock,
        color: "text-[#3C6CF8]",
    },
    {
        title: "Лучшие исполнители",
        value: "25",
        icon: Award,
        color: "text-[#3C6CF8]",
    },
];

export function KPICards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {kpiData.map((item, index) => (
                <Card key={index} className="border-l-4 border-[#3C6CF8]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {item.title}
                        </CardTitle>
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{item.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
