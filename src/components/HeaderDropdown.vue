<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "@lucide/vue";
import { useI18n } from "@/i18n";

const { t } = useI18n();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="menu-button">
    <button @click="toggleMenu" title="Abrir Menu">
      <Menu :size="24" />
    </button>

    <div class="dropdown-menu" :class="{ open: isMenuOpen }">
      <RouterLink to="/" @click="closeMenu" exact-active-class="active">{{
        t("nav.home")
      }}</RouterLink>
      <RouterLink
        to="/generate"
        @click="closeMenu"
        exact-active-class="active"
        >{{ t("nav.generate") }}</RouterLink
      >
      <RouterLink to="/about" @click="closeMenu" exact-active-class="active">{{
        t("nav.about")
      }}</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.menu-button {
  display: block;
  position: relative;

  button {
    cursor: pointer;
    background: none;
    border: none;
    color: $neutral-color;
    padding: 0.35rem 0.4rem 0.15rem 0.4rem;
    border-radius: 0.75rem;
    transition: 250ms;

    &:hover {
      background-color: $primary-color;
      color: white;
    }
  }

  .version {
    display: none;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.25rem;
    background-color: rgba(254, 254, 254, 0.22);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 1rem;
    box-shadow:
      0 12px 32px rgba(13, 25, 55, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.55);
    display: flex;
    flex-direction: column;
    min-width: 200px;
    overflow: hidden;
    isolation: isolate;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition:
      opacity 250ms ease,
      transform 250ms ease;
    z-index: 100;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.55) 0%,
        rgba(255, 255, 255, 0.18) 100%
      );
      z-index: 0;
      pointer-events: none;
    }

    &.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    a {
      position: relative;
      z-index: 1;
      color: $neutral-color;
      text-decoration: none;
      padding: 0.75rem 1rem;
      transition: 250ms;

      &:hover {
        background-color: rgba($primary-color, 0.1);
        color: $secondary-color;
      }

      &.active {
        color: $primary-color;
        background-color: rgba($primary-color, 0.05);
      }
    }

    select {
      background-image: linear-gradient(90deg, #287af6 0%, #1d62c4 100%);
      color: white;
      border: none;
      padding: 0.75rem 1rem;
      border-radius: 0;
      cursor: pointer;
      font-weight: 550;
      transition: 500ms ease;
      margin: 0.5rem;
      border-radius: 0.5rem;

      &:focus {
        outline: dotted 3px $tertiary-color;
        outline-offset: 1px;
      }
    }
  }
}
</style>
