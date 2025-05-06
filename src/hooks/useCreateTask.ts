import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

type CreateTask = {
  description: string,
  user_id: string,
}

export function useCreateTask () {  
  return useMutation({
    mutationFn: async ({
      description,
      user_id,
    }: CreateTask) => {
      const response = await axios.post(`/api/todos/${user_id}`, { description })
      return response.data
    },
    onSuccess: (data) => {
      toast(
        data.message,
      )
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || error.message)
        console.error("Register error:", error.response?.data || error.message)
      } else {
        toast.error("Unexpected error")
        console.error("Unexpected error:", error)
      }
    },
  })
}