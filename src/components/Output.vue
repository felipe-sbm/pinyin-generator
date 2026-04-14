<script setup lang="ts">
import { Check, Copy } from "@lucide/vue";
import { ref } from "vue";
import { useI18n } from "@/i18n";

const { t, tString } = useI18n();
const props = withDefaults(
  defineProps<{
    text?: string;
    interactive?: boolean;
  }>(),
  {
    text: "",
    interactive: true,
  },
);

const copied = ref(false);

async function copyOutput() {
  if (!props.interactive || !props.text?.trim()) {
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
  <div class="output" :class="{ 'is-placeholder': !props.interactive }">
    <div class="title">
      <label for="output">{{ t('generate.outputLabel') }}</label>
      <button
        type="button"
        @click="copyOutput"
        :disabled="!props.interactive"
        :title="
          !props.interactive
            ? tString('generate.output.copyInactive')
            : copied
              ? tString('generate.output.copiedConfirmation')
              : tString('generate.output.copyButtonAlt')
        "
        :aria-label="
          !props.interactive
            ? tString('generate.output.copyError')
            : copied
              ? tString('generate.output.copiedConfirmation')
              : tString('generate.output.copyButtonAlt')
        "
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(130deg, #0e172a 50%, #1b3262 100%);
  border-radius: 1rem;
  padding: 1.25rem;
  padding-top: 1rem;
  min-height: 11.5rem;
  font-family: Arial, Helvetica, sans-serif;
  color: white;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      font-weight: bold;
      color: #64748b;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
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

      &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
    }
  }

  .text {
    margin-top: 0.5rem;
    flex: 1;
    overflow-y: auto;

    p {
      margin: 0;
      color: white;
      white-space: pre-wrap;
      word-break: break-word;
      line-height: 1.5;
    }
  }

  &.is-placeholder {
    .text p {
      color: rgba(255, 255, 255, 0.62);
      user-select: none;
      -webkit-user-select: none;
    }
  }
}

@media (max-width: 640px) {
  .output {
    min-height: 10.5rem;
    padding: 0.875rem 1rem;
  }
}
</style>
