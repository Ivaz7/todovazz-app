import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Todo } from "@/lib/types";

export function useGetTasks(user_id: string, completed?: boolean) {
  return useQuery({
    queryKey: ["todos", user_id, completed],
    queryFn: async (): Promise<Todo[]> => {
      let url = `/api/todos/${user_id}`;
      if (completed !== undefined) {
        url += `?completed=${completed}`;
      }

      const response = await axios.get(url);
      return response.data.todos;
    },
    enabled: !!user_id, 
  });
}
