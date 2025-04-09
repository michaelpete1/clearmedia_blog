<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-extrabold text-center text-indigo-600 mb-6">Dashboard - Post Engagements</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Post Engagement Card 1 -->
      <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">Post 1</h2>
        <div class="mt-4">
          <p class="text-gray-600">Likes: <span class="text-indigo-600 font-bold">120</span></p>
          <p class="text-gray-600">Comments: <span class="text-indigo-600 font-bold">45</span></p>
          <p class="text-gray-600">Shares: <span class="text-indigo-600 font-bold">30</span></p>
        </div>
      </div>

      <!-- Post Engagement Card 2 -->
      <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">Post 2</h2>
        <div class="mt-4">
          <p class="text-gray-600">Likes: <span class="text-indigo-600 font-bold">250</span></p>
          <p class="text-gray-600">Comments: <span class="text-indigo-600 font-bold">120</span></p>
          <p class="text-gray-600">Shares: <span class="text-indigo-600 font-bold">80</span></p>
        </div>
      </div>

      <!-- Post Engagement Card 3 -->
      <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">Post 3</h2>
        <div class="mt-4">
          <p class="text-gray-600">Likes: <span class="text-indigo-600 font-bold">75</span></p>
          <p class="text-gray-600">Comments: <span class="text-indigo-600 font-bold">25</span></p>
          <p class="text-gray-600">Shares: <span class="text-indigo-600 font-bold">15</span></p>
        </div>
      </div>

      <!-- More Post Engagements can be added similarly -->
    </div>

    <!-- Engagement Summary -->
    <div class="mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Engagement Summary</h2>
      <div class="flex justify-between">
        <p class="text-gray-600">Total Likes: <span class="text-indigo-600 font-bold">445</span></p>
        <p class="text-gray-600">Total Comments: <span class="text-indigo-600 font-bold">190</span></p>
        <p class="text-gray-600">Total Shares: <span class="text-indigo-600 font-bold">125</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
