'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tabs,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

export default function DashNavLinks() {
  const path = usePathname();

  return (
    <Tabs value={path} className="w-6/10">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="/dashboard" asChild>
          <Link href="/dashboard">All</Link>
        </TabsTrigger>
        <TabsTrigger value="/dashboard/pending" asChild>
          <Link href="/dashboard/pending">Pending</Link>
        </TabsTrigger>
        <TabsTrigger value="/dashboard/done" asChild>
          <Link href="/dashboard/done">Done</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
