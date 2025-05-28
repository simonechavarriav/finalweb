import { ProductsPage } from "@/app/components/Product/list/productList";

export default function ProductsListPage() {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Lista de productos</h1>
            <ProductsPage />
        </div>
    );
}