import { TestResultForm } from "@/app/components/ProductTests/create/TestResultForm";

export default function CreateTestResultPage() {
    return (
        <div className="max-w-xl mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Crear nuevo resultado de prueba</h1>
            <TestResultForm />
        </div>
    );
}