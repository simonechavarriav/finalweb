import { UseFormReturn } from "react-hook-form";
import { TestResultFormValues } from "@/app/schemas/testResultSchema";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const TestResultFormFields = ({
    form,
}: {
    form: UseFormReturn<TestResultFormValues>;
}) => {
    return (
        <>
            <FormField
                control={form.control}
                name="reaction"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Reacción</FormLabel>
                        <FormControl>
                            <Input placeholder="Describe la reacción" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Calificación (1 a 10)</FormLabel>
                        <FormControl>
                            <Input type="number" min={1} max={10} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="survival_status"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>¿El sujeto sobrevivió al producto?</FormLabel>
                        <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="productId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>ID del Producto</FormLabel>
                        <FormControl>
                            <Input placeholder="UUID del producto" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>ID del Usuario</FormLabel>
                        <FormControl>
                            <Input placeholder="UUID del usuario" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};
