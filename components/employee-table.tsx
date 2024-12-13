"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown, Star } from "lucide-react";

type Employee = {
    id: number;
    name: string;
    role: string;
    department: string;
    productivity: number;
    status: string;
    aiRating: number;
};

const employees: Employee[] = [
    {
        id: 1,
        name: "Марат Ахмед",
        role: "Инженер-программист",
        department: "Инженерия",
        productivity: 92,
        status: "Высокая производительность",
        aiRating: 4.8,
    },
    {
        id: 2,
        name: "Шамран Жанарбек",
        role: "Менеджер по продуктам",
        department: "Продукт",
        productivity: 88,
        status: "Хорошо",
        aiRating: 4.2,
    },
    {
        id: 3,
        name: "Жумашев Алихан",
        role: "UX-дизайнер",
        department: "Дизайн",
        productivity: 79,
        status: "Средний",
        aiRating: 3.7,
    },
    {
        id: 4,
        name: "Ақай Қайназар",
        role: "Аналитик данных",
        department: "Инженерия",
        productivity: 95,
        status: "Высокая производительность",
        aiRating: 4.9,
    },
    {
        id: 5,
        name: "Самбетов Дарын",
        role: "Специалист по маркетингу",
        department: "Маркетинг",
        productivity: 82,
        status: "Хорошо",
        aiRating: 4.0,
    },
];

export function EmployeeTable() {
    const [sortColumn, setSortColumn] = useState("name");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const sortedEmployees = [...employees].sort((a, b) => {
        if (a[sortColumn as keyof Employee] < b[sortColumn as keyof Employee])
            return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn as keyof Employee] > b[sortColumn as keyof Employee])
            return sortDirection === "asc" ? 1 : -1;
        return 0;
    });

    const handleSort = (column: string) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-[#90A3BF] text-white">
                    <TableHead
                        onClick={() => handleSort("name")}
                        className="cursor-pointer"
                    >
                        Имя <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                    </TableHead>
                    <TableHead>Роль</TableHead>
                    <TableHead>Отдел</TableHead>
                    <TableHead
                        onClick={() => handleSort("productivity")}
                        className="cursor-pointer"
                    >
                        Продуктивность{" "}
                        <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                    </TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead
                        onClick={() => handleSort("aiRating")}
                        className="cursor-pointer"
                    >
                        Рейтинг от ИИ{" "}
                        <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                    </TableHead>
                    <TableHead>Действия</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortedEmployees.map((employee) => (
                    <TableRow
                        key={employee.id}
                        className="hover:bg-[#3C6CF8]/10"
                    >
                        <TableCell className="font-medium">
                            {employee.name}
                        </TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.productivity}%</TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    employee.status ===
                                    "Высокая производительность"
                                        ? "default"
                                        : "secondary"
                                }
                                className={
                                    employee.status ===
                                    "Высокая производительность"
                                        ? "bg-[#3C6CF8]"
                                        : ""
                                }
                            >
                                {employee.status}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center">
                                <span className="mr-1">
                                    {employee.aiRating.toFixed(1)}
                                </span>
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            </div>
                        </TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="h-8 w-8 p-0 text-[#3C6CF8]"
                                    >
                                        <span className="sr-only">
                                            Открыть меню
                                        </span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        Действия
                                    </DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        Просмотреть профиль
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Редактировать детали
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Просмотр истории производительности
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
