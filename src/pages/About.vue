<script setup lang="ts">
import BottomCard from "@/components/BottomCard.vue";
import Server from "@/assets/server.webp";
import {
  BadgeDollarSign,
  BeanOff,
  GlobeX,
  HardDriveDownload,
  Leaf,
  ServerCrash,
  MessageCircleCode,
  BookOpenText,
  Sprout,
  GraduationCap,
  University,
} from "@lucide/vue";
import UFRN from "@/assets/ufrn.webp";
import ZISU from "@/assets/zisu.webp";
import { useI18n } from "@/i18n";

const { t, tString } = useI18n();
</script>

<template>
  <section class="about-hero">
    <h1>{{ t("about.hero.title1") }}</h1>
    <h2>{{ t("about.hero.title2") }}</h2>
    <p>{{ t("about.hero.description") }}</p>

    <div class="beam-1"></div>
    <div class="beam-2"></div>
  </section>

  <section class="about-problem">
    <div class="about-problem-heading">
      <span>{{ t("about.problem.eyebrow") }}</span>
      <h2>{{ t("about.problem.title") }}</h2>
      <p>{{ t("about.problem.description") }}</p>
    </div>

    <div class="about-problem-content">
      <div class="about-problem-left">
        <article class="about-problem-card">
          <h3>
            <span><ServerCrash :size="20" /></span>
            {{ t("about.problem.article.article1.title") }}
          </h3>
          <p>{{ t("about.problem.article.article1.description") }}</p>
        </article>

        <article class="about-problem-card">
          <h3>
            <span><GlobeX :size="20" /></span>
            {{ t("about.problem.article.article2.title") }}
          </h3>
          <p>
            {{ t("about.problem.article.article2.description") }}
          </p>
        </article>

        <article class="about-problem-card">
          <h3>
            <span><BeanOff :size="20" /></span>
            {{ t("about.problem.article.article3.title") }}
          </h3>
          <p>
            {{ t("about.problem.article.article3.description") }}
          </p>
        </article>
      </div>

      <div class="about-problem-right">
        <!-- Créditos para: https://www.freepik.com/free-vector/cloud-computing-concept_1531135.htm#fromView=search&page=1&position=0&uuid=1a3f4fd8-8dca-4d99-87f4-22232383c47a&query=server -->
        <!-- Saturação e escala de cores modificadas no GIMP-->
        <img :src="Server" :alt="tString('about.problem.imageAlt')" />
      </div>
    </div>
  </section>

  <section class="about-solution">
    <div class="about-solution-heading">
      <span>{{ t("about.solution.eyebrow") }}</span>
      <h2>
        {{ t("about.solution.title") }}
        <i>{{ t("about.solution.titleEnphasis") }}</i>
      </h2>
      <p>{{ t("about.solution.description") }}</p>
    </div>

    <div class="about-solution-content">
      <div class="about-solution-column">
        <article class="about-solution-card">
          <span><Leaf :size="25" /></span>
          <h3>{{ t("about.solution.benefits.benefit1.title") }}</h3>
          <p>
            {{ t("about.solution.benefits.benefit1.description") }}
          </p>
        </article>
      </div>

      <div class="about-solution-column">
        <article class="about-solution-card">
          <span><HardDriveDownload :size="25" /></span>
          <h3>{{ t("about.solution.benefits.benefit2.title") }}</h3>
          <p>
            {{ t("about.solution.benefits.benefit2.description") }}
          </p>
        </article>
      </div>

      <div class="about-solution-column">
        <article class="about-solution-card">
          <span><BadgeDollarSign :size="25" /></span>
          <h3>{{ t("about.solution.benefits.benefit3.title") }}</h3>
          <p>
            {{ t("about.solution.benefits.benefit3.description") }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="about-info">
    <div class="about-info-left">
      <span>{{ t("about.paternship.eyebrow") }}</span>
      <h2>{{ t("about.paternship.title") }}</h2>
      <p>
        {{ t("about.paternship.description") }}
      </p>
      <div class="about-info-left-universities">
        <div>
          <span> <GraduationCap :size="25" /></span>
          <a
            href="https://www.ufrn.br/"
            target="_blank"
            rel="noopener noreferrer"
            :alt="tString('about.paternship.ufrnAlt')"
            :title="tString('about.paternship.ufrnTitle')"
          >
            <span class="full-name">{{ t("about.paternship.ufrnTitle") }}</span>
          </a>
        </div>
        <div>
          <span> <University :size="25" /></span>
          <a
            href="https://www.zisu.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
            :alt="tString('about.paternship.zisuAlt')"
            :title="tString('about.paternship.zisuTitle')"
          >
            <span class="full-name">{{ t("about.paternship.zisuTitle") }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="about-info-right">
      <div>
        <img
          :src="UFRN"
          :alt="tString('about.paternship.ufrnAlt')"
          class="ufrn"
        />
        <div class="about-info-right-universities">
          <span> <GraduationCap :size="25" /></span
          ><a
            href="https://www.ufrn.br/"
            target="_blank"
            rel="noopener noreferrer"
            :alt="tString('about.paternship.ufrnAlt')"
            :title="tString('about.paternship.ufrnTitle')"
          >
            <span class="short-name">UFRN</span>
          </a>
        </div>
      </div>
      <div>
        <img
          :src="ZISU"
          :alt="tString('about.paternship.zisuAlt')"
          class="zisu"
        />
        <div class="about-info-right-universities">
          <span> <University :size="25" /></span>

          <a
            href="https://www.zisu.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
            :alt="tString('about.paternship.zisuAlt')"
            :title="tString('about.paternship.zisuTitle')"
          >
            <span class="short-name">ZISU</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="about-quote">
    <div class="about-quote-heading">
      <span>{{ t("about.purpose.eyebrow") }}</span>
      <h2>{{ t("about.purpose.title") }}</h2>
      <hr />
      <p>"{{ t("about.purpose.description") }}"</p>
    </div>
    <div class="about-quote-tags">
      <span title="Global Collaboration"
        ><MessageCircleCode :size="16" />{{ t("about.purpose.goal1") }}</span
      >
      <span title="Quality Education"
        ><BookOpenText :size="16" /> {{ t("about.purpose.goal2") }}</span
      >
      <span title="Climate Action"
        ><Sprout :size="16" /> {{ t("about.purpose.goal3") }}</span
      >
    </div>
  </section>
  <BottomCard />
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

section {
  padding-inline: clamp(1rem, 3vw, 2rem);
}

.about-hero {
  padding-block: 1rem;
  position: relative;
  overflow: visible;
  isolation: isolate;
  min-height: clamp(30rem, 72vh, 50rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 4.5rem;
    margin: 0;
    color: #002f6c;
  }

  h2 {
    font-size: 4rem;
    margin: 0;
    line-height: 1.5rem;
    color: $primary-color;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 300;
    color: $neutral-color;
    margin-top: 4rem;
    max-width: 45rem;
  }

  .beam-1 {
    position: absolute;
    right: -10rem;
    top: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 100%;
    background-image: radial-gradient($primary-color 0%, transparent 100%);
    margin-top: 1rem;
    z-index: -1;
    pointer-events: none;
    filter: blur(30px);
    opacity: 0.25;
  }

  .beam-2 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    background-image: radial-gradient($primary-color 0%, transparent 100%);
    margin-top: 1rem;
    z-index: -1;
    pointer-events: none;
    filter: blur(30px);
    opacity: 0.15;
  }
}

.about-problem {
  margin: 4rem 0;
  display: grid;

  .about-problem-heading {
    max-width: 40rem;

    span {
      display: inline-block;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      font-weight: bold;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
      color: $tertiary-color;
    }

    h2 {
      margin: 0;
      line-height: 1.05;
      color: #163463;
    }

    p {
      margin: 1.25rem 0 0;
      max-width: 34rem;
      font-size: 1.05rem;
      line-height: 1.6;
      color: $neutral-color;
    }
  }

  .about-problem-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: center;

    .about-problem-left {
      display: flex;
      gap: 1.15rem;
      flex-direction: column;

      .about-problem-card {
        background-color: white;
        border-radius: 2rem;
        padding: 1.5rem;
        border: 1px solid #0d74f214;
        box-shadow: 0 1px 15px #0d74f214;

        h3 {
          margin: 0;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #163463;

          span {
            width: 1.8rem;
            height: 1.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1rem;
            background: rgba($tertiary-color, 0.15);
            color: $tertiary-color;
            flex: 0 0 auto;
          }
        }

        p {
          margin: 0;
          margin-top: 0.5rem;
          font-size: 1rem;
          line-height: 1.55;
          color: $neutral-color;
        }
      }
    }

    .about-problem-right {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: min(100%, 30rem);
        height: auto;
        mix-blend-mode: multiply;
      }
    }
  }
}

