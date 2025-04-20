import React from "react";
import List from "../ui/list";
import { sidebarButtons, sideBarItems } from "@/data/nav";
import NavItem from "./nav-item";
import { MdElectricBolt } from "react-icons/md";

const LeftSideBar = () => {
  return (
    <aside className="w-20 lg:w-64 fixed h-screen pt-6 hidden md:block">
      <div className="flex flex-col h-full">
        {/* <!-- Logo --> */}
        <div className="flex items-center justify-center lg:justify-start lg:pl-4 mb-12">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
            <MdElectricBolt />
          </div>
          <span className="text-2xl font-bold gradient-text ml-2 hidden lg:block">
            Nexus
          </span>
        </div>

        {/* <!-- Navigation --> */}
        <nav className="flex-1">
          <List className="space-y-3">
            {sideBarItems.map((navItem) => (
              <NavItem data={navItem} />
            ))}
          </List>
        </nav>

        {/* <!-- Bottom Menu --> */}
        {/* <div className="pb-6">
          <List className="space-y-3">
            {sidebarButtons.map((navItem) => (
              <NavItem data={navItem} />
            ))}
          </List>
        </div> */}
      </div>
    </aside>
  );
};

const RightSideBar = () => {
  return (
    <aside className="w-80 hidden lg:w-64 md:block pt-6">
      {/* <!-- Friends List --> */}
      <div className="glass-card rounded-xl p-4 mb-6">
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          <span>Friends Online</span>
          <span className="text-xs text-gray-400">12</span>
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full"
                alt="Sarah"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-DEFAULT"></div>
            </div>
            <div>
              <h4 className="font-medium text-sm">Sarah Johnson</h4>
              <p className="text-gray-400 text-xs">Active now</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                className="w-10 h-10 rounded-full"
                alt="Mike"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-DEFAULT"></div>
            </div>
            <div>
              <h4 className="font-medium text-sm">Mike Thompson</h4>
              <p className="text-gray-400 text-xs">Active 5m ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="w-10 h-10 rounded-full"
                alt="Emma"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-DEFAULT"></div>
            </div>
            <div>
              <h4 className="font-medium text-sm">Emma Davis</h4>
              <p className="text-gray-400 text-xs">Active 1h ago</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 text-center text-primary-light hover:underline text-sm">
          See All
        </button>
      </div>

      {/* <!-- Suggested Users --> */}
      <div className="glass-card rounded-xl p-4 mb-6">
        <h2 className="font-semibold mb-4">Suggested for You</h2>
        <div className="space-y-4">
          <div className="suggested-user flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                className="w-10 h-10 rounded-full"
                alt="Lisa"
              />
              <div>
                <h4 className="font-medium text-sm">Lisa Brown</h4>
                <p className="text-gray-400 text-xs">Photographer</p>
              </div>
            </div>
            <button className="follow-btn px-3 py-1 text-xs rounded-full bg-dark-light hover:bg-primary-light hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              Follow
            </button>
          </div>
          <div className="suggested-user flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                className="w-10 h-10 rounded-full"
                alt="James"
              />
              <div>
                <h4 className="font-medium text-sm">James Wilson</h4>
                <p className="text-gray-400 text-xs">Travel Blogger</p>
              </div>
            </div>
            <button className="follow-btn px-3 py-1 text-xs rounded-full bg-dark-light hover:bg-primary-light hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              Follow
            </button>
          </div>
          <div className="suggested-user flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/55.jpg"
                className="w-10 h-10 rounded-full"
                alt="Anna"
              />
              <div>
                <h4 className="font-medium text-sm">Anna Martinez</h4>
                <p className="text-gray-400 text-xs">Food Critic</p>
              </div>
            </div>
            <button className="follow-btn px-3 py-1 text-xs rounded-full bg-dark-light hover:bg-primary-light hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              Follow
            </button>
          </div>
        </div>
        <button className="w-full mt-4 text-center text-primary-light hover:underline text-sm">
          See All Suggestions
        </button>
      </div>

      {/* <!-- Trending Topics --> */}
      <div className="glass-card rounded-xl p-4">
        <h2 className="font-semibold mb-4">Trending Today</h2>
        <div className="space-y-3">
          <a
            href="#"
            className="trending-tag block p-2 rounded-lg hover:bg-dark-light transition-colors"
          >
            <div className="text-xs text-gray-400">Technology · Trending</div>
            <div className="font-medium">#QuantumComputing</div>
            <div className="text-xs text-gray-400">15.2K posts</div>
          </a>
          <a
            href="#"
            className="trending-tag block p-2 rounded-lg hover:bg-dark-light transition-colors"
          >
            <div className="text-xs text-gray-400">
              Entertainment · Trending
            </div>
            <div className="font-medium">#SummerFestival2023</div>
            <div className="text-xs text-gray-400">32.7K posts</div>
          </a>
          <a
            href="#"
            className="trending-tag block p-2 rounded-lg hover:bg-dark-light transition-colors"
          >
            <div className="text-xs text-gray-400">Sports · Trending</div>
            <div className="font-medium">#ChampionshipFinals</div>
            <div className="text-xs text-gray-400">45.1K posts</div>
          </a>
          <a
            href="#"
            className="trending-tag block p-2 rounded-lg hover:bg-dark-light transition-colors"
          >
            <div className="text-xs text-gray-400">Travel · Trending</div>
            <div className="font-medium">#HiddenGems</div>
            <div className="text-xs text-gray-400">8.9K posts</div>
          </a>
        </div>
      </div>
    </aside>
  );
};

export { LeftSideBar, RightSideBar };
