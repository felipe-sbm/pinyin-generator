// Depois preciso criar uma tradução para todo o sistema.
// Aproveitei a estrutura do projeto que tinha feito (meu portfólio),
// só para agilizar e organizar o processo.

import type { Locale, MessageTree } from './messages/types';
import { zhMessages } from './messages/locales/zh';
import { ptMessages } from './messages/locales/pt';
import { enMessages } from './messages/locales/en';

export type { Locale, MessageTree };

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: 'zh', label: '简体中文' },
  { value: 'pt', label: 'Português' },
  { value: 'en', label: 'English' },
];

export const localeToIntl: Record<Locale, string> = {
  zh: 'zh-CN',
  pt: 'pt-BR',
  en: 'en-US',
};

export const messages: Record<Locale, MessageTree> = {
  pt: ptMessages,
  zh: zhMessages,
  en: enMessages,
};