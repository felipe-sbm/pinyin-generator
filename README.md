# pinyin-generator

Gerador de pinyin com layout minimalista e conversao baseada no banco oficial Unihan.

## Banco Unihan

- Gerar o JSON a partir de `/tmp/Unihan.zip` ja baixado:
  - `npm run unihan:build`
- Baixar a versao mais recente do Unihan e regenerar automaticamente:
  - `npm run unihan:update`

O arquivo de dados usado pelo app fica em `src/data/unihan-mandarin.json`.
