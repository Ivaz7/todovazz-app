"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { RotatingLines } from 'react-loader-spinner'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import InputWithValidation from "@/components/ui/input-with-validation"

import { useRegisterMutation } from "@/hooks/useRegisterMutation"

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
  
  const password = watch("password")  
  const registerMutation = useRegisterMutation();
  
  const onSubmit = async (data: RegisterFormValues) => {
    const { name, email, password } = data
    registerMutation.mutate({ name, email, password })
  }

  return (
    <Card className="w-[350px]">
      {registerMutation.isPending ? (
        <div className="flex flex-col justify-center gap-3 items-center h-[300px]">
          <CardTitle>Wait Sign Up</CardTitle>
          <RotatingLines width="40" strokeColor="#fff" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </Card>
  )
}
