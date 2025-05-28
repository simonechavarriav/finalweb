import axios from "axios"
import { Product } from "../schemas/product"

const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await axios.get(`${baseURL}/makeup-products`)
        const { data } = response
        return data
    } catch {
        throw new Error("It was not possible to connect")
    }
}
