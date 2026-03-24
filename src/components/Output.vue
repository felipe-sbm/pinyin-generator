<script setup lang="ts">
import { Check, Copy } from "@lucide/vue";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: "",
  },
);

const copied = ref(false);

async function copyOutput() {
  if (!props.text?.trim()) {
    return;
  }

  try {
    await navigator.clipboard.writeText(props.text);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1200);
  } catch {
    copied.value = false;
  }
}
</script>

<template>
  <div class="output">
    <div class="title">
      <label for="output">文本输出</label>
      <button
        type="button"
        @click="copyOutput"
        :title="copied ? 'Copiado!' : 'Copiar texto'"
        :aria-label="copied ? 'Texto copiado' : 'Copiar texto'"
      >
        <Check v-if="copied" :size="18" />
        <Copy v-else :size="18" />
      </button>
    </div>

    <div class="text">
      <p>{{ props.text }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.output {
  justify-content: start;
  background-image: linear-gradient(130deg, #0e172a 50%, #1b3262 100%);
  border-radius: 1rem;
  padding: 1rem 2rem;
  height: 12rem;
  font-family: Arial, Helvetica, sans-serif;
  color: white;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      font-weight: bold;
      color: #64748B;
      font-size: small;
    }

    button {
      color: white;
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        color: $tertiary-color;
      }
    }
  }

  .text p {
    margin-top: 0.5rem;
    color: white;
  }
}
</style>
