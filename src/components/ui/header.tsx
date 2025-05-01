import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; 

interface HeaderAuthProps {
  buttonText: string;
  buttonLink: string;
}

const HeaderAuth: FC<HeaderAuthProps> = ({ buttonText, buttonLink }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-neutral-700 text-white">
      <div className="text-2xl font-bold">Todovazz App</div>
      <Link href={buttonLink}>
        <Button>{buttonText}</Button>
      </Link>
    </header>
  );
};

export default HeaderAuth;
