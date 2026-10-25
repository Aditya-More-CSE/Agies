import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const casesDir = path.resolve(__dirname, '../public/images/cases');

// 1. LinkedIn Profile Scraping & Data Harvesting
const linkedinSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="liBg" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0A1628"/>
      <stop offset="50%" stop-color="#0F213A"/>
      <stop offset="100%" stop-color="#182E4B"/>
    </linearGradient>
    <radialGradient id="liGlow" cx="400" cy="225" r="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0A66C2" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0A66C2" stop-opacity="0"/>
    </radialGradient>
    <filter id="liShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#liBg)"/>
  <circle cx="400" cy="225" r="300" fill="url(#liGlow)"/>

  <!-- Background Data Grid -->
  <g stroke="rgba(255,255,255,0.05)" stroke-width="1">
    <line x1="0" y1="90" x2="800" y2="90"/>
    <line x1="0" y1="180" x2="800" y2="180"/>
    <line x1="0" y1="270" x2="800" y2="270"/>
    <line x1="0" y1="360" x2="800" y2="360"/>
    <line x1="160" y1="0" x2="160" y2="450"/>
    <line x1="320" y1="0" x2="320" y2="450"/>
    <line x1="480" y1="0" x2="480" y2="450"/>
    <line x1="640" y1="0" x2="640" y2="450"/>
  </g>

  <!-- Profile Cards being Scraped -->
  <g transform="translate(100, 110)" filter="url(#liShadow)">
    <!-- Card 1 -->
    <rect x="0" y="0" width="220" height="150" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
    <circle cx="40" cy="40" r="20" fill="#0A66C2"/>
    <rect x="75" y="28" width="90" height="10" rx="3" fill="#94A3B8"/>
    <rect x="75" y="44" width="60" height="7" rx="2" fill="#64748B"/>
    <line x1="20" y1="80" x2="200" y2="80" stroke="#334155" stroke-width="1"/>
    <rect x="20" y="95" width="160" height="6" rx="2" fill="#475569"/>
    <rect x="20" y="110" width="130" height="6" rx="2" fill="#475569"/>
    <rect x="20" y="125" width="80" height="6" rx="2" fill="#38BDF8"/>
  </g>

  <g transform="translate(260, 160)" filter="url(#liShadow)">
    <!-- Card 2 (Elevated) -->
    <rect x="0" y="0" width="240" height="160" rx="10" fill="#0F172A" stroke="#0EA5E9" stroke-width="2"/>
    <circle cx="45" cy="45" r="22" fill="#38BDF8"/>
    <rect x="85" y="32" width="110" height="11" rx="3" fill="#F8FAFC"/>
    <rect x="85" y="50" width="80" height="8" rx="2" fill="#38BDF8"/>
    <line x1="25" y1="90" x2="215" y2="90" stroke="#1E293B" stroke-width="1"/>
    <rect x="25" y="105" width="180" height="7" rx="2" fill="#94A3B8"/>
    <rect x="25" y="120" width="140" height="7" rx="2" fill="#64748B"/>
    <rect x="25" y="135" width="95" height="7" rx="2" fill="#10B981"/>
  </g>

  <!-- Automated Scraper Robot / Ingestion Funnel -->
  <g transform="translate(540, 100)">
    <rect x="0" y="30" width="180" height="190" rx="12" fill="#1E293B" stroke="#0A66C2" stroke-width="2"/>
    <rect x="20" y="15" width="140" height="24" rx="6" fill="#0A66C2"/>
    <text x="90" y="31" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" letter-spacing="1">SCRAPER BOT / API</text>
    
    <!-- Code lines / parsing stream -->
    <text x="25" y="70" fill="#38BDF8" font-family="monospace" font-size="11">GET /profiles?limit=500</text>
    <text x="25" y="90" fill="#4ADE80" font-family="monospace" font-size="10">200 OK: 700M Records</text>
    <text x="25" y="110" fill="#94A3B8" font-family="monospace" font-size="9">export --format=json</text>
    
    <!-- Extraction Database cylinders -->
    <ellipse cx="90" cy="155" rx="50" ry="14" fill="#0A66C2" fill-opacity="0.4" stroke="#38BDF8" stroke-width="1.5"/>
    <rect x="40" y="155" width="100" height="25" fill="#0A66C2" fill-opacity="0.2" stroke="#38BDF8" stroke-width="1.5"/>
    <ellipse cx="90" cy="180" rx="50" ry="14" fill="#0A66C2" stroke="#38BDF8" stroke-width="1.5"/>
  </g>

  <!-- Dynamic Data Extraction Streams -->
  <path d="M330 180 Q430 140 540 120" stroke="#38BDF8" stroke-width="3" stroke-dasharray="6 4" fill="none"/>
  <path d="M470 230 Q510 210 540 180" stroke="#4ADE80" stroke-width="2.5" stroke-dasharray="5 3" fill="none"/>

  <!-- Title Badge -->
  <rect x="50" y="40" width="220" height="34" rx="17" fill="rgba(15,23,42,0.85)" stroke="#0A66C2" stroke-width="1.5"/>
  <text x="160" y="62" fill="#38BDF8" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">LINKEDIN DATA HARVESTING</text>
