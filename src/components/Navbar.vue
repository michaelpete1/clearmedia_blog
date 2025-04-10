<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
const isHovered = ref(false);
</script>

<template>
  <nav
    class="top-0 left-0 w-full z-50 shadow-lg p-4 transition-opacity duration-300"
    :class="isHovered ? 'bg-gray-900 opacity-100' : 'bg-gray-900/50 opacity-60'"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- ClearMedia Logo -->
      <RouterLink
        to="/"
        class="text-2xl font-bold text-white transition duration-300 ease-in-out hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
      >
        ClearMedia
      </RouterLink>

      <!-- Hamburger Icon -->
      <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
        <Bars3Icon v-if="!isOpen" class="w-8 h-8" />
        <XMarkIcon v-if="isOpen" class="w-8 h-8" />
      </button>
    </div>

    <!-- Slide-out Mobile Menu -->
    <div
      class="fixed top-0 right-0 h-[85vh] w-56 bg-gray-800/90 backdrop-blur-lg shadow-lg rounded-lg transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <button @click="isOpen = false" class="absolute top-4 right-4 text-white">
        <XMarkIcon class="w-8 h-8" />
      </button>

      <ul class="mt-16 space-y-4 text-lg text-white text-center">
        <li class="relative group">
          <RouterLink to="/Login" class="block py-2">Login</RouterLink>
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></span>
        </li>
        <li class="relative group">
          <RouterLink to="/Dashboard" class="block py-2">Dashboard</RouterLink>
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></span>
        </li>
        <li class="relative group">
          <RouterLink to="/Posts" class="block py-2">Posts</RouterLink>
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></span>
        </li>
        <li class="relative group">
          <RouterLink to="/Post" class="block py-2">Post</RouterLink>
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></span>
        </li>
        <li class="relative group">
          <RouterLink to="/Contacts" class="block py-2">Contacts</RouterLink>
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></span>
        </li>
        <li class="relative group">
          <RouterLink to="/Settings" class="block py-2">Settings</RouterLink>
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></span>
        </li>
      </ul>
    </div>
  </nav>
</template>
