<script setup lang="ts">
import { useI18n } from "@/i18n";

const { t } = useI18n();
</script>

<template>
  <section class="write-page">
    <h1>{{ t("write.title") }}</h1>
    <p>{{ t("write.description") }}</p>
  </section>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.write-page {
  padding: 1rem 0;
}
</style>
