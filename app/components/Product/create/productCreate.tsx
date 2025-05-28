'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductFormValues } from "@/app/schemas/productSchema";
import { ProductFormFields } from "../productFormFields";
import { Button } from "@/components/ui/button";
import { createProduct } from "@/app/services/createProduct";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";

export const ProductForm = () => {
    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            category: "Eyeshadow", // This is fine now!
            stock: 0,
            warehouse_location: "",
            durability_score: 0
        },
    });

    const onSubmit = async (data: ProductFormValues) => {
        try {
            await createProduct(data);
            toast.success("Producto creado exitosamente");
            form.reset();
        } catch (error) {
            toast.error("Hubo un error al crear el producto");
        }
    }

    return (
        <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <ProductFormFields form={form} />
            <Button type="submit">
            Crear Producto
            </Button>
        </form>
        </Form>
    )
}
