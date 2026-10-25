import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const casesDir = path.resolve(__dirname, '../public/images/cases');
const illustDir = path.resolve(__dirname, '../public/images/illustrations');

if (!fs.existsSync(casesDir)) fs.mkdirSync(casesDir, { recursive: true });
if (!fs.existsSync(illustDir)) fs.mkdirSync(illustDir, { recursive: true });

function createCaseSvg(title, category, color1, color2, iconType) {
  let iconSvg = '';
  if (iconType === 'shield') {
    iconSvg = `<path d="M120 40 L180 65 V130 C180 170 120 200 120 200 C120 200 60 170 60 130 V65 Z" fill="${color1}" fill-opacity="0.2" stroke="${color1}" stroke-width="4"/><path d="M100 120 L115 135 L145 95" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else if (iconType === 'lock') {
    iconSvg = `<rect x="75" y="90" width="90" height="75" rx="10" fill="${color1}" fill-opacity="0.2" stroke="${color1}" stroke-width="4"/><path d="M90 90 V65 C90 48 103 35 120 35 C137 35 150 48 150 65 V90" stroke="${color1}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="120" cy="125" r="7" fill="#FFFFFF"/><path d="M120 132 V145" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>`;
  } else if (iconType === 'globe') {
    iconSvg = `<circle cx="120" cy="120" r="65" fill="${color1}" fill-opacity="0.15" stroke="${color1}" stroke-width="4"/><ellipse cx="120" cy="120" rx="30" ry="65" fill="none" stroke="${color1}" stroke-width="3"/><line x1="55" y1="120" x2="185" y2="120" stroke="${color1}" stroke-width="3"/><path d="M68 85 Q120 100 172 85" fill="none" stroke="${color1}" stroke-width="2.5"/><path d="M68 155 Q120 140 172 155" fill="none" stroke="${color1}" stroke-width="2.5"/>`;
  } else if (iconType === 'terminal') {
    iconSvg = `<rect x="60" y="55" width="120" height="95" rx="8" fill="#1E293B" stroke="${color1}" stroke-width="3"/><rect x="60" y="55" width="120" height="22" rx="8" fill="#0F172A"/><circle cx="72" cy="66" r="3" fill="#EF4444"/><circle cx="82" cy="66" r="3" fill="#F59E0B"/><circle cx="92" cy="66" r="3" fill="#10B981"/><path d="M75 100 L88 110 L75 120" stroke="${color1}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="94" y1="120" x2="115" y2="120" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`;
  } else if (iconType === 'phone') {
    iconSvg = `<rect x="80" y="45" width="80" height="135" rx="14" fill="#0F172A" stroke="${color1}" stroke-width="3"/><rect x="88" y="62" width="64" height="95" rx="4" fill="${color1}" fill-opacity="0.2"/><circle cx="120" cy="167" r="4" fill="#94A3B8"/><path d="M102 95 L112 105 L138 82" stroke="${color1}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else {
    iconSvg = `<circle cx="120" cy="115" r="45" fill="${color1}" fill-opacity="0.2" stroke="${color1}" stroke-width="4"/><path d="M100 115 L140 115 M120 95 L120 135" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad_${color1.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="50%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <radialGradient id="glow_${color1.replace('#','')}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${color1}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${color1}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="400" height="240" fill="url(#bgGrad_${color1.replace('#','')})"/>
  <rect width="400" height="240" fill="url(#grid)"/>

  <!-- Glowing orb -->
  <circle cx="200" cy="120" r="130" fill="url(#glow_${color1.replace('#','')})"/>

  <!-- Network lines -->
  <g opacity="0.3" stroke="${color1}" stroke-width="1.2">
    <line x1="30" y1="40" x2="100" y2="80"/>
    <line x1="100" y1="80" x2="180" y2="60"/>
    <line x1="180" y1="60" x2="320" y2="90"/>
    <line x1="320" y1="90" x2="370" y2="40"/>
    <line x1="40" y1="190" x2="110" y2="160"/>
    <line x1="110" y1="160" x2="260" y2="180"/>
    <line x1="260" y1="180" x2="350" y2="160"/>
    <circle cx="100" cy="80" r="3" fill="${color1}"/>
    <circle cx="180" cy="60" r="3" fill="${color1}"/>
    <circle cx="320" cy="90" r="3" fill="${color1}"/>
    <circle cx="110" cy="160" r="3" fill="${color1}"/>
    <circle cx="260" cy="180" r="3" fill="${color1}"/>
  </g>

  <!-- Central Symbol -->
  <g transform="translate(80, 0)">
    ${iconSvg}
  </g>

  <!-- Floating subtle badge -->
  <rect x="24" y="20" width="105" height="24" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
  <text x="76" y="36" fill="${color2}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" letter-spacing="0.5">${category.toUpperCase()}</text>
</svg>`;
}

const casesMap = [
  { file: 'cambridge-analytica.svg', title: 'Facebook–Cambridge Analytica', cat: 'Data Breach', c1: '#4285F4', c2: '#93C5FD', icon: 'shield' },
  { file: 'bank-phishing.svg', title: 'Indian Bank Phishing', cat: 'Online Fraud', c1: '#FBBC05', c2: '#FDE68A', icon: 'phone' },
  { file: 'wannacry.svg', title: 'WannaCry Ransomware', cat: 'Ransomware', c1: '#EA4335', c2: '#FCA5A5', icon: 'lock' },
  { file: 'instagram-leak.svg', title: 'Instagram Data Scraping', cat: 'Social Media', c1: '#E1306C', c2: '#F9A8D4', icon: 'shield' },
  { file: 'deepfake-scams.svg', title: 'Celebrity Deepfakes', cat: 'Identity Theft', c1: '#8B5CF6', c2: '#C4B5FD', icon: 'terminal' },
  { file: 'cyberstalking.svg', title: 'Online Harassment', cat: 'Cyberbullying', c1: '#EC4899', c2: '#F472B6', icon: 'shield' },
  { file: 'solarwinds.svg', title: 'SolarWinds Espionage', cat: 'Cyber Espionage', c1: '#06B6D4', c2: '#67E8F9', icon: 'globe' },
  { file: 'upi-scam.svg', title: 'UPI Payment Fraud', cat: 'Online Fraud', c1: '#F59E0B', c2: '#FCD34D', icon: 'phone' },
  { file: 'target-breach.svg', title: 'Target Corporation Breach', cat: 'Data Breach', c1: '#EF4444', c2: '#FCA5A5', icon: 'lock' },
  { file: 'linkedin-scraping.svg', title: 'LinkedIn Data Scraping', cat: 'Identity Theft', c1: '#0A66C2', c2: '#93C5FD', icon: 'terminal' },
  { file: 'cosmos-heist.svg', title: 'Cosmos Bank Heist', cat: 'Online Fraud', c1: '#F59E0B', c2: '#FDE68A', icon: 'globe' },
  { file: 'equifax-breach.svg', title: 'Equifax Credit Bureau', cat: 'Data Breach', c1: '#DC2626', c2: '#FCA5A5', icon: 'lock' },
  { file: 'twitter-hack.svg', title: 'Twitter VIP Hijack', cat: 'Social Media', c1: '#1D9BF0', c2: '#BAE6FD', icon: 'phone' },
  { file: 'colonial-pipeline.svg', title: 'Colonial Pipeline', cat: 'Ransomware', c1: '#10B981', c2: '#6EE7B7', icon: 'lock' },
  { file: 'aiims-ransomware.svg', title: 'AIIMS Delhi Attack', cat: 'Ransomware', c1: '#EF4444', c2: '#FCA5A5', icon: 'shield' },
  { file: 'google-oauth.svg', title: 'Google OAuth Phishing', cat: 'Online Fraud', c1: '#4285F4', c2: '#93C5FD', icon: 'terminal' },
  { file: 'sim-swap.svg', title: 'SIM Swap Telecom Fraud', cat: 'Identity Theft', c1: '#8B5CF6', c2: '#C4B5FD', icon: 'phone' },
  { file: 'uber-breach.svg', title: 'Uber Extortion Cover-up', cat: 'Data Breach', c1: '#4B5563', c2: '#D1D5DB', icon: 'lock' },
  { file: 'pegasus-spyware.svg', title: 'Pegasus Zero-Click', cat: 'Cyber Espionage', c1: '#0EA5E9', c2: '#7DD3FC', icon: 'globe' },
  { file: 'aadhaar-security.svg', title: 'Aadhaar Biometric System', cat: 'Identity Theft', c1: '#6366F1', c2: '#A5B4FC', icon: 'shield' }
];

casesMap.forEach(item => {
  const svg = createCaseSvg(item.title, item.cat, item.c1, item.c2, item.icon);
  fs.writeFileSync(path.join(casesDir, item.file), svg, 'utf8');
});

console.log(`[GenerateSvgs] Wrote ${casesMap.length} case thumbnail SVGs.`);
