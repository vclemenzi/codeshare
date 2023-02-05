import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../helpers/connect";
import { Doc } from "../../models/Document";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({
      message: "Method Not Allowed (try GET)",
    });

  await connect();

  const id = req.query.id;
  const doc = await Doc.findOne({ id });

  return res.status(200).json({
    id: doc?.id,
    content: doc?.content,
  });
}
