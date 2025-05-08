import { Button } from "../../button";
import { 
  DropdownMenu, 
  DropdownMenuCheckboxItem, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from "../../dropdown-menu";

import { CiMenuKebab } from "react-icons/ci";
import DoneBtnDropdown from "./doneBtn";
import DeleteBtnDropdown from "./deleteBtn";

export default function DropdownTableTask ({ 
  status,
  id,
}: { 
  status: boolean,
  id: string 
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <CiMenuKebab size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {!status && 
          <>          
            <DoneBtnDropdown id={id} />
          </>
        }
        <DeleteBtnDropdown id={id} />
        <DropdownMenuCheckboxItem>
          Edit Task
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}