export type ProductCategory = "Eyeshadow" | "Lipstick" | "Foundation" | "Blush" ;

export interface Product {
    id: string;
    name: string;
    category: ProductCategory;
    stock: number;
    warehouse_location: string;
    durability_score: number;
};