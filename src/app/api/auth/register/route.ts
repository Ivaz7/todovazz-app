import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/lib/mongodb/models/Users";
import { connectDB } from "@/lib/mongodb/mongoose"; 

export async function POST(req: Request) {
  try {
    const { 
      name, 
      email, 
      password 
    } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" }, 
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User Registered Successfully", userId: newUser._id, name },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
