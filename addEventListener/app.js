
const eventListener = (el, evt, fn, opts = {}) => {
  const delegatorFn = (e) =>
    e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(
    evt,
    opts.target ? delegatorFn : fn,
    opts.options || false
  );
  if (opts.target) return delegatorFn;
};

const fn = () => console.log("!");
console.log(eventListener(document.body, "click", fn));
console.log(eventListener(document.body, "click", fn, { target: "p" }));
console.log(eventListener(document.body, "click", fn, { options: true }));
