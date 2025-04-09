<template>
    <div class="flex h-screen bg-[#fff7f7]">
      <!-- Sidebar -->
   
  
      <!-- Main Settings Section -->
      <main class="flex-1 p-10">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-3xl font-semibold text-gray-600">Settings</h1>
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span class="text-gray-700 font-medium">Daniel Berrones</span>
          </div>
        </div>
  
        <!-- User Card -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div class="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <div>
                <h2 class="text-xl font-semibold">Alexa Rondas</h2>
                <p class="text-gray-500">alexarondas@gmail.com</p>
              </div>
            </div>
            <button class="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-600">Edit</button>
          </div>
  
          <!-- Form Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700">Full Name</label>
              <input type="text" class="w-full mt-1 p-3 border rounded-md" placeholder="Your Full Name" />
            </div>
            <div>
              <label class="block text-gray-700">Nick Name</label>
              <input type="text" class="w-full mt-1 p-3 border rounded-md" placeholder="Your Nickname" />
            </div>
            <div>
              <label class="block text-gray-700">Gender</label>
              <select class="w-full mt-1 p-3 border rounded-md">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700">Country</label>
              <select class="w-full mt-1 p-3 border rounded-md">
                <option>Nigeria</option>
                <option>France</option>
                <option>USA</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700">Language</label>
              <select class="w-full mt-1 p-3 border rounded-md">
                <option>English</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700">Time Zone</label>
              <select class="w-full mt-1 p-3 border rounded-md">
                <option>GMT +1</option>
                <option>GMT +2</option>
                <option>GMT +0</option>
              </select>
            </div>
          </div>
  
          <!-- Email Address -->
          <div class="mt-6">
            <h3 class="text-gray-700 font-semibold mb-2">My email address</h3>
            <div class="flex flex-col md:flex-row md:items-center gap-3">
              <input
                type="email"
                value="alexarondas@gmail.com"
                class="p-3 border rounded-md w-full md:w-auto"
                disabled
              />
              <button class="text-indigo-600 hover:underline">Add a new address</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  