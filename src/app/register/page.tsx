import { RegisterForm } from "@/components/register/registerForm";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Link from "next/link";

export default function RegisterPage () {
  return (
    <section className="h-screen flex flex-col">
      <Header 
        rightside={
          <Link href="/login">
            <Button>
              Login
            </Button>
          </Link>
        }
      />
      <div className="flex justify-center items-center grow-1">
        <RegisterForm />
      </div>    
    </section>
  )
}