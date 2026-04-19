import type { MessageTree } from '@/i18n/messages/types';
import NotByAI_CN from "@/assets/CN/chinese-light.png";

export const zhMessages: MessageTree = {
    routes: {
        home: { title: '拼音生成器与拼音转换器 | Inkstone', description: '在线拼音生成器与转换器，快速将汉字转换为拼音。' },
        generate: { title: '在线拼音生成器：汉字转拼音 | Inkstone', description: '使用 Inkstone 将汉字转换为拼音，支持声调符号与数字标调。' },
        write: { title: '书写汉字 | Inkstone', description: '在 Inkstone 中练习书写汉字' },
        about: { title: '关于 | Inkstone', description: '了解 Inkstone 项目' },
        notfound: { title: '404 | Inkstone', description: '页面未找到' },
    },

    common: {
        appTitle: 'Inkstone',
        loading: '加载中...',
        languageLabel: '系统语言',
    },

    nav: {
        home: '首页',
        generate: '转换',
        write: '学习汉字',
        about: '关于项目',
    },

    bottomCard: {
        title: '准备好使用 Inkstone 了吗？',
        startButton: '立即开始',
        startButtonAlt: '前往拼音转换器',
        readButton: '查看 GitHub 仓库',
        readButtonAlt: '前往 GitHub',
    },

    footer: {
        creator: '了解开发者',
        licence: 'MIT 许可，免费使用。',
        links: {
            sourceCode: '源代码',
            reportIssue: '报告问题',
            openSource: '什么是开源？',
        },
        notByAI: NotByAI_CN,
        notByAiAlt: 'Not By AI 认证',
        ufrn: '北里奥格兰德联邦大学',
        zisu: '浙江外国语学院',
        phrases: [
            '不要停止学习！',
            '你可以做到不可思议的事情。',
            '拥抱学习的旅程。',
            '持续进步。',
            '创造令人惊叹的作品。',
            '心怀梦想，更加努力学习。',
            '你正在做得很好。',
            '光是坚持到这里，你已经领先很多人了。',
            '上帝始终是良善的。',
        ],
    },

    home: {
        hero: {
            title: '拼音生成器与汉字转拼音转换器',
            subtitle: '快速高效，环保节能',
            description: '节省准备时间。这不仅是转换工具，更是一种高效、简洁的输入体验。精准、优雅、可靠。',

            startButton: '立即体验',
            startButtonAlt: '前往拼音转换器',
            supportButton: '支持项目',
            supportButtonAlt: '打开支持页面',
        },

        features: {
            title: '为什么选择 Inkstone？',
            subtitle: '了解使用本工具的优势',

            feature1: {
                title: '无广告，无数据收集',
                description: '我们不以盈利或数据收集为目的。无需登录，无广告，无干扰，只专注于你的使用体验。'
            },
            feature2: {
                title: '快速且私密',
                description: '所有处理均在本地完成，无需服务器，保证速度与隐私。'
            },
            feature3: {
                title: '基于 Unihan 数据库',
                description: '数据可靠且持续更新，确保转换结果准确。'
            },
            feature4: {
                title: '发现问题？',
                description: '项目仍在开发中。如发现问题，欢迎通过开源社区参与改进。'
            },
        },

        seo: {
            title: '免费在线拼音生成器与转换器',
            description: '如果你正在搜索拼音生成器或拼音转换器，Inkstone 专为这项任务设计：高精度、无广告、本地浏览器处理。',
        },
    },

    generate: {
        title: '汉字转拼音',
        subtitle: '在下方输入文本进行转换',
        inputLabel: '汉字文本',
        outputLabel: '拼音结果',

        output: {
            copyButton: '复制文本',
            copyButtonAlt: '复制转换结果到剪贴板',
            copiedConfirmation: '已复制！',
            copyInactive: '请输入文本以启用复制。',
            copyError: '复制失败，请稍后重试。',

            settings: {
                title: '输出设置',
                classicPinyin: '声调符号（标准拼音）',
                numberedPinyin: '数字标调（数字拼音）',
            }
        }
    },

    write: {
        title: '开发中',
        description: '正在努力开发汉字书写功能，敬请期待！',
    },

    about: {
        hero: {
            title1: '简洁，',
            title2: '因此高效。',
            description: '在计算资源过剩的时代，Inkstone 选择回归本质。通过高效算法，为汉字转拼音提供轻量、可持续的解决方案。',
        },

        problem: {
            eyebrow: '问题',
            title: '摆脱对大型模型的依赖',
            description: '许多工具为简单任务使用复杂模型，导致效率低下且难以普及。',

            article: {
                article1: {
                    title: '高成本基础设施',
                    description: '更高延迟、资源浪费以及不必要的运营成本。'
                },

                article2: {
                    title: '依赖网络',
                    description: '网络不稳定会严重影响学习和使用体验。'
                },

                article3: {
                    title: '过度复杂',
                    description: '简单工具变得难以维护和使用。'
                }
            },
            imageAlt: '高负载服务器的3D示意图'
        },

        solution: {
            eyebrow: '解决方案',
            title: '回归逻辑本身',
            titleEnphasis: '客户端渲染',
            description: '通过浏览器本地运行轻量代码，实现更快、更低成本的使用体验，无需依赖云端或大型模型。',

            benefits: {
                benefit1: {
                    title: '减少数据使用',
                    description: '本地处理，仅需一次加载即可运行全部功能。'
                },

                benefit2: {
                    title: '支持离线使用',
                    description: '网站可下载并离线运行，数据库已优化并内嵌于代码中。'
                },

                benefit3: {
                    title: '极低运营成本',
                    description: '无需复杂基础设施，无广告，无付费限制。'
                }
            },
        },

        paternship: {
            eyebrow: '合作',
            title: '跨越国界的合作',
            description: 'Inkstone 由 UFRN 与 ZISU 合作开发，结合技术与语言优势，打造实用工具。',

            ufrnTitle: '北里奥格兰德联邦大学（巴西）',
            ufrnAlt: 'UFRN 校园照片',
            zisuTitle: '浙江外国语学院（中国）',
            zisuAlt: 'ZISU 校园照片',
        },

        purpose: {
            eyebrow: '使命',
            title: '我们的使命：歌罗西书 3:23-24',
            description: '无论做什么，都要从心里做，像是为主做的，而不是为人做的。',

            goal1: '开源',
            goal2: '可持续发展目标 4',
            goal3: '可持续发展目标 13',
        }
    },

    notFound: {
        title: '404 - 页面未找到',
        description: '抱歉，您访问的页面不存在。',
        homeLink: '返回首页',
    }
}