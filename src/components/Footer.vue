<script setup lang="ts">
import { FolderRoot, BadgeAlert, Smile } from "@lucide/vue";
import NotByAI from "@/assets/CN/chinese-light.png";
</script>

<template>
  <footer>
    <div>
      <p>
        &copy; 2026 <a href="https://fsbm.otsuki.dev">Felipe SBM</a>. MIT
        licensed, free use.
      </p>
    </div>

    <nav>
      <a href="https://github.com/felipe-sbm/inkstone">
        <FolderRoot class="icon" />Code Source
      </a>
      <span>•</span>
      <a href="https://github.com/felipe-sbm/inkstone/issues">
        <BadgeAlert class="icon" />Report Issue
      </a>
      <span>•</span>
      <a href="https://opensource.com/resources/what-open-source">
        <Smile class="icon" />What is Open Source?
      </a>
    </nav>

    <div>
      <a href="https://notbyai.fyi/" target="_blank" rel="noopener noreferrer">
        <img :src="NotByAI" alt="Not by AI" />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
  color: $neutral-color;
  font-size: small;

  a {
    color: $neutral-color;
    text-decoration: none;
    transition: 500ms;
    text-underline-offset: 3px;

    &:hover {
      color: $secondary-color;
      text-decoration: underline;
    }
  }
  nav {
    display: flex;
    gap: 1rem;
  }

  nav .icon {
    margin-right: 0.25rem;
    height: 1rem;
  }

  nav a {
    display: flex;
    justify-items: center;
    align-items: center;
  }

  nav span {
    color: $neutral-color;
    pointer-events: none;
    user-select: none;
  }

  img {
    height: 2rem;
    opacity: 0.75;
    transition: 500ms;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
