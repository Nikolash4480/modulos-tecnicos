/* @ds-bundle: {"format":4,"namespace":"TechKit","components":[{"name":"Icon"},{"name":"RailNav"},{"name":"BottomTabBar"},{"name":"CategoryRow"},{"name":"ProgressLine"},{"name":"SelectableBars"},{"name":"BigMetric"},{"name":"CompareRow"},{"name":"WarningBlock"},{"name":"ContentsRow"},{"name":"RegMark"},{"name":"HatchStripe"},{"name":"SlashMarks"},{"name":"BigNumeral"},{"name":"SpecLabel"},{"name":"SpecTable"},{"name":"TitleRule"},{"name":"CalloutDot"},{"name":"OffsetCard"},{"name":"BarcodeStrip"},{"name":"DotGrid"},{"name":"CodeTile"},{"name":"TechTitle"},{"name":"SpecimenGrid"}]} */
(function () {
var R = window.React, h = R.createElement, REG = {};
function reg(n, f) { REG[n] = f; return f; }
function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
function circ(x, y, r) { return 'M' + (x - r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 0 ' + (2 * r) + ' 0a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0'; }
function sty(p, extra) { return Object.assign({}, extra || {}, p.style || {}); }
function lcg(s) { return function () { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; }; }
function arr(n) { var a = [], i; for (i = 0; i < n; i++) a.push(i); return a; }
var TONES = { accent: 'var(--accent)', amber: 'var(--chart-2)', teal: 'var(--chart-3)', off: 'var(--chart-off)', ink: 'var(--ink)', mid: 'var(--tile)', paper: 'var(--paper-2)', night: 'var(--night)', faint: 'var(--ink-3)', highlight: 'var(--highlight)', light: 'var(--on-night)' };
function tn(t, d) { return TONES[t] || t || TONES[d || 'accent']; }

var ICONS = {};
ICONS.arrow = 'M5 12h14m-5-5 5 5-5 5';
ICONS.arrowUp = 'M12 19V5m-6 6 6-6 6 6';
ICONS.plus = 'M12 5v14M5 12h14';
ICONS.warning = 'M12 4 3 20h18zM12 10v5M12 17.5h.01';
ICONS.activity = 'M3 12h4l3-7 4 14 3-7h4';
ICONS.training = 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18';
ICONS.cube = 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12 4 7.5';
ICONS.square = 'M5 5h14v14H5zM11 11h2v2h-2z';
ICONS.logo = 'M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9zM12 8l3.5 2v4L12 16l-3.5-2v-4z';

reg('Icon', function Icon(p) {
  var s = p.size || 20, d = ICONS[p.name] || ICONS.square;
  return h('svg', { width: s, height: s, viewBox: '0 0 24 24', className: cx('tk-icon', p.className), fill: p.filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: p.stroke || 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, style: p.style }, h('path', { d: d }));
});
function I(name, size, stroke) { return h(REG.Icon, { name: name, size: size, stroke: stroke }); }


reg('RailNav', function RailNav(p) {
  var items = p.items || [];
  return h('nav', { className: cx('tk-rail', p.className), style: p.style },
    items.map(function (it, i) {
      return h('div', { key: i, className: cx('tk-rail-item', it.active && 'is-active') },
        h('div', { className: 'tk-rail-code' }, it.code, it.num && h('br'), it.num), h('i', { className: 'tk-rail-dash' }));
    }),
    h('div', { className: 'tk-rail-spacer' }),
    p.action && h('span', { className: 'tk-rail-act' }, I(p.action, 16)));
});
reg('BottomTabBar', function BottomTabBar(p) {
  return h('div', { className: cx('tk-btabs', p.className), style: p.style }, (p.items || []).map(function (it, i) {
    return h('div', { key: i, className: cx('tk-btab', p.active === i && 'is-active') }, I(it.icon, 20), h('span', null, it.label));
  }));
});
var SIGNAL = h('svg', { width: 18, height: 12, viewBox: '0 0 18 12', fill: 'currentColor', 'aria-hidden': true }, arr(4).map(function (i) { return h('rect', { key: i, x: i * 5, y: 9 - i * 3, width: 3, height: 3 + i * 3, rx: 0.8 }); }));
var WIFI = h('svg', { width: 18, height: 12, viewBox: '0 0 18 12', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', 'aria-hidden': true }, h('path', { d: 'M1 4.5a11 11 0 0 1 16 0M4 7.5a7 7 0 0 1 10 0M7 10.5a3 3 0 0 1 4 0' }));
var BATTERY = h('svg', { width: 27, height: 12, viewBox: '0 0 27 12', 'aria-hidden': true }, h('rect', { x: 0.5, y: 0.5, width: 22, height: 11, rx: 3, fill: 'none', stroke: 'currentColor', opacity: 0.5 }), h('rect', { x: 2, y: 2, width: 19, height: 8, rx: 1.8, fill: 'currentColor' }), h('rect', { x: 24, y: 4, width: 2, height: 4, rx: 1, fill: 'currentColor', opacity: 0.5 }));

reg('CategoryRow', function CategoryRow(p) {
  return h('div', { className: cx('tk-catrow', p.active && 'is-active', p.className), style: p.style },
    h('span', { className: 'tk-catrow-n' }, p.n),
    h('span', { className: 'tk-catrow-t' }, h('b', null, p.title), p.subtitle && h('small', null, p.subtitle)),
    h('span', { className: 'tk-catrow-a' }, I('arrow', 16)));
});


reg('ProgressLine', function ProgressLine(p) {
  return h('div', { className: cx('tk-pline', p.className), style: p.style },
    h('div', { className: 'tk-pline-track' }, h('i', { style: { width: p.value + '%' } })),
    h('div', { className: 'tk-pline-row' }, h('span', null, p.label), p.arrow !== false && h('i', { className: 'tk-pline-arrow' }), h('span', { className: 'tk-pline-val' }, p.display || (p.value + '%'))));
});
reg('SelectableBars', function SelectableBars(p) {
  var d = p.data || [], ht = p.height || 120, max = 0;
  d.forEach(function (x) { if (x.value > max) max = x.value; });
  return h('div', { className: cx('tk-sbars', p.className), style: sty(p, { height: ht + 28 }) }, d.map(function (x, i) {
    return h('div', { key: i, className: cx('tk-sbar', x.selected && 'is-sel') },
      h('div', { className: 'tk-sbar-col', style: { height: Math.round(x.value / max * ht) } }), h('span', null, x.label));
  }));
});
reg('BigMetric', function BigMetric(p) {
  return h('div', { className: cx('tk-bigm', p.className), style: p.style },
    h('div', { className: 'tk-bigm-row' }, h('i', { className: 'tk-bigm-mark' }), h('span', { className: 'tk-bigm-v' }, p.value),
      h('span', { className: 'tk-bigm-meta' }, (p.meta || []).map(function (m, i) { return h('small', { key: i }, m); }))),
    p.title && h('div', { className: 'tk-bigm-t' }, h('b', null, p.title), ' ', p.text));
});
reg('CompareRow', function CompareRow(p) {
  return h('div', { className: cx('tk-cmp', p.className), style: p.style },
    h('div', { className: 'tk-cmp-main' }, h('b', null, p.prefix || 'Comparar'), h('span', null, p.label), h('em', null, p.value)),
    p.meta && h('small', null, p.meta));
});
reg('WarningBlock', function WarningBlock(p) {
  return h('div', { className: cx('tk-warn', p.className), style: p.style },
    h('div', { className: 'tk-warn-t' }, h('span', null, p.label), h('b', null, p.sub)),
    h('span', { className: 'tk-warn-ic' }, I('warning', 40, 1.8)));
});
reg('ContentsRow', function ContentsRow(p) {
  return h('div', { className: cx('tk-toc', p.className), style: p.style },
    h('span', { className: 'tk-toc-n' }, p.n),
    h('span', { className: 'tk-toc-t' }, h('b', null, p.title), p.sub && h('small', null, p.sub)),
    h('i', { className: 'tk-toc-lead' }), h('span', { className: 'tk-toc-p' }, p.page));
});


reg('RegMark', function RegMark(p) {
  var s = p.size || 14, k = p.kind || 'plus';
  var d = { plus: 'M7 0v14M0 7h14', tl: 'M1 14V1h13', tr: 'M0 1h13v13', bl: 'M1 0v13h13', br: 'M13 0v13H0', tick: 'M7 0v6', 'ring-plus': circ(7, 7, 6.2) + 'M7 4v6M4 7h6', 'ring-x': circ(7, 7, 6.2) + 'M5 5l4 4M9 5l-4 4' }[k] || 'M7 0v14M0 7h14';
  return h('svg', { width: s, height: s, viewBox: '0 0 14 14', fill: 'none', stroke: 'currentColor', strokeWidth: 1, className: cx('tk-reg', p.className), style: p.style, 'aria-hidden': true }, h('path', { d: d }));
});
reg('HatchStripe', function HatchStripe(p) {
  return h('span', { className: cx('tk-hatch', 'tk-hatch-' + (p.tone || 'ink'), p.className), style: sty(p, { width: p.width || 64, height: p.height || 14 }) });
});
reg('SlashMarks', function SlashMarks(p) {
  var s = p.size || 14;
  return h('span', { className: cx('tk-slashes', p.className), style: p.style }, (p.tones || ['accent', 'ink']).map(function (t, i) {
    return h('svg', { key: i, width: s, height: s, viewBox: '0 0 14 14', fill: 'none', stroke: tn(t), strokeWidth: 2.4, strokeLinecap: 'butt', 'aria-hidden': true }, h('path', { d: p.flip ? 'M2 2 12 12' : 'M2 12 12 2' }));
  }));
});
reg('BigNumeral', function BigNumeral(p) {
  var col = p.tone === 'accent' ? 'var(--accent)' : p.tone === 'light' ? 'var(--on-night)' : p.tone === 'faint' ? 'var(--ink-3)' : 'var(--ink)';
  return h('div', { className: cx('tk-bignum', p.className), style: sty(p, { fontSize: p.size || 160, color: col }) }, p.value, p.tint && h('i', { className: 'tk-bignum-tint' }));
});
reg('SpecLabel', function SpecLabel(p) {
  return h('div', { className: cx('tk-speclabel', p.className), style: p.style }, h('small', null, p.label), h('b', null, p.children), p.rule && h('i', null));
});
reg('SpecTable', function SpecTable(p) {
  var rows = p.rows || [], head = p.head;
  return h('div', { className: cx('tk-spectable', p.className), style: p.style },
    head && h('div', { className: 'tk-spectable-row is-head' }, head.map(function (c, i) { return h('span', { key: i }, c); })),
    rows.map(function (r, i) { return h('div', { key: i, className: 'tk-spectable-row' }, r.map(function (c, j) { return h('span', { key: j }, c); })); }));
});
reg('TitleRule', function TitleRule(p) {
  var seg = p.segments || [{ w: 20, tone: 'accent' }, { w: 6, tone: 'ink' }, { w: 74, tone: 'off' }];
  return h('div', { className: cx('tk-trule', p.className), style: p.style }, seg.map(function (s, i) { return h('i', { key: i, style: { width: s.w + '%', background: tn(s.tone) } }); }));
});
reg('CalloutDot', function CalloutDot(p) {
  var s = p.size || 24;
  return h('span', { className: cx('tk-callout', p.className), style: sty(p, { width: s, height: s }) }, p.n);
});
reg('OffsetCard', function OffsetCard(p) {
  return h('div', { className: cx('tk-offset', p.className), style: sty(p, { width: p.width || 260 }) },
    h('div', { className: 'tk-offset-main' },
      h('div', { className: 'tk-offset-brand' }, h('span', null, I('logo', 22)), h('small', null, p.eyebrow)),
      h('i', { className: 'tk-offset-rule' }),
      p.date && h('small', { className: 'tk-offset-date' }, p.date),
      h('div', { className: 'tk-offset-title' }, p.title),
      h('i', { className: 'tk-offset-rule' }),
      (p.fields || []).map(function (f, i) { return h('div', { key: i, className: 'tk-offset-field' }, h('small', null, f.label), h('b', null, f.value)); })),
    p.action && h('div', { className: 'tk-offset-foot' }, p.action));
});
reg('BarcodeStrip', function BarcodeStrip(p) {
  var rnd = lcg(p.seed || 7), bars = [], i;
  for (i = 0; i < (p.count || 46); i++) {
    var r = rnd(), w = 2 + Math.floor(rnd() * 9);
    bars.push(h('i', { key: i, style: { width: w, background: r < 0.2 ? 'var(--on-accent)' : r < 0.55 ? 'var(--accent)' : 'var(--accent-soft)' } }));
  }
  return h('div', { className: cx('tk-barcode', p.className), style: sty(p, { width: p.width || 320 }) },
    h('div', { className: 'tk-barcode-bars', style: { height: p.height || 44 } }, bars),
    h('div', { className: 'tk-barcode-cap' }, h('span', null, p.code), h('i', null)));
});
reg('DotGrid', function DotGrid(p) {
  return h('span', { className: cx('tk-dotgrid', p.className), style: sty(p, { width: p.width || 96, height: p.height || 64, backgroundSize: (p.gap || 8) + 'px ' + (p.gap || 8) + 'px' }) });
});
reg('CodeTile', function CodeTile(p) {
  return h('div', { className: cx('tk-codetile', 'tk-codetile-' + (p.tone || 'tile'), p.className), style: sty(p, { width: p.size || 160, height: p.size || 160 }) }, h('span', null, p.code));
});
reg('TechTitle', function TechTitle(p) {
  return h('div', { className: cx('tk-techtitle', p.className), style: p.style },
    p.eyebrow && h('small', null, p.eyebrow),
    h('div', { className: 'tk-techtitle-t' }, (p.lines || []).map(function (l, i) { return h('span', { key: i }, l); })),
    h('i', null, h('b', null), h('b', null)));
});
reg('SpecimenGrid', function SpecimenGrid(p) {
  return h('div', { className: cx('tk-specimen', p.className), style: p.style }, (p.items || []).map(function (it, i) {
    return h('div', { key: i, className: 'tk-specimen-cell' }, h('span', { style: { fontWeight: it.weight || 500 } }, it.name), h('small', null, it.label));
  }));
});

var OUT = {}; ["Icon","RailNav","BottomTabBar","CategoryRow","ProgressLine","SelectableBars","BigMetric","CompareRow","WarningBlock","ContentsRow","RegMark","HatchStripe","SlashMarks","BigNumeral","SpecLabel","SpecTable","TitleRule","CalloutDot","OffsetCard","BarcodeStrip","DotGrid","CodeTile","TechTitle","SpecimenGrid"].forEach(function (n) { OUT[n] = REG[n]; });
window.TechKit = OUT;
})();
