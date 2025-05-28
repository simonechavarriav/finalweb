import { getTestResults } from "@/app/services/getTestResults"
import test from "node:test"

export const TestResultsList = async () => {
    const testResults = await getTestResults()

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Resultados de Pruebas</h1>
            <ul className="space-y-2">
                {testResults.map(TestResult => (
                    <li key={TestResult.id} className="bg-gray-100 p-2 rounded">
                        <div>
                            <strong>Producto:</strong> {TestResult.productName ?? TestResult.productId}
                        </div>
                        <div>
                            <strong>Usuario:</strong> {TestResult.userName ?? TestResult.userId}
                        </div>
                        <div>
                            <strong>Reacción:</strong> {TestResult.reaction}
                        </div>
                        <div>
                            <strong>Calificación:</strong> {TestResult.rating}
                        </div>
                        <div>
                            <strong>¿Sobrevivió?:</strong> {TestResult.survival_status ? "Sí" : "No"}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}