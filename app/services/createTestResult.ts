import { TestResultFormValues} from "@/app/schemas/testResultSchema";

export async function createTestResult(data: TestResultFormValues) {
    const response = await fetch("/api/testResults", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error("Error al crear resultado de prueba");
    return await response.json();
}
