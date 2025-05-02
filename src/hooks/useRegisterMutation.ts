import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type RegisterInput = {
  name: string
  email: string
  password: string
}

export function useRegisterMutation() {
  const router = useRouter()

  return useMutation({
    mutationFn: async ({
      name,
      email,
      password
    }: Omit<RegisterInput, "confirmPassword">) => {
      const response = await axios.post("/api/auth/register", { name, email, password })
      return response.data
    },
    onSuccess: (data) => {
      toast(
        data.message,
        {
          description: data.name
        }
      )

      router.push("/login")
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