import { EmployeeSearch } from "@/components/employee-search";
import { KPICards } from "@/components/kpi-cards";
import { ProductivityChart } from "@/components/productivity-chart";
import { EmployeeTable } from "@/components/employee-table";
import { PerformanceDistribution } from "@/components/performance-distribution";
import { DepartmentComparison } from "@/components/department-comparison";
import { TopPerformers } from "@/components/top-performers";

export default function DashboardPage() {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                <div className="container mx-auto px-6 py-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                        Панель мониторинга производительности сотрудников
                    </h1>
                    <EmployeeSearch />
                    <KPICards />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <ProductivityChart />
                        <PerformanceDistribution />
                    </div>
                    <div className="mt-8">
                        <DepartmentComparison />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="md:col-span-2">
                            <EmployeeTable />
                        </div>
                        <div>
                            <TopPerformers />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
