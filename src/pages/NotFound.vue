<script setup lang="ts">
import { useI18n } from "@/i18n";

const { t } = useI18n();
</script>

<template>
  <div class="not-found">
    <h1>{{ t('notFound.title') }}</h1>
    <p>{{ t('notFound.description') }}</p>
    <a href="/">{{ t('notFound.homeLink') }}</a>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: auto 0;
  text-align: center;
  min-height: 90vh;

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    font-size: 1rem;
    color: $primary-color;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
