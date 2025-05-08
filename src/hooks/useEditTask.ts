'use client'

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useGetTasks } from "./useGetTasks";
import { useUser } from "@/lib/user-context";

type EditTask = {
  description: string,
  id: string,
}

export function useEditTask () {  
  const { user_id } = useUser();
  const { refetch } = useGetTasks(user_id);

  return useMutation({
    mutationFn: async ({
      description,
      id
    }: EditTask) => {
      const response = await axios.patch(`/api/todos/${user_id}?type=description`, { description, id })
      return response.data
    },
    onSuccess: (data) => {
      refetch();
      toast(
        data.message,
      )
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || error.message)
        console.error("Edit Task error:", error.response?.data || error.message)
      } else {
        toast.error("Unexpected error")
        console.error("Unexpected error:", error)
      }
    },
  })
}