.about-solution {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  .about-solution-heading {
    max-width: 40rem;
    text-align: center;

    span {
      display: inline-block;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      font-weight: bold;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
      color: $primary-color;
    }

    h2 {
      margin: 0;
      line-height: 1.05;
      color: #163463;
    }

    p {
      margin: 1.25rem 0 0;
      max-width: 40rem;
      font-size: 1.05rem;
      line-height: 1.6;
      color: $neutral-color;
    }
  }

  .about-solution-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 5rem;

    .about-solution-column {
      display: flex;

      .about-solution-card {
        background-image: linear-gradient(135deg, #f0f9ff, #e0f2fe);
        border-radius: 3rem;
        padding: 1.5rem;
        border: 1px solid rgba($primary-color, 0.1);
        box-shadow: 0 1px 15px #0d74f214;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        text-align: center;
        padding: 2rem 1rem;

        span {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: rgba($primary-color, 0.1);
          color: $primary-color;
          flex: 0 0 auto;
          margin: 0.5rem;
        }

        h3 {
          margin: 0.5rem;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: $title-color;
        }

        p {
          margin: 0.5rem 2rem;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.55;
          color: $text-color;
        }
      }
    }
  }
}

.about-info {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: center;
  margin: 8rem 0;

  .about-info-left {
    min-width: 0;
    max-width: 42rem;

    > span {
      display: inline-block;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      font-weight: bold;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
      color: $secondary-color;
    }

    h2 {
      margin: 0;
      line-height: 1.05;
      color: #163463;
    }

    p {
      margin: 1.25rem 0 0;
      max-width: 40rem;
      font-size: 1.05rem;
      line-height: 1.6;
      color: $neutral-color;
    }

    .about-info-left-universities {
      margin-top: 2rem;

      div {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin: 0.5rem 0;

        > span {
          margin-bottom: 0;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2rem;
          background-color: white;
          box-shadow: 0 1px 5px #0d74f214;
          color: $primary-color;
          flex: 0 0 auto;
        }

        a {
          display: block;
          line-height: 1.4;
          color: $title-color;
          font-weight: 500;
          text-decoration: none;
          font-weight: 500;

          .full-name {
            margin: 0;
            padding: 0;
            color: inherit;
            font-size: inherit;
            font-weight: inherit;
            letter-spacing: normal;
            text-transform: none;
            background: none;
            box-shadow: none;
            border-radius: 0;
          }

          .full-name {
            display: inline;
          }

          &:hover {
            text-decoration: dashed underline;
            text-decoration-color: $primary-color;
          }

          &:not(:last-child) {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }

  .about-info-right {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: end;
    gap: 1rem;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.65rem;
    }

    img {
      border-radius: 3rem;
      box-shadow: 0 5px 35px #08356b82;
      width: 100%;
      max-width: 21rem;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      mix-blend-mode: multiply;
    }

    > div:first-child {
      justify-self: start;
    }

    > div:last-child {
      justify-self: end;
      margin-top: 2.75rem;
    }

    .about-info-right-universities {
      display: none;
    }
  }
}

.about-quote {
  margin: 6rem 0;
  text-align: center;

  .about-quote-heading {
    max-width: 40rem;
    margin: 0 auto;

    span {
      display: inline-block;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      font-weight: bold;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
      color: $secondary-color;
    }

    h2 {
      margin: 0;
      font-size: 2rem;
    }
  }

  hr {
    margin: 1rem auto;
    width: 10rem;
    height: 0.4rem;
    background-image: linear-gradient(
      to right,
      #002f6c 0%,
      #1d62c4 50%,
      #287af6 100%
    );
    border: none;
    border-radius: 1rem;
  }

  p {
    margin: 1rem auto 0;
    max-width: 45rem;
    color: $neutral-color;
    line-height: 1.7;
    font-style: italic;
  }

  .about-quote-tags {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;

      background-color: rgba($primary-color, 0.1);
      color: $primary-color;
      padding: 0.5rem 0.85rem;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 500;
      margin: 0.5rem;
    }
  }
}

@media (max-width: 1080px) {
  .about-hero {
    h1 {
      font-size: 3.75rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    p {
      max-width: 38rem;
    }
  }

  .about-solution {
    .about-solution-content {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-top: 3rem;

      .about-solution-column:last-child {
        grid-column: 1 / -1;
        justify-content: center;

        .about-solution-card {
          width: calc((100% - 1.25rem) / 2);
          max-width: none;
        }
      }
    }
  }

  .about-info {
    .about-info-right {
      img {
        max-width: 18rem;
      }

      .zisu {
        margin-top: 1.75rem;
      }
    }
  }
}

@media (max-width: 900px) {
  .about-hero {
    min-height: 34rem;

    h1 {
      font-size: 3.1rem;
    }

    h2 {
      font-size: 2.65rem;
      line-height: 1;
    }

    p {
      margin-top: 2rem;
      font-size: 1.05rem;
    }
  }

  .about-problem {
    .about-problem-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .about-problem-left {
      order: 2;
      margin-top: 1rem;
    }

    .about-problem-right {
      order: 1;
      justify-content: center;
      margin-top: 1rem;

      img {
        max-width: 15rem;
      }
    }
  }

  .about-info {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 5.5rem 0 4.5rem;

    .about-info-left {
      max-width: 100%;
    }

    .about-info-right {
      max-width: 40rem;
      margin: 0 auto;

      img {
        max-width: 19rem;
      }
    }
  }
}

@media (max-width: 720px) {
  .about-problem,
  .about-solution,
  .about-quote {
    margin: 3.5rem 0;
  }

  .about-solution {
    .about-solution-content {
      grid-template-columns: 1fr;
      margin-top: 2.25rem;

      .about-solution-column:last-child {
        grid-column: auto;

        .about-solution-card {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }

  .about-quote {
    .about-quote-heading {
      h2 {
        font-size: 1.6rem;
      }
    }
  }

  .about-info {
    .about-info-right {
      grid-template-columns: 1fr;
      justify-items: center;

      > div {
        justify-self: center;
        margin-top: 0;
      }
    }
  }
}

@media (max-width: 560px) {
  section {
    padding-inline: 0.875rem;
  }

  .about-hero {
    min-height: 30rem;

    h1 {
      font-size: 2.25rem;
    }

    h2 {
      font-size: 2rem;
      line-height: 1.1;
    }

    p {
      margin-top: 1.35rem;
      font-size: 1rem;
    }

    .beam-1 {
      width: 26rem;
      height: 26rem;
      right: -12rem;
      top: -8rem;
    }
  }

  .about-problem {
    .about-problem-left {
      .about-problem-card {
        padding: 1.15rem;
      }
    }
  }

  .about-info {
    margin: 4rem 0;

    .about-info-left {
      .about-info-left-universities {
        display: none;
      }
    }

    .about-info-right {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;

      > div {
        width: 100%;
      }

      img {
        width: 100%;
        max-width: none;
        box-shadow: 0 1px 15px #08356b82;
      }

      .about-info-right-universities {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
        line-height: 1;

        > span {
          padding: 0.45rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2rem;
          background-color: white;
          box-shadow: 0 1px 5px #0d74f214;
          color: $primary-color;
          flex: 0 0 auto;
        }

        a {
          color: $title-color;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;

          &:hover {
            text-decoration: dashed underline;
            text-decoration-color: $primary-color;
          }
        }
      }
    }
  }
}
</style>
