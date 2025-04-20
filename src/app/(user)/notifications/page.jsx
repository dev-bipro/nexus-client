import React from "react";

const Notifications = () => {
  return (
    <>
      {/* <!-- Notifications Header --> */}
      <div className="px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-dark-light transition-colors">
            <i className="fas fa-ellipsis-h text-gray-400"></i>
          </button>
          <button className="p-2 rounded-full hover:bg-dark-light transition-colors">
            <i className="fas fa-check-circle text-gray-400"></i>
          </button>
        </div>
      </div>

      {/* <!-- Notification Tabs --> */}
      <div className="px-4 border-b border-gray-800 flex">
        <button className="notification-tab py-3 px-4 font-medium border-b-2 border-primary-light text-primary-light">
          All
        </button>
        <button className="notification-tab py-3 px-4 font-medium text-gray-400 hover:text-white transition-colors">
          Mentions
        </button>
        <button className="notification-tab py-3 px-4 font-medium text-gray-400 hover:text-white transition-colors">
          Reactions
        </button>
      </div>

      {/* <!-- Notifications List --> */}
      <div className="divide-y divide-gray-800">
        {/* <!-- Unread Notification --> */}
        <div className="notification-item unread glass-card p-4 hover:bg-dark-light/30 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-12 h-12 rounded-full object-cover"
                alt="Sarah"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
                <i className="fas fa-heart text-white text-xs"></i>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Sarah Johnson</h3>
                <span className="text-xs text-gray-400">2 mins ago</span>
              </div>
              <p className="text-gray-300 mt-1">
                Liked your post: "Check out this amazing view from my hike!"
              </p>
              <div className="mt-2 flex space-x-2">
                <button className="text-sm px-3 py-1 rounded-full bg-dark-light hover:bg-primary-light/20 transition-colors">
                  <i className="fas fa-heart mr-1 text-secondary-light"></i>{" "}
                  Like back
                </button>
                <button className="text-sm px-3 py-1 rounded-full bg-dark-light hover:bg-primary-light/20 transition-colors">
                  <i className="fas fa-reply mr-1"></i> Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Unread Notification --> */}
        <div className="notification-item unread glass-card p-4 hover:bg-dark-light/30 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                className="w-12 h-12 rounded-full object-cover"
                alt="Mike"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
                <i className="fas fa-comment text-white text-xs"></i>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Mike Thompson</h3>
                <span className="text-xs text-gray-400">15 mins ago</span>
              </div>
              <p className="text-gray-300 mt-1">
                Commented: "Wow! Where is this exactly? Looks amazing!"
              </p>
              <div className="mt-3 bg-dark-light rounded-lg p-3">
                <p className="text-sm italic">
                  "Check out this amazing view from my hike!"
                </p>
              </div>
              <div className="mt-2 flex space-x-2">
                <button className="text-sm px-3 py-1 rounded-full bg-dark-light hover:bg-primary-light/20 transition-colors">
                  <i className="fas fa-reply mr-1"></i> Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Read Notification --> */}
        <div className="notification-item glass-card p-4 hover:bg-dark-light/30 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                className="w-12 h-12 rounded-full object-cover"
                alt="David"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
                <i className="fas fa-user-plus text-white text-xs"></i>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">David Wilson</h3>
                <span className="text-xs text-gray-400">1 hour ago</span>
              </div>
              <p className="text-gray-300 mt-1">Started following you</p>
              <div className="mt-2">
                <button className="text-sm px-3 py-1 rounded-full bg-dark-light hover:bg-primary-light/20 transition-colors">
                  <i className="fas fa-user-plus mr-1"></i> Follow back
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Read Notification --> */}
        <div className="notification-item glass-card p-4 hover:bg-dark-light/30 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                className="w-12 h-12 rounded-full object-cover"
                alt="Lisa"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
                <i className="fas fa-share-alt text-white text-xs"></i>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Lisa Brown</h3>
                <span className="text-xs text-gray-400">3 hours ago</span>
              </div>
              <p className="text-gray-300 mt-1">
                Shared your post with 24 others
              </p>
              <div className="mt-3 bg-dark-light rounded-lg p-3">
                <p className="text-sm italic">
                  "My favorite coffee shop in town!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- System Notification --> */}
        <div className="notification-item glass-card p-4 hover:bg-dark-light/30 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                <i className="fas fa-bolt text-white"></i>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Nexus Update</h3>
                <span className="text-xs text-gray-400">1 day ago</span>
              </div>
              <p className="text-gray-300 mt-1">
                New feature available! Try our improved photo filters now.
              </p>
              <div className="mt-2">
                <button className="text-sm px-3 py-1 rounded-full bg-dark-light hover:bg-primary-light/20 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Load More --> */}
      <div className="text-center mt-6 mb-8">
        <button className="px-6 py-2 glass-card rounded-lg font-medium hover:bg-dark-light transition-colors">
          Load Older Notifications
        </button>
      </div>
    </>
  );
};

export default Notifications;
