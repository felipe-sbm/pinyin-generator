<script setup lang="ts">
import { useI18n } from "@/i18n";
import { inkstone } from "@/version";
import YangIcon from "../../public/yang_icon.webp";
import HeaderDropdown from "@/components/HeaderDropdown.vue";

const { t } = useI18n();
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/" exact-active-class="active">
        <img :src="YangIcon" alt="Yang Icon" />
        Inkstone <span>(砚台)</span>
      </RouterLink>
    </div>

    <nav>
      <RouterLink to="/" exact-active-class="active">{{
        t("nav.home")
      }}</RouterLink>
      <RouterLink to="/generate" exact-active-class="active">{{
        t("nav.generate")
      }}</RouterLink>
      <!--       
        <RouterLink to="/write" exact-active-class="active">{{ t("nav.write") }}</RouterLink> # Como ainda não temos pronto, vou deixar desligado por enquanto
      -->
      <RouterLink to="/about" exact-active-class="active">{{
        t("nav.about")
      }}</RouterLink>
    </nav>

    <div class="version">
      <h6>
        Alfa <span>v{{ inkstone }}</span>
      </h6>
    </div>

    <HeaderDropdown class="menu-button" />
  </header>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

header {
  position: sticky;
  top: 0;
  background-color: #fefefea9;
  backdrop-filter: blur(7px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000 !important;

  .logo a {
    margin: 0;
    font-weight: bold;
    font-size: 1.25rem;
    color: $primary-color;
    text-decoration: none;
    display: flex;
    align-items: end;

    span {
      font-weight: normal;
      font-size: 0.75rem;
      color: $secondary-color;
      margin-bottom: 3.5px;
      margin-left: 2px;
    }

    img {
      width: 32px;
      height: 32px;
      margin-right: 0.25rem;
    }
  }

  nav {
    display: flex;
    gap: 1rem;

    a {
      color: $neutral-color;
      text-decoration: none;
      text-underline-offset: 3px;
      transition: 250ms;

      &:hover {
        color: $secondary-color;
        text-decoration: dotted;
      }

      &.active {
        color: $primary-color;
        text-decoration: underline;
      }
    }
  }

  .version {
    background-image: linear-gradient(90deg, #287af6 0%, #1d62c4 100%);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    font-weight: 550;
    transition: 500ms ease;

    h6 {
      margin: 0;
      font-size: 0.75rem;

      span {
        font-weight: normal;
      }
    }

    &:focus {
      outline: dotted 3px $tertiary-color;
      outline-offset: 1px;
    }
  }

  .menu-button {
    display: none;
  }
}

@media (max-width: 660px) {
  header {
    nav {
      display: none;
    }

    .version {
      display: none;
    }

    .menu-button {
      display: block;
    }
  }
}
</style>
