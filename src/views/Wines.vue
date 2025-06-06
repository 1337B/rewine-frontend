<!-- src/views/Wines.vue -->

<template>
  <section class="flex flex-col justify-center items-center py-12">
    <div class="w-full max-w-4xl p-6 space-y-6">
      <h1 class="text-3xl font-bold mb-6">Wines</h1>
      <div v-for="wine in wines" :key="wine.id" class="border p-4 rounded mb-4 shadow">
        <h2 class="text-xl font-semibold">{{ wine.name }}</h2>
        <p><strong>Winery:</strong> {{ wine.winery }}</p>
        <p><strong>Variety:</strong> {{ wine.variety }}</p>
        <p><strong>Average Score:</strong> {{ wine.score }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Simulated wine data → después se va a reemplazar por llamada a API
const wines = ref([
  {
    id: 1,
    name: 'Malbec Gran Reserva',
    winery: 'Bodega Trapiche',
    variety: 'Malbec',
    score: 4.5
  },
  {
    id: 2,
    name: 'Cabernet Sauvignon Premium',
    winery: 'Bodega Norton',
    variety: 'Cabernet Sauvignon',
    score: 4.3
  },
  {
    id: 3,
    name: 'Pinot Noir Select',
    winery: 'Bodega Catena Zapata',
    variety: 'Pinot Noir',
    score: 4.7
  }
])
</script>
