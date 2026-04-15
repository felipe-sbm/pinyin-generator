import type { MessageTree } from '@/i18n/messages/types';
import NotByAI_BR from "@/assets/BR/portuguese-light.png";

export const enMessages: MessageTree = {
    routes: {
        home: { title: 'Home | Inkstone', description: 'Inkstone homepage' },
        generate: { title: 'Hanzi to Pinyin Converter | Inkstone', description: 'Convert Hanzi to Pinyin with Inkstone.' },
        write: { title: 'Write Hanzi | Inkstone', description: 'Practice writing Hanzi with Inkstone.' },
        about: { title: 'About | Inkstone', description: 'Learn more about Inkstone.' },
        notfound: { title: '404 | Inkstone', description: 'Page not found.' },
    },

    common: {
        appTitle: 'Inkstone',
        loading: 'Loading...',
        languageLabel: 'System language',
    },

    nav: {
        home: 'Home',
        generate: 'Converter',
        write: 'Learn Hanzi',
        about: 'About',
    },

    bottomCard: {
        title: 'Ready to use Inkstone?',
        startButton: 'Get Started',
        startButtonAlt: 'Go to the Pinyin generator',
        readButton: 'View GitHub Repository',
        readButtonAlt: 'Go to GitHub',
    },

    footer: {
        creator: 'Meet the developer',
        licence: 'MIT License, free to use.',
        links: {
            sourceCode: 'Source code',
            reportIssue: 'Report an issue',
            openSource: 'What is open source?',
        },
        notByAI: NotByAI_BR,
        notByAiAlt: 'Not By AI certificate',
        ufrn: 'Federal University of Rio Grande do Norte',
        zisu: 'Zhejiang International Studies University',
        phrases: [
            'Never stop learning!',
            'You are capable of amazing things.',
            'Embrace the journey.',
            'Keep learning.',
            'Build something amazing.',
            'Dream big, study harder.',
            'You are doing a great job.',
            'Just by being here, you are already ahead of many.',
            'God is good all the time.',
        ],
    },

    home: {
        hero: {
            title: 'The Best Hanzi to Pinyin Converter',
            subtitle: 'Fast, efficient, and eco-friendly',
            description: 'Save time on preparation. More than just a converter — a streamlined and efficient typing experience. Precise, minimal, and elegant.',

            startButton: 'Try it now',
            startButtonAlt: 'Go to the Pinyin generator',
            supportButton: 'Support the project',
            supportButtonAlt: 'Open support page',
        },

        features: {
            title: 'Why use Inkstone?',
            subtitle: 'Discover the benefits of using our tool.',

            feature1: {
                title: 'No ads, no data collection',
                description: 'We are not here to monetize or collect your data. No login, no ads, no distractions. Just you and the tool.'
            },
            feature2: {
                title: 'Fast and private',
                description: 'All processing happens locally. No servers involved — ensuring speed and full privacy.',
            },
            feature3: {
                title: 'Powered by Unihan database',
                description: 'A reliable and up-to-date dataset ensures accurate results.'
            },
            feature4: {
                title: 'Found a bug?',
                description: 'The project is still in development. Feel free to contribute through our open-source links in the footer.'
            },
        }
    },

    generate: {
        title: 'Hanzi to Pinyin Converter',
        subtitle: 'Enter your text below to convert it into Pinyin',
        inputLabel: 'Hanzi text',
        outputLabel: 'Pinyin output',

        output: {
            copyButton: 'Copy text',
            copyButtonAlt: 'Copy converted text to clipboard',
            copiedConfirmation: 'Copied!',
            copyInactive: 'Enter text to enable copying.',
            copyError: 'Copy failed. Please try again later.',

            settings: {
                title: 'Output settings',
                classicPinyin: 'Tone marks (standard Pinyin)',
                numberedPinyin: 'Numbered tones',
            }
        }
    },

    write: {
        title: 'Coming soon',
        description: 'We are working hard to bring Hanzi writing features soon. Stay tuned!',
    },

    about: {
        hero: {
            title1: 'Simple,',
            title2: 'therefore powerful.',
            description: 'In an era of excessive computing resources, Inkstone chooses to return to the essentials. Through highly optimized algorithms, we provide a lightweight and sustainable solution for converting Chinese characters into Pinyin.',
        },

        problem: {
            eyebrow: 'The Problem',
            title: 'Say goodbye to oversized models',
            description: 'Many solutions rely on large-scale models for simple tasks, making them inefficient and inaccessible.',

            article: {
                article1: {
                    title: 'Heavy infrastructure',
                    description: 'Higher latency, resource waste, and unnecessary operational costs.'
                },

                article2: {
                    title: 'Internet dependency',
                    description: 'Unstable connections can disrupt your workflow and learning experience.'
                },

                article3: {
                    title: 'Unnecessary complexity',
                    description: 'Simple tools become harder to maintain and use daily.'
                }
            },
            imageAlt: '3D representation of a heavily loaded cloud server.'
        },

        solution: {
            eyebrow: 'The Solution',
            title: 'Applying logic',
            titleEnphasis: 'Client-Side Rendering',
            description: 'Running lightweight code directly in the browser enables faster and more efficient usage, without relying on cloud infrastructure or large models.',

            benefits: {
                benefit1: {
                    title: 'Reduced data usage',
                    description: 'Local processing means a single load is enough to run the entire system.'
                },

                benefit2: {
                    title: 'Offline support',
                    description: 'The site can be downloaded and used offline, with all data embedded and optimized.'
                },

                benefit3: {
                    title: 'Minimal operational cost',
                    description: 'No heavy infrastructure, no ads, and no usage fees.'
                }
            },
        },

        paternship: {
            eyebrow: 'Partnership',
            title: 'A collaboration across borders',
            description: 'Inkstone was born from the collaboration between UFRN and ZISU, combining technical and linguistic expertise to solve real-world needs.',

            ufrnTitle: 'Federal University of Rio Grande do Norte - Brazil',
            ufrnAlt: 'Photo of UFRN campus',
            zisuTitle: 'Zhejiang International Studies University - China',
            zisuAlt: 'Photo of ZISU campus',
        },

        purpose: {
            eyebrow: 'Purpose',
            title: 'Our Mission: Colossians 3:23-24',
            description: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.',

            goal1: 'Open Source',
            goal2: 'SDG 4',
            goal3: 'SDG 13',
        }
    },

    notFound: {
        title: '404 - Page not found',
        description: 'Sorry, the page you are looking for does not exist.',
        homeLink: 'Back to homepage',
    }
}