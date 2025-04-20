import { TiHome } from "react-icons/ti";
import { MdExplore, MdDarkMode } from "react-icons/md";
import { IoNotifications, IoMailSharp } from "react-icons/io5";
import { GoBookmarkFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const sideBarItems = [
  {
    name: "Home",
    path: "/home",
    icon: <TiHome />,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: <MdExplore />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <IoNotifications />,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <IoMailSharp />,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: <GoBookmarkFill />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaUser />,
  },
];
export const sidebarButtons = [
  {
    name: "settings",
    icon: <IoMdSettings />,
  },
  {
    name: "dark mode",
    icon: <MdDarkMode />,
  },
];
