<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "@lucide/vue";
import { useI18n } from "@/i18n";
import { inkstone } from "@/version";

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
  <header>
    <div class="logo">
      <RouterLink to="/" exact-active-class="active"
        >Inkstone <span>(砚台)</span></RouterLink
      >
    </div>

    <nav>
      <RouterLink to="/" exact-active-class="active">{{ t("nav.home") }}</RouterLink>
      <RouterLink to="/generate" exact-active-class="active">{{ t("nav.generate") }}</RouterLink>
      <!--       
        <RouterLink to="/write" exact-active-class="active">{{ t("nav.write") }}</RouterLink> # Como ainda não temos pronto, vou deixar desligado por enquanto
      -->
      <RouterLink to="/about" exact-active-class="active">{{ t("nav.about") }}</RouterLink>
    </nav>

    <div class="version">
      <h6>Alfa <span>v{{ inkstone }}</span></h6>
    </div>

    <div class="menu-button">
      <button @click="toggleMenu" title="Abrir Menu">
        <Menu :size="24" />
      </button>

      <div class="dropdown-menu" :class="{ open: isMenuOpen }">
        <RouterLink to="/" @click="closeMenu" exact-active-class="active"
          >{{ t("nav.home") }}</RouterLink
        >
        <RouterLink
          to="/generate"
          @click="closeMenu"
          exact-active-class="active"
          >{{ t("nav.generate") }}</RouterLink
        >
        <RouterLink to="/about" @click="closeMenu" exact-active-class="active">{{ t("nav.about") }}</RouterLink>
      </div>
    </div>
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

    span {
      font-weight: normal;
      font-size: 0.75rem;
      color: $secondary-color;
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

    select {
      display: none;
    }

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

      .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 0.5rem;
        background-color: #fefefea9;
        backdrop-filter: blur(7px);
        border: 1px solid $neutral-color;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        min-width: 200px;
        opacity: 0;
        pointer-events: none;
        z-index: 100;

        &.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        a {
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
  }
}
</style>
