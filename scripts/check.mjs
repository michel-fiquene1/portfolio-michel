import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'public');
const html = readFileSync(resolve(site, 'index.html'), 'utf8');
const failures = [];
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (ids.length !== new Set(ids).size) failures.push('IDs duplicados no HTML');

let resources = 0;
for (const [, attr, value] of html.matchAll(/\b(src|href)="([^"]*)"/g)) {
  if (!value || /^(https?:|mailto:|tel:)/.test(value)) continue;
  if (value.startsWith('#')) {
    if (value.length > 1 && !ids.includes(value.slice(1))) failures.push(`Âncora ausente: ${value}`);
    continue;
  }
  if (/^[a-z]+:/i.test(value)) {
    failures.push(`Recurso não estático em ${attr}`);
    continue;
  }
  const target = resolve(site, decodeURIComponent(value.split(/[?#]/)[0]));
  if (!target.startsWith(site + sep) || !existsSync(target)) failures.push(`Recurso local ausente: ${value}`);
  resources++;
}
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
for (const [i, match] of scripts.entries()) {
  try { new Script(match[1], { filename: `index.html:script-${i + 1}` }); }
  catch (error) { failures.push(error.message); }
}
for (const tag of html.matchAll(/<a\b[^>]*\btarget="_blank"[^>]*>/g)) {
  if (!/\brel="[^"]*\bnoopener\b/.test(tag[0])) failures.push('Link de nova aba sem noopener');
}
for (const id of ['nav', 'th', 'lg', 'fm', 'bk', 'cp', 'ci', 'gameCanvas', 'gameStart', 'gamePause', 'gameJump', 'gameDuck']) {
  if (!ids.includes(id)) failures.push(`Controle obrigatório ausente: ${id}`);
}
if (!/publish\s*=\s*["']public["']/.test(readFileSync(resolve(root, 'netlify.toml'), 'utf8'))) failures.push('Pasta Netlify deve ser public');
function scan(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || /\.(?:env|pem|key|bak|log|zip)$/i.test(entry.name)) failures.push(`Arquivo inadequado para hospedagem: ${entry.name}`);
    if (entry.isDirectory()) scan(resolve(directory, entry.name));
  }
}
scan(site);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`OK: index.html, ${ids.length} IDs, âncoras/SVG, ${resources} recursos locais, ${scripts.length} scripts, controles e configuração Netlify.`);
}
