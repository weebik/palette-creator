<template>
  <section class="flex flex-col items-center text-white bg-slate-800 my-15">
    <div class="flex flex-col items-center text-white max-w-4xl mx-auto">
      <h2 class="text-5xl font-bold shadow-lg">How does it work?</h2>
      <div class="flex flex-col gap-10 relative border-white mt-15">
        <div v-for="(step, index) in steps" :key="index" class="relative pl-6">
          <div
            class="absolute -left-14 top-0 w-15 h-15 rounded-3xl bg-white flex items-center justify-center text-black font-bold text-2xl"
          >
            {{ index + 1 }}
          </div>
          <h3 class="text-3xl font-semibold mb-3">{{ step.title }}</h3>
          <p class="text-white/80 text-xl">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: "Describe your palette",
    description:
      'Type in the text box how you want your palette to look – you can use words like "modern", "vintage", "blue tone", "warm", "cyberpunk", etc.',
  },
  {
    title: "Select the number of colors",
    description:
      "Specify how many primary and accent colors you want to generate. You can also skip accents.",
  },
  {
    title: 'Click "Generate"',
    description:
      "Our API will connect to the Groq (LLaMA 3) language model, which will generate a color scheme that matches your description.",
  },
  {
    title: "See the results",
    description:
      "The palette will appear as color blocks with HEX and RGBA codes. If the palette doesn't match your expectations, you can regenerate it with the same description or try a different one.",
  },
  {
    title: "Use the palette",
    description:
      "You can copy the HEX or RGBA codes to your clipboard and use them in your projects. You can also download the palette as a JSON file.",
  },
];
</script>
