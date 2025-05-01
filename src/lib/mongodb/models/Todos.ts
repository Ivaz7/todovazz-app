import mongoose, { Model, Schema } from 'mongoose';
import type { Todo } from '@/lib/types';

const TodoSchema = new Schema<Todo>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true } 
);

// Prevent model overwrite upon hot-reload
const Todo: Model<Todo> =
  (mongoose.models.Todo as Model<Todo>) ||
  mongoose.model<Todo>('Todo', TodoSchema);

export default Todo;
