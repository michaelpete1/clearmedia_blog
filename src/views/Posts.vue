<template>
  <div class="bg-light-blue min-h-screen p-4">
    <div class="bg-white rounded-lg p-6 shadow-lg">
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">Blog Posts</h1>
      <ul class="space-y-4">
        <li v-for="post in posts" :key="post.id" class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-gray-700">{{ post.title }}</h2>
          <p class="text-gray-600">{{ post.body }}</p>
          <router-link :to="`/post/${post.id}`" class="text-blue-500 hover:text-blue-700">Read more</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = res.data
  } catch (err) {
    console.error('Error fetching posts:', err)
  }
})
</script>
