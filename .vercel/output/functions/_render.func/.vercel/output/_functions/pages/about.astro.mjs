/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../chunks/astro/server_TH2vWb-v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CxwzhoI5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." })}`;
}, "C:/Users/Fiben/new-astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/Fiben/new-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
