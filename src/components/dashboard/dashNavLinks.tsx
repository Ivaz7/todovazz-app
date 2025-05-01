import Link from "next/link";

export default function DashNavLinks () {
  return (
    <nav className="mb-4 flex gap-4 border-b pb-2">
      <Link href="/dashboard/">All</Link>
      <Link href="/dashboard/pending">Pending</Link>
      <Link href="/dashboard/done">Done</Link>
    </nav>
  )
} 