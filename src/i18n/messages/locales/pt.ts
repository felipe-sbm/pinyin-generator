import type { MessageTree } from '../types';

export const ptMessages: MessageTree = {
  routes: {
    home: { title: 'Início | Inkstone', description: 'Página inicial da Inkstone' },
    generate: { title: 'Converter Hanzi para Pinyin | Inkstone', description: 'Converter Hanzi para Pinyin na Inkstone.' },
    write: { title: 'Escrever Hanzi | Inkstone', description: 'Escrever em Hanzi na Inkstone.' },
    about: { title: 'Sobre | Inkstone', description: 'Saiba mais sobre a Inkstone.' },
    notfound: { title: '404 | Inkstone', description: 'Página não encontrada.' },
  },
  common: {
    appTitle: 'Inkstone',
    profilePictureAlt: 'Foto de ',
    loading: 'Carregando...',
    languageLabel: 'Idioma do sistema',
  },
  nav: {
    home: 'Início',
    generate: 'Gerador de Pinyin',
    write: 'Escrever Hanzi',
    about: 'Sobre o projeto',
  },
  header: {
    location: 'Natal, Brasil',
  },
  footer: {
    copyright: 'Licença MIT, uso gratuito.',
    notByAiAlt: 'Certificado Not By AI',
    phrases: [
      'Nåo pare de estudar!',
      'Você é capaz de coisas incríveis.',
      'Abrace a jornada.',
      'Continue aprendendo.',
      'Construa algo incrível.',
      'Sonhe grande, estude mais.',
      'Você está fazendo um ótimo trabalho.',
      'Só por estar aqui, já está na frente de muitos.',
      'Deus é bom o tempo todo.',
    ],
  },
};