<template>
  <section
    class="flex flex-col items-center max-w-4xl mx-auto rounded-xl text-white text-center my-15"
  >
    <div class="text-4xl font-bold shadow-lg">
      Are you happy with the outcome?
    </div>
    <p class="text-white/80 text-2xl text-justify mt-10">
      Your experience matters to me, and I want to make this palette generator
      the best it can be. Whether you’ve found a bug, have ideas for new
      features, or just want to share your thoughts, I’m all ears! Every piece
      of feedback helps me improve and deliver a better, smoother, and more
      enjoyable tool for you. Don’t hesitate to reach out - your input makes a
      difference!
    </p>

    <RouterLink to="/contact">
      <button
        class="bg-rose-500 text-xl px-10 py-5 rounded-4xl font-semibold shadow-lg hover:bg-rose-700 transition mt-5"
      >
        Send Feedback
      </button>
    </RouterLink>
  </section>
</template>

<script setup lang="ts"></script>
