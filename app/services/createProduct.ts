import { ProductFormValues } from "@/app/schemas/productSchema";

export async function createProduct(data: ProductFormValues) {
    const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error("Error al crear producto");
    return await response.json();
}
