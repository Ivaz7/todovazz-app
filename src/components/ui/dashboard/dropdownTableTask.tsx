import { Button } from "../button";
import { 
  DropdownMenu, 
  DropdownMenuCheckboxItem, 
  DropdownMenuContent, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../dropdown-menu";

import { CiMenuKebab } from "react-icons/ci";

export default function DropdownTableTask ({ status }: { status: boolean }) {
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
            <DropdownMenuCheckboxItem>
              Set Done
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
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