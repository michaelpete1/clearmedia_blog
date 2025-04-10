<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  // You can replace this with actual form handling logic
  console.log({
    name: name.value,
    email: email.value,
    message: message.value
  })

  // Reset form
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-white py-10 px-4">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h1 class="text-3xl font-bold text-purple-600 mb-6 text-center">Contact Us</h1>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-sm font-medium text-purple-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your name"
            required
          />
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-purple-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Message Field -->
        <div>
          <label for="message" class="block text-sm font-medium text-purple-700 mb-1">Message</label>
          <textarea
            id="message"
            v-model="message"
            rows="4"
            class="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Type your message"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
