import { NextResponse } from "next/server";
import { featuredProducts } from "@/data/categories";

export async function GET() {
  return NextResponse.json({ products: featuredProducts });
}
