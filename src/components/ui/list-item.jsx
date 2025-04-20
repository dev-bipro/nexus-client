import { cn } from "@/lib/utils";
import React from "react";

const ListItem = ({ className, children }) => {
  return <li className={cn(className)}>{children}</li>;
};

export default ListItem;
