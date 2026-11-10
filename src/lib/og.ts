import { Resvg, initWasm } from '@resvg/resvg-wasm';
import wasm from '@resvg/resvg-wasm/index_bg.wasm?module';
import { fontBase64 } from './og-font';
let initialized: Promise<void> | undefined;
function initialize() { return initialized ??= initWasm(wasm); }
const escape = (s: string) => s.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));

function fontBuffer() {
  return Uint8Array.from(atob(fontBase64), c => c.charCodeAt(0));
}

function render(svg: string) {
  return new Response(new Uint8Array(new Resvg(svg, {font: {fontBuffers:[fontBuffer()], loadSystemFonts:false, defaultFontFamily:"DejaVu Sans"}}).render().asPng()), {headers:{'Content-Type':'image/png','Cache-Control':'public, max-age=3600'}});
}

export async function ogImage(title: string, label = 'Writing by Adeloye Adetayo') {
 await initialize();
 const words = title.slice(0,180).split(/\s+/); const lines: string[] = []; let line = '';
 for (const word of words) { if ((line+' '+word).length > 32 && line) { lines.push(line); line=word; } else line += (line?' ':'')+word; }
 if(line) lines.push(line);
 const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0d0d0f"/><rect x="60" y="60" width="1080" height="510" rx="20" fill="#161619" stroke="#343438"/><text x="100" y="135" font-family="sans-serif" font-size="24" fill="#a1a1aa">${escape(label)}</text>${lines.slice(0,4).map((l,i)=>`<text x="100" y="${235+i*72}" font-family="sans-serif" font-weight="bold" font-size="58" fill="#fafafa">${escape(l)}</text>`).join('')}<text x="100" y="530" font-family="sans-serif" font-size="24" fill="#a1a1aa">spectra010s.com</text></svg>`;
 return render(svg);
}

export async function ogHome() {
 await initialize();
 const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fafafa"/>
      <stop offset="0.5" stop-color="#d4d4d8"/>
      <stop offset="1" stop-color="#71717a"/>
    </linearGradient>
    <radialGradient id="glow1" cx="18%" cy="16%" r="22%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.09"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="82%" cy="78%" r="20%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle cx="25" cy="25" r="2" fill="#ffffff" fill-opacity="0.025"/>
      <circle cx="75" cy="75" r="2" fill="#ffffff" fill-opacity="0.025"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0d0d0f"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect x="0.5" y="0.5" width="1199" height="629" fill="none" stroke="#ffffff" stroke-opacity="0.08"/>
  <text x="600" y="287" text-anchor="middle" font-family="DejaVu Sans" font-weight="700" font-size="72" fill="url(#nameGrad)">Adeloye Adetayo</text>
  <text x="600" y="350" text-anchor="middle" font-family="DejaVu Sans" font-weight="600" font-size="36" fill="#f4f4f5">Spectra010s | Developer</text>
  <text x="600" y="396" text-anchor="middle" font-family="DejaVu Sans" font-size="24" fill="#a1a1aa">Building software, tools, and strange ideas from a phone</text>
</svg>`;
 return render(svg);
}
