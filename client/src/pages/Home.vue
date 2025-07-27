<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import AuthorSection from "../components/AuthorSection.vue";
import Stepper from "../components/Stepper.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeroSection>
      <div class="z-10 text-center text-shadow-lg text-white max-w-4xl mx-auto">
        <div class="text-4xl md:text-6xl font-bold mb-6">
          Generate beautiful color palettes with
          <span class="font-bold text-rose-400">AI</span>
        </div>
        <div class="text-xl md:text-2xl mb-8">Powered by Groq LLaMA-3.3</div>
        <RouterLink to="/generate">
          <button
            class="bg-white text-slate-800 text-2xl px-10 py-5 rounded-4xl font-semibold shadow-lg hover:bg-gray-300 transition"
          >
            Try it out!
          </button>
        </RouterLink>
      </div>
    </HeroSection>
    <Stepper />
    <AboutSection />
    <AuthorSection />
  </div>
</template>
