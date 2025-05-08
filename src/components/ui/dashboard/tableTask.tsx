import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader,
  TableRow
} from "../table";

import { FcCheckmark } from "react-icons/fc";
import { RiProgress5Line } from "react-icons/ri";
import DropdownTableTask from "./dropdowntable/dropdownTableTask";
import type { Todo } from "@/lib/types";

export default function TableTask ({ data }: { data: Todo[]}) {
  return (
    <Table className="w-full">
      <TableCaption>All Task</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-9/10">Description Task</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((val: Todo, inx: number) => (
          <TableRow key={inx}>
            <TableCell>{val.description}</TableCell>
            <TableCell>
              {val.completed 
              ? (
                <div className="flex gap-1 flex-row justify-start items-center">
                  <FcCheckmark size={15} color="green" />
                  <p className="text-neutral-400">Done</p>
                </div>
              ) 
              : (
                <div className="flex gap-1 flex-row justify-start items-center">
                  <RiProgress5Line size={15} color="gray" />
                  <p className="text-neutral-400">Pending</p>
                </div>
              )}
            </TableCell>
            <TableCell>
              <DropdownTableTask 
                status={val.completed} 
                id={val._id}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}