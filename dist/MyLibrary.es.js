import { ref as v, openBlock as s, createElementBlock as _, toDisplayString as a, pushScopeId as h, popScopeId as m, createElementVNode as c, Fragment as i, withDirectives as f, vModelText as b, renderList as g } from "vue";
const d = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, x = {
  __name: "HelloWorld",
  setup(e) {
    const t = v(0), o = () => {
      t.value++;
    };
    return (l, n) => (s(), _("button", {
      type: "button",
      onClick: o
    }, "count is " + a(t.value), 1));
  }
}, T = /* @__PURE__ */ d(x, [["__scopeId", "data-v-4a27bb39"]]);
const y = {}, p = (e) => (h("data-v-cfd4b654"), e = e(), m(), e), w = {
  name: "",
  id: ""
}, D = /* @__PURE__ */ p(() => /* @__PURE__ */ c("option", { value: "" }, "1", -1)), B = /* @__PURE__ */ p(() => /* @__PURE__ */ c("option", { value: "" }, "2", -1)), I = /* @__PURE__ */ p(() => /* @__PURE__ */ c("option", { value: "" }, "3", -1)), L = [
  D,
  B,
  I
];
function S(e, t) {
  return s(), _("select", w, L);
}
const E = /* @__PURE__ */ d(y, [["render", S], ["__scopeId", "data-v-cfd4b654"]]);
const $ = {
  name: "Select",
  props: {
    "t-drop": Boolean
  },
  data() {
    return {
      list: ["apple", "cat", "moon"],
      something: ""
    };
  },
  computed: {
    newList() {
      let e = [];
      return this.something ? e = this.list.filters((t) => t.indexOf(this.something) !== -1) : e = this.list, e;
    }
  }
}, k = ["value"];
function H(e, t, o, l, n, u) {
  return s(), _(i, null, [
    f(c("input", {
      type: "text",
      "onUpdate:modelValue": t[0] || (t[0] = (r) => n.something = r)
    }, null, 512), [
      [b, n.something]
    ]),
    c("select", null, [
      (s(!0), _(i, null, g(u.newList, (r) => (s(), _("option", { value: r }, a(r), 9, k))), 256))
    ])
  ], 64);
}
const O = /* @__PURE__ */ d($, [["render", H], ["__scopeId", "data-v-bdbd70eb"]]);
export {
  E as BlDropdown,
  T as HelloWord,
  O as TDropdown
};
