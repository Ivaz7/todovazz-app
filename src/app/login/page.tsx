import { LoginForm } from "@/components/login/loginForm";
import HeaderAuth from "@/components/ui/header";

export default function loginPage () {
  return (
    <section className="h-screen flex flex-col">
      <HeaderAuth 
        buttonLink="/register"
        buttonText="Sign Up"
      />
      <div className="flex justify-center items-center grow-1">
        <LoginForm />
      </div>
    </section>
  )
}