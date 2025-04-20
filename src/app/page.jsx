"use client";

const Login = () => {
  return (
    <div>
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-light opacity-10 blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 rounded-full bg-secondary-light opacity-10 blur-3xl animate-float-reverse"></div>
      </div>
      {/* // Main Content */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col md:flex-row items-center justify-center">
        {/* // Left Column - Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mb-12 md:mb-0 md:pr-8">
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i className="fas fa-bolt text-white"></i>
                </div>
                <span className="text-2xl font-bold gradient-text">Nexus</span>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Log in to continue your journey
            </p>
            {/* // Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="flex items-center justify-center py-2 px-4 rounded-lg bg-dark-light hover:bg-opacity-70 transition-colors">
                <i className="fab fa-google text-red-400 mr-2"></i>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center py-2 px-4 rounded-lg bg-dark-light hover:bg-opacity-70 transition-colors">
                <i className="fab fa-apple text-gray-300 mr-2"></i>
                <span>Apple</span>
              </button>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>
            {/* // Login Form */}
            <form id="loginForm" className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email or Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full py-3 px-4 rounded-lg input-field focus:outline-none"
                    placeholder="you@example.com or @username"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-user text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full py-3 px-4 rounded-lg input-field focus:outline-none pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <div
                    className="password-toggle"
                    // onclick="togglePassword('password')"
                  >
                    <i className="fas fa-eye text-gray-400 hover:text-gray-300"></i>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <a
                    href="/forgot-password"
                    className="text-sm text-primary-light hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 rounded bg-dark-light border-gray-600 focus:ring-primary-light"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-primary-light to-secondary-light rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Log In
              </button>
            </form>
            <div className="text-center mt-6 text-sm text-gray-400">
              Don't have an account?
              <a
                href="/signup"
                className="text-primary-light hover:underline font-medium"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        {/* // Right Column - Visual Content */}
        <div className="w-full md:w-1/2 lg:w-3/5 xl:w-2/5 pl-0 md:pl-8">
          <div className="max-w-md mx-auto">
            <div className="glass-card p-6 rounded-2xl mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i className="fas fa-bell text-xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold">
                  You Have Notifications
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                See what's happened since you've been away. You have 3 new
                notifications.
              </p>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-dark-light rounded text-xs text-primary-light">
                  3 new
                </span>
                <span className="px-2 py-1 bg-dark-light rounded text-xs text-primary-light">
                  2 mentions
                </span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i className="fas fa-users text-xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold">Your Community Awaits</h3>
              </div>
              <p className="text-gray-300 mb-4">
                23 friends have posted updates since your last visit.
              </p>
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full border-2 border-dark-DEFAULT"
                  alt="User"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full border-2 border-dark-DEFAULT"
                  alt="User"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  className="w-10 h-10 rounded-full border-2 border-dark-DEFAULT"
                  alt="User"
                />
                <div className="w-10 h-10 rounded-full bg-dark-light border-2 border-dark-DEFAULT flex items-center justify-center text-xs font-bold">
                  +20
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i className="fas fa-star text-xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold">Exclusive Content</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Access premium content from creators you follow when you log in.
              </p>
              <div className="flex items-center text-yellow-400 text-sm">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className="text-gray-400 ml-2">
                  4.9/5 from 25K+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // Footer */}
      <footer className="bg-dark-DEFAULT py-6 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                <i className="fas fa-bolt text-white text-xs"></i>
              </div>
              <span className="text-lg font-bold gradient-text">Nexus</span>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Help
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
