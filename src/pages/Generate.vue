<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type ToneMode = 'marks' | 'numbers'

const chineseText = ref('你好，欢迎使用拼音生成器。')
const toneMode = ref<ToneMode>('marks')
const unihanMap = ref<Record<string, string>>({})
const loading = ref(false)
const loadError = ref('')

/* Gerando um mapa de tons para exibir em números */
const diacriticMap: Record<string, { base: string; tone: number }> = {
  ā: { base: 'a', tone: 1 },
  á: { base: 'a', tone: 2 },
  ǎ: { base: 'a', tone: 3 },
  à: { base: 'a', tone: 4 },
  ē: { base: 'e', tone: 1 },
  é: { base: 'e', tone: 2 },
  ě: { base: 'e', tone: 3 },
  è: { base: 'e', tone: 4 },
  ī: { base: 'i', tone: 1 },
  í: { base: 'i', tone: 2 },
  ǐ: { base: 'i', tone: 3 },
  ì: { base: 'i', tone: 4 },
  ō: { base: 'o', tone: 1 },
  ó: { base: 'o', tone: 2 },
  ǒ: { base: 'o', tone: 3 },
  ò: { base: 'o', tone: 4 },
  ū: { base: 'u', tone: 1 },
  ú: { base: 'u', tone: 2 },
  ǔ: { base: 'u', tone: 3 },
  ù: { base: 'u', tone: 4 },
  ǖ: { base: 'ü', tone: 1 },
  ǘ: { base: 'ü', tone: 2 },
  ǚ: { base: 'ü', tone: 3 },
  ǜ: { base: 'ü', tone: 4 }
}

/* Contador de Caracteres */
const convertedCharacterCount = computed(() => {
  let count = 0
  for (const char of chineseText.value) {
    if (unihanMap.value[char]) {
      count += 1
    }
  }
  return count
})

/* Gerando um prévia do pinyin */
const previewPinyin = computed(() => {
  if (!chineseText.value.trim()) {
    return 'Digite um texto em chinês para gerar o pinyin.'
  }

  if (loading.value && !Object.keys(unihanMap.value).length) {
    return 'Carregando o banco Unihan para habilitar a conversão...'
  }

  if (loadError.value) {
    return 'Não foi possível carregar o banco Unihan. Clique em "Recarregar banco".'
  }

  const converted = convertText(chineseText.value, toneMode.value)
  return converted || 'Nenhum caractere convertido com os dados carregados.'
})

onMounted(() => {
  void loadUnihan()
})

/* Carregando o banco de dados */
async function loadUnihan() {
  loading.value = true
  loadError.value = ''

  try {
    const module = await import('../data/unihan-mandarin.json')
    unihanMap.value = module.default as Record<string, string>
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : 'erro desconhecido'
  } finally {
    loading.value = false
  }
}

/* Função de conversão */
function convertText(input: string, mode: ToneMode) {
  let result = ''

  for (const char of input) {
    if (/\s/u.test(char)) {
      result += char
      continue
    }

    const reading = unihanMap.value[char]
    if (!reading) {
      result += char
      continue
    }

    const renderedReading = mode === 'numbers' ? toNumericTone(reading) : reading
    result += `${renderedReading} `
  }

  return result
    .replace(/\s+([，。！？；：、,.!?;:])/g, '$1')
    .replace(/([（《「『【])\s+/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

/* Convertendo acentos para números (não muito usado...) */
function toNumericTone(reading: string) {
  if (/[1-5]$/.test(reading)) {
    return reading.toLowerCase()
  }

  let tone = 0
  let normalized = ''

  for (const char of reading) {
    const mapped = diacriticMap[char]
    if (mapped) {
      normalized += mapped.base
      tone = mapped.tone
      continue
    }
    normalized += char.toLowerCase()
  }

  return tone ? `${normalized}${tone}` : normalized
}
</script>

<template>
  <main>
    <h1>Conversor Hanzi para Pinyin</h1>
    <section>
      <label for="hanzi">Texto em chinês</label>
      <textarea
        id="hanzi"
        v-model="chineseText"
        placeholder="Exemplo: 我想学习中文。"
      ></textarea>
      <p>Formato de saída</p>
      <div>
        <label>
          <input v-model="toneMode" type="radio" value="marks" />
          Com acentos
        </label>
        <label>
          <input v-model="toneMode" type="radio" value="numbers" />
          Com números
        </label>
      </div>
    </section>
    <section>
      <button type="button" :disabled="loading" @click="loadUnihan">
        Recarregar banco
      </button>
      <p v-if="loading">Carregando banco Unihan...</p>
      <p v-if="loadError">{{ loadError }}</p>
      <p>{{ previewPinyin }}</p>
      <p>{{ convertedCharacterCount }} caractere(s) convertido(s).</p>
    </section>
  </main>
</template>

<!-- Depois adiconar o estilo -->