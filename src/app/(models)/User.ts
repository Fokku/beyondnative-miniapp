import mongoose, { Schema, Document } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

export interface Users extends Document {
  name: string;
  email: string;
  password: string;
  telegramID: string;
  telegramUsername: string;
  listings: {
    name: { type: String };
    title: { type: String };
    description: { type: String };
    company: { type: String };
    reach: { type: Number };
    applications: { type: Number };
    shortlisted: { type: Number };
  };
}

const UserSchema: Schema = new Schema<Users>({
  name: { type: String, required: false },
  email: { type: String },
  password: { type: String },
  telegramID: { type: String, required: false, unique: true },
  telegramUsername: { type: String, required: false },
  listings: {
    name: { type: String },
    title: { type: String },
    description: { type: String },
    company: { type: String },
    reach: { type: Number },
    applications: { type: Number },
    shortlisted: { type: Number },
  },
});

export default mongoose.models.Users ||
  mongoose.model<Users>("Users", UserSchema);
