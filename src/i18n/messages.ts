// Depois preciso criar uma tradução para todo o sistema.
// Aproveitei a estrutura do projeto que tinha feito (meu portfólio),
// só para agilizar e organizar o processo.

import type { Locale, MessageTree } from './messages/types';
// import { enMessages } from './messages/locales/en';
import { ptMessages } from './messages/locales/pt';
// import { zhMessages } from './messages/locales/zh';

export type { Locale, MessageTree };

export const localeOptions: Array<{ value: Locale; label: string }> = [
  // { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
  // { value: 'zh', label: '简体中文' },
];

export const localeToIntl: Record<Locale, string> = {
  // en: 'en-US',
  pt: 'pt-BR',
  // zh: 'zh-CN',
};

export const messages: Record<Locale, MessageTree> = {
  // en: enMessages,
  pt: ptMessages,
  // zh: zhMessages,
};