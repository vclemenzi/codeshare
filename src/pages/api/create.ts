import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../helpers/connect";
import { Doc } from "../../models/Document";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({
      message: "Method Not Allowed (try POST)",
    });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { content } = req.body;

  await connect();

  const doc = new Doc({
    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
    content: content as string,
  });

  await doc.save();

  return res.status(200).json({
    id: doc.id,
    content: doc.content,
  });
}
