# AGIES — Cyber Law Case Study Explorer
> **REAL INCIDENTS. CLEAR LAWS. A SAFER DIGITAL YOU.**

AGIES is a comprehensive, academic educational platform designed for Cyber Security and Cyber Law curricula. It helps students, educators, legal researchers, and citizens understand how documented cybercrimes occurred, what statutory frameworks govern them, and which practical precautions prevent recurring victimization.

---

## 🛡️ Project Overview

- **Academic Context:** Cyber Security / Cyber Law Engineering Project.
- **Pedagogical Philosophy:** Move beyond abstract statutory theory by analyzing real, documented cyber attacks alongside applicable legal provisions in plain English.
- **Strict Educational Scope:** AGIES is an educational platform. It does not provide formal legal counsel, commercial incident response services, or official police reporting portals.

---

## 🎨 Visual Design & UI System

Crafted to align with a restrained **Google-inspired Material Design and Swiss editorial aesthetic**:
- **Primary Color:** `#4285F4` (Google Blue)
- **Accents:** `#EA4335` (Red), `#FBBC05` (Yellow), `#34A853` (Green), `#9334E8` (Purple), `#0EA5E9` (Cyan)
- **Backgrounds:** Clean `#FFFFFF` and soft `#F8F9FA` surfaces with subtle `#E8EAED` borders
- **Typography:** Modern clean sans-serif (`Plus Jakarta Sans` & `Inter`) with readable line lengths and generous whitespace.

---

## 🚀 Technology Stack

- **Framework:** React 18
- **Build Tool & Dev Server:** Vite 5
- **Routing:** React Router DOM (v6) with client-side SPA fallback (`vercel.json`)
- **Iconography:** Lucide React
- **Styling:** Custom CSS design system with CSS custom properties (variables.css + scoped stylesheets)
- **Persistence:** Browser `localStorage` for case bookmarks and interactive quiz scores
- **Deployment Target:** Vercel / GitHub Pages static hosting

---

## 🗺️ Website Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero introduction, key benefits strip, 4 featured cases, and learning pathway. |
| `/cases` | **Explore Cases** | Comprehensive 20-case directory with instant search, category filters, sorting, and Grid/List view. |
| `/cases/:slug` | **Case Study Detail** | Deep-dive continuous article: Overview, Timeline, Threat Topics, The Law, Impact, Lessons, and Verified Sources. |
| `/learn` | **Quick Quizzes** | 20 case-specific quizzes testing threat mechanics and statutory provisions with live progress badges. |
| `/learn/:slug` | **Individual Case Quiz** | 5-question step-by-step interactive test with instant explanations, scoring, and review breakdown. |
| `/help` | **Help & Support** | Verified official emergency reporting channels (1930, 112, cybercrime.gov.in) and pre-reporting evidence checklist. |

---

## 📚 20 Researched Case Studies Library

| # | Case Study | Threat Domain | Primary Jurisdiction & Laws |
|---|---|---|---|
| **01** | The Facebook–Cambridge Analytica Scandal | Data Breach | US FTC Act Section 5 ($5B Penalty) & UK DPA 1998 |
| **02** | The Indian Bank Phishing & Smishing Campaigns | Online Fraud | IT Act Section 66C/66D & RBI Customer Protection Directives |
| **03** | WannaCry Ransomware Global Disruption | Ransomware | UK Computer Misuse Act Section 3ZA & US CFAA |
| **04** | The Instagram Data Scraping & Teen Exposure | Social Media | EU GDPR Articles 5/24/25 (€405M Penalty) & DPDP Act 2023 |
| **05** | Celebrity Deepfake Scams & AI Voice Clones | Identity Theft | IT Act Section 66D, IT Rules 2021 & Personality Rights |
| **06** | Online Harassment, Doxxing & Cyberstalking | Cyberbullying | IPC Section 354D (BNS 78) & IT Act Section 66E/67 |
| **07** | State-Sponsored Espionage: SolarWinds Supply Chain | Cyber Espionage | CISA Directive 21-01 & Executive Order 14028 (SBOM) |
| **08** | UPI Payment Fraud & QR Code Phishing Waves | Online Fraud | IT Act Section 66C/66D & NPCI Procedural Guidelines |
| **09** | Target Corporation Supply Chain & POS Data Breach | Data Breach | FTC Act Section 5, State Notification & PCI DSS |
| **10** | LinkedIn Credential Theft & Mass Profile Scraping | Identity Theft | US CFAA § 1030 (hiQ Labs v. LinkedIn Precedent) |
| **11** | Cosmos Bank Pune Malware & ATM Switch Bypass | Online Fraud | IT Act Section 43/66 & RBI Cyber Security Framework |
| **12** | Equifax Credit Bureau Apache Struts Breach | Data Breach | FTC Act Section 5 ($700M Global Settlement) & GLBA |
| **13** | Twitter VIP Account Takeover & Bitcoin Scam | Social Media | CFAA 18 U.S.C. § 1030 & Florida State Prosecution |
| **14** | Colonial Pipeline Ransomware & OT Shutdown | Ransomware | CIRCIA (72-hour Reporting Act) & TSA Directives |
| **15** | AIIMS Delhi Healthcare Ransomware Incident | Ransomware | IT Act Section 66F (Cyber Terrorism) & CERT-In Directives |
| **16** | Mass Google OAuth Worm & Consent Phishing | Online Fraud | US CFAA § 1030 & Google API App Verification Policies |
| **17** | SIM Swap OTP Interception & Account Takeover | Identity Theft | DoT Telecom KYC Directives (24h SMS freeze) & IT Act 66C |
| **18** | Uber Data Breach Cover-up & Bounty Extortion | Data Breach | 18 U.S.C. § 1505 (Obstruction of Justice - CSO Conviction) |
| **19** | Pegasus Zero-Click Spyware Surveillance Inquiry | Cyber Espionage | SC Privacy Judgment (K.S. Puttaswamy) & IT Act Section 69 |
| **20** | Aadhaar Biometric System Security & Privacy Inquiries | Identity Theft | Aadhaar Act Section 29/57 & Supreme Court Constitution Bench |

---

## 🧪 Quick Quizzes (100 Verified Questions)

- **Structure:** Exactly 5 multiple-choice questions for each of the 20 case studies (100 total questions).
- **Rigor:** Tests real facts, threat vectors (e.g. EternalBlue, RAM scrapers, OAuth tokens, reverse proxies), statutory sections (e.g. IT Act 66D, GDPR Art 25, CFAA 1030), and practical precautions.
- **Feedback:** Immediate educational feedback explaining *why* the correct answer is right and why the distractors are incorrect.
- **State Management:** High scores and completion percentages are saved locally in `localStorage` under `agies_quiz_scores`.

---

## 💻 Local Development & Build

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd agies

# Install dependencies
npm install
```

### Run Locally
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Compile and optimize for production
npm run build
```
The optimized static build will be generated in `dist/`.

### Run Test Suite
```bash
# Run automated data integrity and asset tests
node scripts/testApp.js
```

---

## 🌐 Deployment to Vercel

AGIES is a pure static single-page application (SPA).

1. Push this repository to GitHub.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your AGIES GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Vercel will automatically read `vercel.json` to handle client-side route rewrites.

---

## 📜 Academic Disclaimer

AGIES is an academic project built for educational exploration. The analysis, statutes, and quizzes are designed to teach digital hygiene and legal literacy. For actual cybercrimes, victims in India should immediately report on [cybercrime.gov.in](https://cybercrime.gov.in) or call **1930** (Financial Fraud) or **112** (Police Emergency).
