import type { MessageTree } from '@/i18n/messages/types';
import NotByAI_BR from "@/assets/BR/portuguese-light.png";

export const ptMessages: MessageTree = {
  // Componentes e utilitários
  routes: {
    home: { title: 'Gerador de Pinyin e Conversor de Pinyin | Inkstone', description: 'Gerador de pinyin e conversor de pinyin online para transformar hanzi em pinyin com rapidez e privacidade.' },
    generate: { title: 'Gerador de Pinyin Online: Conversor de Hanzi para Pinyin | Inkstone', description: 'Use o gerador de pinyin da Inkstone para converter hanzi para pinyin com acentos ou numeros de tom.' },
    write: { title: 'Escrever Hanzi | Inkstone', description: 'Escrever em Hanzi na Inkstone.' },
    about: { title: 'Sobre | Inkstone', description: 'Saiba mais sobre a Inkstone.' },
    notfound: { title: '404 | Inkstone', description: 'Página não encontrada.' },
  },

  common: {
    appTitle: 'Inkstone',
    loading: 'Carregando...',
    languageLabel: 'Idioma do sistema',
  },

  nav: {
    home: 'Início',
    generate: 'Conversor',
    write: 'Aprender Hanzis', // Projeto futuro :-] (quem versão 1.0.0)
    about: 'Sobre o projeto',
  },

  bottomCard: {
    title: 'Está pronto para usar o Inkstone?',
    startButton: 'Começar Agora',
    startButtonAlt: 'Ir para o gerador de Pinyin',
    readButton: 'Ver Repositório do GitHub',
    readButtonAlt: 'Ir para o Github',
  },

  footer: {
    creator: 'Conhecer o desenvolvedor',
    licence: 'Licença MIT, uso gratuito.',
    links: {
      sourceCode: 'Código fonte',
      reportIssue: 'Reportar um problema',
      openSource: 'O que é código aberto?',
    },
    notByAI: NotByAI_BR,
    notByAiAlt: 'Certificado Not By AI',
    ufrn: 'Universidade Federal do Rio Grande do Norte',
    zisu: 'Universidade de Estudos Internacionais de Zhejiang',
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

  // Páginas
  home: {
    hero: {
      title: 'Gerador de Pinyin e conversor de Hanzi para Pinyin',
      subtitle: 'Mais rápido, sem prejudicar a natureza',
      description: 'Com o Inkstone, você pode converter facilmente caracteres chineses em pinyin. Sempre disponível e fácil de usar.',

      startButton: 'Experimente Agora',
      startButtonAlt: 'Ir para o gerador de Pinyin',
      supportButton: 'Apoie o Projeto',
      supportButtonAlt: 'Abrir página de apoio ao projeto',
    },

    features: {
      title: 'Por que usar o Inkstone?',
      subtitle: 'Descubra os benefícios de utilizar nossa ferramenta.',

      feature1: {
        title: 'Sem propagandas e sem coleta de dados',
        description: 'O intuito não é ganhar dinheiro e nem coletar dados como uma big tech faz. Sem login, sem propagandas, sem distrações. Apenas você.'
      },
      feature2: {
        title: 'Veloz, e zás...',
        description: 'O processamento local mantém o Inkstone rápido e com privacidade total. Pois não usamos nenhum servidor, tudo é no seu dispositivo.',
      },
      feature3: {
        title: 'Banco de Dados Unihan',
        description: 'Uma base confiável e atualizada. Garanto que suas respostas serão precisas. ;)'
      },
      feature4: {
        title: 'Achou um bug aí?',
        description: 'Estamos em fase de desenvolvimento, mas fique tranquilo, nosso projeto é open-source, e se quiser contribuir, acesse um dos links do rodapé.'
      },
    }
  },

  generate: {
    title: 'Conversor de Hanzi para Pinyin',
    subtitle: 'Insira seu texto abaixo para converter para Pinyin',
    inputLabel: 'Texto em Hanzi',
    outputLabel: 'Texto em Pinyin',

    output: {
      copyButton: 'Copiar Texto',
      copyButtonAlt: 'Copiar o texto convertido para a área de transferência',
      copiedConfirmation: 'Texto copiado!',
      copyInactive: 'Digite um texto para habilitar a cópia.',
      copyError: 'Cópia falhou. Tente novamente mais tarde.',

      settings: {
        title: 'Configurações da Saída de Texto',
        classicPinyin: 'Acentos (pinyin Tradicional)',
        numberedPinyin: 'Números (pinyin com números de tom)',
      }
    },

    seo: {
      title: 'Gerador de pinyin e conversor de pinyin gratuito',
      description: 'Se você pesquisou por gerador de pinyin ou conversor de pinyin, o Inkstone foi feito para isso: converter textos em hanzi para pinyin com alta precisão, sem anúncios e com processamento local no seu navegador de internet (online)!',
    },
  },

  write: {
    title: 'Em Desenvolvimento',
    description: 'Estou estudando duro para trazer uma ferramenta de escrita de Hanzi em breve. Fique atento às atualizações! :D',
  },

  about: {
    hero: {
      title1: 'Simples,',
      title2: 'portanto fácil.',
      description: 'Em uma era de excesso de recursos computacionais, o Inkstone escolhe retornar ao essencial. Através de algoritmos altamente otimizados, oferecemos uma solução digital sustentável para a conversão de caracteres chineses para Pinyin.',
    },

    problem: {
      eyebrow: 'O Problema',
      title: 'Diga adeus à dependência de grandes modelos',
      description: 'Muitas soluções usam modelos muito grandes para uma tarefa simples, o que pode ser ineficiente e inacessível para muitos usuários.',

      article: {
        article1: {
          title: 'Infraestrutura pesada',
          description: 'Mais latência, desperdício de água e custo operacional para conversões básicas.'
        },

        article2: {
          title: 'Dependência de Internet',
          description: 'Sem conexão estável, o fluxo de estudo e produção é prejudicado.'
        },

        article3: {
          title: 'Complexidade desnecessária',
          description: 'Ferramentas simples ficam difíceis de manter e usar no dia a dia.'
        }
      },
      imageAlt: 'Representação gráfica 3D de uma núvem (servidor) em alto uso.'
    },

    solution: {
      eyebrow: 'A Solução',
      title: 'Aplicando a Lógica',
      titleEnphasis: 'Client-Side Rendering',
      description: 'O uso de processamento diretamente no navegador, com código leve e simples, permite um uso mais rápido e menos custoso, sem a necessidade de grandes modelos ou dependência de nuvem.',

      benefits: {
        benefit1: {
          title: 'Menos uso de dados',
          description: 'Pelo fato de que o processamento ocorre localmente, é necessário um único carregamento para o sistema inteiro funcionar.'
          /**  Ficou muito grande o texto que fiz, mas para salvar vou deixar aqui:
            Não sendo necessária a transferência de dados, o que reduz o consumo de dados
            e torna a experiência mais fluida, mesmo em conexões lentas ou instáveis.
          */
        },

        benefit2: {
          title: 'Download do site',
          description: 'O site pode ser baixado e utilizado offline, sem necessidade de conexão contínua. Pois todo o banco de dados está otimizado e embutido no código, para não ocupar muito espaço (edge computing).'
        },

        benefit3: {
          title: 'Custo operacional mínimo',
          description: 'Já que o sistema é simples e não requer infraestrutura pesada. Deixamos sem nenhum tipo de monetização, sem propagandas chatas e sem cobrança de uso de serviço.',
        }
      },
    },

    paternship: {
      eyebrow: 'A Parceria',
      title: 'Uma colaboração que cruza fronteiras',
      description: 'O Inkstone surgiu da colaboração entre a UFRN e a ZISU, unindo conhecimento técnico e linguagem para criar uma solução prática para necessidades reais.',

      ufrnTitle: 'Universidade Federal do Rio Grande do Norte - Brazil',
      ufrnAlt: 'Foto da Reitoria da UFRN',
      zisuTitle: 'Universidade de Estudos Internacionais de Zhejiang - China',
      zisuAlt: 'Foto do letreiro da ZISU',
    },

    purpose: {
      eyebrow: 'O Propósito',
      title: 'Nossa Missão: Colossenses 3:23-24',
      description: 'O que vocês fizerem façam de todo o coração, como se estivessem servindo o Senhor e não as pessoas. Lembrem que o Senhor lhes dará como recompensa aquilo que ele tem guardado para o seu povo, pois o verdadeiro Senhor que vocês servem é Cristo.',

      goal1: 'Código Aberto',
      goal2: 'ODS 4',
      goal3: 'ODS 13',
    }
  },

  notFound: {
    title: '404 - Página Não Encontrada',
    description: 'Desculpe, a página que você está procurando não existe. :/',
    homeLink: 'Voltar para a Página Inicial',
  }
}