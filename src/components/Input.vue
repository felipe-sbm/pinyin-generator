<script lang="ts">
export default {
  props: {
    modelValue: String,
    id: String,
    label: String,
    placeholder: String,
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLTextAreaElement | null;
      this.$emit("update:modelValue", target?.value ?? "");
    },
  },
};
</script>

<template>
  <div class="text-input">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.text-input {
  display: flex;
  flex-direction: column;
  background-color: #fcfdfd;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba($primary-color, 0.15);
  padding: 1.25rem;
  padding-top: 1rem;
  min-height: 11.5rem;

  label {
    font-weight: 700;
    color: $primary-color;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  textarea {
    width: 100%;
    min-height: 8rem;
    box-sizing: border-box;
    padding: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5;
    border: none;
    background-color: transparent;
    resize: vertical;
    font-family: inherit;
    color: #1f2937;
    transition: 200ms;
    overflow: auto;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  &:focus-within {
    box-shadow:
      0 0 0 2px rgba($primary-color, 0.25),
      0 10px 15px rgba($primary-color, 0.15);
  }
}

@media (max-width: 640px) {
  .text-input {
    padding: 0.875rem 1rem 1rem 1rem;
    min-height: 10.5rem;

    textarea {
      min-height: 7rem;
      font-size: 0.95rem;
    }
  }
}
</style>
