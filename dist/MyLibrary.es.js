import { ref as l, openBlock as d, createElementBlock as r, toDisplayString as p, pushScopeId as i, popScopeId as u, createElementVNode as _ } from "vue";
const a = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, v = {
  __name: "HelloWorld",
  setup(e) {
    const o = l(0), t = () => {
      o.value++;
    };
    return (n, s) => (d(), r("button", {
      type: "button",
      onClick: t
    }, "count is " + p(o.value), 1));
  }
}, k = /* @__PURE__ */ a(v, [["__scopeId", "data-v-8afefce5"]]);
const f = {}, c = (e) => (i("data-v-8187ec54"), e = e(), u(), e), h = {
  name: "",
  id: ""
}, m = /* @__PURE__ */ c(() => /* @__PURE__ */ _("option", { value: "" }, "1", -1)), y = /* @__PURE__ */ c(() => /* @__PURE__ */ _("option", { value: "" }, "2", -1)), x = /* @__PURE__ */ c(() => /* @__PURE__ */ _("option", { value: "" }, "3", -1)), B = [
  m,
  y,
  x
];
function I(e, o) {
  return d(), r("select", h, B);
}
const w = /* @__PURE__ */ a(f, [["render", I], ["__scopeId", "data-v-8187ec54"]]);
export {
  w as BlDropdown,
  k as HelloWord
};
