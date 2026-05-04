globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, g as addAttribute, r as renderTemplate, u as unescapeHTML, n as renderHead, o as renderSlot, h as createAstro, m as maybeRenderHead, k as renderComponent, l as Fragment } from './astro/server_Dqw0ofGW.mjs';
/* empty css                          */

const $$Astro$s = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Payblocks",
    description = "",
    noIndex = false,
    ogImage,
    themeConfig
  } = Astro2.props;
  new URL(Astro2.request.url).origin;
  const regular = themeConfig?.regularColors;
  const dark = themeConfig?.darkmodeColors;
  const themeStyle = regular ? `:root {
  --radius: ${themeConfig.radius ?? "0.5rem"};

  --background: ${regular.background ?? "hsl(0, 0%, 100%)"};
  --foreground: ${regular.foreground ?? "hsl(222.2, 84%, 4.9%)"};
  --card: ${regular.card ?? "hsl(240, 5%, 96%)"};
  --card-foreground: ${regular["card-foreground"] ?? "hsl(222.2, 84%, 4.9%)"};

  --popover: ${regular.popover ?? "hsl(0, 0%, 100%)"};
  --popover-foreground: ${regular["popover-foreground"] ?? "hsl(222.2, 84%, 4.9%)"};

  --primary: ${regular.primary ?? "hsl(222.2, 47.4%, 11.2%)"};
  --primary-foreground: ${regular["primary-foreground"] ?? "hsl(210, 40%, 98%)"};

  --secondary: ${regular.secondary ?? "hsl(210, 40%, 96.1%)"};
  --secondary-foreground: ${regular["secondary-foreground"] ?? "hsl(222.2, 47.4%, 11.2%)"};

  --muted: ${regular.muted ?? "hsl(210, 40%, 96.1%)"};
  --muted-foreground: ${regular["muted-foreground"] ?? "hsl(215.4, 16.3%, 46.9%)"};

  --accent: ${regular.accent ?? "hsl(210, 40%, 96.1%)"};
  --accent-foreground: ${regular["accent-foreground"] ?? "hsl(222.2, 47.4%, 11.2%)"};

  --destructive: ${regular.destructive ?? "hsl(0, 84.2%, 60.2%)"};
  --destructive-foreground: ${regular["destructive-foreground"] ?? "hsl(210, 40%, 98%)"};

  --border: ${regular.border ?? "hsl(240, 6%, 90%)"};
  --input: ${regular.input ?? "hsl(214.3, 31.8%, 91.4%)"};
  --ring: ${regular["ring-3"] ?? "hsl(222.2, 84%, 4.9%)"};

  --success: ${regular.success ?? "hsl(196, 52%, 74%)"};
  --warning: ${regular.warning ?? "hsl(34, 89%, 85%)"};
  --error: ${regular.error ?? "hsl(10, 100%, 86%)"};

  --chart-1: ${regular["chart-1"] ?? "hsl(12, 76%, 61%)"};
  --chart-2: ${regular["chart-2"] ?? "hsl(173, 58%, 39%)"};
  --chart-3: ${regular["chart-3"] ?? "hsl(197, 37%, 24%)"};
  --chart-4: ${regular["chart-4"] ?? "hsl(43, 74%, 66%)"};
  --chart-5: ${regular["chart-5"] ?? "hsl(27, 87%, 67%)"};

  --muted2: ${regular.muted2 ?? "hsl(0, 0%, 91%)"};
  --muted2-foreground: ${regular["muted2-foreground"] ?? "hsl(240, 3.8%, 46.1%)"};
}` + (dark?.enableDarkMode ? `

[data-theme='dark'] {
  --background: ${dark.background ?? "hsl(0, 0%, 0%)"};
  --foreground: ${dark.foreground ?? "hsl(210, 40%, 98%)"};
  --card: ${dark.card ?? "hsl(240, 6%, 10%)"};
  --card-foreground: ${dark["card-foreground"] ?? "hsl(210, 40%, 98%)"};

  --popover: ${dark.popover ?? "hsl(222.2 84%, 4.9%)"};
  --popover-foreground: ${dark["popover-foreground"] ?? "hsl(210, 40%, 98%)"};

  --primary: ${dark.primary ?? "hsl(210, 40%, 98%)"};
  --primary-foreground: ${dark["primary-foreground"] ?? "hsl(222.2 47.4%, 11.2%)"};

  --secondary: ${dark.secondary ?? "hsl(217.2 32.6%, 17.5%)"};
  --secondary-foreground: ${dark["secondary-foreground"] ?? "hsl(210, 40%, 98%)"};

  --muted: ${dark.muted ?? "hsl(217.2 32.6%, 17.5%)"};
  --muted-foreground: ${dark["muted-foreground"] ?? "hsl(215, 20.2%, 65.1%)"};

  --accent: ${dark.accent ?? "hsl(217.2 32.6%, 17.5%)"};
  --accent-foreground: ${dark["accent-foreground"] ?? "hsl(210, 40%, 98%)"};

  --destructive: ${dark.destructive ?? "hsl(0, 62.8%, 30.6%)"};
  --destructive-foreground: ${dark["destructive-foreground"] ?? "hsl(210, 40%, 98%)"};

  --border: ${dark.border ?? "hsl(240, 4%, 16%)"};
  --input: ${dark.input ?? "hsl(217.2 32.6%, 17.5%)"};
  --ring: ${dark["ring-3"] ?? "hsl(212.7 26.8%, 83.9%)"};

  --success: ${dark.success ?? "hsl(196, 100%, 14%)"};
  --warning: ${dark.warning ?? "hsl(34, 51%, 25%)"};
  --error: ${dark.error ?? "hsl(10, 39%, 43%)"};
}` : "") : "";
  return renderTemplate`<html lang="en" data-theme="light"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}${noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<meta property="og:title"${addAttribute(title, "content")}>${description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`}${ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}<meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.request.url, "content")}><link rel="icon" href="/favicon.ico">${themeStyle && renderTemplate`<style id="theme-config">${unescapeHTML(themeStyle)}</style>`}${renderHead()}</head> <body class="min-h-screen bg-background text-foreground antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/yousefsahloul/payblocks/astro/src/layouts/Layout.astro", void 0);

const COLORED_BACKGROUNDS = /* @__PURE__ */ new Set([
  "primary",
  "secondary",
  "accent",
  "destructive",
  "muted",
  "card",
  "popover",
  "success",
  "warning",
  "error"
]);
function sectionSpacingClass(spacing, defaultSpacing = "default") {
  const v = spacing || defaultSpacing;
  return {
    none: "py-0",
    compact: "py-16 md:py-20",
    default: "py-20 md:py-28 lg:py-32",
    large: "py-24 md:py-32 lg:py-40",
    xl: "py-32 md:py-40 lg:py-48"
  }[v] ?? "py-20 md:py-28 lg:py-32";
}
function autoContrastText(backgroundColor) {
  if (!backgroundColor || backgroundColor === "transparent") return "text-foreground";
  if (COLORED_BACKGROUNDS.has(backgroundColor)) return `text-${backgroundColor}-foreground`;
  if (backgroundColor === "background") return "text-foreground";
  if (backgroundColor === "foreground") return "text-background";
  if (backgroundColor === "border" || backgroundColor === "input" || backgroundColor === "ring-3")
    return "text-foreground";
  if (backgroundColor.startsWith("chart-")) return "text-foreground";
  if (backgroundColor === "muted2") return "text-muted2-foreground";
  return "text-foreground";
}
function proseContrastClass(backgroundColor) {
  if (!backgroundColor || backgroundColor === "transparent") return "";
  if (COLORED_BACKGROUNDS.has(backgroundColor)) return "prose-invert";
  if (backgroundColor === "foreground") return "prose-invert";
  return "";
}
function resolveMediaUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//.test(url)) return url;
  const origin = "https://payblocks-cms.agenticflows.workers.dev";
  return `${origin}${url.startsWith("/") ? url : `/${url}`}`;
}
function resolveLinkUrl(link) {
  if (!link) return "#";
  if (link.type === "reference" && link.reference?.value) {
    const ref = link.reference.value;
    if (typeof ref === "object" && ref !== null) {
      const breadcrumbs = ref.breadcrumbs;
      if (breadcrumbs && breadcrumbs.length > 0) {
        const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
        if (lastCrumb?.url) {
          const base = lastCrumb.url;
          return link.section ? `${base}#${link.section}` : base;
        }
      }
      const slug = ref.slug;
      if (slug) return slug === "home" ? "/" : `/${slug}`;
    }
  }
  if (link.type === "custom" && link.url) {
    return link.url;
  }
  return link.url ?? "#";
}
function buildButtonClasses(appearance, size) {
  if (appearance === "inline") {
    return "text-primary underline-offset-4 hover:underline";
  }
  const baseClass = {
    default: "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90",
    primary: "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground",
    secondary: "inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
  }[appearance ?? "default"] ?? "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90";
  const sizeClass = {
    default: "h-10 px-4 py-2 text-sm font-medium",
    sm: "h-9 px-3 text-xs",
    lg: "h-11 px-8 text-base",
    icon: "h-10 w-10",
    clear: ""
  }[size ?? "default"] ?? "h-10 px-4 py-2 text-sm font-medium";
  return [baseClass, sizeClass].filter(Boolean).join(" ");
}

