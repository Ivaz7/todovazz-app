import { useSetDone } from "@/hooks/useSetDone";
import { 
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator 
} from "../../dropdown-menu";

export default function DoneBtnDropdown ({
  id
}: {
  id: string
}) {
  const setDone = useSetDone();

  const handleDone = () => {
    setDone.mutate({ id })
  }

  return (
    <>
      <DropdownMenuCheckboxItem onClick={handleDone}>
        Set Done
      </DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
    </>
  )
}