</svg>`;

// 2. Cosmos Bank Pune ATM Switch Bypass
const cosmosSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="cosBg" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#140B1F"/>
      <stop offset="50%" stop-color="#1E1133"/>
      <stop offset="100%" stop-color="#2D194B"/>
    </linearGradient>
    <radialGradient id="cosGlow" cx="400" cy="225" r="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#D97706" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#D97706" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#cosBg)"/>
  <circle cx="400" cy="225" r="280" fill="url(#cosGlow)"/>

  <!-- Core Banking vs Rogue Switch Diagram -->
  <g transform="translate(100, 110)">
    <!-- Central Bank Host (Isolated) -->
    <rect x="0" y="40" width="170" height="170" rx="12" fill="#1E1B4B" stroke="#4338CA" stroke-width="2"/>
    <text x="85" y="70" fill="#E0E7FF" font-family="sans-serif" font-size="12" font-weight="800" text-anchor="middle">CORE BANKING</text>
    <text x="85" y="90" fill="#818CF8" font-family="sans-serif" font-size="10" text-anchor="middle">Cosmos Pune CBS</text>
    <line x1="25" y1="110" x2="145" y2="110" stroke="#312E81" stroke-width="1"/>
    
    <!-- Disconnected Alert -->
    <rect x="25" y="130" width="120" height="45" rx="6" fill="#450A0A" stroke="#DC2626" stroke-width="1.5"/>
    <text x="85" y="150" fill="#FCA5A5" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">CONNECTION SEVERED</text>
    <text x="85" y="165" fill="#EF4444" font-family="sans-serif" font-size="9" text-anchor="middle">CBS Offline to Switch</text>
  </g>

  <!-- Rogue Malware Proxy Switch Server -->
  <g transform="translate(320, 100)">
    <rect x="0" y="20" width="180" height="210" rx="12" fill="#2E1065" stroke="#F59E0B" stroke-width="2.5"/>
    <rect x="15" y="0" width="150" height="26" rx="6" fill="#F59E0B"/>
    <text x="90" y="18" fill="#1E1B4B" font-family="sans-serif" font-size="11" font-weight="900" text-anchor="middle">MALICIOUS ATM SWITCH</text>
    
    <text x="25" y="60" fill="#FCD34D" font-family="monospace" font-size="11">ISO 8583 Response</text>
    <rect x="25" y="75" width="130" height="30" rx="4" fill="#065F46" stroke="#34D399" stroke-width="1.5"/>
    <text x="90" y="95" fill="#A7F3D0" font-family="monospace" font-size="12" font-weight="800" text-anchor="middle">0210: APPROVE 00</text>
    
    <text x="25" y="135" fill="#CBD5E1" font-family="sans-serif" font-size="10">Simulated Balances</text>
    <text x="25" y="152" fill="#F87171" font-family="monospace" font-size="12" font-weight="700">₹94.42 Crore Heist</text>
    
    <text x="25" y="185" fill="#94A3B8" font-family="sans-serif" font-size="9">12,000+ ATM Hits</text>
    <text x="25" y="200" fill="#38BDF8" font-family="sans-serif" font-size="9">28 Countries Global</text>
  </g>

  <!-- International Cash-out Terminals -->
  <g transform="translate(560, 80)">
    <!-- Terminal 1 -->
    <rect x="20" y="20" width="140" height="80" rx="8" fill="#18181B" stroke="#22C55E" stroke-width="1.5"/>
    <text x="90" y="45" fill="#4ADE80" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">ATM Cash Out</text>
    <text x="90" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="10" text-anchor="middle">Canada &amp; Hong Kong</text>
    <text x="90" y="85" fill="#FACC15" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle">$11.5M Cloned Cards</text>

    <!-- Terminal 2 SWIFT -->
    <rect x="20" y="130" width="140" height="85" rx="8" fill="#18181B" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="90" y="155" fill="#FBBF24" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">SWIFT Terminal</text>
    <text x="90" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="10" text-anchor="middle">Rogue Transfer</text>
    <text x="90" y="195" fill="#EF4444" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle">₹13.9 Cr Hong Kong</text>
  </g>

  <!-- Attack Vectors Connectors -->
  <line x1="270" y1="180" x2="320" y2="180" stroke="#EF4444" stroke-width="3" stroke-dasharray="4 4"/>
  <line x1="500" y1="140" x2="580" y2="70" stroke="#22C55E" stroke-width="3"/>
  <line x1="500" y1="180" x2="580" y2="180" stroke="#F59E0B" stroke-width="3"/>

  <!-- Title Badge -->
  <rect x="50" y="40" width="230" height="34" rx="17" fill="rgba(20,11,31,0.85)" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="165" y="62" fill="#FCD34D" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">COSMOS BANK ATM BYPASS</text>
</svg>`;

