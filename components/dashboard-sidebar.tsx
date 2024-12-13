import {
    Home,
    Users,
    BarChart2,
    Settings,
    Target,
    MessageSquare,
    Inbox,
    HelpCircle,
    LogIn,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Users, label: "Сотрудники", href: "/" },
    { icon: BarChart2, label: "Отчеты", href: "/" },
    { icon: Target, label: "Цели", href: "/" },
    { icon: MessageSquare, label: "Фидбэк", href: "/" },
    { icon: Inbox, label: "Рекомендации от ИИ", href: "/ai-recommendations" },
    { icon: HelpCircle, label: "Справочный центр", href: "/" },
    { icon: Settings, label: "Настройки", href: "/" },
];

export function DashboardSidebar() {
    return (
        <div className="flex flex-col w-64 bg-[#1A202C] text-white">
            <div className="flex items-center justify-center h-20 shadow-md">
                <h1 className="text-3xl font-semibold">Profectus</h1>
            </div>
            <nav className="flex-grow">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} passHref>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start text-white hover:bg-[#3C6CF8] hover:text-white",
                                        index === 0 && "bg-[#3C6CF8]"
                                    )}
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.label}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4">
                <Link href="/auth" passHref>
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-white hover:bg-[#3C6CF8] hover:text-white"
                    >
                        <LogIn className="mr-2 h-4 w-4" />
                        Войти
                    </Button>
                </Link>
            </div>
        </div>
    );
}
