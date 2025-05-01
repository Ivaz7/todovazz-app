import { LoginForm } from "@/components/login/loginForm";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Link from "next/link";

export default function loginPage () {
  return (
    <section className="h-screen flex flex-col">
      <Header 
        rightside={
          <Link href="/register">
            <Button>
              Sign Up
            </Button>
          </Link>
        }
      />
      <div className="flex justify-center items-center grow-1">
        <LoginForm />
      </div>
    </section>
  )
}