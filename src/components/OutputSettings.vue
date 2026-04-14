<script setup lang="ts">
import { Cog } from "@lucide/vue";
import { computed } from "vue";
import { useI18n } from "@/i18n";

type ToneMode = "marks" | "numbers";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    modelValue?: ToneMode;
    settingsTitle?: string;
    classicPinyin?: string;
    numberedPinyin?: string;
  }>(),
  {
    modelValue: "marks",
    settingsTitle: "Configurações da Saída de Texto",
  },
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
      <h5>{{ t('generate.output.settings.title') }}</h5>
    </div>

    <div class="options">
      <label>
        <input type="radio" name="toneMode" value="marks" v-model="toneMode" />
        {{ t('generate.output.settings.classicPinyin') }}
      </label>

      <label>
        <input
          type="radio"
          name="toneMode"
          value="numbers"
          v-model="toneMode"
        />
        {{ t('generate.output.settings.numberedPinyin') }}
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.settings {
  background-color: #f3f4f6;
  border-radius: 1rem;
  padding: 1rem 1.25rem;
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
      align-items: flex-start;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      transition: 250ms;
      cursor: pointer;

      color: $neutral-color;
      background-color: #fcfdfd;
      line-height: 1.4;

      input[type="radio"] {
        border: 1px solid #d0d2d2;
        margin-top: 0.15rem;
        flex-shrink: 0;
      }
    }
  }
}

@media (max-width: 640px) {
  .settings {
    padding: 0.875rem 1rem;
  }
}
</style>
