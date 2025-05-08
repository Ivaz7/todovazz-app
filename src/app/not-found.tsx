import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import HeaderSkeleton from "@/components/ui/skeletons/header-skeleton";
import Link from "next/link";
import { Suspense } from "react";
import { ImSad } from "react-icons/im";

export default function NotFound () {
  const returnBtn = (
    <Link href="/login">
      <Button>
        Go Back
      </Button>
    </Link>
  )

  return (
    <section className="h-screen flex flex-col">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header 
          rightside={returnBtn}
        />
      </Suspense>

      <div className="flex flex-col gap-2 justify-center items-center grow-1">
        <ImSad size={70} />
        <h1>Your Page Is Not Found: <span className="text-red-800">404</span></h1>
        {returnBtn}
      </div>
    </section>
  )
}