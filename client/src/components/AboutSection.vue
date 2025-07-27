<template>
  <section class="flex flex-col items-center text-white bg-slate-900 py-15">
    <div class="flex flex-col items-center text-white max-w-4xl mx-auto">
      <div class="text-5xl font-bold shadow-lg">About this project</div>
      <p class="text-white/80 text-2xl mt-10 text-justify">
        This project is an open-source web application that allows users to
        generate color palettes using natural language descriptions. It is built
        with Vue.js and Tailwind CSS, and it uses the
        <a
          href="https://groq.com"
          rel="noopener"
          target="_blank"
          class="font-bold text-rose-400 hover:text-rose-700/90"
          >Groq</a
        >
        to generate palettes based on user input. You can see the source code
        <a
          href="https://github.com/weebik/palette-creator"
          rel="noopener"
          target="_blank"
          class="font-bold text-rose-400 hover:text-rose-700/90"
          >here</a
        >.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts" />