const $$Astro$r = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Header;
  const { header } = Astro2.props;
  const logo = header?.logo;
  const items = header?.items || [];
  const buttons = header?.buttons || [];
  return renderTemplate`${maybeRenderHead()}<header class="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50"> <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> <div class="flex h-16 items-center justify-between">  <a href="/" class="flex items-center gap-2"> ${logo?.url ? renderTemplate`<img${addAttribute(logo.url, "src")}${addAttribute(logo.alt || "Logo", "alt")} class="h-8 w-auto" loading="eager">` : renderTemplate`<span class="text-xl font-bold">Payblocks</span>`} </a>  <nav class="hidden md:flex items-center gap-6"> ${items.map((item) => {
    if (item.blockType === "link") {
      return renderTemplate`<a${addAttribute(resolveLinkUrl(item.link), "href")} class="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"> ${item.link?.label} </a>`;
    }
    if (item.blockType === "sub") {
      return renderTemplate`<div class="relative group"> <span class="text-sm font-medium text-foreground/80 hover:text-foreground cursor-pointer transition-colors"> ${item.label} </span> ${item.subitems?.length > 0 && renderTemplate`<div class="absolute top-full left-0 mt-2 w-56 rounded-lg border bg-popover p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"> ${item.subitems.map((sub) => renderTemplate`<a${addAttribute(resolveLinkUrl(sub.link), "href")} class="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"> <span class="font-medium">${sub.link?.label}</span> ${sub.Description && renderTemplate`<span class="block text-xs text-muted-foreground">${sub.Description}</span>`} </a>`)} </div>`} </div>`;
    }
    return null;
  })} </nav>  <div class="flex items-center gap-3"> ${buttons.map((btn) => renderTemplate`<a${addAttribute(resolveLinkUrl(btn.link), "href")}${addAttribute([
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
    btn.link?.appearance === "outline" ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground" : btn.link?.appearance === "ghost" ? "hover:bg-accent hover:text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"
  ], "class:list")}> ${btn.link?.label} </a>`)} </div> </div> </div> </header>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/Header.astro", void 0);

const $$Astro$q = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Footer;
  const { footer } = Astro2.props;
  const logo = footer?.logo;
  const copyright = footer?.copyright;
  const navItems = footer?.navItems || [];
  const legalLinks = footer?.legalLinks || [];
  const socialLinks = footer?.socialLinks || [];
  return renderTemplate`${maybeRenderHead()}<footer class="border-t bg-muted"> <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16"> <div class="grid gap-8 md:grid-cols-4">  <div class="md:col-span-1"> ${logo?.url ? renderTemplate`<img${addAttribute(logo.url, "src")} alt="Logo" class="h-8 w-auto mb-4" loading="lazy">` : renderTemplate`<span class="text-lg font-bold mb-4 block">Payblocks</span>`} ${copyright && renderTemplate`<p class="text-sm text-muted-foreground">${copyright}</p>`} </div>  ${navItems.map((col) => renderTemplate`<div> <h3 class="text-sm font-semibold mb-3">${col.title}</h3> <ul class="space-y-2"> ${col.subNavItems?.map((item) => renderTemplate`<li> <a${addAttribute(resolveLinkUrl(item.link), "href")} class="text-sm text-muted-foreground hover:text-foreground transition-colors"> ${item.link?.label} </a> </li>`)} </ul> </div>`)} </div>  <div class="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">  <div class="flex flex-wrap gap-4"> ${legalLinks.map((item) => renderTemplate`<a${addAttribute(resolveLinkUrl(item.link), "href")} class="text-sm text-muted-foreground hover:text-foreground transition-colors"> ${item.link?.label} </a>`)} </div>  <div class="flex gap-4"> ${socialLinks.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground transition-colors"> ${item.socialIcon || "\u{1F517}"} </a>`)} </div> </div> </div> </footer>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/Footer.astro", void 0);

const $$Astro$p = createAstro();
const $$SectionShell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$SectionShell;
  const {
    bg,
    spacing,
    defaultSpacing = "default",
    class: innerClass,
    sectionClass,
    id,
    fullWidth = false
  } = Astro2.props;
  const bgClass = bg && bg !== "transparent" ? `bg-${bg}` : "";
  const textClass = autoContrastText(bg);
  const spacingClass = sectionSpacingClass(spacing, defaultSpacing);
  const containerClass = fullWidth ? "mx-auto px-4 sm:px-6 lg:px-8" : "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([bgClass, textClass, sectionClass], "class:list")}${addAttribute(id, "id")}> <div${addAttribute([containerClass, spacingClass, innerClass], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/SectionShell.astro", void 0);

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function serializeLexical(nodes, overrideStyle, _parentType) {
  if (!Array.isArray(nodes)) return "";
  return nodes.map((node) => serializeNode(node, overrideStyle)).join("");
}
function getOverrideClass(nodeType, overrideStyle) {
  if (!overrideStyle) return "";
  const cls = overrideStyle[nodeType];
  return cls ? ` class="${cls}"` : "";
}
function serializeNode(node, overrideStyle) {
  if (!node) return "";
  switch (node.type) {
    case "text":
      return serializeTextNode(node);
    case "paragraph":
      return `<p${getOverrideClass("p", overrideStyle)}>${serializeLexical(node.children, overrideStyle)}</p>`;
    case "heading":
      return `<${node.tag}${getOverrideClass(node.tag, overrideStyle)}>${serializeLexical(node.children, overrideStyle)}</${node.tag}>`;
    case "list": {
      const tag = node.listType === "number" ? "ol" : "ul";
      return `<${tag}>${serializeLexical(node.children, overrideStyle)}</${tag}>`;
    }
    case "listitem":
      return `<li>${serializeLexical(node.children, overrideStyle)}</li>`;
    case "link": {
      const rel = node.fields?.newTab ? "noopener noreferrer" : void 0;
      const target = node.fields?.newTab ? "_blank" : void 0;
      const href = node.fields?.url || node.fields?.doc?.value?.slug || "#";
      return `<a href="${href}"${rel ? ` rel="${rel}"` : ""}${target ? ` target="${target}"` : ""}>${serializeLexical(node.children, overrideStyle)}</a>`;
    }
    case "quote":
      return `<blockquote>${serializeLexical(node.children, overrideStyle)}</blockquote>`;
    case "linebreak":
      return "<br>";
    case "upload":
      return serializeUploadNode(node);
    case "block":
      return serializeBlockNode(node, overrideStyle);
    default:
      if (node.children) {
        return serializeLexical(node.children, overrideStyle, node.type);
      }
      return "";
  }
}
function serializeTextNode(node) {
  let text = escapeHtml(node.text || "");
  if (node.format & 1) text = `<strong>${text}</strong>`;
  if (node.format & 2) text = `<em>${text}</em>`;
  if (node.format & 8) text = `<u>${text}</u>`;
  if (node.format & 16) text = `<s>${text}</s>`;
  if (node.format & 4) text = `<code>${text}</code>`;
  if (node.format & 64) text = `<sub>${text}</sub>`;
  if (node.format & 128) text = `<sup>${text}</sup>`;
  return text;
}
function serializeUploadNode(node) {
  const value = node.value || node.fields?.value;
  if (!value) return "";
  const url = typeof value.url === "string" ? value.url : typeof value.filename === "string" ? `/api/media/file/${value.filename}` : "";
  const alt = value.alt || "";
  const width = value.width;
  const height = value.height;
  if (value.mimeType?.startsWith("image/")) {
    return `<img src="${url}" alt="${escapeHtml(alt)}"${width ? ` width="${width}"` : ""}${height ? ` height="${height}"` : ""} loading="lazy">`;
  }
  if (value.mimeType?.startsWith("video/")) {
    return `<video src="${url}" controls></video>`;
  }
  return `<a href="${url}" download>${escapeHtml(value.filename || "Download")}</a>`;
}
function serializeBlockNode(node, overrideStyle) {
  const fields = node.fields || {};
  const blockType = fields.blockType;
  if (blockType === "banner") {
    const style = fields.style || "info";
    const styleClass = {
      info: "border-blue-200 bg-blue-50 text-blue-900",
      warning: "border-yellow-200 bg-yellow-50 text-yellow-900",
      error: "border-red-200 bg-red-50 text-red-900",
      success: "border-green-200 bg-green-50 text-green-900"
    }[style] || "border-blue-200 bg-blue-50 text-blue-900";
    return `<div class="rounded-md border px-4 py-3 ${styleClass}">${serializeLexical(fields.content?.root?.children || [], overrideStyle)}</div>`;
  }
  return "";
}

const $$Astro$o = createAstro();
const $$RichTextLexical = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$RichTextLexical;
  const { nodes, overrideStyle } = Astro2.props;
  const html = serializeLexical(nodes, overrideStyle);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/richtext/RichTextLexical.astro", void 0);

const $$Astro$n = createAstro();
const $$Component$m = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Component$m;
  const {
    backgroundColor,
    designVersion,
    badge,
    badgeIcon,
    tagline,
    richText,
    links,
    images,
    icons,
    statsItems,
    presentationVideo
  } = Astro2.props;
  const variant = designVersion || "1";
  const nodes = richText?.root?.children || [];
  const bg = backgroundColor && backgroundColor !== "transparent" ? `bg-${backgroundColor}` : "bg-background";
  const text = !backgroundColor || backgroundColor === "transparent" || backgroundColor === "background" ? "text-foreground" : backgroundColor === "foreground" ? "text-background" : `text-${backgroundColor}-foreground`;
  return renderTemplate`${variant === "220" && renderTemplate`${maybeRenderHead()}<section class="relative min-h-[82vh] overflow-hidden bg-black text-white">${presentationVideo?.videoUrl ? renderTemplate`<video class="absolute inset-0 size-full object-cover"${addAttribute(presentationVideo.videoUrl, "src")} autoplay muted loop playsinline preload="metadata"></video>` : images?.[0]?.url ? renderTemplate`<img${addAttribute(resolveMediaUrl(images[0].url), "src")}${addAttribute(images[0].alt || "", "alt")} class="absolute inset-0 size-full object-cover" loading="eager" decoding="async">` : renderTemplate`<div class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950"></div>`}<div class="absolute inset-0 bg-black/55"></div><div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div><div class="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:px-8 lg:py-24">${tagline && renderTemplate`<p class="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-orange-400">${tagline}</p>`}${nodes.length > 0 && renderTemplate`<div class="max-w-4xl">${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h1: "max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl",
    p: "mt-6 max-w-2xl text-lg font-medium text-white/85 md:text-xl"
  } })}</div>`}${Array.isArray(links) && links.length > 0 && renderTemplate`<div class="mt-8 flex flex-col gap-3 sm:flex-row">${links.map(({ link }, i) => renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    i === 0 ? "inline-flex h-12 items-center justify-center rounded-none bg-orange-500 px-8 text-sm font-black uppercase tracking-wide text-white hover:bg-orange-600" : "inline-flex h-12 items-center justify-center rounded-none border-2 border-white bg-transparent px-8 text-sm font-black uppercase tracking-wide text-white hover:bg-white hover:text-black",
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`)}</div>`}</div></section>`}${variant === "112" && renderTemplate`<section class="bg-background py-12 md:py-32"><div class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div class="flex flex-col gap-6 md:max-w-2xl">${nodes.length > 0 && renderTemplate`<div class="flex flex-col gap-6">${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h1: "text-4xl leading-tight font-medium lg:text-6xl",
    p: "text-lg text-muted-foreground lg:max-w-[80%]"
  } })}</div>`}<div class="relative z-10 flex flex-wrap items-center gap-6">${Array.isArray(links) && links.length > 0 && links.map(({ link }, i) => renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute(buildButtonClasses(link?.appearance || "default", link?.size || "default"), "class")}>${link?.label}</a>`)}${presentationVideo?.label && renderTemplate`<a${addAttribute(presentationVideo?.videoUrl || "#", "href")} target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2 hover:bg-transparent"><div class="flex h-10 w-10 rounded-full bg-orange-500 transition-transform group-hover:scale-110 text-white text-sm font-bold"><span class="m-auto">▶</span></div><div>${presentationVideo.label || "Presentation Video"}</div></a>`}</div></div><div><div class="relative mx-auto mt-28 h-[21.25rem] w-[21.25rem] rounded-full bg-orange-300 md:mx-0 md:mt-0 lg:h-[25rem] lg:w-[25rem]"><div class="absolute bottom-0 left-1/2 w-[21.25rem] -translate-x-1/2 overflow-hidden rounded-b-full lg:w-[25rem]">${images && images.length > 0 && images[0]?.url && renderTemplate`<img${addAttribute(images[0].url, "src")}${addAttribute(images[0].alt || "", "alt")} class="w-full translate-y-14 scale-90 object-cover object-center" loading="eager" decoding="async">`}</div><div class="absolute -right-5 bottom-10 flex w-70 items-center justify-center gap-1 rounded-full bg-white px-4 py-3 shadow-md"><div class="flex -space-x-3.5">${icons && icons.length > 0 ? icons.slice(0, 3).map((icon, i) => renderTemplate`<div class="flex h-12 w-12 shrink-0 rounded-full border-4 border-white overflow-hidden bg-muted items-center justify-center">${icon?.url ? renderTemplate`<img${addAttribute(icon.url, "src")} alt="" class="h-full w-full object-cover" loading="lazy">` : renderTemplate`<span class="text-xs font-semibold">${String.fromCharCode(65 + i)}</span>`}</div>`) : [0, 1, 2].map((_, i) => renderTemplate`<div class="flex h-12 w-12 shrink-0 rounded-full border-4 border-white bg-muted items-center justify-center"><span class="text-xs font-semibold">${String.fromCharCode(65 + i)}</span></div>`)}</div><div class="flex-1 text-sm text-gray-800">${tagline || "7000+ people already joined"}</div></div><div class="bg-primary absolute top-0 right-0 flex h-25 w-25 rotate-12 rounded-3xl border-8 border-white text-primary-foreground lg:h-[6.875rem] lg:w-[6.875rem]"><span class="m-auto text-3xl">📘</span></div><div class="bg-primary absolute top-1/3 -left-10 flex h-25 w-25 -rotate-12 rounded-3xl border-8 border-white text-primary-foreground lg:h-[6.875rem] lg:w-[6.875rem]"><span class="m-auto text-3xl">✏️</span></div></div></div></div>${Array.isArray(statsItems) && statsItems.length > 0 && renderTemplate`<div class="mt-20 rounded-3xl border p-6"><div class="flex w-full flex-col md:flex-row">${statsItems.map((item, index) => renderTemplate`<div${addAttribute([
    "flex flex-1 flex-col gap-3 p-6",
    index < statsItems.length - 1 && "border-b md:border-r md:border-b-0"
  ], "class:list")}><div class="text-primary text-2xl font-medium lg:text-4xl">${item.value}</div><div class="text-muted-foreground lg:text-lg">${item.title}</div></div>`)}</div></div>`}</div></section>`}${(variant === "1" || variant === "none" || !["112", "220"].includes(variant)) && renderTemplate`<section${addAttribute(["py-32", bg, text], "class:list")}><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="grid items-center gap-8 lg:grid-cols-2"><div class="flex flex-col items-center text-center lg:items-start lg:text-left">${badge && renderTemplate`<div class="inline-flex items-center rounded-full border px-3 py-1 text-sm"><span>${badge}</span>${badgeIcon && renderTemplate`<span class="ml-2 text-xs">${badgeIcon}</span>`}</div>`}${nodes.length > 0 && renderTemplate`<div class="flex flex-col items-center text-center lg:items-start lg:text-left">${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h1: "my-6 text-pretty text-4xl font-bold lg:text-6xl",
    p: "mb-8 max-w-xl text-muted-foreground lg:text-xl"
  } })}</div>`}${Array.isArray(links) && links.length > 0 && renderTemplate`<div class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">${links.map(({ link }, i) => renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    buildButtonClasses(link?.appearance || "default", link?.size || "default"),
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`)}</div>`}</div>${images && images.length > 0 && images[0]?.url && renderTemplate`<img${addAttribute(images[0].url, "src")}${addAttribute(images[0].alt || "", "alt")} class="max-h-96 w-full rounded-md object-cover" loading="eager" decoding="async">`}</div></div></section>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Hero/Component.astro", void 0);

const $$Astro$m = createAstro();
const $$Component$l = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Component$l;
  const { richText, links, designVersion, icon, image, title } = Astro2.props;
  const variant = designVersion || "CTA1";
  const nodes = richText?.root?.children || [];
  const headingTypes = /* @__PURE__ */ new Set(["h2", "h3", "h4"]);
  let firstNode = [];
  let restNodes = [];
  let foundHeading = false;
  for (const node of nodes) {
    if (!foundHeading && node?.type === "heading" && headingTypes.has(node?.tag)) {
      firstNode = [node];
      foundHeading = true;
      continue;
    }
    if (foundHeading) {
      restNodes.push(node);
    }
  }
  const fullRichText = richText?.root?.children?.length > 0;
  const firstHeading = firstNode.length > 0;
  const rest = restNodes.length > 0;
  function hrefFor(link) {
    return resolveLinkUrl(link);
  }
  return renderTemplate`${variant === "CTA6" && renderTemplate`${maybeRenderHead()}<div class="border-border bg-accent max-w-full overflow-hidden border-y pt-10 md:pt-16 lg:pt-20"><div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:space-x-12"><div class="mb-72 md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">${fullRichText && renderTemplate`<div>${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h2: "mb-3 text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-6",
    h3: "mb-3 text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-6",
    p: "text-muted-foreground lg:text-lg mb-8"
  } })}</div>`}<div class="flex shrink-0 flex-col gap-2 sm:flex-row">${Array.isArray(links) && links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${links.map(({ link }, i) => renderTemplate`<a${addAttribute(hrefFor(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    buildButtonClasses(link?.appearance || "default", link?.size || "default"),
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`)}` })}`}</div></div><div class="absolute right-1/2 bottom-0 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:size-full xl:max-w-full"><div class="relative aspect-[8/5] size-full min-h-64"><div class="bg-background shadow-foreground/20 absolute top-0 right-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center rounded-3xl text-clip shadow-lg md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%]"></div><div class="bg-background shadow-foreground/20 absolute top-0 right-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center rounded-3xl text-clip shadow-xl md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%]"></div><div class="bg-background shadow-foreground/20 absolute top-0 right-0 z-40 flex aspect-[3/5] w-3/5 items-center justify-center rounded-3xl text-clip shadow-2xl overflow-hidden">${image?.url && renderTemplate`<img${addAttribute(image.url, "src")}${addAttribute(image.alt || title || "", "alt")} class="h-full w-full object-cover" loading="lazy" decoding="async">`}</div></div></div></div></div>`}${variant === "CTA10" && renderTemplate`<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16"><div class="flex-1">${fullRichText && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h3: "mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6",
    p: "text-muted-foreground lg:text-lg"
  } })}`}</div><div class="flex shrink-0 flex-col gap-2 sm:flex-row">${Array.isArray(links) && links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${links.map(({ link }, i) => renderTemplate`<a${addAttribute(hrefFor(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    buildButtonClasses(link?.appearance || "default", link?.size || "default"),
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`)}` })}`}</div></div></div>`}${variant === "CTA12" && renderTemplate`<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="bg-accent rounded-lg p-8 md:rounded-xl lg:p-12"><div class="mx-auto max-w-4xl text-center">${fullRichText && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h2: "mb-4 text-3xl font-semibold md:text-5xl lg:mb-6 lg:text-6xl",
    h3: "mb-4 text-3xl font-semibold md:text-5xl lg:mb-6 lg:text-6xl",
    h4: "mb-4 text-3xl font-semibold md:text-5xl lg:mb-6 lg:text-6xl",
    p: "text-muted-foreground mb-8 text-lg font-medium lg:text-xl"
  } })}`}<div class="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">${Array.isArray(links) && links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${links.map(({ link }, i) => renderTemplate`<a${addAttribute(hrefFor(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    buildButtonClasses(link?.appearance || "default", link?.size || "default"),
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`)}` })}`}</div></div></div></div>`}${(variant === "CTA1" || !["CTA6", "CTA10", "CTA12"].includes(variant)) && renderTemplate`<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="bg-card text-card-foreground border flex flex-col justify-between rounded-xl md:flex-row overflow-hidden shadow-sm"><div class="p-6 md:max-w-96"><div class="mb-2 flex items-center gap-2"><span class="bg-muted flex size-7 items-center justify-center rounded-full text-sm">${icon || null}</span>${firstHeading && renderTemplate`<div class="[&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-2xl [&_h3]:font-bold [&_h4]:text-2xl [&_h4]:font-bold">${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": firstNode })}</div>`}</div>${rest && renderTemplate`<div class="[&_p]:text-muted-foreground">${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": restNodes })}</div>`}<div class="mt-8 flex flex-col gap-2 sm:flex-row">${Array.isArray(links) && links.length > 0 ? links.slice(0, 2).map(({ link }, i) => renderTemplate`<a${addAttribute(hrefFor(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    buildButtonClasses(link?.appearance || (i === 0 ? "default" : "outline"), link?.size || "default"),
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`) : renderTemplate`<a${addAttribute(buildButtonClasses("default", "default"), "class")} href="#">Get Started</a>`}</div></div>${image?.url && renderTemplate`<img${addAttribute(image.url, "src")}${addAttribute(image.alt || title || "", "alt")} class="aspect-video object-cover md:max-w-96" loading="lazy" decoding="async">`}</div></div>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Cta/Component.astro", void 0);

const $$Astro$l = createAstro();
const $$Component$k = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Component$k;
  const { content, backgroundColor } = Astro2.props;
  const isLexical = content && typeof content === "object" && content.root?.children;
  const isHtml = typeof content === "string";
  const proseContrast = proseContrastClass(backgroundColor);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["prose prose-lg max-w-none", proseContrast], "class:list")}> ${isLexical && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": content.root.children })}`} ${isHtml && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} ${!isLexical && !isHtml && renderTemplate`<p class="text-muted-foreground">No content</p>`} </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Text/Component.astro", void 0);

const $$Astro$k = createAstro();
const $$Component$j = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Component$j;
  const { media, caption } = Astro2.props;
  const src = typeof media?.url === "string" ? media.url : typeof media?.filename === "string" ? `/api/media/file/${media.filename}` : "";
  const width = media?.width;
  const height = media?.height;
  const mimeType = media?.mimeType || "";
  const alt = media?.alt || "";
  return renderTemplate`${src && renderTemplate`${maybeRenderHead()}<figure>${mimeType.startsWith("image/") ? renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")} class="w-full rounded-lg" loading="lazy"${addAttribute(width, "width")}${addAttribute(height, "height")}>` : mimeType.startsWith("video/") ? renderTemplate`<video${addAttribute(src, "src")} controls class="w-full rounded-lg"></video>` : renderTemplate`<a${addAttribute(src, "href")} download class="text-primary underline">${media?.filename || "Download"}</a>`}${caption && renderTemplate`<figcaption class="mt-2 text-sm text-muted-foreground text-center">${caption}</figcaption>`}</figure>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Media/Component.astro", void 0);

const $$Astro$j = createAstro();
const $$Component$i = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Component$i;
  const { richText, image, links, icon, designVersion } = Astro2.props;
  const variant = designVersion || "FEATURE1";
  const nodes = richText?.root?.children || [];
  return renderTemplate`${(variant === "FEATURE1" || !variant) && renderTemplate`${maybeRenderHead()}<div class="grid items-center gap-8 lg:grid-cols-2"><div class="flex flex-col items-center text-center lg:items-start lg:text-left"><span class="bg-accent flex size-12 items-center justify-center rounded-full text-xl">${icon || "\u2726"}</span>${nodes.length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h1: "my-6 text-pretty text-3xl font-bold lg:text-4xl",
    h2: "my-6 text-pretty text-3xl font-bold lg:text-4xl",
    h3: "my-6 text-pretty text-3xl font-bold lg:text-4xl",
    p: "mb-8 max-w-xl text-muted-foreground lg:text-lg"
  } })}`}${Array.isArray(links) && links.length > 0 && renderTemplate`<div class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">${links.map(({ link }, i) => renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    buildButtonClasses(link?.appearance || (i === 0 ? "default" : "outline"), "lg"),
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`)}</div>`}</div>${image?.url ? renderTemplate`<img${addAttribute(image.url, "src")}${addAttribute(image.alt || "", "alt")} class="max-h-96 w-full rounded-md object-cover" loading="lazy" decoding="async">` : renderTemplate`<div class="max-h-96 min-h-80 w-full rounded-md border bg-accent/60 shadow-inner"><div class="flex h-80 items-center justify-center text-muted-foreground"><div class="text-center"><div class="mx-auto mb-4 size-16 rounded-2xl bg-background shadow-sm"></div><p class="text-sm">Feature media</p></div></div></div>`}</div>`}${variant !== "FEATURE1" && renderTemplate`<div class="grid items-center gap-8 lg:grid-cols-2"><div class="flex flex-col items-center text-center lg:items-start lg:text-left"><span class="bg-accent flex size-12 items-center justify-center rounded-full text-xl">${icon || "\u2726"}</span>${nodes.length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h1: "my-6 text-pretty text-3xl font-bold lg:text-4xl",
    h2: "my-6 text-pretty text-3xl font-bold lg:text-4xl",
    h3: "my-6 text-pretty text-3xl font-bold lg:text-4xl",
    p: "mb-8 max-w-xl text-muted-foreground lg:text-lg"
  } })}`}${Array.isArray(links) && links.length > 0 && renderTemplate`<div class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">${links.map(({ link }, i) => renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([
    buildButtonClasses(link?.appearance || (i === 0 ? "default" : "outline"), "lg"),
    "w-full sm:w-auto"
  ], "class:list")}>${link?.label}</a>`)}</div>`}</div>${image?.url ? renderTemplate`<img${addAttribute(image.url, "src")}${addAttribute(image.alt || "", "alt")} class="max-h-96 w-full rounded-md object-cover" loading="lazy" decoding="async">` : renderTemplate`<div class="max-h-96 min-h-80 w-full rounded-md border bg-accent/60 shadow-inner"></div>`}</div>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Feature/Component.astro", void 0);

const $$Astro$i = createAstro();
const $$Component$h = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Component$h;
  const { richText, tagline, link, elements, designVersion } = Astro2.props;
  const variant = designVersion || "GALLERY4";
  const items = Array.isArray(elements) ? elements : [];
  const nodes = richText?.root?.children || [];
  function imageUrl(item) {
    return item?.image && typeof item.image === "object" ? resolveMediaUrl(item.image.url) : null;
  }
  function imageAlt(item) {
    return item?.image && typeof item.image === "object" ? item.image.alt || "" : "";
  }
  function itemNodes(item) {
    return item?.richText?.root?.children || [];
  }
  return renderTemplate`${variant === "GALLERY4" && renderTemplate`${maybeRenderHead()}<div><div class="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">${nodes.length > 0 && renderTemplate`<div class="max-w-3xl">${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h2: "text-3xl font-medium md:text-4xl lg:text-5xl lg:mb-6 md:mb-4",
    h3: "text-3xl font-medium md:text-4xl lg:text-5xl lg:mb-6 md:mb-4",
    p: "text-muted-foreground"
  } })}</div>`}<div class="hidden shrink-0 gap-2 md:flex" aria-hidden="true"><span class="inline-flex size-10 items-center justify-center rounded-md hover:bg-accent">←</span><span class="inline-flex size-10 items-center justify-center rounded-md hover:bg-accent">→</span></div></div><div class="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"><div class="flex gap-5">${items.map((item) => renderTemplate`<a${addAttribute(resolveLinkUrl(item.link), "href")} class="group min-w-[320px] max-w-[360px] rounded-xl"${addAttribute(item?.link?.newTab ? "_blank" : void 0, "target")}${addAttribute(item?.link?.newTab ? "noopener noreferrer" : void 0, "rel")}><div class="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-red-200 md:aspect-[5/4] lg:aspect-video">${imageUrl(item) ? renderTemplate`<img${addAttribute(imageUrl(item), "src")}${addAttribute(imageAlt(item), "alt")} class="absolute size-full object-cover object-center transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async">` : renderTemplate`<div class="absolute inset-0 bg-muted"></div>`}<div class="absolute inset-0 h-full bg-[linear-gradient(hsl(from_var(--primary)_h_s_l/0.2),hsl(from_var(--primary)_h_s_l/0.8)_100%)] mix-blend-multiply"></div><div class="text-primary-foreground absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">${itemNodes(item).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": itemNodes(item), "overrideStyle": {
    h3: "mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4",
    h4: "mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4",
    p: "mb-8 line-clamp-2 md:mb-12 lg:mb-9"
  } })}`}${item.link?.label && renderTemplate`<span class="inline-flex items-center text-sm font-medium">${item.link.label}<span class="ml-2 transition-transform group-hover:translate-x-1">→</span></span>`}</div></div></a>`)}</div></div></div>`}${variant === "GALLERY6" && renderTemplate`<div><div class="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16"><div>${tagline && renderTemplate`<p class="mb-6 text-xs font-medium tracking-wider uppercase">${tagline}</p>`}${nodes.length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h2: "mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6",
    h3: "mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6"
  } })}`}${link?.label && renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")} class="group flex items-center text-xs font-medium md:text-base lg:text-lg">${link.label}<span class="ml-2 transition-transform group-hover:translate-x-1">→</span></a>`}</div><div class="mt-8 flex shrink-0 items-center justify-center gap-2" aria-hidden="true"><span class="inline-flex size-10 items-center justify-center rounded-md border">←</span><span class="inline-flex size-10 items-center justify-center rounded-md border">→</span></div></div><div class="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"><div class="flex gap-5">${items.map((item) => renderTemplate`<a${addAttribute(resolveLinkUrl(item.link), "href")} class="group flex min-w-[320px] max-w-[452px] flex-col justify-between md:min-w-[452px]"><div><div class="flex aspect-[3/2] rounded-xl text-clip overflow-hidden bg-muted"><div class="flex-1">${imageUrl(item) && renderTemplate`<img${addAttribute(imageUrl(item), "src")}${addAttribute(imageAlt(item), "alt")} class="size-full object-cover object-center transition duration-300 group-hover:scale-105" loading="lazy" decoding="async">`}</div></div></div>${itemNodes(item).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": itemNodes(item), "overrideStyle": {
    h2: "mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl",
    h3: "mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl",
    h4: "mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl",
    p: "mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9"
  } })}`}<div class="flex items-center text-sm">Read more <span class="ml-2 transition-transform group-hover:translate-x-1">→</span></div></a>`)}</div></div></div>`}${!["GALLERY4", "GALLERY6"].includes(variant) && renderTemplate`<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">${items.map(
    (item) => imageUrl(item) ? renderTemplate`<div class="aspect-square overflow-hidden rounded-lg"><img${addAttribute(imageUrl(item), "src")}${addAttribute(imageAlt(item), "alt")} class="size-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" decoding="async"></div>` : null
  )}</div>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Gallery/Component.astro", void 0);

const $$Astro$h = createAstro();
const $$Component$g = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Component$g;
  const { designVersion, richText, link, logos } = Astro2.props;
  const variant = designVersion || "LOGOS1";
  const nodes = richText?.root?.children || [];
  const items = Array.isArray(logos) ? logos : [];
  function logoUrl(logo) {
    return logo && typeof logo === "object" ? resolveMediaUrl(logo.url) : null;
  }
  function logoAlt(logo) {
    return logo && typeof logo === "object" ? logo.alt || logo.filename || "" : "";
  }
  return renderTemplate`${variant === "LOGOS1" && renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-center justify-between gap-8">${nodes.length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    p: "text-lg leading-[140%] tracking-[-0.32px] text-primary"
  } })}`}<div class="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-70 grayscale lg:gap-[60px]">${items.map(
    (logo) => logoUrl(logo) ? renderTemplate`<img${addAttribute(logoUrl(logo), "src")}${addAttribute(logoAlt(logo), "alt")} class="h-12 w-28 object-contain" loading="lazy" decoding="async">` : null
  )}</div></div>`}${variant === "LOGOS2" && renderTemplate`<div class="border-border grid overflow-hidden rounded-xl border md:grid-cols-2"><div class="my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16"><div class="w-full md:max-w-md">${nodes.length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h2: "mb-4 text-2xl font-semibold lg:text-3xl",
    h3: "mb-4 text-2xl font-semibold lg:text-2xl",
    h4: "mb-4 text-2xl font-semibold lg:text-xl",
    p: "mb-6 text-lg"
  } })}`}${link?.label && renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute(link?.newTab ? "_blank" : void 0, "target")}${addAttribute(link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute([buildButtonClasses(link?.appearance || "default", link?.size || "default"), "w-full md:w-fit"], "class:list")}>${link.label}</a>`}</div></div><div class="border-border grid grid-cols-3 border-t md:border-t-0 md:border-l">${items.map((logo, index) => renderTemplate`<div${addAttribute(["border-border -mb-px flex items-center justify-center border-r border-b p-5 sm:p-6", (index + 1) % 3 === 0 && "border-r-0"], "class:list")}>${logoUrl(logo) && renderTemplate`<img${addAttribute(logoUrl(logo), "src")}${addAttribute(logoAlt(logo), "alt")} class="size-12 object-contain object-center sm:size-16 lg:size-24" loading="lazy" decoding="async">`}</div>`)}</div></div>`}${variant === "LOGOS3" && renderTemplate`<div><div class="flex flex-col items-center text-center">${nodes.length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes, "overrideStyle": {
    h2: "my-6 text-pretty text-2xl font-bold lg:text-4xl",
    h3: "my-6 text-pretty text-2xl font-bold lg:text-3xl",
    h4: "my-6 text-pretty text-2xl font-bold lg:text-2xl",
    p: "mb-6 text-lg"
  } })}`}</div><div class="pt-10 md:pt-16 lg:pt-20"><div class="relative mx-auto flex items-center justify-center overflow-hidden lg:max-w-5xl"><div class="flex w-max gap-10 px-12">${[...items, ...items].map(
    (logo) => logoUrl(logo) ? renderTemplate`<div class="mx-10 flex shrink-0 items-center justify-center"><img${addAttribute(logoUrl(logo), "src")}${addAttribute(logoAlt(logo), "alt")} class="h-7 w-auto object-contain" loading="lazy" decoding="async"></div>` : null
  )}</div><div class="from-background absolute inset-y-0 left-0 w-12 bg-linear-to-r to-transparent"></div><div class="from-background absolute inset-y-0 right-0 w-12 bg-linear-to-l to-transparent"></div></div></div></div>`}${variant === "LOGOS9" && renderTemplate`<div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">${items.map(
    (logo) => logoUrl(logo) ? renderTemplate`<img${addAttribute(logoUrl(logo), "src")}${addAttribute(logoAlt(logo), "alt")} class="h-8 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-10" loading="lazy" decoding="async">` : null
  )}</div>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Logos/Component.astro", void 0);

const $$Astro$g = createAstro();
const $$Component$f = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Component$f;
  const { designVersion, headline, text1, text2, text3, counter, images, link, logos } = Astro2.props;
  const variant = designVersion || "ABOUT4";
  function nodes(field) {
    return field?.root?.children || [];
  }
  function imageUrl(image) {
    return typeof image === "object" && image?.url ? image.url : null;
  }
  function imageAlt(image) {
    return typeof image === "object" ? image?.alt || "" : "";
  }
  return renderTemplate`${variant === "ABOUT3" && renderTemplate`${maybeRenderHead()}<div><div class="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">${nodes(headline).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes(headline), "overrideStyle": {
    h1: "text-5xl font-semibold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    p: "text-xl font-medium text-muted-foreground"
  } })}`}</div><div class="grid gap-7 lg:grid-cols-3">${imageUrl(images?.[0]) ? renderTemplate`<img${addAttribute(imageUrl(images[0]), "src")}${addAttribute(imageAlt(images[0]), "alt")} class="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2" loading="lazy" decoding="async">` : renderTemplate`<div class="size-full min-h-[420px] rounded-xl bg-muted lg:col-span-2"></div>`}<div class="flex flex-col gap-7 md:flex-row lg:flex-col"><div class="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">${imageUrl(images?.[1]) && renderTemplate`<img${addAttribute(imageUrl(images[1]), "src")}${addAttribute(imageAlt(images[1]), "alt")} class="mr-auto h-12" loading="lazy">`}<div>${nodes(text1).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes(text1), "overrideStyle": {
    h2: "mb-2 text-2xl font-semibold",
    h3: "mb-2 text-xl font-semibold",
    h4: "mb-2 text-lg font-semibold",
    p: "text-muted-foreground"
  } })}`}</div>${link && renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute([buildButtonClasses(link?.appearance || "default", link?.size || "default"), "mr-auto"], "class:list")}>${link?.label}</a>`}</div>${imageUrl(images?.[2]) ? renderTemplate`<img${addAttribute(imageUrl(images[2]), "src")}${addAttribute(imageAlt(images[2]), "alt")} class="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto" loading="lazy" decoding="async">` : renderTemplate`<div class="grow basis-0 rounded-xl bg-muted md:w-1/2 lg:min-h-0 lg:w-auto"></div>`}</div></div>${Array.isArray(logos) && logos.length > 0 && renderTemplate`<div class="py-32"><p class="text-center">Valued by clients worldwide</p><div class="mt-8 flex flex-wrap justify-center gap-8">${logos.map((logo) => renderTemplate`<div class="flex items-center gap-3">${imageUrl(logo) && renderTemplate`<img${addAttribute(imageUrl(logo), "src")}${addAttribute(imageAlt(logo), "alt")} class="h-8 w-auto md:h-12" loading="lazy">`}<p class="text-xl font-semibold md:text-2xl">${logo?.alt || logo?.filename || ""}</p></div>`)}</div></div>`}<div class="bg-muted relative overflow-hidden rounded-xl p-10 md:p-16 mt-20"><div class="flex flex-col gap-4 text-center md:text-left">${nodes(text2).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes(text2), "overrideStyle": {
    h2: "text-4xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    p: "max-w-screen-sm text-muted-foreground"
  } })}`}</div>${Array.isArray(counter) && counter.length > 0 && renderTemplate`<div class="mt-10 flex flex-wrap justify-between gap-10 text-center">${counter.map((c) => renderTemplate`<div class="flex flex-col gap-4"><p>${c.title}</p><span class="text-4xl font-semibold md:text-5xl">${c.value}</span></div>`)}</div>`}<div class="pointer-events-none absolute -top-1 right-1 z-10 hidden size-full bg-[linear-gradient(to_right,hsl(from_var(--muted-foreground)_h_s_l)_1px,transparent_1px),linear-gradient(to_bottom,hsl(from_var(--muted-foreground)_h_s_l)_1px,transparent_1px)] mask-[linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-size-[80px_80px] opacity-15 md:block"></div></div></div>`}${variant === "ABOUT4" && renderTemplate`<div><div class="mx-auto flex max-w-screen-md flex-col gap-8 pb-28 text-center">${nodes(headline).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes(headline), "overrideStyle": {
    h1: "text-4xl font-semibold md:text-7xl",
    h2: "text-4xl font-semibold md:text-5xl",
    h3: "text-4xl font-semibold md:text-3xl",
    p: "text-xl font-medium text-muted-foreground"
  } })}`}</div><div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">${[0, 1, 2].map(
    (i) => imageUrl(images?.[i]) ? renderTemplate`<img${addAttribute(imageUrl(images[i]), "src")}${addAttribute(imageAlt(images[i]), "alt")} class="max-h-80 w-full object-cover" loading="lazy" decoding="async">` : renderTemplate`<div class="h-72 w-full bg-muted"></div>`
  )}</div><div class="mx-auto grid max-w-screen-lg gap-28 py-28 md:grid-cols-2"><div>${nodes(text1).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes(text1), "overrideStyle": {
    h2: "mb-5 text-4xl font-semibold",
    h3: "mb-5 text-2xl font-semibold",
    h4: "mb-5 text-xl font-semibold",
    p: "text-xl font-medium leading-8 text-muted-foreground"
  } })}`}</div><div>${nodes(text2).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes(text2), "overrideStyle": {
    h2: "mb-5 text-4xl font-semibold",
    h3: "mb-5 text-2xl font-semibold",
    h4: "mb-5 text-xl font-semibold",
    p: "text-xl font-medium leading-8 text-muted-foreground"
  } })}`}</div></div><div class="bg-muted/50 mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-8 rounded-2xl p-14 text-center md:flex-row md:text-left"><div>${nodes(text3).length > 0 && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": nodes(text3), "overrideStyle": {
    h3: "text-3xl font-semibold",
    h4: "text-2xl font-semibold",
    p: "text-xl font-medium leading-8 text-muted-foreground"
  } })}`}</div>${link && renderTemplate`<a${addAttribute(resolveLinkUrl(link), "href")}${addAttribute([buildButtonClasses(link?.appearance || "default", link?.size || "default"), "w-full md:w-fit"], "class:list")}>${link?.label}</a>`}</div></div>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/About/Component.astro", void 0);

const $$Astro$f = createAstro();
const $$Component$e = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Component$e;
  const { heading, richText, authorName, authorRole, authorImage } = Astro2.props;
  const hasRichText = richText?.root?.children?.length > 0;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-3xl text-center"> ${heading && renderTemplate`<h2 class="text-2xl md:text-3xl font-bold mb-6">${heading}</h2>`} ${hasRichText && renderTemplate`<div class="text-lg text-muted-foreground italic"> ${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": richText.root.children })} </div>`} <div class="mt-6 flex items-center justify-center gap-3"> ${authorImage?.url && renderTemplate`<img${addAttribute(authorImage.url, "src")}${addAttribute(authorName || "", "alt")} class="w-12 h-12 rounded-full object-cover" loading="lazy">`} <div class="text-left"> ${authorName && renderTemplate`<p class="font-medium">${authorName}</p>`} ${authorRole && renderTemplate`<p class="text-sm text-muted-foreground">${authorRole}</p>`} </div> </div> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Testimonial/Component.astro", void 0);

