import axios from "axios";
import { RegisterFormValues } from "../schemas/registerSchema";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function login(email: string, password: string) {
    const res = await axios.post(`${API}/auth/login`, { email, password });
    return res.data;
}

export async function register(data: RegisterFormValues) {
    const res = await axios.post(`${API}/auth/register`, data);
    return res.data;
}
