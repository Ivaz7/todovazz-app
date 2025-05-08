import { useState } from "react";
import { Button } from "../../button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from "../../dropdown-menu";
import { CiMenuKebab } from "react-icons/ci";
import DoneBtnDropdown from "./doneBtn";
import DeleteBtnDropdown from "./deleteBtn";
import EditTaskBtnDropdown from "./editTaskBtn";

export default function DropdownTableTask ({ 
  status,
  id,
  description,
}: { 
  status: boolean,
  id: string 
  description: string,
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <CiMenuKebab size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {!status && <DoneBtnDropdown id={id} />}
        <DeleteBtnDropdown id={id} />
        <EditTaskBtnDropdown 
          id={id} 
          description={description}
          closeDropdown={() => setOpen(false)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
