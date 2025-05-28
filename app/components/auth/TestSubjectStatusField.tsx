import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Control } from "react-hook-form";

export const TestSubjectStatusField = ({ control }: { control: Control<any> }) => {
    return (
        <FormField
            control={control}
            name="test_subject_status"
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => field.onChange(checked === true)}
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>¿Deseas participar como sujeto de prueba?</FormLabel>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
