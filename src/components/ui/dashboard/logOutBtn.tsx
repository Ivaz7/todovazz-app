'use client'

import { Button } from "@/components/ui/button";
import { useLogOutMutation } from "@/hooks/useLogOutMutation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FadeLoader } from 'react-spinners'

export default function LogOutBtn () {
  const logOutMutation = useLogOutMutation();

  const handleLogOut = () => {
    logOutMutation.mutate();
  }

  return (
    <>
      <AlertDialog open={logOutMutation.isPending}>
        <AlertDialogContent className="flex justify-center w-[350px] h-[200px] items-center">
          <AlertDialogHeader className="flex flex-col items-center gap-2">
            <AlertDialogTitle>Logging out</AlertDialogTitle>
            <FadeLoader color="#fff" className="ml-[10px]" />
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      <Button 
        variant="destructive"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </>
  )
}
