<template>
  <div class="flex gap-6 justify-center items-center pt-4">
    <!-- GitHub -->
    <a
      href="https://github.com/weebik"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-rose-400 transition"
      aria-label="GitHub"
    >
      <IconBrandGithubFilled class="w-10 h-10" />
    </a>

    <a
      href="https://twojastrona.pl"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-rose-400 transition"
      aria-label="Website"
    >
      <IconWorld class="w-10 h-10" />
    </a>

    <a
      href="https://instagram.com/_weebik_"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-rose-400 transition"
      aria-label="Instagram"
    >
      <IconBrandInstagramFilled class="w-10 h-10" />
    </a>

    <!-- LinkedIn -->
    <a
      href="https://linkedin.com/in/weebik"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-rose-400 transition shadow-lg"
      aria-label="LinkedIn"
    >
      <IconBrandLinkedinFilled class="w-10 h-10" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { IconBrandGithubFilled } from "@tabler/icons-vue";
import { IconWorld } from "@tabler/icons-vue";
import { IconBrandInstagramFilled } from "@tabler/icons-vue";
import { IconBrandLinkedinFilled } from "@tabler/icons-vue";
</script>
