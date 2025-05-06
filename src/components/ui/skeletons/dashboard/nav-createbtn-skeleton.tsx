import { Skeleton } from "../../skeleton";

export default function NavCreateBtnSkeleton () {
  return (
    <div className='flex flex-row justify-between'>
      <Skeleton className="w-6/10 h-10" />
      <Skeleton className="w-32 h-10" />
    </div>
  )
}