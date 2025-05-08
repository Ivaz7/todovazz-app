import { useState } from "react";
import { useForm } from "react-hook-form";

import { DropdownMenuCheckboxItem } from "../../dropdown-menu";
import InputWithValidation from "../../input-with-validation";
import { Button } from "../../button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../../sheet";
import { useEditTask } from "@/hooks/useEditTask";

type FormVal = {
  description: string
}

export default function EditTaskBtnDropdown({
  id,
  description,
  closeDropdown,
}: {
  id: string;
  description: string;
  closeDropdown: () => void;
}) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormVal>()
  const editTask = useEditTask();

  const onSubmit = async (data: FormVal) => {
    const { description } =  data;

    editTask.mutate({
      description,
      id
    })

    reset()
    handleCloseSheet()
  }

  const handleCloseSheet = () => {
    setOpen(false)
    closeDropdown()
  }

  return (
    <>
      <DropdownMenuCheckboxItem
        onSelect={(e) => {
          e.preventDefault(); 
          setOpen(true);   
        }}
      >
        Edit Task
      </DropdownMenuCheckboxItem>

      <Sheet open={open} onOpenChange={(open) => {
        setOpen(open)
        if (!open) closeDropdown()
      }}>
        <SheetContent className="flex flex-col gap-3">
          <SheetHeader>
            <SheetTitle className="font-bold text-2xl">Edit Task</SheetTitle>
            <SheetDescription>Task: {description}</SheetDescription>
          </SheetHeader>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <InputWithValidation 
              label="New Description Task"
              placeholder="Provide Your Description"
              validationType={errors.description ? "error" : null}
              {...register("description", {
                required: "Description Task is required"
              })}
            />
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">
                  Commit
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}
