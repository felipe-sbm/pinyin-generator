<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Input from "@/components/Input.vue";
import Output from "@/components/Output.vue";
import OutputSettings from "@/components/OutputSettings.vue";
import { useI18n } from "@/i18n";

const { t, tString } = useI18n();
type ToneMode = "marks" | "numbers";

const chineseText = ref("");
const toneMode = ref<ToneMode>("marks");
const unihanMap = ref<Record<string, string>>({});
const loading = ref(false);
const loadError = ref("");
const hasUserInput = computed(() => Boolean(chineseText.value.trim()));

/* Gerando um mapa de tons para exibir em números */
const diacriticMap: Record<string, { base: string; tone: number }> = {
  ā: { base: "a", tone: 1 },
  á: { base: "a", tone: 2 },
  ǎ: { base: "a", tone: 3 },
  à: { base: "a", tone: 4 },
  ē: { base: "e", tone: 1 },
  é: { base: "e", tone: 2 },
  ě: { base: "e", tone: 3 },
  è: { base: "e", tone: 4 },
  ī: { base: "i", tone: 1 },
  í: { base: "i", tone: 2 },
  ǐ: { base: "i", tone: 3 },
  ì: { base: "i", tone: 4 },
  ō: { base: "o", tone: 1 },
  ó: { base: "o", tone: 2 },
  ǒ: { base: "o", tone: 3 },
  ò: { base: "o", tone: 4 },
  ū: { base: "u", tone: 1 },
  ú: { base: "u", tone: 2 },
  ǔ: { base: "u", tone: 3 },
  ù: { base: "u", tone: 4 },
  ǖ: { base: "ü", tone: 1 },
  ǘ: { base: "ü", tone: 2 },
  ǚ: { base: "ü", tone: 3 },
  ǜ: { base: "ü", tone: 4 },
};

/* Gerando um prévia do pinyin */
const previewPinyin = computed(() => {
  if (!chineseText.value.trim()) {
    return "Shūrù yīxiē wénzì, xìtǒng jiāng shēngchéng pīnyīn.";
  }

  if (loading.value && !Object.keys(unihanMap.value).length) {
    return "Carregando o banco Unihan para habilitar a conversão...";
  }

  if (loadError.value) {
    return 'Não foi possível carregar o banco Unihan. Clique em "Recarregar banco".';
  }

  const converted = convertText(chineseText.value, toneMode.value);
  return converted || "Nenhum caractere convertido com os dados carregados.";
});

onMounted(() => {
  void loadUnihan();
});

/* Carregando o banco de dados */
async function loadUnihan() {
  loading.value = true;
  loadError.value = "";

  try {
    const module = await import("../data/unihan-mandarin.json");
    unihanMap.value = module.default as Record<string, string>;
  } catch (error) {
    loadError.value =
      error instanceof Error ? error.message : "erro desconhecido";
  } finally {
    loading.value = false;
  }
}

/* Função de conversão */
function convertText(input: string, mode: ToneMode) {
  let result = "";

  for (const char of input) {
    if (/\s/u.test(char)) {
      result += char;
      continue;
    }

    const reading = unihanMap.value[char];
    if (!reading) {
      result += char;
      continue;
    }

    const renderedReading =
      mode === "numbers" ? toNumericTone(reading) : reading;
    result += `${renderedReading} `;
  }

  return result
    .replace(/\s+([，。！？；：、,.!?;:])/g, "$1")
    .replace(/([（《「『【])\s+/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/* Convertendo acentos para números (não muito usado...) */
function toNumericTone(reading: string) {
  if (/[1-5]$/.test(reading)) {
    return reading.toLowerCase();
  }

  let tone = 0;
  let normalized = "";

  for (const char of reading) {
    const mapped = diacriticMap[char];
    if (mapped) {
      normalized += mapped.base;
      tone = mapped.tone;
      continue;
    }
    normalized += char.toLowerCase();
  }

  return tone ? `${normalized}${tone}` : normalized;
}
</script>

<template>
  <section class="generate-page">
    <div class="title">
      <h1>{{ t("generate.title") }}</h1>
      <p>{{ t("generate.subtitle") }}</p>
    </div>

    <main class="generate-layout">
      <section class="panel">
        <Input
          label="Texto em chinês"
          v-model="chineseText"
          placeholder="输入一些文字，系统将生成拼音。"
        />
      </section>
      <section class="panel">
        <Output :text="previewPinyin" :interactive="hasUserInput" />
        <OutputSettings
          v-model="toneMode"
          :settingsTitle="tString('generate.output.settings.title')"
          :classicPinyin="tString('generate.output.settings.classicPinyin')"
          :numberedPinyin="tString('generate.output.settings.numberedPinyin')"
        />
      </section>
    </main>
  </section>
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.generate-page {
  padding: clamp(1rem, 3vw, 2rem);
}

.title {
  margin-bottom: 2rem;

  h1 {
    color: $title-color;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    line-height: 1.1;
    margin-bottom: 0;
  }

  p {
    color: $neutral-color;
    font-size: clamp(0.95rem, 1.8vw, 1.05rem);
    font-weight: 400;
    margin-top: 0;
  }
}

.generate-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
}

.panel {
  min-width: 0;
}

@media (max-width: 960px) {
  .title {
    margin-bottom: 1.25rem;
  }

  .generate-layout {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Depois adiconar o estilo -->
<!-- 
      Também posso adicionar isso mais tarde, porque não é necessário agora.
      <p v-if="loading">Carregando banco Unihan...</p>
      <p v-if="loadError">{{ loadError }}</p>
-->
