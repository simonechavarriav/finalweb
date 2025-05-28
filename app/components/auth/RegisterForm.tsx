'use client';
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";
import { NameField } from "./NameField";
import { TestSubjectStatusField } from "./TestSubjectStatusField";

const registerSchema = z.object({
    name: z.string().min(2, "El nombre debe ser de 2 caracteres"),
    email: z.string().email("Correo Invalido"),
    password: z.string().min(8, "El password debe ser de mínimo 6 caracteres"),
    test_subject_status: z.boolean({
        required_error: "El estado de sujeto de prueba es requerido"
    }),
    role: z.enum(["Client"], {
        required_error: "El rol es requerido"
    })
})
type RegisterFormValues=z.infer<typeof registerSchema>;
export const RegisterForm = () => {
  const form=useForm<RegisterFormValues>({
    resolver:zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      test_subject_status: false, // Default value for the checkbox
      role: "Client" // Add default role
    },
  })
  const router=useRouter();
  const onSubmit=async (data:RegisterFormValues)=>{
    const url=`${process.env.NEXT_PUBLIC_API_URL}/auth/register`
    console.log(data)
    try{
        await axios.post(url,data);
        alert("Usuario creado");
        router.push("/auth/login");
    }catch(error){
        alert("Error ");
        console.log(error);
    }
  }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-4 max-w-md mx-auto">
            <NameField control={form.control} />
            <EmailField control={form.control} />
            <PasswordField control={form.control}/>
            <TestSubjectStatusField control={form.control} />
            <Button type="submit">Registrarse</Button>
        </form>
    </Form>
  )
}