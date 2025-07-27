<template>
  <div class="my-10 text-white">
    <div v-if="colors.primary.length" class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Primary Colors</h3>
      <div class="flex flex-wrap gap-4">
        <ColorBlock
          v-for="color in colors.primary"
          :key="color"
          :color="color"
        />
      </div>
    </div>

    <div v-if="colors.accent.length">
      <h3 class="text-2xl font-semibold mb-2">Accent Colors</h3>
      <div class="flex flex-wrap gap-4">
        <ColorBlock
          v-for="color in colors.accent"
          :key="color"
          :color="color"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorBlock from "./ColorBlock.vue";

defineProps<{
  colors: { primary: string[]; accent: string[] };
}>();
</script>
