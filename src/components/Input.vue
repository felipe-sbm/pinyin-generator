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
  position: relative;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fcfdfd;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba($primary-color, 0.15);

  padding: 1rem 2rem 2rem 2rem;
  height: 11rem;

  &:focus {
    outline: none;
    border-color: rgba($primary-color, 10%);
    box-shadow: 0 0 5px rgba($primary-color, 0.5);
  }

  label {
    font-weight: bold;
    color: $primary-color;
    font-size: small;
  }

  textarea {
    position: absolute;
    padding: 3rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 1rem;
    transition: 500ms;

    top: 0;
    left: 0;
    width: 32.5rem;
    height: 8rem;
    background-color: transparent;

    &:focus {
      outline: 1px dotted $primary-color;
      border: none;
    }
  }
}
</style>
