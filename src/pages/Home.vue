<script setup lang="ts">
import Yang from "@/assets/yang.webp";
import Features from "@/components/Features.vue";
import { Star } from "@lucide/vue";
</script>
<!-- O melhor conversor de Hanzi para Pinyin -->
<!-- Com o Inkstone, você pode converter facilmente caracteres chineses em pinyin. Sempre disponível e fácil de usar. -->
<template>
  <section class="hero">
    <div class="introduction">
      <h1>最好的汉字拼音转换器</h1>
      <h2>O melhor conversor de Hanzi para Pinyin</h2>
      <p>
        节省您的材料准备时间。这不仅仅是一个简单的改变，而是一次精简高效的打字体验。精准、简约、优雅。
      </p>
      <div class="buttons">
        <button
          @click="$router.push('/generate')"
          class="start"
          title="Ir para o gerador de Pinyin"
        >
          Começar Agora
        </button>
        <button
          :href="'https://github.com/felipe-sbm/inkstone/'"
          target="_blank"
          class="support"
          title="Ir para o Github"
        >
          <Star :size="16" />
          Apoiar Projeto
        </button>
      </div>
    </div>
    <div class="mascot">
      <img :src="Yang" alt="Yang, the Inkstone mascot" />
    </div>
  </section>

  <section class="features">
    <div class="title">
      <h2>Por que usar o Inkstone?</h2>
      <h3>Descubra os benefícios de utilizar nossa ferramenta.</h3>
    </div>
    <Features />
  </section>

  <section class="bottom">
    <div class="card">
      <div class="top">
        <h1>您准备好体验无比流畅的文本转换了吗？</h1>
      </div>
      <div class="buttons">
        <button
          @click="$router.push('/generate')"
          class="start"
          title="Ir para o gerador de Pinyin"
        >
          Começar Agora
        </button>
        <button
          @click="$router.push('/about')"
          class="support"
          title="Ir para o Github"
        >
          Ler sobre o Projeto
        </button>
      </div>
    </div>
  </section>
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

    h1 {
      font-size: 3rem;
      color: $primary-color;
      font-weight: 700;
      margin-bottom: 0;
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

        &:hover {
          background-image: linear-gradient(0deg, #1d62c4 0%, #287af6 100%);
        }
      }

      .support {
        background-color: #dddfe2;
        color: $neutral-color;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          background-color: #cfd0d4;
        }
      }
    }
  }

  .mascot {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 90%;
      height: auto;
    }
  }
}

.features {
  margin: 1rem 2rem 3rem 2rem;

  .title {
    justify-content: center;
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

.bottom {
  margin: 6rem 0;
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
</style>
