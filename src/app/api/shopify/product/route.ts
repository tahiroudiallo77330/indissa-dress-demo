import { NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/lib/shopify";

export async function GET(req: NextRequest) {
  const handle = req.nextUrl.searchParams.get("handle");
  if (!handle) return NextResponse.json({ error: "missing handle" }, { status: 400 });
  const product = await getProduct(handle);
  return NextResponse.json({ product });
}
