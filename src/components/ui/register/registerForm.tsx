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
import axios from "axios"

type RegisterFormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormValues>()

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const { name, email, password } = data;
      const response = await axios.post("/api/auth/register", { name, email, password });
  
      console.log("Register success:", response.data);
      // Redirect ke login / dashboard, display toast, etc
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Register error:", error.response?.data || error.message)
      } else {
        console.error("Unexpected error:", error)
      }
    }
  }

  const password = watch("password")

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <InputWithValidation
              label="Name"
              placeholder="Provide your name"
              validationType={errors.name ? "error" : null}
              message={errors.name?.message}
              {...register("name", {
                required: "Name is required",
              })}
            />

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

            <InputWithValidation
              label="Confirm Password"
              type="password"
              placeholder="Repeat your Password"
              validationType={errors.confirmPassword ? "error" : null}
              message={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: value =>
                  value === password || "Passwords do not match",
              })}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit">Sign Up</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
