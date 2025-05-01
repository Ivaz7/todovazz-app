import { Skeleton } from "./skeleton"; 

export default function HeaderSkeleton () {
  return (
    <header className="flex justify-between items-center p-4 border-b border-neutral-700">
      <div className='flex flex-row gap-2 items-center'>
        <Skeleton className="w-8 h-8" /> 
        <Skeleton className="w-32 h-6" />  
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="w-24 h-8" /> 
      </div>
    </header>
  );
};