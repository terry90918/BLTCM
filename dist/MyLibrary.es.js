import { ref as f, openBlock as o, createElementBlock as n, toDisplayString as p, normalizeStyle as m, Fragment as c, renderList as u, withDirectives as v, createElementVNode as d, vModelText as y } from "vue";
const a = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, r] of t)
    s[l] = r;
  return s;
}, h = {
  __name: "HelloWorld",
  setup(e) {
    const t = f(0), s = () => {
      t.value++;
    };
    return (l, r) => (o(), n("button", {
      type: "button",
      onClick: s
    }, "count is " + p(t.value), 1));
  }
}, L = /* @__PURE__ */ a(h, [["__scopeId", "data-v-8afefce5"]]);
const g = {
  __name: "BLDropdown",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    selectedWidth: {
      type: Number,
      default: 10
    }
  },
  setup(e) {
    return (t, s) => (o(), n("select", {
      style: m(`width: ${e.selectedWidth}%;`)
    }, [
      (o(!0), n(c, null, u(e.list, (l) => (o(), n("option", { key: l }, p(l), 1))), 128))
    ], 4));
  }
}, W = /* @__PURE__ */ a(g, [["__scopeId", "data-v-2f4b7c98"]]);
const x = {
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
}, w = ["value"];
function D(e, t, s, l, r, i) {
  return o(), n(c, null, [
    v(d("input", {
      type: "text",
      "onUpdate:modelValue": t[0] || (t[0] = (_) => r.something = _)
    }, null, 512), [
      [y, r.something]
    ]),
    d("select", null, [
      (o(!0), n(c, null, u(i.newList, (_) => (o(), n("option", { value: _ }, p(_), 9, w))), 256))
    ])
  ], 64);
}
const b = /* @__PURE__ */ a(x, [["render", D], ["__scopeId", "data-v-999a2393"]]);
export {
  W as BlDropdown,
  L as HelloWord,
  b as TDropdown
};
