import { watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useI18n } from './i18n';
import { localeToIntl, type Locale } from './i18n/messages';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue'),
        meta: {
            titleKey: 'routes.home.title',
            descriptionKey: 'routes.home.description',
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./pages/About.vue'),
        meta: {
            titleKey: 'routes.about.title',
            descriptionKey: 'routes.about.description',
        },
    },
    {
        path: '/generate',
        alias: ['/gerador-de-pinyin', '/conversor-de-pinyin'],
        name: 'generate',
        component: () => import('./pages/Generate.vue'),
        meta: {
            titleKey: 'routes.generate.title',
            descriptionKey: 'routes.generate.description',
        },
    },
    {
        path: '/write',
        name: 'write',
        component: () => import('./pages/Write.vue'),
        meta: {
            titleKey: 'routes.write.title',
            descriptionKey: 'routes.write.description',
        },
    },
    {
        path: '/:catchAll(.*)*',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue'),
        meta: {
            titleKey: 'routes.notfound.title',
            descriptionKey: 'routes.notfound.description',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const i18n = useI18n();
const SUPPORTED_LOCALES = Object.keys(localeToIntl) as Locale[];

function getBaseUrl(): string {
    const configuredBaseUrl = import.meta.env.VITE_SITE_URL as string | undefined;
    const fallback = typeof window !== 'undefined' ? window.location.origin : '';
    return (configuredBaseUrl || fallback).replace(/\/$/, '');
}

function ensureMetaTag(
    selector: string,
    attributeName: 'name' | 'property',
    attributeValue: string
): HTMLMetaElement {
    let meta = document.querySelector(selector) as HTMLMetaElement | null;
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
    }
    return meta;
}

function ensureLinkTag(selector: string, rel: string, hreflang?: string): HTMLLinkElement {
    let link = document.querySelector(selector) as HTMLLinkElement | null;
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
    }
    return link;
}

function buildLocalizedUrl(path: string, locale: Locale): string {
    const url = new URL(path || '/', getBaseUrl());
    url.searchParams.set('lang', locale);
    return url.toString();
}

watch(
    [() => router.currentRoute.value.fullPath, () => i18n.locale.value],
    () => {
        const to = router.currentRoute.value;
        const locale = i18n.locale.value;
        const titleKey = to.meta.titleKey as string | undefined;
        const descriptionKey = to.meta.descriptionKey as string | undefined;
        const title = titleKey ? (i18n.t(titleKey) as string) : 'Inkstone';
        const description = descriptionKey
            ? (i18n.t(descriptionKey) as string)
            : 'Inkstone Hanzi to Pinyin converter.';
        const canonicalUrl = buildLocalizedUrl(to.path, locale);
        const ogImageUrl = new URL('/yang_icon.webp', getBaseUrl()).toString();

        document.title = title;

        const descriptionMeta = ensureMetaTag('meta[name="description"]', 'name', 'description');
        descriptionMeta.setAttribute('content', description);

        const canonicalLink = ensureLinkTag('link[rel="canonical"]', 'canonical');
        canonicalLink.setAttribute('href', canonicalUrl);

        SUPPORTED_LOCALES.forEach((supportedLocale) => {
            const hreflang = localeToIntl[supportedLocale];
            const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
            const alternateLink = ensureLinkTag(selector, 'alternate', hreflang);
            alternateLink.setAttribute('href', buildLocalizedUrl(to.path, supportedLocale));
        });

        const xDefaultLink = ensureLinkTag('link[rel="alternate"][hreflang="x-default"]', 'alternate', 'x-default');
        xDefaultLink.setAttribute('href', buildLocalizedUrl(to.path, 'en'));

        ensureMetaTag('meta[property="og:type"]', 'property', 'og:type').setAttribute('content', 'website');
        ensureMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name').setAttribute('content', 'Inkstone');
        ensureMetaTag('meta[property="og:title"]', 'property', 'og:title').setAttribute('content', title);
        ensureMetaTag('meta[property="og:description"]', 'property', 'og:description').setAttribute('content', description);
        ensureMetaTag('meta[property="og:url"]', 'property', 'og:url').setAttribute('content', canonicalUrl);
        ensureMetaTag('meta[property="og:image"]', 'property', 'og:image').setAttribute('content', ogImageUrl);
        ensureMetaTag('meta[property="og:locale"]', 'property', 'og:locale').setAttribute('content', localeToIntl[locale]);

        ensureMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card').setAttribute('content', 'summary_large_image');
        ensureMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title').setAttribute('content', title);
        ensureMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description').setAttribute('content', description);
        ensureMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image').setAttribute('content', ogImageUrl);
    },
    { immediate: true }
);

export default router;