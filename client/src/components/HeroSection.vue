<template>
  <section
    class="relative min-h-[60vh] w-full flex flex-col items-center justify-center text-white z-0"
  >
    <div
      class="absolute inset-0 z-0 bg-gradient-to-br from-rose-400 via-indigo-500 to-violet-700 animate-background"
    ></div>
    <div class="relative z-10 w-full">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts" />
<style scoped>
@keyframes background {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animate-background {
  background-size: 400% 400%;
  animation: background 10s ease infinite;
}
</style>
