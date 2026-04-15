export type Locale = 'zh' | 'pt' | 'en';

export type MessageValue = string | string[] | MessageTree;

export interface MessageTree {
  [key: string]: MessageValue;
}