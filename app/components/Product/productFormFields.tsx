import { UseFormReturn } from "react-hook-form";
import { ProductFormValues } from "@/app/schemas/productSchema";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

export const ProductFormFields = ({
    form,
}: {
    form: UseFormReturn<ProductFormValues>;
}) => {
    return (
        <>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                            <Input placeholder="Nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Categoría</FormLabel>
                        <FormControl>
                            <select
                                {...field}
                                value={field.value}
                                onChange={e => field.onChange(e.target.value)}
                                className="input"
                            >
                                <option value="">Seleccionar categoría</option>
                                <option value="Eyeshadow">Eyeshadow</option>
                                <option value="Lipstick">Lipstick</option>
                                <option value="Foundation">Foundation</option>
                                <option value="Blush">Blush</option>
                            </select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Stock</FormLabel>
                        <FormControl>
                            <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="warehouse_location"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Ubicación en Bodega</FormLabel>
                        <FormControl>
                            <Input placeholder="Ubicación en Bodega" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="durability_score"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Durabilidad</FormLabel>
                        <FormControl>
                            <Input type="number" min={0} max={10} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};
