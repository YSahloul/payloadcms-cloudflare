globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, l as Fragment } from '../chunks/astro/server_Dqw0ofGW.mjs';
import { $ as $$Layout, a as $$Header, d as $$RichTextLexical, b as $$BlockRenderer, c as $$Footer } from '../chunks/BlockRenderer_B2h9X2ZF.mjs';
import { g as getPayloadFetch, b as getPage, f as getPost, c as getHeader, d as getFooter, e as getThemeConfig } from '../chunks/payload_DdkCYgnw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const runtime = Astro2.locals.runtime;
  const fetchFn = getPayloadFetch(runtime);
  const slug = Astro2.params.slug || "home";
  let doc = await getPage(fetchFn, slug, 2);
  let collection = "pages";
  if (!doc) {
    doc = await getPost(fetchFn, slug);
    collection = "posts";
  }
  if (!doc) {
    return new Response("Not Found", { status: 404 });
  }
  const [header, footer, themeConfig] = await Promise.all([
    getHeader(fetchFn),
    getFooter(fetchFn),
    getThemeConfig(fetchFn)
  ]);
  const layout = doc?.layout || [];
  const hero = doc?.hero;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": doc?.meta?.title || doc?.title || "Payblocks", "description": doc?.meta?.description, "noIndex": doc?.meta?.noIndex, "themeConfig": themeConfig }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "header": header })} ${maybeRenderHead()}<main> ${collection === "posts" ? renderTemplate`<article class="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24"> <h1 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">${doc.title}</h1> ${doc.publishedAt && renderTemplate`<p class="text-sm text-muted-foreground mb-8"> ${new Date(doc.publishedAt).toLocaleDateString()} </p>`} ${doc.content?.root?.children?.length > 0 && renderTemplate`<div class="prose prose-lg dark:prose-invert max-w-none"> ${renderComponent($$result2, "RichTextLexical", $$RichTextLexical, { "nodes": doc.content.root.children })} </div>`} </article>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${hero && hero.designVersion !== "none" && renderTemplate`${renderComponent($$result3, "BlockRenderer", $$BlockRenderer, { "block": { ...hero, blockType: "hero" } })}`}${layout.map((block) => renderTemplate`${renderComponent($$result3, "BlockRenderer", $$BlockRenderer, { "block": block })}`)}` })}`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "footer": footer })} ` })}`;
}, "/Users/yousefsahloul/payblocks/astro/src/pages/[...slug].astro", void 0);

const $$file = "/Users/yousefsahloul/payblocks/astro/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
