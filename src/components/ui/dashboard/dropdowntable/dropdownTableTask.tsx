import { Button } from "../../button";
import { 
  DropdownMenu, 
  DropdownMenuCheckboxItem, 
  DropdownMenuContent, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../../dropdown-menu";

import { CiMenuKebab } from "react-icons/ci";
import DoneBtnDropdown from "./doneBtn";

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
        <DropdownMenuCheckboxItem>
          Delete Task
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>
          Edit Task
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}