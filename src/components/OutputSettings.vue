<script setup lang="ts">
import { Cog } from "@lucide/vue";
import { computed } from "vue";

type ToneMode = "marks" | "numbers";

const props = withDefaults(
  defineProps<{
    modelValue?: ToneMode;
  }>(),
  {
    modelValue: "marks",
  }
);

const emit = defineEmits<{
  (event: "update:modelValue", value: ToneMode): void;
}>();

const toneMode = computed<ToneMode>({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="settings">
    <div class="title">
      <Cog :size="14" />
      <h5>Configurações da Saída de Texto</h5>
    </div>

    <div class="options">
      <label>
        <input
          type="radio"
          name="toneMode"
          value="marks"
          v-model="toneMode"
        />
        Acentos (Pinyin Tradicional)
      </label>

      <label>
        <input
          type="radio"
          name="toneMode"
          value="numbers"
          v-model="toneMode"
        />
        Números (Pinyin com números de tom)
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.settings {
  background-color: #f3f4f6;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-top: 1rem;

  .title {
    display: flex;
    justify-items: center;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.25rem;

    h5 {
      color: #434750;
      font-size: small;
      margin: 0;
    }
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      transition: 250ms;
      cursor: pointer;

      color: $neutral-color;
      background-color: #fcfdfd;

      input[type="radio"] {
        border: 1px solid #d0d2d2;
      }
    }
  }
}
</style>
