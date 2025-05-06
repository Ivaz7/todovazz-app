import TableTask from "@/components/ui/dashboard/tableTask";
import type { Task } from "@/lib/types";

const fakeTasks: Task[] = [
  { description: "Buy groceries", status: false },
  { description: "Finish the project report", status: true },
  { description: "Call mom", status: false },
  { description: "Clean the house", status: true },
  { description: "Read 10 pages of a book", status: false },
];

export default async function AllTask () {
  

  return (
    <section>
      <TableTask data={fakeTasks} />
    </section>
  )
}