globalThis.process ??= {}; globalThis.process.env ??= {};
const PAYLOAD_ORIGIN = "https://cms.yourdomain.com";
function getPayloadFetch(runtime) {
  const binding = runtime?.env?.PAYLOAD_CMS;
  if (binding?.fetch) {
    return (url, init) => {
      const req = typeof url === "string" ? new Request(url, init) : new Request(url, init);
      return binding.fetch(req);
    };
  }
  return globalThis.fetch;
}
function payloadUrl(collection, params) {
  const qs = Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  return `${PAYLOAD_ORIGIN}/api/${collection}?${qs}`;
}
async function getPage(fetchFn, pageSlug, depth = 2) {
  try {
    const url = payloadUrl("pages", {
      "where[slug][equals]": pageSlug,
      limit: "1",
      depth: String(depth)
    });
    const res = await fetchFn(url);
    if (!res.ok) return null;
    const data = await res.json();
    return data.docs?.[0] ?? null;
  } catch {
    return null;
  }
}
async function getPost(fetchFn, postSlug) {
  try {
    const url = payloadUrl("posts", {
      "where[slug][equals]": postSlug,
      limit: "1",
      depth: "2"
    });
    const res = await fetchFn(url);
    if (!res.ok) return null;
    const data = await res.json();
    return data.docs?.[0] ?? null;
  } catch {
    return null;
  }
}
async function getThemeConfig(fetchFn) {
  try {
    const res = await fetchFn(`${PAYLOAD_ORIGIN}/api/globals/themeConfig?depth=2`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
async function getHeader(fetchFn) {
  try {
    const res = await fetchFn(`${PAYLOAD_ORIGIN}/api/globals/header?depth=2`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
async function getFooter(fetchFn) {
  try {
    const res = await fetchFn(`${PAYLOAD_ORIGIN}/api/globals/footer?depth=2`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
async function getRedirects(fetchFn) {
  const map = /* @__PURE__ */ new Map();
  try {
    const url = payloadUrl("redirects", {
      limit: "500",
      depth: "0",
      "select[from]": "true",
      "select[to]": "true",
      "select[type]": "true"
    });
    const res = await fetchFn(url);
    if (!res.ok) return map;
    const data = await res.json();
    for (const doc of data.docs ?? []) {
      if (doc.from && doc.to) {
        map.set(doc.from, {
          source: doc.from,
          destination: doc.to,
          type: doc.type === "temporary" ? "temporary" : "permanent"
        });
      }
    }
  } catch {
  }
  return map;
}

export { getRedirects as a, getPage as b, getHeader as c, getFooter as d, getThemeConfig as e, getPost as f, getPayloadFetch as g };
