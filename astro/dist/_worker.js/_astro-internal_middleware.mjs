globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as defineMiddleware, s as sequence } from './chunks/index_B1cVgjTf.mjs';
import { g as getPayloadFetch, a as getRedirects } from './chunks/payload_DdkCYgnw.mjs';
import './chunks/astro-designed-error-pages_BBuVoGgS.mjs';
import './chunks/astro/server_Dqw0ofGW.mjs';

const REDIRECT_CACHE_TTL_MS = 6e4;
let redirectCache = null;
const ASTRO_OWNED_ROUTES = [
  "/api/og.png"
];
function isPayloadPath(pathname) {
  if (ASTRO_OWNED_ROUTES.some((r) => pathname === r)) return false;
  return pathname.startsWith("/admin") || pathname.startsWith("/api") || pathname.startsWith("/_next/");
}
async function getRedirectMap(runtime) {
  const now = Date.now();
  if (redirectCache && redirectCache.expiresAt > now) {
    return redirectCache.map;
  }
  const fetchFn = getPayloadFetch(runtime);
  const map = await getRedirects(fetchFn);
  redirectCache = { map, expiresAt: now + REDIRECT_CACHE_TTL_MS };
  return map;
}
const onRequest$2 = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const runtime = context.locals.runtime;
  if (!isPayloadPath(url.pathname)) {
    const redirectMap = await getRedirectMap(runtime);
    const match = redirectMap.get(url.pathname);
    if (match) {
      const status = match.type === "temporary" ? 302 : 301;
      const location2 = match.destination.startsWith("http") ? match.destination : new URL(match.destination, url.origin).toString();
      return new Response(null, { status, headers: { Location: location2 } });
    }
  }
  if (!isPayloadPath(url.pathname)) {
    return next();
  }
  const cmsBinding = runtime?.env?.PAYLOAD_CMS;
  if (!cmsBinding) {
    return next();
  }
  const payloadOrigin = new URL(
    "https://cms.yourdomain.com"
  );
  const payloadUrl = new URL(url.pathname + url.search, payloadOrigin);
  const headers = new Headers(context.request.headers);
  headers.set("Host", payloadOrigin.hostname);
  const browserOrigin = headers.get("Origin");
  if (browserOrigin) headers.set("Origin", payloadOrigin.origin);
  const referer = headers.get("Referer");
  if (referer) {
    try {
      const refUrl = new URL(referer);
      refUrl.hostname = payloadOrigin.hostname;
      refUrl.protocol = payloadOrigin.protocol;
      refUrl.port = payloadOrigin.port;
      headers.set("Referer", refUrl.toString());
    } catch {
    }
  }
  const proxyRequest = new Request(payloadUrl.toString(), {
    method: context.request.method,
    headers,
    body: context.request.body,
    redirect: "manual"
  });
  let response = await cmsBinding.fetch(proxyRequest);
  const newHeaders = new Headers(response.headers);
  const location = newHeaders.get("Location");
  if (location) {
    try {
      const locUrl = new URL(location, payloadOrigin);
      if (locUrl.hostname === payloadOrigin.hostname) {
        locUrl.hostname = url.hostname;
        locUrl.protocol = url.protocol;
        newHeaders.set("Location", locUrl.toString());
      }
    } catch {
    }
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
});

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };
