import { watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useI18n } from './i18n';

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

watch(
    () => router.currentRoute.value,
    (to) => {
        const titleKey = to.meta.titleKey as string | undefined;
        const descriptionKey = to.meta.descriptionKey as string | undefined;

        if (titleKey) {
            document.title = i18n.t(titleKey) as string;
        }

        if (descriptionKey) {
            const description = i18n.t(descriptionKey) as string;
            let descriptionMeta = document.querySelector('meta[name="description"]');
            if (!descriptionMeta) {
                descriptionMeta = document.createElement('meta');
                descriptionMeta.setAttribute('name', 'description');
                document.head.appendChild(descriptionMeta);
            }
            descriptionMeta.setAttribute('content', description);
        }
    },
    { immediate: true }
);

export default router;