<script setup lang="ts">
import { useI18n } from "@/i18n";

const { t, tString } = useI18n();
function github() {
  window.location.href = "https://github.com/felipe-sbm/inkstone";
}
</script>

<template>
  <section class="bottom">
    <div class="card">
      <div class="top">
        <h1>{{ t("bottomCard.title") }}</h1>
      </div>
      <div class="buttons">
        <button
          @click="$router.push('/generate')"
          class="start"
          title="Ir para o gerador de Pinyin"
        >
          {{ t("bottomCard.startButton") }}
        </button>
        <button @click="github" class="support" :alt="tString('bottomCard.readButtonAlt')" >
          {{ t("bottomCard.readButton") }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.bottom {
  margin: 6rem 2rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      180deg,
      #002f6c 0%,
      #01204e 80%,
      #13294b 100%
    );
    padding: 2rem;
    border-radius: 2rem;
    max-width: 50rem;
    width: 100%;
    height: 15rem;

    .top {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      h1 {
        color: white;
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-align: center;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;

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
        background-color: white;
        color: $primary-color;

        &:hover {
          background-color: #f0f0f0;
        }
      }

      .support {
        background-color: #dddfe27f;
        border: 1px solid #dddfe2a9;
        color: #f0f0f0;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          background-color: #dddfe256;
        }
      }
    }
  }
}

@media (max-width: 850px) {
  .bottom .card .top h1 {
    font-size: 2rem;
  }
}

@media (max-width: 620px) {
  .bottom {
    margin: 3rem 1rem;
    padding: 0;

    .card {
      height: auto;
      padding: 1.5rem;

      .top h1 {
        font-size: clamp(1rem, 4vw, 1.5rem);
      }

      .buttons {
        flex-direction: column;

        button {
          width: 100%;
          margin-bottom: 0.75rem;
        }

        .support {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
