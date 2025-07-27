<template>
  <div class="w-full mt-10">
    <div class="text-3xl font-bold">Send a Message</div>
    <form
      @submit.prevent="sendEmail"
      class="space-y-4 bg-slate-900 rounded-3xl shadow mt-10 mb-15 p-6"
    >
      <div>
        <label for="name" class="block mb-1">Name</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          required
          class="w-full rounded bg-slate-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
      </div>
      <div>
        <label for="email" class="block mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          required
          class="w-full rounded bg-slate-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
      </div>
      <div>
        <label for="message" class="block mb-1">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          required
          rows="4"
          class="w-full rounded bg-slate-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
      </div>
      <button
        type="submit"
        class="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-2xl shadow transition"
      >
        Send
      </button>
      <p v-if="successMessage" class="text-green-400">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-400">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const successMessage = ref("");
const errorMessage = ref("");

function sendEmail() {
  successMessage.value = "";
  errorMessage.value = "";

  emailjs
    .send(
      "service_oxo4smq",
      "template_9s36q9a",
      {
        name: form.value.name,
        reply_to: form.value.email,
        message: form.value.message,
      },
      "eks6HjGnDAFoQOtEl"
    )
    .then(() => {
      successMessage.value = "Message sent successfully!";
      form.value = { name: "", email: "", message: "" };
    })
    .catch((err) => {
      errorMessage.value = "Something went wrong. Try again later.";
      console.error(err);
    });
}
</script>
