const path = require("path");
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const {
  FaTint, FaBolt, FaHeartbeat, FaShieldAlt, FaHome,
  FaRocket, FaMoon, FaFlask, FaArrowRight,
} = require("react-icons/fa");

// ---- palette ----------------------------------------------------------
const BG     = "0B0F1A"; // deep space navy
const PANEL  = "151B2B"; // raised panel
const PANEL2 = "1C2740"; // lighter panel
const WHITE  = "FFFFFF";
const MUTED  = "AEB7C7"; // cool grey-blue
const ACCENT = "F2A93B"; // lunar amber
const LINEC  = "2A3550";

const HEAD = "Trebuchet MS";
const BODY = "Calibri";

const IMG = (f) => path.join(__dirname, "images", f);
const shadow = () => ({ type: "outer", color: "000000", blur: 9, offset: 3, angle: 135, opacity: 0.45 });

// ---- icon helper ------------------------------------------------------
async function icon(Comp, color, size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Comp, { color, size: String(size) })
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}

async function build() {
  const pres = new pptxgen();
  pres.defineLayout({ name: "W", width: 13.333, height: 7.5 });
  pres.layout = "W";
  pres.author = "0328matthew";
  pres.title = "Why Go Back to the Moon? — Artemis II";
  const W = 13.333, H = 7.5;

  // pre-render icons
  const ic = {
    water:  await icon(FaTint, "#" + ACCENT),
    bolt:   await icon(FaBolt, "#" + ACCENT),
    heart:  await icon(FaHeartbeat, "#" + ACCENT),
    shield: await icon(FaShieldAlt, "#" + ACCENT),
    home:   await icon(FaHome, "#" + ACCENT),
    rocket: await icon(FaRocket, "#" + ACCENT),
    moon:   await icon(FaMoon, "#" + WHITE),
    flask:  await icon(FaFlask, "#" + WHITE),
    arrow:  await icon(FaArrowRight, "#" + MUTED),
  };

  const kicker = (slide, text, x, y) =>
    slide.addText(text.toUpperCase(), {
      x, y, w: 6, h: 0.35, margin: 0, fontFace: HEAD, fontSize: 13,
      bold: true, color: ACCENT, charSpacing: 3, align: "left",
    });

  // ============================== SLIDE 1 — TITLE ======================
  let s = pres.addSlide();
  s.background = { color: BG };
  // big moon, circular, bleeding off the right
  s.addImage({ path: IMG("moon.jpg"), x: 7.7, y: 0.85, w: 5.8, h: 5.8,
    sizing: { type: "cover", w: 5.8, h: 5.8 }, rounding: true, shadow: shadow() });
  kicker(s, "NASA · Artemis II · 2026", 0.9, 1.35);
  s.addText("Why Go Back\nto the Moon?", {
    x: 0.85, y: 1.85, w: 7.2, h: 2.4, margin: 0, fontFace: HEAD, fontSize: 60,
    bold: true, color: WHITE, lineSpacingMultiple: 0.98, align: "left",
  });
  s.addText("The real purpose behind humanity's most expensive return to deep space.", {
    x: 0.9, y: 4.35, w: 6.6, h: 1.0, margin: 0, fontFace: BODY, fontSize: 19,
    color: MUTED, align: "left",
  });
  s.addShape(pres.shapes.LINE, { x: 0.92, y: 6.35, w: 0.85, h: 0, line: { color: ACCENT, width: 2.5 } });
  s.addText("A 3-minute briefing", { x: 0.9, y: 6.5, w: 5, h: 0.4, margin: 0,
    fontFace: BODY, fontSize: 13, italic: true, color: MUTED });

  // ============================== SLIDE 2 — THE QUESTION ===============
  s = pres.addSlide();
  s.background = { color: BG };
  // Earth sphere bleeding off the bottom-right (celestial-body motif)
  s.addImage({ path: IMG("bluemarble.jpg"), x: 8.55, y: 2.0, w: 6.7, h: 6.7,
    sizing: { type: "cover", w: 6.7, h: 6.7 }, rounding: true, shadow: shadow() });
  kicker(s, "The Question", 0.9, 1.1);
  s.addText("We spent billions to revisit\na place we left 50 years ago.", {
    x: 0.85, y: 1.55, w: 7.4, h: 1.9, margin: 0, fontFace: HEAD, fontSize: 33,
    bold: true, color: WHITE, lineSpacingMultiple: 1.02,
  });
  s.addText([
    { text: "Artemis II just flew ", options: {} },
    { text: "farther from Earth than any humans in history", options: { bold: true, color: ACCENT } },
    { text: " — surpassing the record set by Apollo. So why go back?", options: {} },
  ], { x: 0.9, y: 3.75, w: 6.7, h: 1.4, margin: 0, fontFace: BODY, fontSize: 19, color: WHITE });
  s.addText("Earth from Apollo 17 — “The Blue Marble”  ·  NASA", {
    x: 0.9, y: 6.95, w: 8, h: 0.35, margin: 0, fontFace: BODY, fontSize: 10.5,
    italic: true, color: MUTED });

  // ============================== SLIDE 3 — RESOURCES ==================
  s = pres.addSlide();
  s.background = { color: BG };
  // right image panel — scientific water-ice distribution map (enlarged)
  s.addImage({ path: IMG("ice-lend.jpg"), x: 8.5, y: 0.5, w: 4.35, h: 6.5,
    sizing: { type: "cover", w: 4.35, h: 6.5 }, shadow: shadow() });
  s.addText("Water-rich regions (blue) near the lunar South Pole  ·  NASA / LRO", { x: 8.5, y: 7.05, w: 4.35, h: 0.3, margin: 0,
    fontFace: BODY, fontSize: 9, italic: true, color: MUTED, align: "center" });
  kicker(s, "Reason 1 — Resources", 0.9, 0.7);
  s.addText("The Moon Is a Treasure Chest", {
    x: 0.85, y: 1.1, w: 8.2, h: 0.9, margin: 0, fontFace: HEAD, fontSize: 32, bold: true, color: WHITE });

  const card = (y, ico, head, body) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.9, y, w: 7.25, h: 2.05, fill: { color: PANEL }, line: { color: LINEC, width: 1 }, shadow: shadow() });
    s.addShape(pres.shapes.OVAL, { x: 1.25, y: y + 0.5, w: 1.05, h: 1.05, fill: { color: PANEL2 } });
    s.addImage({ data: ico, x: 1.52, y: y + 0.77, w: 0.5, h: 0.5 });
    s.addText(head, { x: 2.75, y: y + 0.32, w: 5.2, h: 0.5, margin: 0, fontFace: HEAD, fontSize: 21, bold: true, color: WHITE });
    s.addText(body, { x: 2.75, y: y + 0.86, w: 5.25, h: 1.0, margin: 0, fontFace: BODY, fontSize: 15.5, color: MUTED, lineSpacingMultiple: 1.02 });
  };
  card(2.35, ic.water, "Water Ice at the South Pole",
    "Scientists believe vast water ice is frozen here — and it can be split into rocket fuel, made directly in space.");
  card(4.65, ic.bolt, "Helium-3",
    "A rare material almost absent on Earth, seen as a promising clean energy source for the future.");

  // ============================== SLIDE 4 — SURVIVAL ===================
  s = pres.addSlide();
  s.background = { color: BG };
  // left image (astronaut, square) framed half-height-bleed
  s.addImage({ path: IMG("astronaut.jpg"), x: 0, y: 0, w: 5.3, h: H,
    sizing: { type: "cover", w: 5.3, h: H } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 6.95, w: 5.3, h: 0.55, fill: { color: BG, transparency: 15 } });
  s.addText("Apollo 11 · NASA", { x: 0.25, y: 7.0, w: 4, h: 0.35, margin: 0, fontFace: BODY, fontSize: 10, italic: true, color: WHITE });

  kicker(s, "Reason 2 — Practice", 5.9, 0.85);
  s.addText("A Testing Ground for Survival", {
    x: 5.85, y: 1.25, w: 7.0, h: 1.4, margin: 0, fontFace: HEAD, fontSize: 31, bold: true, color: WHITE, lineSpacingMultiple: 1.0 });
  s.addText("Before we travel to Mars, we must learn to live in space for long stretches of time. The Moon lets us rehearse — close to home.", {
    x: 5.9, y: 2.55, w: 6.7, h: 1.0, margin: 0, fontFace: BODY, fontSize: 16, color: MUTED, lineSpacingMultiple: 1.05 });

  const row = (y, ico, text) => {
    s.addShape(pres.shapes.OVAL, { x: 5.9, y, w: 0.62, h: 0.62, fill: { color: PANEL2 } });
    s.addImage({ data: ico, x: 6.06, y: y + 0.16, w: 0.3, h: 0.3 });
    s.addText(text, { x: 6.75, y: y - 0.02, w: 6.0, h: 0.66, margin: 0, valign: "middle", fontFace: BODY, fontSize: 17, color: WHITE });
  };
  row(3.95, ic.heart,  "Test life-support systems");
  row(4.85, ic.shield, "Survive dangerous deep-space radiation");
  row(5.75, ic.home,   "Build long-term habitats for humans");

  // ============================== SLIDE 5 — ROADMAP TO MARS ============
  s = pres.addSlide();
  s.background = { color: BG };
  s.addImage({ path: IMG("lunar-base.jpg"), x: 0, y: 0, w: W, h: H,
    sizing: { type: "cover", w: W, h: H } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 7.2, h: H, fill: { color: BG, transparency: 18 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 4.4, h: H, fill: { color: BG, transparency: 42 } });
  kicker(s, "Reason 3 — The Roadmap", 0.9, 0.95);
  s.addText("A Stepping Stone to Mars", {
    x: 0.85, y: 1.35, w: 7.0, h: 1.3, margin: 0, fontFace: HEAD, fontSize: 33, bold: true, color: WHITE, lineSpacingMultiple: 1.0 });
  s.addText([
    { text: "Instead of brief visits, NASA and its partners plan to ", options: {} },
    { text: "build permanent bases on the lunar surface", options: { bold: true, color: ACCENT } },
    { text: " — supporting long-term research and preparing astronauts for the journey to Mars.", options: {} },
  ], { x: 0.9, y: 2.7, w: 6.7, h: 1.6, margin: 0, fontFace: BODY, fontSize: 18, color: WHITE, lineSpacingMultiple: 1.08 });

  // stepper: Moon -> Lunar Base -> Mars
  const step = (x, ico, label) => {
    s.addShape(pres.shapes.OVAL, { x, y: 5.25, w: 0.78, h: 0.78, fill: { color: PANEL2 }, line: { color: ACCENT, width: 1.25 } });
    s.addImage({ data: ico, x: x + 0.21, y: 5.46, w: 0.36, h: 0.36 });
    s.addText(label, { x: x - 0.6, y: 6.15, w: 2.0, h: 0.4, margin: 0, align: "center", fontFace: BODY, fontSize: 13.5, bold: true, color: WHITE });
  };
  const arrow = (x) => s.addImage({ data: ic.arrow, x, y: 5.5, w: 0.42, h: 0.28 });
  step(0.95, ic.moon, "Reach the Moon");
  arrow(2.15);
  step(2.95, ic.home, "Surface base");
  arrow(4.15);
  step(4.95, ic.rocket, "On to Mars");
  s.addText("Artist's concept of a lunar base  ·  NASA", { x: 8.5, y: 7.05, w: 4.6, h: 0.3, margin: 0,
    fontFace: BODY, fontSize: 9.5, italic: true, color: WHITE, align: "right" });

  // ============================== SLIDE 6 — CONCLUSION =================
  s = pres.addSlide();
  s.background = { color: BG };
  s.addImage({ path: IMG("mars.jpg"), x: 8.05, y: 0.95, w: 5.6, h: 5.6,
    sizing: { type: "cover", w: 5.6, h: 5.6 }, rounding: true, shadow: shadow() });
  kicker(s, "In Conclusion", 0.9, 1.2);
  s.addText("Not a waste of money —\nan investment.", {
    x: 0.85, y: 1.65, w: 7.4, h: 1.8, margin: 0, fontFace: HEAD, fontSize: 42, bold: true, color: WHITE, lineSpacingMultiple: 0.98 });

  const chip = (x, label) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 3.75, w: 2.35, h: 0.72, rectRadius: 0.12, fill: { color: PANEL }, line: { color: ACCENT, width: 1 } });
    s.addText(label, { x, y: 3.75, w: 2.35, h: 0.72, margin: 0, align: "center", valign: "middle", fontFace: HEAD, fontSize: 15, bold: true, color: WHITE });
  };
  chip(0.9, "Resources");
  chip(3.4, "Technology");
  chip(5.9, "The Future");

  s.addText("This historic return may be the first step toward making humanity a multi-planetary species.", {
    x: 0.9, y: 4.95, w: 6.9, h: 1.2, margin: 0, fontFace: BODY, fontSize: 18, color: MUTED, lineSpacingMultiple: 1.06 });
  s.addText("Thank you.", { x: 0.9, y: 6.25, w: 5, h: 0.6, margin: 0, fontFace: HEAD, fontSize: 22, bold: true, color: ACCENT });

  const out = path.join(__dirname, "Artemis-Moon-Return.pptx");
  await pres.writeFile({ fileName: out });
  console.log("WROTE " + out);
}

build().catch((e) => { console.error(e); process.exit(1); });
