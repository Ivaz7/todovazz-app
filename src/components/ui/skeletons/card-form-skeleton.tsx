"use client"

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface CardFormSkeletonProps {
  count: number; 
}

export default function CardFormSkeleton({ count }: CardFormSkeletonProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <Skeleton className="w-32 h-6" />
      </CardHeader>
      <form className="flex flex-col gap-7">
        <CardContent>
          {Array.from({ length: count }).map((_, index) => (
            <div key={index} className="grid w-full items-center gap-4">
              <Skeleton className="w-full h-10" />
              <Skeleton className="w-full h-12" />
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Skeleton className="w-32 h-10" />
        </CardFooter>
      </form>
    </Card>
  );
}
