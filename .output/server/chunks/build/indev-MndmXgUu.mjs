import { _ as _export_sfc, c as createError } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

function renderStubMessage(name) {
  throw createError({
    fatal: true,
    statusCode: 500,
    statusMessage: `${name} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`
  });
}
const NuxtImg = {
  setup: () => renderStubMessage("<NuxtImg>")
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = NuxtImg;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute top-0 z-0 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div><div class="relative z-20 m-auto max-w-3xl py-10"><div class="rounded border bg-white">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/site-construction-02.svg",
    class: "w-full"
  }, null, _parent));
  _push(`<div class="p-6"><h1 class="mb-6 text-3xl font-black">Эта страница в разработке</h1> Здесь будут показываться списком материалы, относящиеся к соответсвующей категории </div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/indev.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const indev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { indev as default };
//# sourceMappingURL=indev-MndmXgUu.mjs.map
