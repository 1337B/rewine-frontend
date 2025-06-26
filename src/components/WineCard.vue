<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
    <img class="w-full h-48 object-cover" :src="wine.imageUrl" :alt="wine.name" />
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ wine.name }}</h5>
      <p class="mb-1 text-gray-700"><strong>Winery:</strong> {{ wine.winery }}</p>
      <p class="mb-1 text-gray-700"><strong>Variety:</strong> {{ wine.variety }}</p>
      <p class="mb-3 text-gray-700"><strong>Average Score:</strong> {{ wine.score }}</p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-opacity-90">
        View Details
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  wine: Object
})
</script>
