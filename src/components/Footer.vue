<script setup lang="ts">
import { FolderRoot, BadgeAlert, Smile } from "@lucide/vue";
import NotByAI from "@/assets/CN/chinese-light.png";
import UFRN from "@/assets/ufrn_logo.webp";
import ZISU from "@/assets/zisu_logo.webp";
</script>

<template>
  <footer>
    <div class="credits">
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
        <BadgeAlert class="icon" />Report a Issue
      </a>
      <span>•</span>
      <a href="https://opensource.com/resources/what-open-source">
        <Smile class="icon" />What is Open Source?
      </a>
    </nav>

    <div class="not-by-ai">
      <a href="https://notbyai.fyi/" target="_blank" rel="noopener noreferrer">
        <img :src="NotByAI" alt="Not by AI" />
      </a>
    </div>
  </footer>
  <footer class="under-footer">
    <a href="https://ufrn.br/" target="_blank" rel="noopener noreferrer">
      <img :src="UFRN" alt="UFRN" class="ufrn" />
    </a>
    <a
      href="https://cie.zisu.edu.cn/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="ZISU" alt="ZISU" class="zisu" />
    </a>
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
  .not-by-ai {
    a {
      display: flex;
      justify-items: center;
      align-items: center;
      height: 2rem;
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
}

.under-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0.5rem auto;
  margin-bottom: 0;
  background-image: linear-gradient(
    180deg,
    #002f6c 0%,
    #01204e 80%,
    #13294b 100%
  );
  padding: 1rem;
  border-radius: 20rem 20rem 0 0;

  a {
    display: flex;
    justify-items: center;
    align-items: center;
    height: 3rem;
  }

  img {
    transition: 250ms;
    margin: 0 4rem;

    &:hover {
      opacity: 0.75;
    }
  }

  .ufrn {
    height: 2rem;
  }

  .zisu {
    height: 3rem;
  }
}

@media screen and (max-width: 900px) {
  footer {
    flex-direction: column-reverse;
    gap: 1rem;
    text-align: center;
  }
}

@media screen and (max-width: 600px) {
  footer {
    .credits {
      p {
        font-size: smaller;
      }
    }

    nav {
      flex-direction: column;
      gap: 0.5rem;

      a {
        margin: 0 auto;
        font-size: small;
        text-decoration: 1px dotted;
      }

      span {
        display: none;
      }
    }
  }

  .under-footer {
    flex-direction: column;
    gap: 1rem;
    border-radius: 5rem 5rem 0 0;

    a {
      margin: 0;
    }
  }
}
</style>
