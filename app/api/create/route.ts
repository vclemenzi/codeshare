import { NextResponse, NextRequest } from "next/server";
import kv from "@vercel/kv";
import crypto from "crypto";

type Body = {
    content: string;
};

export async function POST(request: NextRequest) {
    // @ts-ignore
    const { content } = await request.json<Body>();

    if (!content) return NextResponse.json({ error: "No content provided" }, { status: 400 });

    // generate a random id based on the current time
    const id = crypto.createHash("sha256").update(Date.now().toString()).digest("hex").slice(0, 8);

    // save the content to the KV store
    await kv.set(`doc:${id}`, content);

    return NextResponse.json(
        { message: "Document created", id, content },
        { status: 201 }
    );
}
