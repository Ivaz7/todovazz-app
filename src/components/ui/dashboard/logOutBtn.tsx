'use client'

import { Button } from "@/components/ui/button";
import { useLogOutMutation } from "@/hooks/useLogOutMutation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function LogOutBtn () {
  const logOutMutation = useLogOutMutation();

  const handleLogOut = () => {
    logOutMutation.mutate();
  }

  return (
    <>
      <AlertDialog open={logOutMutation.isPending}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Logging out...</AlertDialogTitle>
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
