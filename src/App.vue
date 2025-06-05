<!-- src/App.vue -->

<template>
  <div class="min-h-screen flex flex-col">

    <!-- Navbar -->
    <nav class="bg-gray-800 text-white p-4 flex justify-between">
      <div class="text-xl font-bold">Rewine</div>
      <div class="space-x-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/wines" class="hover:underline">Wines</router-link>
        <router-link to="/login" class="hover:underline">Login</router-link>
        <router-link to="/register" class="hover:underline">Register</router-link>
        <router-link to="/profile/settings" class="hover:underline">Profile</router-link>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200 text-center p-4">
      © 2025 Rewine. All rights reserved.
    </footer>

  </div>
</template>

<script setup>
// No script por ahora
</script>

<style>
/* Podés agregar estilos globales acá si querés */
</style>
