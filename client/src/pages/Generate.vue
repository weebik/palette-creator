<template>
  <HeroSection>
    <div
      class="z-10 flex flex-col text-center mx-10 items-center justify-center space-y-6"
    >
      <GenerateTitle />
      <GenerateForm
        v-model:prompt="prompt"
        v-model:primaryCount="primaryCount"
        v-model:accentCount="accentCount"
        @generate="generatePalette"
      />

      <ColorGrid v-if="palette" :colors="palette" />
      <div v-if="loading" class="text-center text-sm italic mt-4">
        Generating...
      </div>
    </div>
  </HeroSection>
  <FeedbackSection />
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeroSection from "../components/HeroSection.vue";
import GenerateForm from "../components/GenerateForm.vue";
import GenerateTitle from "../components/GenerateTitle.vue";
import ColorGrid from "../components/ColorGrid.vue";
import FeedbackSection from "../components/FeedbackSection.vue";

const prompt = ref("");
const primaryCount = ref<number | undefined>(undefined);
const accentCount = ref<number | undefined>(undefined);
const loading = ref(false);
const palette = ref<{ primary: string[]; accent: string[] } | null>(null);

async function generatePalette() {
  if (
    !prompt.value ||
    primaryCount.value === null ||
    accentCount.value === null
  )
    return;

  loading.value = true;
  palette.value = null;

  try {
    const res = await fetch(import.meta.env.API_URL + "/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: prompt.value,
        primaryCount: primaryCount.value,
        accentCount: accentCount.value,
      }),
    });

    if (!res.ok) throw new Error("Failed to generate");
    const data = await res.json();
    palette.value = data;
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
}
</script>
