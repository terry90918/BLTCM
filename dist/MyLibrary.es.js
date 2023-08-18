import { ref as a, openBlock as c, createElementBlock as r, toDisplayString as l, normalizeStyle as d, Fragment as p, renderList as u } from "vue";
const s = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, _] of t)
    o[n] = _;
  return o;
}, i = {
  __name: "HelloWorld",
  setup(e) {
    const t = a(0), o = () => {
      t.value++;
    };
    return (n, _) => (c(), r("button", {
      type: "button",
      onClick: o
    }, "count is " + l(t.value), 1));
  }
}, v = /* @__PURE__ */ s(i, [["__scopeId", "data-v-8afefce5"]]);
const f = {
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
    return (t, o) => (c(), r("select", {
      style: d(`width: ${e.selectedWidth}%;`)
    }, [
      (c(!0), r(p, null, u(e.list, (n) => (c(), r("option", { key: n }, l(n), 1))), 128))
    ], 4));
  }
}, m = /* @__PURE__ */ s(f, [["__scopeId", "data-v-2f4b7c98"]]);
export {
  m as BlDropdown,
  v as HelloWord
};
