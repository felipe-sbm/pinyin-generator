export type Locale = 'pt' /* depois colocar como: 'en' | pt | 'zh' */;

export type MessageValue = string | string[] | MessageTree;

export interface MessageTree {
  [key: string]: MessageValue;
}