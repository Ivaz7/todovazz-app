import User from "@/lib/mongodb/models/Users";
import { connectDB } from "@/lib/mongodb/mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const { 
      email, 
      password 
    } = await req.json()
    
    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }
    
    await connectDB()
  
    // check user
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ 
        message: 'Invalid credentials', 
        status: 401 
      })
    }

    // check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Invalid credentials' }, 
        { status: 401 }
      )
    }

    // generate the token
    const token = jwt.sign(
      {
        user_id: user._id,
        email: user.email
      },
      process.env.JWT_KEY!,
      {
        expiresIn: '7d'
      }
    )

    // save the token to cookies browser
    const response = NextResponse.json({ message: "Login Success" })
    response.cookies.set('todovazzToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days expired
      path: '/'
    })

    return response
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}