import Todo from "@/lib/mongodb/models/Todos";
import { connectDB } from "@/lib/mongodb/mongoose";
import { NextRequest, NextResponse } from "next/server";

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
    console.error("Create Task Error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

interface UserStatus {
  user_id: string,
  completed?: boolean
}

// get data
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const completedParam = req.nextUrl.searchParams.get("completed");

    if (!id) {      
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    const query: UserStatus = { user_id: id };

    if (completedParam !== null) {
      query.completed = completedParam === "true";
    }

    const todos = await Todo.find(query).sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Success Get All Task", todos },
      { status: 201 }
    );
  } catch (error) { 
    console.error("Get Task Error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// Update todo list request
export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const typeParam = req.nextUrl.searchParams.get("type");
  const { id: idTask } = await req.json();

  if (!id || !typeParam || !idTask) {      
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  await connectDB();

  // update set done completed
  if (typeParam === "completed") {
    try {
      const todo = await Todo.findOneAndUpdate({ 
        _id: idTask,
        user_id: id 
      }, {
        $set: {
          completed: true
        }
      }, {
        new: true
      })

      return NextResponse.json(
        { message: "Set Done Success", todo },
        { status: 201 }
      );
    } catch (error) {
      console.error("Update Status Error:", error);
      return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
  }
}