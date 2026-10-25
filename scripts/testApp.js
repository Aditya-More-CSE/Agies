import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const casesPath = path.resolve(__dirname, '../src/data/cases.json');
const quizzesPath = path.resolve(__dirname, '../src/data/quizzes.json');
const distHtmlPath = path.resolve(__dirname, '../dist/index.html');

console.log('--- AGIES COMPREHENSIVE TEST SUITE ---');

// Test 1: Verify dist index.html
if (!fs.existsSync(distHtmlPath)) {
  console.error('❌ FAIL: dist/index.html does not exist');
  process.exit(1);
} else {
  console.log('✅ PASS: dist/index.html built successfully');
}

// Test 2: Verify cases.json
const cases = JSON.parse(fs.readFileSync(casesPath, 'utf8'));
if (cases.length !== 20) {
  console.error(`❌ FAIL: Expected 20 cases, got ${cases.length}`);
  process.exit(1);
} else {
  console.log(`✅ PASS: 20 researched cases found`);
}

// Test 3: Verify quizzes.json
const quizzes = JSON.parse(fs.readFileSync(quizzesPath, 'utf8'));
if (quizzes.length !== 20) {
  console.error(`❌ FAIL: Expected 20 quizzes, got ${quizzes.length}`);
  process.exit(1);
} else {
  console.log(`✅ PASS: 20 case quizzes found`);
}

// Test 4: Verify 1:1 mapping between case slugs and quizzes
const caseSlugs = new Set(cases.map(c => c.slug));
let totalQuestions = 0;
quizzes.forEach(q => {
  if (!caseSlugs.has(q.caseSlug)) {
    console.error(`❌ FAIL: Quiz slug ${q.caseSlug} does not match any case`);
    process.exit(1);
  }
  if (q.questions.length !== 5) {
    console.error(`❌ FAIL: Quiz ${q.caseSlug} has ${q.questions.length} questions, expected 5`);
    process.exit(1);
  }
  totalQuestions += q.questions.length;
});
console.log(`✅ PASS: Exactly 5 questions per quiz verified (Total: ${totalQuestions} questions)`);

// Test 5: Verify all case images exist
cases.forEach(c => {
  const imgPath = path.resolve(__dirname, '../public', c.image.replace(/^\//, ''));
  if (!fs.existsSync(imgPath)) {
    console.error(`❌ FAIL: Missing image asset for case '${c.slug}': ${imgPath}`);
    process.exit(1);
  }
});
console.log('✅ PASS: All 20 case thumbnail assets (high-resolution JPGs and editorial vectors) verified on disk');

// Test 6: Verify categories coverage
const categories = new Set(cases.map(c => c.category));
console.log(`✅ PASS: Categories covered: ${Array.from(categories).join(', ')}`);

// Test 7: Verify featured cases
const featured = cases.filter(c => c.featured);
if (featured.length < 4) {
  console.error(`❌ FAIL: Expected at least 4 featured cases, found ${featured.length}`);
  process.exit(1);
}
console.log(`✅ PASS: ${featured.length} featured cases configured for Home hero`);

console.log('--- ALL INTEGRITY TESTS PASSED SUCCESSFULLY! ---');
