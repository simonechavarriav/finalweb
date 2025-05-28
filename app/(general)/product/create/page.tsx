
import { ProductForm } from "@/app/components/Product/create/productCreate";

export default function CreateProductPage() {
    return (
        <div className="max-w-xl mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Crear nuevo producto</h1>
            <ProductForm />
        </div>
    );
}
