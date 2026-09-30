import { Resvg, initWasm } from '@resvg/resvg-wasm';
import wasm from '@resvg/resvg-wasm/index_bg.wasm?module';
import { fontBase64 } from './og-font';
let initialized: Promise<void> | undefined;
function initialize() { return initialized ??= initWasm(wasm); }
const escape = (s: string) => s.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export async function ogImage(title: string, label = 'Writing by Adeloye Adetayo') {
 await initialize();
 const words = title.slice(0,180).split(/\s+/); const lines: string[] = []; let line = '';
 for (const word of words) { if ((line+' '+word).length > 32 && line) { lines.push(line); line=word; } else line += (line?' ':'')+word; }
 if(line) lines.push(line);
 const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0d0d0f"/><rect x="60" y="60" width="1080" height="510" rx="20" fill="#161619" stroke="#343438"/><text x="100" y="135" font-family="sans-serif" font-size="24" fill="#a1a1aa">${escape(label)}</text>${lines.slice(0,4).map((l,i)=>`<text x="100" y="${235+i*72}" font-family="sans-serif" font-weight="bold" font-size="58" fill="#fafafa">${escape(l)}</text>`).join('')}<text x="100" y="530" font-family="sans-serif" font-size="24" fill="#a1a1aa">spectra010s.com</text></svg>`;
 return new Response(new Uint8Array(new Resvg(svg, {font: {fontBuffers:[Uint8Array.from(atob(fontBase64), c => c.charCodeAt(0))], loadSystemFonts:false, defaultFontFamily:"DejaVu Sans"}}).render().asPng()), {headers:{'Content-Type':'image/png','Cache-Control':'public, max-age=3600'}});
}
