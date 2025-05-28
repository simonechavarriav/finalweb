import axios from "axios"
import { User } from "../schemas/user"

const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function getUsers(): Promise<User[]> {
    try {
        const response = await axios.get(`${baseURL}/users`)
        const { data } = response
        return data
    } catch {
        throw new Error("It was not possible to connect")
    }
}
