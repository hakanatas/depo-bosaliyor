/* SAHNE 2 — ADIMLAR (10–28 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 2, start: 10, end: 28, name: "Steps", nameTr: "Adımlar", concept: "50 L after 10 minutes", conceptTr: "10 dakikada 50 L", render });
})(window.LI = window.LI || {});