// 3. AIIMS Delhi Healthcare Ransomware Attack
const aiimsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="aiimsBg" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <radialGradient id="aiimsGlow" cx="400" cy="225" r="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EF4444" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#EF4444" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#aiimsBg)"/>
  <circle cx="400" cy="225" r="300" fill="url(#aiimsGlow)"/>

  <!-- Medical Cross Graphic with Encryption Hazard -->
  <g transform="translate(140, 110)">
    <!-- Red Medical Cross -->
    <path d="M70 20 H110 V60 H150 V100 H110 V140 H70 V100 H30 V60 H70 Z" fill="#EF4444" fill-opacity="0.25" stroke="#EF4444" stroke-width="3"/>
    
    <!-- Hospital e-Hospital Terminal -->
    <rect x="0" y="150" width="180" height="110" rx="8" fill="#0F172A" stroke="#64748B" stroke-width="2"/>
    <rect x="15" y="165" width="150" height="70" rx="4" fill="#1E293B"/>
    <text x="90" y="195" fill="#EF4444" font-family="monospace" font-size="12" font-weight="900" text-anchor="middle">.ransom EXTENSION</text>
    <text x="90" y="215" fill="#CBD5E1" font-family="sans-serif" font-size="10" text-anchor="middle">NIC e-Hospital Offline</text>
  </g>

  <!-- Central Disruption & Paralyzed Operations -->
  <g transform="translate(350, 100)">
    <rect x="0" y="20" width="220" height="230" rx="12" fill="#1E293B" stroke="#DC2626" stroke-width="2"/>
    <rect x="20" y="0" width="180" height="26" rx="6" fill="#DC2626"/>
    <text x="110" y="18" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="900" text-anchor="middle">CRITICAL IMPACT METRICS</text>

    <!-- Disrupted Items -->
    <g transform="translate(20, 50)">
      <rect x="0" y="0" width="180" height="40" rx="6" fill="#0F172A" stroke="#475569" stroke-width="1"/>
      <text x="15" y="24" fill="#FCA5A5" font-family="sans-serif" font-size="11" font-weight="700">12,000+ Daily Patients</text>
      <text x="15" y="36" fill="#94A3B8" font-family="sans-serif" font-size="9">Outpatient Queues Paralyzed</text>
    </g>

    <g transform="translate(20, 105)">
      <rect x="0" y="0" width="180" height="40" rx="6" fill="#0F172A" stroke="#475569" stroke-width="1"/>
      <text x="15" y="24" fill="#FCA5A5" font-family="sans-serif" font-size="11" font-weight="700">40 Million Health Records</text>
      <text x="15" y="36" fill="#94A3B8" font-family="sans-serif" font-size="9">Historical Clinical Database Encrypted</text>
    </g>

    <g transform="translate(20, 160)">
      <rect x="0" y="0" width="180" height="40" rx="6" fill="#0F172A" stroke="#F59E0B" stroke-width="1"/>
      <text x="15" y="24" fill="#FDE68A" font-family="sans-serif" font-size="11" font-weight="700">14-Day Manual Fallback</text>
      <text x="15" y="36" fill="#94A3B8" font-family="sans-serif" font-size="9">Paper Charts &amp; Manual Triage</text>
    </g>
  </g>

  <!-- Legal & CERT-In Notice -->
  <g transform="translate(600, 120)">
    <rect x="0" y="10" width="160" height="190" rx="10" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
    <text x="80" y="35" fill="#38BDF8" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle">LEGAL PROVISIONS</text>
    
    <text x="15" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="700">IT Act Section 66F</text>
    <text x="15" y="80" fill="#94A3B8" font-family="sans-serif" font-size="9">Cyber Terrorism Offense</text>

    <line x1="15" y1="95" x2="145" y2="95" stroke="#334155" stroke-width="1"/>

    <text x="15" y="115" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="700">CERT-In Directives</text>
    <text x="15" y="130" fill="#94A3B8" font-family="sans-serif" font-size="9">Mandatory 6-Hour Notice</text>

    <line x1="15" y1="145" x2="145" y2="145" stroke="#334155" stroke-width="1"/>

    <text x="15" y="165" fill="#4ADE80" font-family="sans-serif" font-size="10" font-weight="700">No Ransom Paid</text>
    <text x="15" y="180" fill="#94A3B8" font-family="sans-serif" font-size="9">Clean Tape Restorations</text>
  </g>

  <!-- Title Badge -->
  <rect x="50" y="40" width="240" height="34" rx="17" fill="rgba(15,23,42,0.85)" stroke="#EF4444" stroke-width="1.5"/>
  <text x="170" y="62" fill="#FCA5A5" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">AIIMS HEALTHCARE RANSOMWARE</text>
