<script setup lang="ts">
import { BeanOffIcon, BugPlay, SmilePlus, Zap } from "@lucide/vue";
import { useI18n } from "@/i18n";

const { t } = useI18n();
</script>

<template>
  <div class="features">
    <div class="cell feature-1">
      <h1><SmilePlus /></h1>
      <h2>{{ t('home.features.feature1.title') }}</h2>
      <p>
        {{ t('home.features.feature1.description') }}
      </p>
    </div>
    <div class="cell feature-2">
      <h1><Zap /></h1>
      <h2>{{ t('home.features.feature2.title') }}</h2>
      <p>
        {{ t('home.features.feature2.description') }}
      </p>
    </div>
    <div class="cell feature-3">
      <h1>
        <BeanOffIcon />
      </h1>
      <h2>{{ t('home.features.feature3.title') }}</h2>
      <p>
        {{ t('home.features.feature3.description') }}
      </p>
    </div>
    <div class="cell feature-4">
      <div class="content">
        <h1><BugPlay /></h1>
        <h2>{{ t('home.features.feature4.title') }}</h2>
        <p>
          {{ t('home.features.feature4.description') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1rem;
  padding: 2rem 0;
  margin-top: 0;

  .cell {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 1.5rem;
    padding: 2.2rem 2.3rem;
    position: relative;
    overflow: hidden;

    h1 {
      margin: 0;
    }

    h2 {
      margin: 0;
      line-height: 1.1;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    p {
      margin: 0.8rem 0 0;
      line-height: 1.45;
    }

    @media (max-width: 768px) {
      padding: 2rem 4rem;

      h1 {
        font-size: 31px;
      }

      h2 {
        font-size: 22px;
      }

      p {
        font-size: 17px;
      }
    }

    @media (max-width: 480px) {
      padding: 1.5rem 3rem;

      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 20px;
      }

      p {
        font-size: 15px;
        line-height: 1.35;
      }
    }
  }

  .feature-1 {
    background-color: #eef0f4;
    color: $neutral-color;
    grid-column: span 2;

    h1 {
      color: $tertiary-color;
    }

    h2 {
      color: #131a27;
    }
  }

  .feature-2 {
    background-color: #dfe9fb;
    color: $neutral-color;

    h1 {
      color: $primary-color;
    }

    h2 {
      color: #0f1a2d;
    }
  }

  .feature-3 {
    background-color: $primary-color;
    color: white;
  }

  .feature-4 {
    background-color: #e2e5ea;
    color: $neutral-color;
    grid-column: span 2;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    h1 {
      color: $secondary-color;
    }

    h2 {
      color: black;
    }
  }

  @media (max-width: 835px) {
    grid-template-columns: 1fr;
    gap: 1rem;

    .feature-1,
    .feature-2,
    .feature-3,
    .feature-4 {
      min-height: 240px;
      grid-column: span 1;
    }

    .feature-1 {
      &::before,
      &::after {
        opacity: 0.45;
      }
    }

    .feature-4 {
      flex-direction: column;
      align-items: flex-start;

      .content {
        max-width: 100%;
      }

      .preview {
        width: min(100%, 340px);
      }
    }
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
}
</style>
