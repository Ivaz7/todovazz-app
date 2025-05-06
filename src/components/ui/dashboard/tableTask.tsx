import { Button } from "../button";
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

interface Task {
  description: string,
  status: boolean,
}

const fakeTasks: Task[] = [
  { description: "Buy groceries", status: false },
  { description: "Finish the project report", status: true },
  { description: "Call mom", status: false },
  { description: "Clean the house", status: true },
  { description: "Read 10 pages of a book", status: false },
];

export default function TableTask () {
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
        {fakeTasks.map((val: Task, inx: number) => (
          <TableRow key={inx}>
            <TableCell>{val.description}</TableCell>
            <TableCell>
              {val.status 
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
              <Button variant="ghost">
                ...
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}