</svg>`;

// 4. Uber Breach Extortion Cover-up
const uberSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="uberBg" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#182234"/>
      <stop offset="100%" stop-color="#243247"/>
    </linearGradient>
    <radialGradient id="uberGlow" cx="400" cy="225" r="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#64748B" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#64748B" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#uberBg)"/>
  <circle cx="400" cy="225" r="280" fill="url(#uberGlow)"/>

  <!-- Code Repository Credential Leak -->
  <g transform="translate(100, 110)">
    <rect x="0" y="10" width="180" height="190" rx="10" fill="#0B132B" stroke="#64748B" stroke-width="2"/>
    <text x="90" y="38" fill="#CBD5E1" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle">GITHUB PRIVATE REPO</text>
    <text x="15" y="70" fill="#F87171" font-family="monospace" font-size="10">AWS_ACCESS_KEY_ID</text>
    <text x="15" y="85" fill="#EF4444" font-family="monospace" font-size="9">AKIAIOSFODNN7EXAMPLE</text>
    
    <text x="15" y="115" fill="#F87171" font-family="monospace" font-size="10">AWS_SECRET_KEY</text>
    <text x="15" y="130" fill="#EF4444" font-family="monospace" font-size="9">wJalrXUtnFEMI/K7MDENG...</text>

    <line x1="15" y1="145" x2="165" y2="145" stroke="#334155" stroke-width="1"/>
    <text x="15" y="170" fill="#F59E0B" font-family="sans-serif" font-size="10" font-weight="700">Hardcoded Tokens Leaked</text>
  </g>

  <!-- AWS S3 Buckets Exfiltrated -->
  <g transform="translate(320, 100)">
    <rect x="0" y="20" width="180" height="200" rx="12" fill="#1E293B" stroke="#F59E0B" stroke-width="2"/>
    <text x="90" y="50" fill="#FDE68A" font-family="sans-serif" font-size="12" font-weight="800" text-anchor="middle">AWS S3 BUCKETS</text>
    <ellipse cx="90" cy="85" rx="50" ry="14" fill="#0F172A" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="90" y="90" fill="#FFFFFF" font-family="sans-serif" font-size="10" text-anchor="middle">57 Million Records</text>

    <text x="20" y="130" fill="#CBD5E1" font-family="sans-serif" font-size="10">• Rider &amp; Driver Dossiers</text>
    <text x="20" y="150" fill="#CBD5E1" font-family="sans-serif" font-size="10">• 600K License Numbers</text>
    <text x="20" y="170" fill="#CBD5E1" font-family="sans-serif" font-size="10">• Global PII Harvested</text>
  </g>

  <!-- Bug Bounty Cover-up & Conviction -->
  <g transform="translate(540, 110)">
    <rect x="0" y="10" width="180" height="190" rx="10" fill="#0F172A" stroke="#EF4444" stroke-width="2"/>
    <text x="90" y="38" fill="#FCA5A5" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle">COVERT MITIGATION</text>
    
    <rect x="20" y="55" width="140" height="36" rx="6" fill="#450A0A" stroke="#DC2626" stroke-width="1"/>
    <text x="90" y="72" fill="#FCA5A5" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">$100,000 Extortion Paid</text>
    <text x="90" y="85" fill="#EF4444" font-family="sans-serif" font-size="9" text-anchor="middle">Disguised as Bug Bounty</text>

    <text x="15" y="115" fill="#CBD5E1" font-family="sans-serif" font-size="10">• False NDAs Mandated</text>
    <text x="15" y="132" fill="#CBD5E1" font-family="sans-serif" font-size="10">• Concealed from FTC</text>

    <rect x="15" y="148" width="150" height="38" rx="6" fill="#1E293B" stroke="#38BDF8" stroke-width="1"/>
    <text x="90" y="165" fill="#38BDF8" font-family="sans-serif" font-size="10" font-weight="800" text-anchor="middle">CISO FELONY CONVICTION</text>
    <text x="90" y="178" fill="#94A3B8" font-family="sans-serif" font-size="8.5" text-anchor="middle">Obstruction of Justice</text>
  </g>

  <!-- Connectors -->
  <path d="M280 180 L320 180" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4 4"/>
  <path d="M500 180 L540 180" stroke="#EF4444" stroke-width="3" stroke-dasharray="4 4"/>

  <!-- Title Badge -->
  <rect x="50" y="40" width="220" height="34" rx="17" fill="rgba(15,23,42,0.85)" stroke="#64748B" stroke-width="1.5"/>
  <text x="160" y="62" fill="#CBD5E1" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">UBER BREACH CONCEALMENT</text>
</svg>`;