const $$Astro$e = createAstro();
const $$Component$d = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Component$d;
  const { heading, questions } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-2xl"> ${heading && renderTemplate`<h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">${heading}</h2>`} <div class="divide-y divide-border"> ${questions?.map((q) => renderTemplate`<details class="py-4 group"> <summary class="flex cursor-pointer items-center justify-between font-medium list-none text-left"> <span>${q.question}</span> <span class="transition-transform duration-300 group-open:rotate-180">▼</span> </summary> <div class="mt-2 text-muted-foreground text-left">${q.answer}</div> </details>`)} </div> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Faq/Component.astro", void 0);

const $$Astro$d = createAstro();
const $$Component$c = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Component$c;
  const { stats } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"> ${stats?.map((stat) => renderTemplate`<div class="text-center"> <p class="text-3xl md:text-4xl font-bold text-primary">${stat.value}</p> <p class="mt-1 text-sm text-muted-foreground">${stat.label}</p> </div>`)} </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Stat/Component.astro", void 0);

const $$Astro$c = createAstro();
const $$Component$b = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Component$b;
  const { richText, image, links, layout } = Astro2.props;
  const hasRichText = richText?.root?.children?.length > 0;
  const imageRight = layout === "imageRight";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["grid gap-8 md:grid-cols-2 md:items-center", imageRight && "md:[direction:rtl] [&>*]:md:[direction:ltr]"], "class:list")}> <div> ${hasRichText && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": richText.root.children })}`} ${links?.length > 0 && renderTemplate`<div class="mt-6 flex flex-wrap gap-3"> ${links.map((item, i) => renderTemplate`<a${addAttribute(resolveLinkUrl(item.link), "href")}${addAttribute(item.link?.newTab ? "_blank" : void 0, "target")}${addAttribute(item.link?.newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute(buildButtonClasses(
    i === 0 ? item.link?.appearance || "primary" : item.link?.appearance || "outline",
    item.link?.size || "default"
  ), "class")}> ${item.link?.label} </a>`)} </div>`} </div> ${image?.url && renderTemplate`<div class="rounded-xl overflow-hidden shadow-lg"> <img${addAttribute(image.url, "src")}${addAttribute(image.alt || "", "alt")} class="w-full h-auto" loading="lazy" decoding="async"> </div>`} </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/SplitView/Component.astro", void 0);

const $$Astro$b = createAstro();
const $$Component$a = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Component$a;
  const { richText, email, phone, address } = Astro2.props;
  const hasRichText = richText?.root?.children?.length > 0;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-xl"> ${hasRichText && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": richText.root.children })}`} <div class="mt-6 space-y-3 text-sm"> ${email && renderTemplate`<p>
Email:${" "} <a${addAttribute(`mailto:${email}`, "href")} class="text-primary hover:underline">${email}</a> </p>`} ${phone && renderTemplate`<p>
Phone:${" "} <a${addAttribute(`tel:${phone}`, "href")} class="text-primary hover:underline">${phone}</a> </p>`} ${address && renderTemplate`<p class="text-muted-foreground whitespace-pre-line">${address}</p>`} </div> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Contact/Component.astro", void 0);

const $$Astro$a = createAstro();
const $$Component$9 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Component$9;
  const { heading, richText, posts } = Astro2.props;
  const hasRichText = richText?.root?.children?.length > 0;
  return renderTemplate`${maybeRenderHead()}<div> ${heading && renderTemplate`<h2 class="text-2xl md:text-3xl font-bold mb-4">${heading}</h2>`} ${hasRichText && renderTemplate`${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": richText.root.children })}`} <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${posts?.map((post) => renderTemplate`<article class="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"> <a${addAttribute(`/${post.slug}`, "href")} class="block"> <h3 class="font-semibold hover:text-primary transition-colors">${post.title}</h3> </a> </article>`)} </div> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Blog/Component.astro", void 0);

const $$Astro$9 = createAstro();
const $$Component$8 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Component$8;
  const { content, style } = Astro2.props;
  const variant = style || "info";
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-900",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-900",
    error: "border-red-200 bg-red-50 text-red-900",
    success: "border-green-200 bg-green-50 text-green-900"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`rounded-md border px-4 py-3 ${styles[variant] || styles.info}`, "class")}> ${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": content?.root?.children || [] })} </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Banner/Component.astro", void 0);

