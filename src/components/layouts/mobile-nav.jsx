import React from "react";

const MobileNav = () => {
  return (
    <nav class="fixed bottom-0 left-0 right-0 bg-dark-DEFAULT border-t border-gray-800 flex justify-around py-3 md:hidden z-20">
      <a href="/home" class="text-primary-light flex flex-col items-center">
        <i class="fas fa-home text-xl"></i>
        <span class="text-xs mt-1">Home</span>
      </a>
      <a
        href="/explore"
        class="text-gray-400 hover:text-white flex flex-col items-center"
      >
        <i class="fas fa-compass text-xl"></i>
        <span class="text-xs mt-1">Explore</span>
      </a>
      <a
        href="/create"
        class="text-gray-400 hover:text-white flex flex-col items-center"
      >
        <i class="fas fa-plus-square text-xl"></i>
        <span class="text-xs mt-1">Create</span>
      </a>
      <a
        href="/notifications"
        class="text-gray-400 hover:text-white flex flex-col items-center relative"
      >
        <i class="fas fa-bell text-xl"></i>
        <span class="text-xs mt-1">Notifications</span>
        <span class="absolute top-0 right-4 w-2 h-2 bg-secondary-light rounded-full"></span>
      </a>
      <a
        href="/profile"
        class="text-gray-400 hover:text-white flex flex-col items-center"
      >
        <i class="fas fa-user text-xl"></i>
        <span class="text-xs mt-1">Profile</span>
      </a>
    </nav>
  );
};

export default MobileNav;
