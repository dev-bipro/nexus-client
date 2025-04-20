import React from "react";

const Explore = () => {
  return (
    <>
      {" "}
      {/* <!-- Search Bar (Explore-specific) --> */}
      <div className="glass-card rounded-full p-2 my-6 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search #tags, people, or places..."
            className="w-full bg-dark-light rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-light"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-light">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      {/* <!-- Trending Now Section --> */}
      <section className="mb-10 px-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-fire text-secondary-light mr-2"></i>
          Trending Now
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* <!-- Trending Item 1 --> */}
          <div className="explore-card glass-card rounded-xl overflow-hidden relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-full object-cover"
            />
            <div className="explore-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="font-semibold text-lg">#MountainAdventure</h3>
              <p className="text-sm text-gray-300">12.4K posts</p>
            </div>
          </div>

          {/* <!-- Trending Item 2 --> */}
          <div className="explore-card glass-card rounded-xl overflow-hidden relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-full object-cover"
            />
            <div className="explore-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="font-semibold text-lg">#SummerFestival</h3>
              <p className="text-sm text-gray-300">8.7K posts</p>
            </div>
          </div>

          {/* <!-- Trending Item 3 --> */}
          <div className="explore-card glass-card rounded-xl overflow-hidden relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-full object-cover"
            />
            <div className="explore-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="font-semibold text-lg">#FoodieLife</h3>
              <p className="text-sm text-gray-300">15.2K posts</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Section --> */}
      <section className="mb-10 px-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-tags text-primary-light mr-2"></i>
          Browse Categories
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-camera text-lg mb-1 block"></i>
            <span className="text-sm">Photography</span>
          </a>
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-utensils text-lg mb-1 block"></i>
            <span className="text-sm">Food</span>
          </a>
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-plane text-lg mb-1 block"></i>
            <span className="text-sm">Travel</span>
          </a>
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-music text-lg mb-1 block"></i>
            <span className="text-sm">Music</span>
          </a>
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-paint-brush text-lg mb-1 block"></i>
            <span className="text-sm">Art</span>
          </a>
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-dumbbell text-lg mb-1 block"></i>
            <span className="text-sm">Fitness</span>
          </a>
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-gamepad text-lg mb-1 block"></i>
            <span className="text-sm">Gaming</span>
          </a>
          <a
            href="#"
            className="category-pill glass-card rounded-lg p-3 text-center hover:bg-primary-light/20 transition-colors"
          >
            <i className="fas fa-laptop-code text-lg mb-1 block"></i>
            <span className="text-sm">Tech</span>
          </a>
        </div>
      </section>
      {/* <!-- Recommended Posts --> */}
      <section className="mb-10 px-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-star text-yellow-400 mr-2"></i>
          Recommended For You
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {/* <!-- Post 1 --> */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-400 text-xs">
                    2 hrs ago · <i className="fas fa-globe-americas"></i>
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>

            <div className="px-4 pb-3">
              <p>
                Check out this amazing view from my hike today! #nature
                #adventure
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-auto max-h-[500px] object-cover"
              alt="Mountain View"
            />

            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-secondary-light flex items-center justify-center">
                    <i className="fas fa-heart text-white text-xs"></i>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-primary-light -ml-1 flex items-center justify-center">
                    <i className="fas fa-thumbs-up text-white text-xs"></i>
                  </div>
                </div>
                <span className="text-sm">1.2K</span>
              </div>
              <div className="text-gray-400 text-sm">
                <span>84 comments</span>
                <span className="mx-1">·</span>
                <span>32 shares</span>
              </div>
            </div>

            <div className="px-2 py-1 flex">
              <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark-light transition-colors text-gray-400 hover:text-primary-light">
                <i className="fas fa-thumbs-up mr-2"></i>
                <span>Like</span>
              </button>
              <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark-light transition-colors text-gray-400 hover:text-primary-light">
                <i className="fas fa-comment mr-2"></i>
                <span>Comment</span>
              </button>
              <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark-light transition-colors text-gray-400 hover:text-primary-light">
                <i className="fas fa-share mr-2"></i>
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* <!-- Post 2 --> */}
          <div className="glass-card rounded-xl overflow-hidden">
            {/* <!-- Similar post structure --> */}
          </div>
        </div>
      </section>
      {/* <!-- Load More --> */}
      <div className="text-center mb-8">
        <button className="px-6 py-2 glass-card rounded-lg font-medium hover:bg-dark-light transition-colors">
          <i className="fas fa-spinner animate-spin mr-2"></i> Load More
        </button>
      </div>
    </>
  );
};

export default Explore;
