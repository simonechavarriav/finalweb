import axios from "axios";
import { TestResult } from "../schemas/testResult";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

interface APIResponseTestResult {
    id: string;
    reaction: string;
    rating: number;
    survival_status: boolean;
    product?: {
        id: string;
        name: string;
    };
    user?: {
        id: string;
        name: string;
    };
}

export async function getTestResults(): Promise<TestResult[]> {
    try {
        const response = await axios.get(`${baseURL}/product-tests`);
        const { data } = response;

        return data.map((testResult: APIResponseTestResult) => ({
            id: testResult.id,
            reaction: testResult.reaction,
            rating: testResult.rating,
            survival_status: testResult.survival_status,
            productId: testResult.product?.id || "Desconocido",
            userId: testResult.user?.id || "Desconocido",
            productName: testResult.product?.name,
            userName: testResult.user?.name,
        }));
    } catch {
        throw new Error("It was not possible to connect");
    }
}
