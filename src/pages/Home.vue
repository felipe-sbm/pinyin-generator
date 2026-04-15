<script setup lang="ts">
import Yang from "@/assets/yang.webp";
import Features from "@/components/Features.vue";
import { Star } from "@lucide/vue";
import BottomCard from "@/components/BottomCard.vue";
import { useI18n } from "@/i18n";

const { t, tString } = useI18n();
function support() {
  window.location.href = "https://github.com/felipe-sbm/inkstone";
}
</script>

<template>
  <section class="hero">
    <div class="introduction">
      <h1>{{ t("home.hero.title") }}</h1>
      <h2>{{ t("home.hero.subtitle") }}</h2>
      <p>{{ t("home.hero.description") }}</p>
      <div class="buttons">
        <button
          @click="$router.push('/generate')"
          class="start"
          :alt="tString('home.hero.startButtonAlt')"
        >
          {{ t('home.hero.startButton') }}
        </button>
        <button
          @click="support"
          target="_blank"
          class="support"
          :alt="tString('home.hero.supportButtonAlt')"
        >
          <Star :size="16" />
          {{ t('home.hero.supportButton') }}
        </button>
      </div>
    </div>
    <div class="mascot">
      <img :src="Yang" alt="Yang, the Inkstone mascot" />
    </div>
  </section>

  <section class="features">
    <div class="title">
      <h2>{{ t('home.features.title') }}</h2>
      <h3>{{ t('home.features.subtitle') }}</h3>
    </div>
    <Features />
  </section>

  <BottomCard />
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.hero {
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .introduction {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;

    h1 {
      font-size: 3rem;
      color: $primary-color;
      font-weight: 700;
      margin-bottom: 0;
      line-height: 3.5rem;
    }

    h2 {
      font-size: 1.5rem;
      color: $secondary-color;
      font-weight: 500;
      margin: 0;
    }

    p {
      font-size: 1.25rem;
      color: $neutral-color;
      font-weight: 300;
      margin-top: 0;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;

      button {
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 0.75rem;
        cursor: pointer;
        transition: 500ms ease;
        font-weight: 600;
      }

      .start {
        background-image: linear-gradient(90deg, #287af6 0%, #1d62c4 100%);
        color: white;
        box-shadow: 0 5px 10px #0000001a;

        &:hover {
          background-image: linear-gradient(0deg, #1d62c4 0%, #287af6 100%);
          box-shadow: 0 10px 10px #0000001a;
        }
      }

      .support {
        background-color: white;
        color: $primary-color;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 5px 10px #0004161a;

        &:hover {
          box-shadow: 0 10px 10px #002fff1a;
        }
      }
    }
  }

  .mascot {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    img {
      max-width: 90%;
      height: auto;
    }
  }
}

.features {
  margin: 1rem;

  .title {
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1rem;
      color: $neutral-color;
      font-weight: 500;
      margin-top: 0;
    }
  }
}

@media (max-width: 600px) {
  .hero {
    flex-direction: column;
    text-align: center;

    .introduction {
      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.25rem;
      }

      p {
        font-size: 1rem;
      }

      .buttons {
        justify-content: center;
        flex-direction: column;
        gap: 0.75rem;

        button {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 1rem;
        }
      }
    }

    .mascot {
      img {
        max-width: 60%;
        height: auto;
      }
    }
  }
}
</style>
