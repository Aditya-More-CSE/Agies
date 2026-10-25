import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { fictionalCases1_5 } from './fictionalCases1_5.js';
import { fictionalCases6_10 } from './fictionalCases6_10.js';
import { fictionalCases11_15 } from './fictionalCases11_15.js';
import { fictionalCases16_20 } from './fictionalCases16_20.js';
import { quizzesBatch1 } from './quizzesBatch1.js';
import { quizzesBatch2 } from './quizzesBatch2.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allCases = [
  ...fictionalCases1_5,
  ...fictionalCases6_10,
  ...fictionalCases11_15,
  ...fictionalCases16_20
];
const allQuizzes = [...quizzesBatch1, ...quizzesBatch2];

console.log(`[CompileFictionalData] Total Cases: ${allCases.length}`);
console.log(`[CompileFictionalData] Total Quizzes: ${allQuizzes.length}`);

if (allCases.length !== 20) {
  throw new Error(`Expected exactly 20 cases, got ${allCases.length}`);
}
if (allQuizzes.length !== 20) {
  throw new Error(`Expected exactly 20 quizzes, got ${allQuizzes.length}`);
}

// Map high-fidelity generated editorial illustrations and bespoke vectors to all 20 cases
const imageMap = {
  "cambridge-analytica-data-scandal": "/images/cases/cambridge-analytica.jpg",
  "indian-bank-phishing-scam": "/images/cases/bank-phishing.jpg",
  "wannacry-ransomware-attack": "/images/cases/wannacry.jpg",
  "instagram-data-scraping-leak": "/images/cases/instagram-leak.jpg",
  "ai-deepfake-ceo-fraud": "/images/cases/deepfake-scams.jpg",
  "cyberstalking-and-harassment": "/images/cases/cyberstalking.png",
  "solarwinds-supply-chain-attack": "/images/cases/solarwinds.jpg",
  "upi-payment-gateway-fraud": "/images/cases/upi-scam.jpg",
  "target-corporation-breach": "/images/cases/target-breach.jpg",
  "linkedin-credential-scraping": "/images/cases/linkedin-scraping.svg",
  "cosmos-bank-cyber-heist": "/images/cases/cosmos-heist.svg",
  "equifax-apache-struts-breach": "/images/cases/equifax-breach.jpg",
  "twitter-bitcoin-account-takeover": "/images/cases/twitter-hack.jpg",
  "colonial-pipeline-ransomware": "/images/cases/colonial-pipeline.jpg",
  "aiims-delhi-ransomware": "/images/cases/aiims-ransomware.svg",
  "google-account-phishing-campaigns": "/images/cases/google-oauth.jpg",
  "sim-swap-telecom-fraud": "/images/cases/sim-swap.jpg",
  "uber-breach-extortion-coverup": "/images/cases/uber-breach.svg",
  "pegasus-spyware-surveillance": "/images/cases/pegasus-spyware.svg",
  "aadhaar-biometric-security-inquiry": "/images/cases/aadhaar-security.svg"
};

const caseSlugs = new Set();
let totalWords = 0;

allCases.forEach(c => {
  if (caseSlugs.has(c.slug)) {
    throw new Error(`Duplicate case slug found: ${c.slug}`);
  }
  caseSlugs.add(c.slug);

  // Apply mapped image
  if (imageMap[c.slug]) {
    c.image = imageMap[c.slug];
  }

  // Ensure isFictional flag is true
  c.isFictional = true;

  // Word count check
  const narrativeWords = c.narrative ? c.narrative.trim().split(/\s+/).length : 0;
  totalWords += narrativeWords;

  // Check required fields
  const required = [
    'id', 'slug', 'title', 'subtitle', 'isFictional', 'category', 'keywords',
    'country', 'jurisdiction', 'incidentDate', 'year', 'summary', 'introduction',
    'fictionalContext', 'narrative', 'overview', 'timeline', 'howItHappened',
    'topics', 'laws', 'impact', 'investigationOutcome', 'lessons', 'takeaways',
    'sources', 'image', 'imageAlt', 'estimatedReadTime', 'featured'
  ];
  for (const field of required) {
    if (c[field] === undefined || c[field] === null) {
      throw new Error(`Missing required field '${field}' on case '${c.slug}'`);
    }
  }

  console.log(`Verified Case ${c.id}: ${c.title} (${narrativeWords} narrative words)`);
});

console.log(`[CompileFictionalData] Total Narrative Words across 20 cases: ${totalWords}`);
console.log(`[CompileFictionalData] Average Narrative Words per case: ${Math.round(totalWords / 20)}`);

let totalQuestions = 0;
allQuizzes.forEach(q => {
  if (!caseSlugs.has(q.caseSlug)) {
    throw new Error(`Quiz references non-existent caseSlug: ${q.caseSlug}`);
  }
  if (!Array.isArray(q.questions) || q.questions.length !== 5) {
    throw new Error(`Quiz '${q.caseSlug}' must have exactly 5 questions, found ${q.questions?.length}`);
  }
  totalQuestions += q.questions.length;

  q.questions.forEach((qu, i) => {
    if (!qu.id || !qu.question || !Array.isArray(qu.options) || qu.options.length !== 4) {
      throw new Error(`Question ${i} on quiz '${q.caseSlug}' must have 4 options and valid fields`);
    }
    if (qu.correctAnswerIndex < 0 || qu.correctAnswerIndex > 3) {
      throw new Error(`Question ${i} on quiz '${q.caseSlug}' has invalid correctAnswerIndex: ${qu.correctAnswerIndex}`);
    }
    if (!qu.explanation) {
      throw new Error(`Question ${i} on quiz '${q.caseSlug}' missing explanation`);
    }
  });
});

console.log(`[CompileFictionalData] Total Questions Verified: ${totalQuestions}`);

const outDir = path.resolve(__dirname, '../src/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'cases.json'), JSON.stringify(allCases, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'quizzes.json'), JSON.stringify(allQuizzes, null, 2), 'utf8');

console.log(`[CompileFictionalData] Successfully compiled and wrote full datasets to:`);
console.log(`  - src/data/cases.json (20 substantial fictional cases)`);
console.log(`  - src/data/quizzes.json (100 questions, 5 per case)`);
