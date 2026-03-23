#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const outputFile = resolve(
  process.cwd(),
  process.argv[2] ?? 'src/data/unihan-mandarin.json'
)

const fileContent = readFileSync(0, 'utf8')

if (!fileContent) {
  throw new Error('Nenhum conteudo recebido via stdin para gerar o mapa Unihan.')
}

if (!fileContent.includes('kMandarin') && !fileContent.includes('kHanyuPinyin')) {
  throw new Error(
    'Entrada invalida: esperado conteudo do Unihan_Readings.txt via stdin.'
  )
}

const mandarinReadings = new Map()
const hanyuFallbackReadings = new Map()

for (const line of fileContent.split(/\r?\n/)) {
  if (!line || line.startsWith('#')) {
    continue
  }

  const [codePoint, field, rawValue] = line.split('\t')
  if (!codePoint || !field || !rawValue || !codePoint.startsWith('U+')) {
    continue
  }

  const point = Number.parseInt(codePoint.slice(2), 16)
  if (Number.isNaN(point)) {
    continue
  }

  const hanzi = String.fromCodePoint(point)

  if (field === 'kMandarin' && !mandarinReadings.has(hanzi)) {
    const reading = cleanReading(rawValue.split(/\s+/)[0] ?? '')
    if (reading) {
      mandarinReadings.set(hanzi, reading)
    }
    continue
  }

  if (field === 'kHanyuPinyin' && !hanyuFallbackReadings.has(hanzi)) {
    const reading = extractHanyuPinyin(rawValue)
    if (reading) {
      hanyuFallbackReadings.set(hanzi, reading)
    }
  }
}

for (const [hanzi, reading] of hanyuFallbackReadings.entries()) {
  if (!mandarinReadings.has(hanzi)) {
    mandarinReadings.set(hanzi, reading)
  }
}

const sortedEntries = Array.from(mandarinReadings.entries()).sort(
  ([first], [second]) => first.codePointAt(0) - second.codePointAt(0)
)

const output = Object.fromEntries(sortedEntries)

mkdirSync(dirname(outputFile), { recursive: true })
writeFileSync(outputFile, JSON.stringify(output), 'utf8')

console.log(`Unihan map generated: ${sortedEntries.length} entries -> ${outputFile}`)

function extractHanyuPinyin(rawValue) {
  const items = rawValue.trim().split(/\s+/)

  for (const item of items) {
    const [_, readings] = item.split(':')
    if (!readings) {
      continue
    }

    const firstReading = readings.split(',')[0] ?? ''
    const cleaned = cleanReading(firstReading)
    if (cleaned) {
      return cleaned
    }
  }

  return ''
}

function cleanReading(token) {
  return token.toLowerCase().replace(/[^\p{L}]/gu, '')
}
