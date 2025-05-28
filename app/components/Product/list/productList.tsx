import {getProducts} from "@/app/services/getProducts"

export const ProductsPage = async () => {
    const products = await getProducts()

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Productos</h1>
            <ul className="space-y-2">
                {products.map(product => (
                    <li key ={product.id} className="bg-gray-100 p-2 rounded">
                        <div>
                            <strong>Nombre:</strong> {product.name}
                        </div>
                        <div>
                            <strong>Categoría:</strong> {product.category}
                        </div>
                        <div>
                            <strong>Stock:</strong> {product.stock}
                        </div>
                        <div>
                            <strong>Ubicación en bodega:</strong> {product.warehouse_location}
                        </div>
                        <div>
                            <strong>Puntuación de durabilidad:</strong> {product.durability_score}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}