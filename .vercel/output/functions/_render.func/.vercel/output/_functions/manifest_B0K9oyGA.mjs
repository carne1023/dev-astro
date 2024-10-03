import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CJTbevVb.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_TH2vWb-v.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Fiben/new-astro/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DUsVERVw.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Fiben/new-astro/src/pages/libro/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/libro/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Fiben/new-astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Fiben/new-astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/libro/[id]@_@astro":"pages/libro/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Fiben/new-astro/src/content/books/aprendiendo-git.md?astroContentCollectionEntry=true":"chunks/aprendiendo-git_Bkwv7Kng.mjs","C:/Users/Fiben/new-astro/src/content/books/learning-typescript.md?astroContentCollectionEntry=true":"chunks/learning-typescript_4Taisx1r.mjs","C:/Users/Fiben/new-astro/src/content/books/programador-pragmatico.md?astroContentCollectionEntry=true":"chunks/programador-pragmatico_DbJvkCQi.mjs","C:/Users/Fiben/new-astro/src/content/books/refactoring.md?astroContentCollectionEntry=true":"chunks/refactoring_K4aUNMwi.mjs","C:/Users/Fiben/new-astro/src/content/books/aprendiendo-git.md?astroPropagatedAssets":"chunks/aprendiendo-git_DxAaz6wt.mjs","C:/Users/Fiben/new-astro/src/content/books/learning-typescript.md?astroPropagatedAssets":"chunks/learning-typescript_CK9BASFq.mjs","C:/Users/Fiben/new-astro/src/content/books/programador-pragmatico.md?astroPropagatedAssets":"chunks/programador-pragmatico_vvoKoj7t.mjs","C:/Users/Fiben/new-astro/src/content/books/refactoring.md?astroPropagatedAssets":"chunks/refactoring_BEau4B-7.mjs","C:\\Users\\Fiben\\new-astro\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\Fiben\\new-astro\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Ds0-ORQc.mjs","C:/Users/Fiben/new-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DNeqfOG-.mjs","C:/Users/Fiben/new-astro/src/content/books/aprendiendo-git.md":"chunks/aprendiendo-git_cfDSDNmd.mjs","C:/Users/Fiben/new-astro/src/content/books/learning-typescript.md":"chunks/learning-typescript_CFgu2i6P.mjs","C:/Users/Fiben/new-astro/src/content/books/programador-pragmatico.md":"chunks/programador-pragmatico_Ba3ih6uE.mjs","C:/Users/Fiben/new-astro/src/content/books/refactoring.md":"chunks/refactoring_BtSU7pdc.mjs","C:/Users/Fiben/new-astro/src/components/BookScore.astro":"chunks/BookScore_BAKHE-8V.mjs","C:/Users/Fiben/new-astro/src/components/BuyButton.astro":"chunks/BuyButton_DvrfSZVW.mjs","\u0000@astrojs-manifest":"manifest_B0K9oyGA.mjs","C:/Users/Fiben/new-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.fDDyMQpn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.DUsVERVw.css","/aprendiendo-git.jpg","/favicon.svg","/learning-typescript.jpg","/programador-pragmatico.jpg","/refactoring.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.fDDyMQpn.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["C:/Users/Fiben/new-astro/src/components/BookScore.astro","BookScore"],["C:/Users/Fiben/new-astro/src/components/BuyButton.astro","BuyButton"]],"key":"ZzGxReI2ZGJIS+hlEsZMZTpvzZCfK65VlRS+119QaOs=","envGetSecretEnabled":true});

export { manifest };
