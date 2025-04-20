import MobileNav from "@/components/layouts/mobile-nav";
import { LeftSideBar, RightSideBar } from "@/components/layouts/side-bar";

export default function UserLayout({ children }) {
  return (
    <>
      <div className="container mx-auto gap-8 px-4 flex">
        <LeftSideBar />
        <main className="flex-1 md:ml-20 lg:ml-64 w-full pb-20">
          {children}
        </main>
        <RightSideBar />
      </div>
      <MobileNav />
    </>
  );
}
