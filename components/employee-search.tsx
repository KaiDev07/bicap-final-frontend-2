"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function EmployeeSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const [department, setDepartment] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search logic here
        console.log("Поиск:", searchTerm, "в отделе:", department);
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <Input
                type="text"
                placeholder="Выполняйте поиск сотрудников по именам, должностям или ключевым словам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
            />
            <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Отдел" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Все отделы</SelectItem>
                    <SelectItem value="engineering">Инженерия</SelectItem>
                    <SelectItem value="design">Дизайн</SelectItem>
                    <SelectItem value="marketing">Маркетинг</SelectItem>
                    <SelectItem value="sales">Отдел продаж</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" className="bg-[#3C6CF8] text-white">
                <Search className="h-4 w-4 mr-2" />
                Поиск
            </Button>
        </form>
    );
}
