import { TestResultsList } from "@/app/components/ProductTests/list/TestResultsList";


export default function TestResultsListPage() {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Lista de productos</h1>
            <TestResultsList />
        </div>
    );
}