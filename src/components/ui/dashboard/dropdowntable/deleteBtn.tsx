import { useDeleteTask } from "@/hooks/useDeleteTask"
import { 
  DropdownMenuCheckboxItem, 
  DropdownMenuSeparator 
} from "../../dropdown-menu"

export default function DeleteBtnDropdown ({
  id
}: {
  id: string
}) {
  const deleteTask = useDeleteTask();

  const handleDelete = () => {
    deleteTask.mutate({ id })
  }
  
  return (
    <>
      <DropdownMenuCheckboxItem onClick={handleDelete}>
        Delete Task
      </DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
    </>
  )
}