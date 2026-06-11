import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const shop = searchParams.get("shop");

  if (!code || !shop) {
    return NextResponse.json({ error: "Missing code or shop" }, { status: 400 });
  }

  const clientId = process.env.SHOPIFY_CLIENT_ID!;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET!;

  const res = await fetch(`https://${shop}/admin/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const data = await res.json() as { access_token?: string; error?: string };

  if (!data.access_token) {
    return NextResponse.json({ error: "Token exchange failed", detail: data }, { status: 500 });
  }

  console.log("\n\n✅ SHOPIFY ACCESS TOKEN RÉCUPÉRÉ :");
  console.log(data.access_token);
  console.log("\nCopiez ce token dans .env.local comme SHOPIFY_ACCESS_TOKEN\n\n");

  return NextResponse.json({
    success: true,
    token: data.access_token,
    message: "Token récupéré ! Copiez-le dans .env.local comme SHOPIFY_ACCESS_TOKEN",
  });
}
