<template>
  <section class="flex flex-col justify-center items-center py-12">
    <div class="w-full max-w-6xl p-6 space-y-6">
      <h1 class="text-3xl font-bold mb-6">Wines</h1>

      <!-- Campo de búsqueda -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search wines..."
        class="w-full mb-6 p-2 border rounded"
      />

      <!-- Listado de vinos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <WineCard v-for="wine in filteredWines" :key="wine.id" :wine="wine" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import WineCard from '../components/WineCard.vue'

// Simulación de datos, reemplazable por API más adelante
const wines = ref([
  {
    id: 1,
    name: 'Malbec Gran Reserva',
    winery: 'Bodega Trapiche',
    variety: 'Malbec',
    score: 4.5,
    imageUrl: 'https://www.vitvin.com.ar/wp-content/uploads/2024/08/creacion-malbec_1.jpeg'
  },
  {
    id: 2,
    name: 'Cabernet Sauvignon Premium',
    winery: 'Bodega Norton',
    variety: 'Cabernet Sauvignon',
    score: 4.3,
    imageUrl: 'https://borrachines.com.ar/wp-content/uploads/2022/04/Reservado-Vino-Cabernet-Sauvignon-750ml-01-Mercado-e1724414351990.png'
  },
  {
    id: 3,
    name: 'Pinot Noir Select',
    winery: 'Bodega Catena Zapata',
    variety: 'Pinot Noir',
    score: 4.7,
    imageUrl: 'https://www.norton.com.ar/wp-content/uploads/2023/09/Altura-Pinot-Noir.jpg'
  }
])

const searchQuery = ref('')

const filteredWines = computed(() => {
  if (!searchQuery.value.trim()) return wines.value
  return wines.value.filter(wine =>
    wine.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    wine.winery.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    wine.variety.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>
