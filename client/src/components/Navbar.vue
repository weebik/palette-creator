<template>
  <nav
    class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4 flex items-center justify-around border-b-6 border-gray-800 shadow-lg"
  >
    <RouterLink to="/"
      ><img class="w-40" src="../assets/logo.png" />
    </RouterLink>
    <div class="flex font-bold text-xl text-gray-800 gap-10">
      <RouterLink to="/" class="hover:underline">Home</RouterLink>
      <RouterLink to="/generate" class="hover:underline">Generate</RouterLink>
      <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts" />
