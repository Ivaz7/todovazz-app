import { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardFormSkeleton from "@/components/ui/skeletons/card-form-skeleton";
import HeaderSkeleton from "@/components/ui/skeletons/header-skeleton";

// Dynamically import components with Suspense fallback
const LoginForm = lazy(() => import("@/components/login/loginForm"));
const Header = lazy(() => import("@/components/ui/header"));

export default function LoginPage() {
  return (
    <section className="h-screen flex flex-col">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header 
          rightside={
            <Link href="/register">
              <Button>
                Sign Up
              </Button>
            </Link>
          }
        />
      </Suspense>

      <div className="flex justify-center items-center grow-1">
        <Suspense fallback={<CardFormSkeleton count={2} />}>
          <LoginForm />
        </Suspense>
      </div>
    </section>
  );
}
