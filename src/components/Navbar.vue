<template>
  <nav class="bg-primary text-text-light border-text-light">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Rewine</span>
      </router-link>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-text-light hover:text-primary transition" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm14 4H3a1 1 0 000 2h14a1 1 0 000-2zm0 6H3a1 1 0 000 2h14a1 1 0 000-2z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 md:p-0 mt-4 border border-text-light rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <router-link to="/" class="block py-2 px-3 hover:underline transition">Home</router-link>
          </li>
          <li>
            <router-link to="/wines" class="block py-2 px-3 hover:text-background transition">Wines</router-link>
          </li>
          <li>
            <router-link to="/login" class="block py-2 px-3 hover:text-background transition">Login</router-link>
          </li>
          <li>
            <router-link to="/register" class="block py-2 px-3 hover:text-background transition">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
