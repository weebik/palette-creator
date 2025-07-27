<template>
  <section class="flex flex-col items-center text-white bg-slate-800 my-15">
    <div class="flex flex-col items-center text-white max-w-4xl mx-auto">
      <div class="text-5xl font-bold shadow-lg">About the creator</div>
      <p class="text-2xl text-white/80 mt-10 text-justify">
        Hi! My name is <span class="font-bold">Krystian</span>, and I’m
        currently studying computer science at the University of Wrocław. I’m
        passionate about building modern web applications and experimenting with
        design. This project was born from a simple idea - making it easy to
        generate consistent color palettes. Whether you're a designer,
        developer, or just exploring ideas, you can instantly generate color
        sets tailored to your needs. If you'd like to learn more about me or
        explore my other projects, feel free to visit my social media or
        portfolio:
      </p>
      <div class="scale-150 my-5">
        <Socials />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Socials from "./Socials.vue";
</script>
