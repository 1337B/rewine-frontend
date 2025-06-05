<!-- src/App.vue -->

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
