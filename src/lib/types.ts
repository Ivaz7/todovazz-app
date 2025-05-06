import { Document, Types } from "mongoose";

// user models
export interface User extends Document {
  name: string;
  email: string;
  password: string; // hashed password
}

// todo models
export interface Todo extends Document {
  user_id: Types.ObjectId; // Refers to the user's ID
  description: string;
  completed: boolean;
}