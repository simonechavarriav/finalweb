import { UseFormReturn } from "react-hook-form"
import { UserFormValues } from "@/app/schemas/userSchema"
import { Input } from "@/components/ui/input"
import {FormField,FormItem,FormLabel,FormControl,FormMessage} from "@/components/ui/form"

export const UserFormFields = 
({form}:{form:UseFormReturn<UserFormValues>}) => {
return (
    <>
        <FormField
        control={form.control}
        name="name"
        render={({field})=>(
            <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                    <Input placeholder="Nombre" 
                    {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        >
        </FormField>
        <FormField
        control={form.control}
        name="email"
        render={({field})=>(
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="Email" 
                    {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        >
        </FormField>
        <FormField
        control={form.control}
        name="test_subject_status"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Sujeto de prueba</FormLabel>
            <FormControl>
                <select
                {...field}
                value={field.value === true ? "true" : field.value === false ? "false" : ""}
                onChange={e => field.onChange(e.target.value === "true")}
                className="input"
                >
                <option value="">Seleccione una opción</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
                </select>
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        >
        </FormField>
        <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Rol</FormLabel>
            <FormControl>
                <select
                {...field}
                value={field.value || ""}
                onChange={e => field.onChange(e.target.value)}
                className="input"
                >
                <option value="">Seleccione un rol</option>
                <option value="Admin">Admin</option>
                <option value="Client">Client</option>
                <option value="Tester">Tester</option>
                <option value="Employee">Employee</option>
                </select>
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        >
        </FormField>
    </>
)
}