import mongoose, { Schema, Document } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

export interface Users extends Document {
  name: string;
  email: string;
  password: string;
  telegramID: string;
  telegramUsername: string;
}

const UserSchema: Schema = new Schema<Users>({
  name: { type: String, required: false },
  email: { type: String },
  password: { type: String },
  telegramID: { type: String, required: false },
  telegramUsername: { type: String, required: false },
});

export default mongoose.models.Users ||
  mongoose.model<Users>("Users", UserSchema);
