'use client'

import { Button } from "../button";
import InputWithValidation from "../input-with-validation";

import { FaPlus } from 'react-icons/fa6'
import { 
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../sheet";

import { useForm } from "react-hook-form";

type FormVal = {
  description: string
}

export default function CreateBtn ({ user_id }: { user_id: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormVal>()

  const onSubmit = async (data: FormVal) => {
    const { description } =  data;

    console.log("description", description)
    console.log("user_id", user_id)

    reset()
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">
          Create <FaPlus size={10} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-3">
        <SheetHeader>
          <SheetTitle className="font-bold text-2xl">
            Create a New Task
          </SheetTitle>
        </SheetHeader>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <InputWithValidation 
            label="Description Task"
            placeholder="Provide Your Description"
            validationType={errors.description ? "error" : null}
            {...register("description", {
              required: "Description Task is required"
            })}
          />
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">
                Create
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}