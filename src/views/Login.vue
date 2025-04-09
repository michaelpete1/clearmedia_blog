<template>
  <div class="flex min-h-screen">
    <!-- Left side -->
    <div class="w-full md:w-1/2 bg-gradient-to-b from-blue-300 via-purple-500 to-purple-900 flex flex-col items-center justify-center text-white p-8">
      <div class="max-w-md">
        <h1 class="text-3xl font-bold mb-2">Clearmedia</h1>
        <p class="text-lg mb-8">News at your fingertips</p>
        <button @click="readMore" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm transition-all duration-200">
          Read More
        </button>
      </div>
    </div>

    <!-- Right side (login form) -->
    <div class="hidden md:flex md:w-1/2 bg-white items-center justify-center p-8">
      <div class="w-full max-w-sm">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-semibold text-gray-800">Hello Again!</h2>
          <p class="text-gray-600">Welcome Back</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="relative">
            <input
              type="email"
              v-model="email"
              placeholder="Email Address"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>

          <div class="relative">
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-md transition-colors duration-200"
          >
            Login
          </button>

          <div class="text-center">
            <a href="#" class="text-sm text-indigo-600 hover:text-indigo-800" @click.prevent="forgotPassword">
              Forgot Password
            </a>
          </div>

          <!-- Skip Login -->
          <div class="mt-4 text-center">
            <button type="button" @click="skipLogin" class="text-sm text-indigo-600 hover:text-indigo-800">
              Skip Login and Go to Homepage
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref('');

    const handleLogin = async () => {
      try {
        loading.value = true;
        error.value = '';
        const response = await axios.post('/api/auth/login', {
          email: email.value,
          password: password.value
        });
        localStorage.setItem('auth_token', response.data.token);
        router.push('/');
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Login failed.';
      } finally {
        loading.value = false;
      }
    };

    const forgotPassword = () => {
      router.push('/forgot-password');
    };

    const readMore = () => {
      router.push('/about');
    };

    const skipLogin = () => {
      router.push('/');
    };

    return {
      email,
      password,
      loading,
      error,
      handleLogin,
      forgotPassword,
      readMore,
      skipLogin
    };
  }
});
</script>
