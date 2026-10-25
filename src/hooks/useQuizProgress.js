import { useState, useEffect } from 'react';

const STORAGE_KEY = 'agies_quiz_scores';

export function useQuizProgress() {
  const [scores, setScores] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn('Failed to parse quiz scores from localStorage', e);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    } catch (e) {
      console.warn('Failed to save quiz scores to localStorage', e);
    }
  }, [scores]);

  const saveScore = (caseSlug, score, total = 5) => {
    const percentage = Math.round((score / total) * 100);
    setScores(prev => ({
      ...prev,
      [caseSlug]: {
        score,
        total,
        percentage,
        completedAt: new Date().toISOString()
      }
    }));
  };

  const getScore = (caseSlug) => {
    return scores[caseSlug] || null;
  };

  return { scores, saveScore, getScore };
}
