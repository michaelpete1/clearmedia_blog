<template>
  <div class="post-container max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Create New Post</h1>
    
    <div v-if="notification.show" :class="`notification ${notification.type} fade-in-out`">
      <strong class="font-semibold">{{ notification.title }}</strong>
      <p>{{ notification.message }}</p>
      <button class="close-btn absolute top-2 right-2 text-xl" @click="closeNotification">×</button>
    </div>
    
    <form @submit.prevent="submitPost">
      <div class="form-group mb-5">
        <label for="title" class="block font-medium mb-2">Title</label>
        <input type="text" id="title" v-model="title" required placeholder="Enter post title" class="w-full p-3 border border-gray-300 rounded-lg" />
      </div>
      
      <div class="form-group mb-5">
        <label for="content" class="block font-medium mb-2">Content</label>
        <textarea id="content" v-model="content" required placeholder="Write your post content" rows="6" class="w-full p-3 border border-gray-300 rounded-lg"></textarea>
      </div>
      
      <button type="submit" :disabled="isLoading" class="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-400">
        {{ isLoading ? 'Submitting...' : 'Submit Post' }}
      </button>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const title = ref('');
    const content = ref('');
    const isLoading = ref(false);
    
    const notification = reactive({
      show: false,
      title: '',
      message: '',
      type: 'info',
      timeout: null
    });

    const showNotification = (title, message, type = 'info') => {
      if (notification.timeout) clearTimeout(notification.timeout);
      notification.show = true;
      notification.title = title;
      notification.message = message;
      notification.type = type;
      notification.timeout = setTimeout(() => notification.show = false, 5000);
    };

    const closeNotification = () => {
      notification.show = false;
      if (notification.timeout) clearTimeout(notification.timeout);
    };

    const submitPost = async () => {
      isLoading.value = true;
      try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', { title: title.value, body: content.value });
        title.value = '';
        content.value = '';
        showNotification('Success!', 'Post created successfully!', 'success');
      } catch (err) {
        console.error(err);
        showNotification('Error!', 'Error creating post. Please try again.', 'error');
      } finally {
        isLoading.value = false;
      }
    };

    return { title, content, isLoading, notification, submitPost, closeNotification };
  }
};
</script>

<style scoped>
/* Tailwind CSS utilities */
.notification {
  @apply fixed top-5 right-5 p-4 rounded-lg shadow-lg min-w-[300px] z-50;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.notification.success {
  @apply bg-green-100 text-green-700 border-l-4 border-green-700;
}

.notification.error {
  @apply bg-red-100 text-red-700 border-l-4 border-red-700;
}

.notification.info {
  @apply bg-blue-100 text-blue-700 border-l-4 border-blue-700;
}

.fade-in-out {
  animation: fadeInOut 5s forwards;
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
