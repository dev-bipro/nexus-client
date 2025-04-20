"use client";

const Signup = () => {
  return (
    <div className="bg-dark-DEFAULT text-white font-geist-sans">
      <div class="fixed inset-0 overflow-hidden -z-10">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-light opacity-10 blur-3xl animate-float"></div>
        <div class="absolute top-3/4 right-1/4 w-72 h-72 rounded-full bg-secondary-light opacity-10 blur-3xl animate-float-reverse"></div>
      </div>

      {/* <!-- Main Content --> */}
      <div class="container mx-auto px-4 py-8 min-h-screen flex flex-col md:flex-row items-center justify-center">
        {/* <!-- Left Column - Form --> */}
        <div class="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mb-12 md:mb-0 md:pr-8">
          <div class="glass-card p-8 rounded-2xl">
            <div class="flex justify-center mb-6">
              <div class="flex items-center space-x-2">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i class="fas fa-bolt text-white"></i>
                </div>
                <span class="text-2xl font-bold gradient-text">Nexus</span>
              </div>
            </div>

            <h1 class="text-2xl md:text-3xl font-bold text-center mb-2">
              Create Your Account
            </h1>
            <p class="text-gray-400 text-center mb-8">
              Join the next-generation social network
            </p>

            {/* <!-- Social Login Buttons --> */}
            <div class="grid grid-cols-2 gap-3 mb-6">
              <button class="flex items-center justify-center py-2 px-4 rounded-lg bg-dark-light hover:bg-opacity-70 transition-colors">
                <i class="fab fa-google text-red-400 mr-2"></i>
                <span>Google</span>
              </button>
              <button class="flex items-center justify-center py-2 px-4 rounded-lg bg-dark-light hover:bg-opacity-70 transition-colors">
                <i class="fab fa-apple text-gray-300 mr-2"></i>
                <span>Apple</span>
              </button>
            </div>

            <div class="flex items-center my-6">
              <div class="flex-1 border-t border-gray-700"></div>
              <span class="px-4 text-gray-400 text-sm">OR</span>
              <div class="flex-1 border-t border-gray-700"></div>
            </div>

            {/* <!-- Signup Form --> */}
            <form id="signupForm" class="space-y-5">
              <div>
                <label
                  htmlFor="fullname"
                  class="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    class="w-full py-3 px-4 rounded-lg input-field focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i class="fas fa-user text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" class="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div class="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full py-3 px-4 rounded-lg input-field focus:outline-none"
                    placeholder="you@example.com"
                    required
                  />
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i class="fas fa-envelope text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  class="block text-sm font-medium mb-2"
                >
                  Username
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    class="w-full py-3 px-4 rounded-lg input-field focus:outline-none"
                    placeholder="@johndoe"
                    required
                  />
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i class="fas fa-at text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  class="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <div class="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-full py-3 px-4 rounded-lg input-field focus:outline-none pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <div
                    class="password-toggle"
                    // onClick="togglePassword('password')"
                  >
                    <i class="fas fa-eye text-gray-400 hover:text-gray-300"></i>
                  </div>
                </div>
                <div class="mt-2">
                  <div class="flex space-x-1 mb-1">
                    <div
                      id="strength-1"
                      class="password-strength w-1/4 rounded-full bg-gray-700"
                    ></div>
                    <div
                      id="strength-2"
                      class="password-strength w-1/4 rounded-full bg-gray-700"
                    ></div>
                    <div
                      id="strength-3"
                      class="password-strength w-1/4 rounded-full bg-gray-700"
                    ></div>
                    <div
                      id="strength-4"
                      class="password-strength w-1/4 rounded-full bg-gray-700"
                    ></div>
                  </div>
                  <p id="password-feedback" class="text-xs text-gray-400">
                    Use 8+ characters with a mix of letters, numbers & symbols
                  </p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  class="block text-sm font-medium mb-2"
                >
                  Confirm Password
                </label>
                <div class="relative">
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    class="w-full py-3 px-4 rounded-lg input-field focus:outline-none pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <div
                    class="password-toggle"
                    // onClick={}
                  >
                    <i class="fas fa-eye text-gray-400 hover:text-gray-300"></i>
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  class="w-4 h-4 rounded bg-dark-light border-gray-600 focus:ring-primary-light"
                />
                <label htmlFor="terms" class="ml-2 text-sm text-gray-300">
                  I agree to the
                  <a href="#" class="text-primary-light hover:underline">
                    Terms of Service
                  </a>
                  and
                  <a href="#" class="text-primary-light hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                class="w-full py-3 px-4 bg-gradient-to-r from-primary-light to-secondary-light rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Create Account
              </button>
            </form>

            <div class="text-center mt-6 text-sm text-gray-400">
              Already have an account?
              <a
                href="/login"
                class="text-primary-light hover:underline font-medium"
              >
                Log in
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Right Column - Visual Content --> */}
        <div class="w-full md:w-1/2 lg:w-3/5 xl:w-2/5 pl-0 md:pl-8">
          <div class="max-w-md mx-auto">
            <div class="glass-card p-6 rounded-2xl mb-8">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i class="fas fa-shield-alt text-xl text-white"></i>
                </div>
                <h3 class="text-xl font-semibold">Privacy First Design</h3>
              </div>
              <p class="text-gray-300 mb-4">
                Your data belongs to you. We never sell your information to
                third parties.
              </p>
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-dark-light rounded text-xs text-primary-light">
                  End-to-end encrypted
                </span>
                <span class="px-2 py-1 bg-dark-light rounded text-xs text-primary-light">
                  No tracking
                </span>
              </div>
            </div>

            <div class="glass-card p-6 rounded-2xl mb-8">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i class="fas fa-bolt text-xl text-white"></i>
                </div>
                <h3 class="text-xl font-semibold">Instant Access</h3>
              </div>
              <p class="text-gray-300 mb-4">
                Get started immediately with your personalized feed and
                recommendations.
              </p>
              <div class="flex items-center text-yellow-400 text-sm">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span class="text-gray-400 ml-2">4.9/5 from 25K+ reviews</span>
              </div>
            </div>

            <div class="glass-card p-6 rounded-2xl">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <i class="fas fa-users text-xl text-white"></i>
                </div>
                <h3 class="text-xl font-semibold">Join Our Community</h3>
              </div>
              <p class="text-gray-300 mb-4">
                Connect with 2M+ creators, professionals, and like-minded
                individuals.
              </p>
              <div class="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  class="w-10 h-10 rounded-full border-2 border-dark-DEFAULT"
                  alt="User"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  class="w-10 h-10 rounded-full border-2 border-dark-DEFAULT"
                  alt="User"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  class="w-10 h-10 rounded-full border-2 border-dark-DEFAULT"
                  alt="User"
                />
                <div class="w-10 h-10 rounded-full bg-dark-light border-2 border-dark-DEFAULT flex items-center justify-center text-xs font-bold">
                  2M+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer class="bg-dark-DEFAULT py-6 border-t border-gray-800">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center space-x-2 mb-4 md:mb-0">
              <div class="w-6 h-6 rounded bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                <i class="fas fa-bolt text-white text-xs"></i>
              </div>
              <span class="text-lg font-bold gradient-text">Nexus</span>
            </div>

            <div class="flex space-x-6">
              <a
                href="#"
                class="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white text-sm transition-colors"
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

export default Signup;
