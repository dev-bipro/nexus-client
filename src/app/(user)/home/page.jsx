import { BiLoaderCircle } from "react-icons/bi";

const Home = () => {
  return (
    <>
      {/* <!-- Stories --> */}
      <div className="py-4 px-4 mb-4">
        <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4">
          {/* <!-- Your Story --> */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative mb-2">
              <div className="story-ring w-16 h-16 rounded-full p-1">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-full h-full rounded-full object-cover"
                  alt="Your Story"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-dark rounded-full p-1 border-2 border-dark-DEFAULT">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <i className="fas fa-plus text-white text-xs"></i>
                </div>
              </div>
            </div>
            <span className="text-xs">Your Story</span>
          </div>

          {/* <!-- Friends' Stories --> */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="story-ring w-16 h-16 rounded-full p-1 mb-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="Sarah"
              />
            </div>
            <span className="text-xs">Sarah</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="story-ring w-16 h-16 rounded-full p-1 mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="Mike"
              />
            </div>
            <span className="text-xs">Mike</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="story-ring w-16 h-16 rounded-full p-1 mb-2">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="Emma"
              />
            </div>
            <span className="text-xs">Emma</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="story-ring w-16 h-16 rounded-full p-1 mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="David"
              />
            </div>
            <span className="text-xs">David</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="story-ring w-16 h-16 rounded-full p-1 mb-2">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="Lisa"
              />
            </div>
            <span className="text-xs">Lisa</span>
          </div>
        </div>
      </div>

      {/* <!-- Create Post --> */}
      <div className="glass-card rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-10 h-10 rounded-full"
            alt="You"
          />
          <button className="flex-1 text-left text-gray-400 hover:bg-dark transition-colors rounded-full py-2 px-4">
            What's on your mind?
          </button>
        </div>
        <div className="flex justify-between border-t border-gray-700 pt-3">
          <button className="flex items-center justify-center flex-1 text-gray-400 hover:text-primary transition-colors py-1">
            <i className="fas fa-image text-lg mr-2"></i>
            <span>Photo</span>
          </button>
          <button className="flex items-center justify-center flex-1 text-gray-400 hover:text-primary transition-colors py-1">
            <i className="fas fa-video text-lg mr-2"></i>
            <span>Video</span>
          </button>
          <button className="flex items-center justify-center flex-1 text-gray-400 hover:text-primary transition-colors py-1">
            <i className="fas fa-smile text-lg mr-2"></i>
            <span>Feeling</span>
          </button>
        </div>
      </div>

      {/* <!-- Posts --> */}
      {/* <!-- Post 1 --> */}
      <div className="glass-card rounded-xl overflow-hidden mb-6">
        {/* <!-- Post Header --> */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="story-ring w-10 h-10 rounded-full p-0.5">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="Sarah"
              />
            </div>
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

        {/* <!-- Post Content --> */}
        <div className="px-4 pb-3">
          <p>
            Just visited this amazing place in the mountains! The view was
            breathtaking and the air so fresh. Definitely coming back next year!
            🏔️ #travel #adventure
          </p>
        </div>

        {/* <!-- Post Image --> */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-auto max-h-[500px] object-cover"
            alt="Mountain View"
          />
        </div>

        {/* <!-- Post Stats --> */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                <i className="fas fa-heart text-white text-xs"></i>
              </div>
              <div className="w-5 h-5 rounded-full bg-primary -ml-1 flex items-center justify-center">
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

        {/* <!-- Post Actions --> */}
        <div className="px-2 py-1 flex">
          <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark transition-colors text-gray-400 hover:text-primary">
            <i className="fas fa-thumbs-up mr-2"></i>
            <span>Like</span>
          </button>
          <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark transition-colors text-gray-400 hover:text-primary">
            <i className="fas fa-comment mr-2"></i>
            <span>Comment</span>
          </button>
          <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark transition-colors text-gray-400 hover:text-primary">
            <i className="fas fa-share mr-2"></i>
            <span>Share</span>
          </button>
        </div>

        {/* <!-- Comments Preview --> */}
        <div className="px-4 py-3 border-t border-gray-700">
          <div className="flex items-start space-x-3 mb-3">
            <img
              src="https://randomuser.me/api/portraits/men/22.jpg"
              className="w-8 h-8 rounded-full"
              alt="Mike"
            />
            <div className="flex-1 bg-dark rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-sm">Mike Thompson</h4>
                <span className="text-gray-400 text-xs">1 hr ago</span>
              </div>
              <p className="text-sm">
                Wow! Where is this exactly? Looks like an amazing place to
                visit!
              </p>
              <div className="flex items-center mt-2 space-x-3 text-xs text-gray-400">
                <button className="hover:text-white">Like</button>
                <button className="hover:text-white">Reply</button>
              </div>
            </div>
          </div>

          {/* <!-- Comment Input --> */}
          <div className="flex items-center space-x-3 mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-8 h-8 rounded-full"
              alt="You"
            />
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Write a comment..."
                className="comment-input w-full bg-dark rounded-full py-2 px-4 pr-10 focus:outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <button className="text-gray-400 hover:text-primary">
                  <i className="fas fa-smile"></i>
                </button>
                <button className="text-gray-400 hover:text-primary">
                  <i className="fas fa-camera"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Post 2 --> */}
      <div className="glass-card rounded-xl overflow-hidden mb-6">
        {/* <!-- Post Header --> */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="story-ring w-10 h-10 rounded-full p-0.5">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="David"
              />
            </div>
            <div>
              <h3 className="font-semibold">David Wilson</h3>
              <p className="text-gray-400 text-xs">
                5 hrs ago · <i className="fas fa-user-friends"></i>
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>

        {/* <!-- Post Content --> */}
        <div className="px-4 pb-3">
          <p>
            Just launched my new photography portfolio website! Check it out and
            let me know what you think. I'm available for bookings worldwide.
            📸✨
          </p>
          <a
            href="#"
            className="text-primary hover:underline mt-2 inline-block"
          >
            davidwilsonphotography.com
          </a>
        </div>

        {/* <!-- Link Preview --> */}
        <div className="border border-gray-700 rounded-lg mx-4 mb-4 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-40 object-cover"
            alt="Concert"
          />
          <div className="p-3">
            <h4 className="font-semibold">David Wilson Photography</h4>
            <p className="text-gray-400 text-sm mt-1">
              Professional photography services for events, portraits, and
              commercial work
            </p>
            <p className="text-primary text-xs mt-2">
              davidwilsonphotography.com
            </p>
          </div>
        </div>

        {/* <!-- Post Stats --> */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                <i className="fas fa-heart text-white text-xs"></i>
              </div>
            </div>
            <span className="text-sm">248</span>
          </div>
          <div className="text-gray-400 text-sm">
            <span>42 comments</span>
            <span className="mx-1">·</span>
            <span>15 shares</span>
          </div>
        </div>

        {/* <!-- Post Actions --> */}
        <div className="px-2 py-1 flex">
          <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark transition-colors text-gray-400 hover:text-primary">
            <i className="fas fa-thumbs-up mr-2"></i>
            <span>Like</span>
          </button>
          <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark transition-colors text-gray-400 hover:text-primary">
            <i className="fas fa-comment mr-2"></i>
            <span>Comment</span>
          </button>
          <button className="post-actions flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-dark transition-colors text-gray-400 hover:text-primary">
            <i className="fas fa-share mr-2"></i>
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* <!-- Sponsored Post --> */}
      <div className="glass-card rounded-xl overflow-hidden mb-6 border border-primary/20">
        <div className="p-3 bg-primary/10 text-primary text-xs flex items-center">
          <i className="fas fa-ad mr-2"></i>
          <span>Sponsored</span>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              className="w-10 h-10 rounded-full object-cover"
              alt="TechGadgets"
            />
            <div>
              <h3 className="font-semibold">TechGadgets</h3>
              <p className="text-gray-400 text-xs">Sponsored</p>
            </div>
          </div>
          <p className="mb-4">
            The new Quantum X smartphone is here! With 200MP camera, 8K video,
            and 2-day battery life. Pre-order now and get 15% off!
          </p>
          <img
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80"
            className="w-full h-auto rounded-lg mb-4"
            alt="Smartphone"
          />
          <a
            href="#"
            className="block text-center py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* <!-- Load More --> */}
      <div className="text-center mb-8">
        <button className="px-6 py-2 flex items-center glass-card rounded-lg font-medium hover:bg-dark transition-colors">
          <span>
            <BiLoaderCircle />
          </span>{" "}
          <span>Load More</span>
        </button>
      </div>
    </>
  );
};

export default Home;
