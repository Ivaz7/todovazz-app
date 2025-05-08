"use client"

import * as React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import InputWithValidation from "@/components/ui/input-with-validation"
import { useLoginMutation } from "@/hooks/useLoginMutation"
import { FadeLoader } from "react-spinners"

type LoginFormValues = {
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const loginMutation = useLoginMutation();

  const onSubmit = async (data: LoginFormValues) => {
    const { email, password } = data;
    loginMutation.mutate({ email, password })
  }

  return (
    <Card className="w-[350px]">
      {loginMutation.isPending ? (
        <div className="flex flex-col justify-center gap-3 items-center h-[300px]">
          <CardTitle>Wait Login</CardTitle>
          <FadeLoader color="#fff" className="ml-[10px]" />
        </div>
      ) : (
        <>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-7"
          >
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <InputWithValidation
                  label="Email"
                  placeholder="Provide Email Address"
                  validationType={errors.email ? "error" : null}
                  message={errors.email?.message}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />

                <InputWithValidation
                  label="Password"
                  type="password"
                  placeholder="Provide your Password"
                  validationType={errors.password ? "error" : null}
                  message={errors.password?.message}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button type="submit">Login</Button>
            </CardFooter>
          </form>
        </>
      )}
    </Card>
  )
}
