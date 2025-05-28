'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testResultSchema, TestResultFormValues } from "@/app/schemas/testResultSchema";
import { TestResultFormFields } from "../TestResultFormFields";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { createTestResult } from "@/app/services/createTestResult"; // Asegúrate de crear esta función

export const TestResultForm = () => {
    const form = useForm<TestResultFormValues>({
        resolver: zodResolver(testResultSchema),
        defaultValues: {
            reaction: "",
            rating: 1,
            survival_status: false,
            productId: "",
            userId: "",
        },
    });

    const onSubmit = async (data: TestResultFormValues) => {
        try {
            await createTestResult(data);
            toast.success("Resultado de prueba creado exitosamente");
            form.reset();
        } catch (error) {
            toast.error("Hubo un error al crear el resultado");
            console.error(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <TestResultFormFields form={form} />
                <Button type="submit">
                    Guardar Resultado
                </Button>
            </form>
        </Form>
    );
};
