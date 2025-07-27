<template>
  <div
    class="w-32 h-32 rounded-4xl shadow-lg relative group cursor-pointer"
    :style="{ backgroundColor: color }"
  >
    <div
      class="absolute top-1 right-1 z-10 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-full px-2 py-1"
    >
      <button
        v-for="f in formats"
        :key="f"
        @click.stop="format = f"
        :class="[
          'text-xs px-2 py-0.5 rounded-2xl text-white hover:bg-black/70 transition',
          format === f ? 'ring-2 ring-white' : '',
        ]"
      >
        {{ f }}
      </button>
    </div>

    <div
      class="rounded-4xl absolute inset-0 flex items-center justify-center text-sm text-white text-center bg-black/30 opacity-0 group-hover:opacity-100 transition px-2"
      @click="copyToClipboard"
      title="Click to copy"
    >
      {{ formattedColor }}
    </div>

    <transition name="fade">
      <div
        v-if="showAlert"
        class="fixed bottom-5 right-5 bg-black/80 text-white px-4 py-2 rounded shadow-lg text-sm select-none z-50 cursor-default"
      >
        Color copied to clipboard!
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{ color: string }>();
const format = ref<"hex" | "rgb" | "hsl">("hex");
const showAlert = ref(false);

const formats = ["hex", "rgb", "hsl"] as const;

function hexToRgb(hex: string) {
  const parsedHex = hex.replace(/^#/, "");
  const bigint = parseInt(parsedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToHsl(hex: string) {
  const parsedHex = hex.replace(/^#/, "");
  const bigint = parseInt(parsedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
    l * 100
  )}%)`;
}

const formattedColor = computed(() => {
  if (format.value === "rgb") return hexToRgb(props.color);
  if (format.value === "hsl") return hexToHsl(props.color);
  return props.color;
});

function copyToClipboard() {
  navigator.clipboard.writeText(formattedColor.value).then(() => {
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
  });
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
