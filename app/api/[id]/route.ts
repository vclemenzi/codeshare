import { NextResponse, NextRequest } from "next/server";
import kv from "@vercel/kv";

type Params = {
    id: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
    const { id } = params;

    // get the content from the KV store
    const content = await kv.get(`doc:${id}`);

    if (!content) return NextResponse.json({ error: "Document not found" }, { status: 404 });

    return NextResponse.json({ content }, { status: 200 });
}
