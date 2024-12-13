import { Inter } from "next/font/google";
import "./globals.css";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Панель мониторинга производительности сотрудников",
    description: "Мониторинг и анализ производительности труда сотрудников",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex h-screen">
                    <DashboardSidebar />
                    <main className="flex-1 overflow-y-auto">{children}</main>
                </div>
            </body>
        </html>
    );
}
