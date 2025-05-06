import { Skeleton } from "../../skeleton"

export default function TableTaskSkeletons () {
  return (
    <div className="w-full flex flex-col gap-1">
      <Skeleton className="h-10 w-full" />
      {new Array(3).fill(0).map((_, inx: number) => (
        <div key={inx} className="flex flex-row gap-2">
          <Skeleton className="h-10 w-8/10"/>
          <Skeleton className="h-10 grow-1"/>
          <Skeleton className="h-10 w-1/30"/>
        </div>
      ))}
      <Skeleton className="w-1/10 h-10 self-center"/>
    </div>
  )
}