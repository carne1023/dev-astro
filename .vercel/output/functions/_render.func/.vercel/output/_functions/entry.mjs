import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DCDd0rgg.mjs';
import { manifest } from './manifest_B0K9oyGA.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BAKHE-8V.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DvrfSZVW.mjs')],
]);;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const _page3 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2f21cd9a-cb2a-46d1-abb3-f938cb148f18",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
