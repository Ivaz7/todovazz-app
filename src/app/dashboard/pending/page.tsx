'use client'

import TableTask from "@/components/ui/dashboard/tableTask";
import TableTaskSkeletons from "@/components/ui/skeletons/dashboard/tableTask-skeletons";
import { useGetTasks } from "@/hooks/useGetTasks";
import { useUser } from "@/lib/user-context";

export default function Pending () {
  const { user_id } = useUser();
  const { data, isPending } = useGetTasks(user_id, false);

  if (isPending) {
    return <TableTaskSkeletons />;
  }

  return (
    <section>
      <TableTask data={data ?? []} />
    </section>
  );
}
