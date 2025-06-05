<template>
  <section class="flex flex-col justify-center items-center py-12">
    <div class="w-full max-w-md bg-primary rounded-lg shadow p-6 space-y-6">
      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign in to Rewine</h1>
      <form class="space-y-4" @submit.prevent="handleLogin">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" v-model="email" required class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com">
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" v-model="password" required class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="••••••••">
        </div>
        <button type="submit" class="w-full text-primary bg-background hover:text-text-light hover:bg-light-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Sign in
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '../services/auth.js'

const email = ref('')
const password = ref('')
const loginResult = ref(null)

const handleLogin = async () => {
  console.log('Login form submitted:', email.value, password.value)
  const result = await login(email.value, password.value)
  loginResult.value = result
}
</script>