// 5. Pegasus Zero-Click Spyware
const pegasusSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="pegBg" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#08101E"/>
      <stop offset="50%" stop-color="#0C1B30"/>
      <stop offset="100%" stop-color="#142C4E"/>
    </linearGradient>
    <radialGradient id="pegGlow" cx="400" cy="225" r="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0EA5E9" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0EA5E9" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#pegBg)"/>
  <circle cx="400" cy="225" r="280" fill="url(#pegGlow)"/>

  <!-- Target Smartphone Outline -->
  <g transform="translate(140, 90)">
    <rect x="0" y="0" width="160" height="280" rx="24" fill="#0B132B" stroke="#38BDF8" stroke-width="2.5"/>
    <circle cx="80" cy="18" r="4" fill="#475569"/>
    
    <!-- Phone Screen with Zero-Click Trigger -->
    <rect x="12" y="32" width="136" height="216" rx="12" fill="#0F172A"/>
    <rect x="24" y="55" width="112" height="45" rx="8" fill="#1E293B" stroke="#0284C7" stroke-width="1"/>
    <text x="80" y="75" fill="#38BDF8" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">FORCEDENTRY .gif</text>
    <text x="80" y="90" fill="#94A3B8" font-family="sans-serif" font-size="8" text-anchor="middle">Invisible Push Notification</text>

    <!-- Zero Click Indicator -->
    <rect x="24" y="115" width="112" height="35" rx="6" fill="#450A0A" stroke="#EF4444" stroke-width="1"/>
    <text x="80" y="132" fill="#FCA5A5" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle">ZERO-CLICK EXPLOIT</text>
    <text x="80" y="144" fill="#EF4444" font-family="sans-serif" font-size="8" text-anchor="middle">No User Interaction</text>

    <!-- Exfiltration Indicator -->
    <circle cx="50" cy="190" r="14" fill="#0284C7" fill-opacity="0.3"/>
    <circle cx="80" cy="190" r="14" fill="#0284C7" fill-opacity="0.3"/>
    <circle cx="110" cy="190" r="14" fill="#0284C7" fill-opacity="0.3"/>
    <text x="80" y="225" fill="#38BDF8" font-family="sans-serif" font-size="8" text-anchor="middle">Microphone / GPS / Signal</text>
  </g>

  <!-- JBIG2 Parser Memory Corruption Core -->
  <g transform="translate(340, 110)">
    <rect x="0" y="20" width="230" height="220" rx="12" fill="#1E293B" stroke="#0284C7" stroke-width="2"/>
    <rect x="25" y="0" width="180" height="26" rx="6" fill="#0284C7"/>
    <text x="115" y="18" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="900" text-anchor="middle">JBIG2 MEMORY CORRUPTION</text>

    <g transform="translate(20, 45)">
      <text x="0" y="15" fill="#38BDF8" font-family="monospace" font-size="10">CoreGraphics Image Parsing</text>
      <text x="0" y="30" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">Heap Overflow in Decompression</text>

      <rect x="0" y="45" width="190" height="45" rx="6" fill="#0F172A" stroke="#475569" stroke-width="1"/>
      <text x="10" y="65" fill="#FCD34D" font-family="monospace" font-size="9.5">Emulated Virtual CPU</text>
      <text x="10" y="80" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Synthesized Logic Gates in Buffer</text>

      <rect x="0" y="105" width="190" height="40" rx="6" fill="#0F172A" stroke="#22C55E" stroke-width="1"/>
      <text x="10" y="123" fill="#4ADE80" font-family="sans-serif" font-size="9.5" font-weight="700">PAC / Sandbox Escaped</text>
      <text x="10" y="136" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Root Kernel Execution Achieved</text>
    </g>
  </g>

  <!-- Constitutional Privacy Law Box -->
  <g transform="translate(610, 120)">
    <rect x="0" y="10" width="150" height="190" rx="10" fill="#0F172A" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="75" y="35" fill="#F59E0B" font-family="sans-serif" font-size="10" font-weight="800" text-anchor="middle">LEGAL SCRUTINY</text>

    <text x="15" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="700">Puttaswamy Ruling</text>
    <text x="15" y="80" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Article 21 Fundamental Right</text>

    <line x1="15" y1="95" x2="135" y2="95" stroke="#334155" stroke-width="1"/>

    <text x="15" y="115" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="700">Proportionality Test</text>
    <text x="15" y="130" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Statutory Warrant Limits</text>

    <line x1="15" y1="145" x2="135" y2="145" stroke="#334155" stroke-width="1"/>

    <text x="15" y="165" fill="#EF4444" font-family="sans-serif" font-size="10" font-weight="700">Commerce Entity List</text>
    <text x="15" y="180" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Surveillance Vendor Banned</text>
  </g>

  <!-- Connectors -->
  <line x1="300" y1="180" x2="340" y2="180" stroke="#38BDF8" stroke-width="3" stroke-dasharray="4 4"/>

  <!-- Title Badge -->
  <rect x="50" y="40" width="220" height="34" rx="17" fill="rgba(8,16,30,0.85)" stroke="#0284C7" stroke-width="1.5"/>
  <text x="160" y="62" fill="#38BDF8" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">PEGASUS ZERO-CLICK SPYWARE</text>
