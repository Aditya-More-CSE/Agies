import { useState, useEffect } from 'react';

const STORAGE_KEY = 'agies_bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Failed to parse bookmarks from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  const toggleBookmark = (slug) => {
    setBookmarks(prev => {
      if (prev.includes(slug)) {
        return prev.filter(s => s !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };

  const isBookmarked = (slug) => bookmarks.includes(slug);

  return { bookmarks, toggleBookmark, isBookmarked };
}
