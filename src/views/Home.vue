<template>
    <div class="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200">
      <!-- Hero Section -->
      <section class="text-center py-24 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 text-white">
        <h1 class="text-6xl font-extrabold">
          Welcome to <span class="text-indigo-200">ClearMedia</span>
        </h1>
        <p class="mt-6 text-xl max-w-2xl mx-auto">
          Your space to create, share, and explore content like never before. Join us and make your mark!
        </p>
        <div class="mt-8">
          <button
            class="bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-4xl text-center font-bold text-gray-800 mb-12">Why Choose ClearMedia?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Feature 1 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                📱
              </div>
              <h3 class="text-2xl font-semibold text-gray-800">Create with Ease</h3>
              <p class="text-gray-600 mt-3">
                Easily create and customize posts with our user-friendly tools and interfaces.
              </p>
            </div>
  
            <!-- Feature 2 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                🌍
              </div>
              <h3 class="text-2xl font-semibold text-gray-800">Discover Unique Content</h3>
              <p class="text-gray-600 mt-3">
                Explore a variety of creative posts from diverse creators around the world.
              </p>
            </div>
  
            <!-- Feature 3 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                🤝
              </div>
              <h3 class="text-2xl font-semibold text-gray-800">Engage with the Community</h3>
              <p class="text-gray-600 mt-3">
                Build connections and engage with a passionate community of content creators.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call-to-Action Section -->
      <section class="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-24">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-6">Get Started with ClearMedia Today!</h2>
          <p class="text-xl mb-8">
            Join the ClearMedia platform and start creating your own world of content.
          </p>
          <button
            class="bg-indigo-500 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-indigo-600 transition-colors"
          >
            Join Now
          </button>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-white text-center py-6">
        <p class="text-gray-600 text-sm">© 2025 ClearMedia. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  