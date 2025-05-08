import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation"
import { toast } from "sonner";

export function useLogOutMutation () {
  const router = useRouter();
  
  return useMutation({
    mutationFn: async () => {
      const response = await axios.post("api/auth/logout")
      return response.data;
    },
    onSuccess: (data) => {
      toast(
        data.message,
      )

      router.push("/login")
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || error.message)
        console.error("Log Out error:", error.response?.data || error.message)
      } else {
        toast.error("Unexpected error")
        console.error("Unexpected error:", error)
      }
    },
  })
}