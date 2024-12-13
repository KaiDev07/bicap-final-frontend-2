import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const topPerformers = [
    { name: "Марат Ахмед", role: "Инженер-программист", score: 98 },
    { name: "Ақай Қайназар", role: "Аналитик данных", score: 95 },
    { name: "Шамран Жанарбек", role: "Менеджер по продуктам", score: 93 },
    { name: "Жумашев Алихан", role: "UX-дизайнер", score: 91 },
    { name: "Самбетов Дарын", role: "Специалист по маркетингу", score: 90 },
];

export function TopPerformers() {
    return (
        <Card className="border-t-4 border-[#3C6CF8]">
            <CardHeader>
                <CardTitle className="text-[#3C6CF8]">
                    Лучшие исполнители
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {topPerformers.map((performer, index) => (
                        <div key={index} className="flex items-center">
                            <Avatar className="h-9 w-9 border-2 border-[#3C6CF8]">
                                <AvatarImage
                                    src={`https://i.pravatar.cc/150?u=${performer.name}`}
                                    alt={performer.name}
                                />
                                <AvatarFallback>
                                    {performer.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {performer.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {performer.role}
                                </p>
                            </div>
                            <div className="ml-auto font-medium text-[#3C6CF8]">
                                {performer.score}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
