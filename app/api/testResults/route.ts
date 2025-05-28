import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
    const body = await req.json();

    const { reaction, rating, survival_status, productId, userId } = body;

    const { data, error } = await supabase
        .from("product-tests")
        .insert([
            {
                reaction,
                rating: Number(rating),
                survival_status: Boolean(survival_status),
                productId: productId,
                userId: userId,
            },
        ]);

    if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Resultado guardado", data });
}
