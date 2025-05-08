import Link from "next/link";

export default function Footer () {
  return (
    <footer className="flex p-4 justify-center items-center border-t border-neutral-700">
      <p>
        This App Created By Ivaz Reza. Code source available at my <Link className="hover:underline text-neutral-500" target="_blank" href="https://github.com/Ivaz7/todovazz-app">GitHub</Link>
      </p>
    </footer>
  )
}