import Todo from "@/lib/mongodb/models/Todos";
import { connectDB } from "@/lib/mongodb/mongoose";
import { NextResponse } from "next/server";

// create new task
export async function POST(req: Request, { params }: { params: { id: string }}) {
  try {
    const { id } = params;
    const { description } = await req.json();

    if (!id || !description) {      
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    await Todo.create({
      user_id: id,
      description
    })

    return NextResponse.json(
      { message: "Task Added", description },
      { status: 201 }
    );
  } catch (error) { 
    console.error("Register error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}