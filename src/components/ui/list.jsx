import { cn } from "@/lib/utils";

const List = ({ className, children }) => {
  return <ul className={cn(className)}>{children}</ul>;
};

export default List;
