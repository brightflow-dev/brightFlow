"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`cursor-pointer transition-all ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <p className="font-notoRegular color-[#FFFFFF] text-sm">{label}</p>
    </Link>
  );
};
