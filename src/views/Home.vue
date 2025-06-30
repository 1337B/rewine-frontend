<template>
  <section class="bg-background text-text-dark min-h-screen flex items-center justify-center">
    <div class="max-w-4xl text-center px-4 py-16 space-y-8">
      <h1 class="text-5xl font-extrabold tracking-tight">Bienvenido a Rewine 🍷</h1>
      <p class="text-xl text-text-dark">
        Descubrí, calificá y compartí tu pasión por el vino. Una comunidad construida por amantes del buen beber.
      </p>
      <router-link
        to="/wines"
        class="inline-block white text-text-light px-6 py-3 rounded-lg text-lg hover:bg-opacity-90 transition"
      >
        Explorar vinos
      </router-link>
      <div class="mt-10">
        <img
          src="https://www.wineenthusiast.com/wp-content/uploads/2023/05/HERO_A_Summer_in_Somoma_GettyImages-132369077_1920x1280.jpg"
          alt="Vino"
          class="rounded-lg shadow mx-auto w-full max-w-md"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No se necesita lógica por ahora
</script>
