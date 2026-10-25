import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { casesBatch1 } from './casesBatch1.js';
import { casesBatch2 } from './casesBatch2.js';
import { quizzesBatch1 } from './quizzesBatch1.js';
import { quizzesBatch2 } from './quizzesBatch2.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allCases = [...casesBatch1, ...casesBatch2];
const allQuizzes = [...quizzesBatch1, ...quizzesBatch2];

console.log(`[CompileData] Total Cases: ${allCases.length}`);
console.log(`[CompileData] Total Quizzes: ${allQuizzes.length}`);

// Validation
if (allCases.length !== 20) {
  throw new Error(`Expected exactly 20 cases, got ${allCases.length}`);
}
if (allQuizzes.length !== 20) {
  throw new Error(`Expected exactly 20 quizzes, got ${allQuizzes.length}`);
}

const caseSlugs = new Set();
allCases.forEach(c => {
  if (caseSlugs.has(c.slug)) {
    throw new Error(`Duplicate case slug found: ${c.slug}`);
  }
  caseSlugs.add(c.slug);

  // Check required fields
  const required = ['id', 'slug', 'title', 'category', 'keywords', 'country', 'jurisdiction', 'incidentDate', 'year', 'summary', 'introduction', 'overview', 'timeline', 'topics', 'laws', 'impact', 'lessons', 'sources', 'image', 'imageAlt', 'estimatedReadTime', 'featured'];
  for (const field of required) {
    if (c[field] === undefined || c[field] === null) {
      throw new Error(`Missing required field '${field}' on case '${c.slug}'`);
    }
  }
});

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

console.log(`[CompileData] Total Questions Verified: ${totalQuestions}`);

const outDir = path.resolve(__dirname, '../src/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'cases.json'), JSON.stringify(allCases, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'quizzes.json'), JSON.stringify(allQuizzes, null, 2), 'utf8');

console.log(`[CompileData] Successfully wrote src/data/cases.json and src/data/quizzes.json!`);