</svg>`;

// 6. Aadhaar Biometric Security & Constitutional Inquiry
const aadhaarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="aadBg" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#1A2740"/>
      <stop offset="100%" stop-color="#283B60"/>
    </linearGradient>
    <radialGradient id="aadGlow" cx="400" cy="225" r="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#4F46E5" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#aadBg)"/>
  <circle cx="400" cy="225" r="280" fill="url(#aadGlow)"/>

  <!-- Central Biometric Vault (Encrypted) -->
  <g transform="translate(100, 100)">
    <rect x="0" y="20" width="180" height="210" rx="12" fill="#1E1B4B" stroke="#6366F1" stroke-width="2"/>
    <text x="90" y="48" fill="#C7D2FE" font-family="sans-serif" font-size="11" font-weight="900" text-anchor="middle">CENTRAL BIOMETRIC VAULT</text>
    
    <!-- Fingerprint Scanner Graphic -->
    <path d="M90 75 C75 75 65 85 65 100 C65 125 90 145 90 145 C90 145 115 125 115 100 C115 85 105 75 90 75 Z" fill="none" stroke="#818CF8" stroke-width="3"/>
    <path d="M90 90 C82 90 76 96 76 104 C76 118 90 130 90 130 C90 130 104 118 104 104 C104 96 98 90 90 90 Z" fill="none" stroke="#A5B4FC" stroke-width="2"/>
    <circle cx="90" cy="104" r="3" fill="#6366F1"/>

    <text x="90" y="175" fill="#4ADE80" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">Biometrics Encrypted (AES)</text>
    <text x="90" y="195" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Zero-Knowledge CIDR Core</text>
  </g>

  <!-- Peripheral Demographic Portal Leakage -->
  <g transform="translate(320, 100)">
    <rect x="0" y="20" width="200" height="210" rx="12" fill="#1E293B" stroke="#F59E0B" stroke-width="2"/>
    <rect x="25" y="0" width="150" height="26" rx="6" fill="#F59E0B"/>
    <text x="100" y="18" fill="#1E1B4B" font-family="sans-serif" font-size="11" font-weight="900" text-anchor="middle">EDGE APPLICATION RISKS</text>

    <text x="15" y="55" fill="#FCD34D" font-family="sans-serif" font-size="10" font-weight="700">Third-Party Operator Credentials</text>
    <text x="15" y="70" fill="#94A3B8" font-family="sans-serif" font-size="9">Shared logins allowed bulk lookups</text>

    <rect x="15" y="85" width="170" height="42" rx="6" fill="#0F172A" stroke="#EF4444" stroke-width="1"/>
    <text x="25" y="103" fill="#FCA5A5" font-family="sans-serif" font-size="9.5" font-weight="700">Demographic Data Leaks</text>
    <text x="25" y="117" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Names, DoB &amp; Addresses exposed</text>

    <rect x="15" y="140" width="170" height="42" rx="6" fill="#0F172A" stroke="#38BDF8" stroke-width="1"/>
    <text x="25" y="158" fill="#38BDF8" font-family="sans-serif" font-size="9.5" font-weight="700">Remedy: Virtual IDs (VID)</text>
    <text x="25" y="172" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Masked 16-digit temporary tokens</text>
  </g>

  <!-- Supreme Court Constitutional Ruling -->
  <g transform="translate(550, 100)">
    <rect x="0" y="20" width="170" height="210" rx="12" fill="#0F172A" stroke="#34D399" stroke-width="2"/>
    <text x="85" y="50" fill="#A7F3D0" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle">SUPREME COURT BENCH</text>
    
    <g transform="translate(15, 70)">
      <rect x="0" y="0" width="140" height="45" rx="6" fill="#064E3B" stroke="#059669" stroke-width="1"/>
      <text x="10" y="20" fill="#6EE7B7" font-family="sans-serif" font-size="10" font-weight="700">Section 57 Struck Down</text>
      <text x="10" y="35" fill="#D1FAE5" font-family="sans-serif" font-size="8.5">Private corporate mandates banned</text>

      <rect x="0" y="60" width="140" height="45" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1"/>
      <text x="10" y="80" fill="#CBD5E1" font-family="sans-serif" font-size="10" font-weight="700">Welfare Subsidies Valid</text>
      <text x="10" y="95" fill="#94A3B8" font-family="sans-serif" font-size="8.5">Section 7 targeted state delivery</text>
    </g>
  </g>

  <!-- Title Badge -->
  <rect x="50" y="40" width="240" height="34" rx="17" fill="rgba(15,23,42,0.85)" stroke="#6366F1" stroke-width="1.5"/>
  <text x="170" y="62" fill="#C7D2FE" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">AADHAAR BIOMETRIC SECURITY</text>
</svg>`;

fs.writeFileSync(path.join(casesDir, 'linkedin-scraping.svg'), linkedinSvg, 'utf8');
fs.writeFileSync(path.join(casesDir, 'cosmos-heist.svg'), cosmosSvg, 'utf8');
fs.writeFileSync(path.join(casesDir, 'aiims-ransomware.svg'), aiimsSvg, 'utf8');
fs.writeFileSync(path.join(casesDir, 'uber-breach.svg'), uberSvg, 'utf8');
fs.writeFileSync(path.join(casesDir, 'pegasus-spyware.svg'), pegasusSvg, 'utf8');
fs.writeFileSync(path.join(casesDir, 'aadhaar-security.svg'), aadhaarSvg, 'utf8');

console.log('[GenerateEditorialSvgs] Successfully created all 6 bespoke incident-specific editorial SVG illustrations!');
