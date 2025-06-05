<template>
  <section class="flex flex-col justify-center items-center py-12 bg-primary rounded-xl ">
    <div class="w-full max-w-md p-6 space-y-6 rounded-lg shadow">
      <h1 class="text-2xl font-bold text-center text-white">Register</h1>
      <form class="space-y-4" @submit.prevent="handleRegister">
        <div>
          <label class="block mb-2 text-sm font-medium">Email</label>
          <input type="email" v-model="email" required class="border p-2 w-full rounded">
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium">Username</label>
          <input type="text" v-model="username" required class="border p-2 w-full rounded">
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium">Password</label>
          <input type="password" v-model="password" required class="border p-2 w-full rounded">
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium">Confirm Password</label>
          <input type="password" v-model="confirmPassword" required class="border p-2 w-full rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
      <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
      <div v-if="registerResult" class="text-green-600">User {{ registerResult.user.username }} registered successfully!</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { register } from '../services/auth.js'

const email = ref('')
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const registerResult = ref(null)
const errorMessage = ref('')

const handleRegister = async () => {
  errorMessage.value = ''
  registerResult.value = null

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match'
    return
  }

  try {
    const result = await register(email.value, username.value, password.value)
    console.log('Register result:', result)
    registerResult.value = result
  } catch (error) {
    console.error('Register failed:', error)
    errorMessage.value = 'An error occurred during registration'
  }
}
</script>