const $$Astro$8 = createAstro();
const $$Component$7 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Component$7;
  const { heading, casestudies } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${heading && renderTemplate`<h2 class="text-2xl md:text-3xl font-bold mb-8">${heading}</h2>`} <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${casestudies?.map((item) => renderTemplate`<article class="rounded-lg border bg-card overflow-hidden hover:shadow-md transition-shadow"> ${item.image?.url && renderTemplate`<div class="aspect-video overflow-hidden"> <img${addAttribute(item.image.url, "src")}${addAttribute(item.image.alt || "", "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy"> </div>`} <div class="p-4"> <h3 class="font-semibold">${item.title}</h3> ${item.richText?.root?.children?.length > 0 && renderTemplate`<div class="mt-2 text-sm text-muted-foreground"> ${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": item.richText.root.children })} </div>`} </div> </article>`)} </div> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Casestudies/Component.astro", void 0);

const $$Astro$7 = createAstro();
const $$Component$6 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Component$6;
  const { heading, events } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${heading && renderTemplate`<h2 class="text-2xl md:text-3xl font-bold mb-8">${heading}</h2>`} <div class="relative mx-auto max-w-2xl border-l border-border pl-8"> ${events?.map((event) => renderTemplate`<div class="relative mb-8"> <span class="absolute -left-[2.125rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-background"></span> <p class="text-sm text-muted-foreground">${event.date}</p> <h3 class="font-semibold mt-1">${event.title}</h3> <p class="text-muted-foreground mt-1">${event.description}</p> </div>`)} </div> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Timeline/Component.astro", void 0);

const $$Astro$6 = createAstro();
const $$Component$5 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Component$5;
  const { heading, entries } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-2xl"> ${heading && renderTemplate`<h2 class="text-2xl md:text-3xl font-bold mb-8">${heading}</h2>`} <div class="space-y-8"> ${entries?.map((entry) => renderTemplate`<div class="border-l-2 border-primary pl-4"> <div class="flex items-baseline gap-2"> <span class="font-mono text-sm font-bold">${entry.version}</span> <span class="text-sm text-muted-foreground">${entry.date}</span> </div> ${entry.content?.root?.children?.length > 0 && renderTemplate`<div class="mt-2"> ${renderComponent($$result, "RichTextLexical", $$RichTextLexical, { "nodes": entry.content.root.children })} </div>`} </div>`)} </div> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Changelog/Component.astro", void 0);

const $$Astro$5 = createAstro();
const $$Component$4 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Component$4;
  const { content } = Astro2.props;
  return renderTemplate`${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/CustomBlock/Component.astro", void 0);

const $$Astro$4 = createAstro();
const $$Component$3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Component$3;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-sm"> ${heading && renderTemplate`<h2 class="text-2xl font-bold mb-6 text-center">${heading}</h2>`} <form action="/api/users/login" method="POST" class="space-y-4"> <div> <label class="block text-sm font-medium mb-1">Email</label> <input type="email" name="email" required class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"> </div> <div> <label class="block text-sm font-medium mb-1">Password</label> <input type="password" name="password" required class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"> </div> <button type="submit" class="w-full rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90">
Login
</button> </form> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Login/Component.astro", void 0);

const $$Astro$3 = createAstro();
const $$Component$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Component$2;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-sm"> ${heading && renderTemplate`<h2 class="text-2xl font-bold mb-6 text-center">${heading}</h2>`} <form action="/api/users" method="POST" class="space-y-4"> <div> <label class="block text-sm font-medium mb-1">Email</label> <input type="email" name="email" required class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"> </div> <div> <label class="block text-sm font-medium mb-1">Password</label> <input type="password" name="password" required class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"> </div> <button type="submit" class="w-full rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90">
Sign Up
</button> </form> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Signup/Component.astro", void 0);

const $$Astro$2 = createAstro();
const $$Component$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Component$1;
  const { form } = Astro2.props;
  const fields = form?.fields || [];
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-xl"> ${form?.title && renderTemplate`<h2 class="text-2xl font-bold mb-6">${form.title}</h2>`} <form${addAttribute(`/api/form-submissions`, "action")} method="POST" class="space-y-4"> <input type="hidden" name="form"${addAttribute(form?.id, "value")}> ${fields.map((field) => renderTemplate`<div> <label class="block text-sm font-medium mb-1"> ${field.label} ${field.required && renderTemplate`<span class="text-destructive">*</span>`} </label> ${field.blockType === "text" && renderTemplate`<input type="text"${addAttribute(field.name, "name")}${addAttribute(field.required, "required")} class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">`} ${field.blockType === "email" && renderTemplate`<input type="email"${addAttribute(field.name, "name")}${addAttribute(field.required, "required")} class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">`} ${field.blockType === "textarea" && renderTemplate`<textarea${addAttribute(field.name, "name")}${addAttribute(field.required, "required")}${addAttribute(4, "rows")} class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></textarea>`} ${field.blockType === "select" && renderTemplate`<select${addAttribute(field.name, "name")}${addAttribute(field.required, "required")} class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"> <option value="">Select...</option> ${field.options?.map((opt) => renderTemplate`<option${addAttribute(opt.value, "value")}>${opt.label}</option>`)} </select>`} </div>`)} <button type="submit" class="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90">
Submit
</button> </form> </div>`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Form/Component.astro", void 0);

const $$Astro$1 = createAstro();
const $$Component = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Component;
  const { code, language } = Astro2.props;
  return renderTemplate`${code && renderTemplate`${maybeRenderHead()}<pre class="rounded-lg bg-muted p-4 overflow-x-auto text-sm">

    <code>${code}</code>
  </pre>`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/Code/Component.astro", void 0);

const $$Astro = createAstro();
const $$BlockRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlockRenderer;
  const { block } = Astro2.props;
  const type = block.blockType;
  const bg = block.backgroundColor || null;
  const FULL_BLEED = /* @__PURE__ */ new Set(["hero", "banner", "mediaBlock"]);
  !FULL_BLEED.has(type);
  return renderTemplate`${type === "hero" && renderTemplate`${renderComponent($$result, "HeroBlock", $$Component$m, { ...block })}`}${type === "banner" && renderTemplate`${renderComponent($$result, "BannerBlock", $$Component$8, { ...block })}`}${type === "cta" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CTABlock", $$Component$l, { ...block })}` })}`}${type === "text" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TextBlock", $$Component$k, { ...block })}` })}`}${type === "mediaBlock" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg, "spacing": "none" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MediaBlock", $$Component$j, { ...block })}` })}`}${type === "feature" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FeatureBlock", $$Component$i, { ...block })}` })}`}${type === "gallery" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "GalleryBlock", $$Component$h, { ...block })}` })}`}${type === "logos" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg, "defaultSpacing": "compact" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LogosBlock", $$Component$g, { ...block })}` })}`}${type === "about" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AboutBlock", $$Component$f, { ...block })}` })}`}${type === "testimonial" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TestimonialBlock", $$Component$e, { ...block })}` })}`}${type === "faq" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaqBlock", $$Component$d, { ...block })}` })}`}${type === "stat" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "StatBlock", $$Component$c, { ...block })}` })}`}${type === "splitView" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SplitViewBlock", $$Component$b, { ...block })}` })}`}${type === "contact" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContactBlock", $$Component$a, { ...block })}` })}`}${type === "blog" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BlogBlock", $$Component$9, { ...block })}` })}`}${type === "casestudies" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CasestudiesBlock", $$Component$7, { ...block })}` })}`}${type === "timeline" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TimelineBlock", $$Component$6, { ...block })}` })}`}${type === "changelog" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ChangelogBlock", $$Component$5, { ...block })}` })}`}${type === "customblock" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CustomBlock", $$Component$4, { ...block })}` })}`}${type === "login" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LoginBlock", $$Component$3, { ...block })}` })}`}${type === "signup" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SignupBlock", $$Component$2, { ...block })}` })}`}${type === "formBlock" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FormBlock", $$Component$1, { ...block })}` })}`}${type === "code" && renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CodeBlock", $$Component, { ...block })}` })}`}`;
}, "/Users/yousefsahloul/payblocks/astro/src/components/blocks/BlockRenderer.astro", void 0);

export { $$Layout as $, $$Header as a, $$BlockRenderer as b, $$Footer as c, $$RichTextLexical as d };
