<template>
  <div
    class="w-full max-w-5xl mx-auto p-6 bg-slate-800/60 rounded-3xl text-white shadow-xl"
  >
    <div class="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div class="flex-1">
        <label for="prompt" class="block text-xl font-semibold mb-2">
          Palette description
        </label>
        <textarea
          id="prompt"
          v-model="prompt"
          placeholder="Describe your palette (e.g. modern dark red)"
          class="h-44 w-full p-4 rounded-2xl bg-slate-800 text-white shadow resize-none focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
      </div>

      <div class="flex flex-col gap-4 w-full max-w-[180px]">
        <div>
          <label class="block text-sm font-medium mb-1">Primary Colors</label>
          <select
            v-model="primaryCount"
            class="appearance-none w-full px-3 py-2 rounded-xl bg-slate-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option disabled selected value="">Choose count</option>
            <option v-for="n in [2, 3, 4, 5]" :key="'p' + n" :value="n">
              {{ n }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Accent Colors</label>
          <select
            v-model="accentCount"
            class="appearance-none w-full px-3 py-2 rounded-xl bg-slate-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option disabled selected value="">Choose count</option>
            <option v-for="n in [0, 1, 2, 3, 4, 5]" :key="'a' + n" :value="n">
              {{ n }}
            </option>
          </select>
        </div>
        <button
          @click="onGenerate"
          class="flex items-center justify-center gap-2 px-4 py-3 bg-rose-500 hover:bg-rose-700 rounded-xl shadow transition text-white mt-1"
        >
          <IconPlayerPlayFilled />
          <span>Generate</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconPlayerPlayFilled } from "@tabler/icons-vue";

const emit = defineEmits(["generate"]);
const prompt = defineModel<string>("prompt");
const primaryCount = defineModel<number>("primaryCount");
const accentCount = defineModel<number>("accentCount");

function onGenerate() {
  emit("generate");
}
</script>
