import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recommendations = [
    {
        id: 1,
        title: "Внедрите гибкие методологии",
        description:
            "Применяйте гибкие методы в инженерном отделе для улучшения совместной работы и повышения производительности.",
        impact: "Высокий",
        department: "Инженерия",
    },
    {
        id: 2,
        title: "Улучшите систему обратной связи с клиентами",
        description:
            "Создайте более эффективную систему сбора отзывов клиентов и работы с ними в отделе маркетинга.",
        impact: "Средний",
        department: "Маркетинг",
    },
    {
        id: 3,
        title: "Программа обучения продажам",
        description:
            "Разработайте комплексную программу обучения, направленную на совершенствование методов продаж и знаний о продукте.",
        impact: "Высокий",
        department: "Отдел продаж",
    },
    {
        id: 4,
        title: "Внедрить чат-бота на базе искусственного интеллекта",
        description:
            "Интегрируйте чат-бота с искусственным интеллектом для обработки рутинных запросов клиентов, освобождая персонал службы поддержки для решения более сложных вопросов.",
        impact: "Средний",
        department: "Служба поддержки клиентов",
    },
    {
        id: 5,
        title: "Упростить процесс адаптации",
        description:
            "Оптимизируйте процесс адаптации сотрудников, чтобы сократить время, необходимое для повышения производительности труда новых сотрудников.",
        impact: "Средний",
        department: "HR",
    },
];

export function AIRecommendations() {
    return (
        <Card className="col-span-1">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#3C6CF8]">
                    Рекомендации от ИИ
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {recommendations.map((rec) => (
                        <li
                            key={rec.id}
                            className="bg-white p-4 rounded-lg shadow"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">
                                {rec.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {rec.description}
                            </p>
                            <div className="flex justify-between items-center mt-2">
                                <Badge
                                    variant={
                                        rec.impact === "High"
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {rec.impact} Импакт
                                </Badge>
                                <span className="text-xs text-gray-500">
                                    {rec.department}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
