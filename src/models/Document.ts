import type { Document, Model } from "mongoose";
import { Schema, model, models } from "mongoose";

interface DocumentInterface extends Document {
  id: string;
  content: string;
}

const DocSchema = new Schema<DocumentInterface>({
  id: String,
  content: String,
});

const Doc: Model<DocumentInterface> =
  models.Document || model<DocumentInterface>("Document", DocSchema);

export { Doc };
