"use client";

import { AIProductivityAnalysis } from "@/components/ai-productivity-analysis";
import { AIRecommendations } from "@/components/ai-recommendations";

export default function AIRecommendationsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                <div className="container mx-auto px-6 py-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                        Рекомендации по повышению производительности от ИИ
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AIProductivityAnalysis />
                        <AIRecommendations />
                    </div>
                </div>
            </main>
        </div>
    );
}
