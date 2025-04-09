<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Page Content (Dynamic) -->
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>
