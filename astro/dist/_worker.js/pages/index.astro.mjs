globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Dqw0ofGW.mjs';
import { $ as $$Layout, a as $$Header, b as $$BlockRenderer, c as $$Footer } from '../chunks/BlockRenderer_B2h9X2ZF.mjs';
import { g as getPayloadFetch, b as getPage, c as getHeader, d as getFooter, e as getThemeConfig } from '../chunks/payload_DdkCYgnw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const runtime = Astro2.locals.runtime;
  const fetchFn = getPayloadFetch(runtime);
  const [page, header, footer, themeConfig] = await Promise.all([
    getPage(fetchFn, "home", 2),
    getHeader(fetchFn),
    getFooter(fetchFn),
    getThemeConfig(fetchFn)
  ]);
  const layout = page?.layout || [];
  const hero = page?.hero;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page?.meta?.title || page?.title || "Payblocks", "description": page?.meta?.description, "noIndex": page?.meta?.noIndex, "themeConfig": themeConfig }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "header": header })} ${maybeRenderHead()}<main>  ${hero && hero.designVersion !== "none" && renderTemplate`${renderComponent($$result2, "BlockRenderer", $$BlockRenderer, { "block": { ...hero, blockType: "hero" } })}`}  ${layout.map((block) => renderTemplate`${renderComponent($$result2, "BlockRenderer", $$BlockRenderer, { "block": block })}`)} </main> ${renderComponent($$result2, "Footer", $$Footer, { "footer": footer })} ` })}`;
}, "/Users/yousefsahloul/payblocks/astro/src/pages/index.astro", void 0);

const $$file = "/Users/yousefsahloul/payblocks/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
