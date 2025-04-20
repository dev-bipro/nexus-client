"use client";
import { usePathname } from "next/navigation";
import ListItem from "../ui/list-item";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavItem = ({ data }) => {
  const pathname = usePathname();
  const firstPath = pathname?.split("/")[1] || "";
  const itemPath = data?.path?.split("/")[1] || "";
  const isActive = firstPath === itemPath;

  return (
    <ListItem key={data?.name}>
      <Link
        className={cn(
          "flex items-center justify-center lg:justify-start lg:pl-4 py-3 rounded-lg hover:bg-dark-light transition-all",
          isActive && "bg-primary/10 text-primary"
        )}
        href={data?.path}
      >
        <span>{data?.icon}</span>
        <span className="ml-3 hidden lg:block">{data?.name}</span>
      </Link>
    </ListItem>
  );
};

export default NavItem;
