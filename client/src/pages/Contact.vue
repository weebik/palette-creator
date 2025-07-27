<template>
  <section
    class="flex flex-col items-center max-w-4xl mx-auto text-white mt-15"
  >
    <FAQ />
    <EmailForm />
  </section>
</template>

<script setup lang="ts">
import EmailForm from "../components/EmailForm.vue";
import FAQ from "../components/FAQ.vue";
</script>
