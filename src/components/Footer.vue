<script setup lang="ts">
import { FolderRoot, BadgeAlert, Smile } from "@lucide/vue";
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
      <a href="https://github.com/felipe-sbm/inkstone/issues">
        <BadgeAlert class="icon" />Report Issue
      </a>
      <a href="https://opensource.com/resources/what-open-source"> <Smile class="icon" />What is Open Source? </a>
    </nav>
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

  nav a:not(:last-child)::after {
    content: "•";
    margin: 0 1rem;
    color: $neutral-color;
  }
}
</style>
