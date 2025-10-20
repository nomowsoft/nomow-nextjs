"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navitem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const new_path = pathname
  const isActive = (new_path === href)

  return (
    <li className="mx-0">
      <Link className={`block py-2 mx-4 text-secondary ${isActive ? 'text-shadow-lg text-shadow-primary/25' : 'text-gray-500'}`} href={href}>
        {name}
      </Link>
    </li>
  )
}

export default Navitem
