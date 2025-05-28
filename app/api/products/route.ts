import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
    const body = await req.json();

    const { name, category, stock, warehouse_location, durability_score } = body;

    const { data, error } = await supabase
        .from("makeup_products")
        .insert([
            {
                name,
                category,
                stock: Number(stock),
                warehouse_location,
                durability_score: Number(durability_score),
            },
        ]);

    if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Producto guardado", data });
}
