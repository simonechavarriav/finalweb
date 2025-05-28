import axios from "axios"
import { TestResult } from "../schemas/testResult"

const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function getTestResults(): Promise<TestResult[]> {
    try {
        const response = await axios.get(`${baseURL}/product-tests`)
        const { data } = response
        return data.map((testResult: any) => ({
            id: testResult.id,
            reaction: testResult.reaction,
            rating: testResult.rating,
            survival_status: testResult.survival_status,
            productId: testResult.product?.id || "Desconocido",
            userId: testResult.user?.id || "Desconocido",
            productName: testResult.product?.name,
            userName: testResult.user?.name,
        }))
    } catch (error) {
        throw new Error("It was not possible to connect")
    }
}
