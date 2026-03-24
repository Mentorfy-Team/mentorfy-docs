import { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Fuse from 'fuse.js';

const FUSE_OPTIONS = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'content', weight: 0.35 },
    { name: 'breadcrumb', weight: 0.25 },
  ],
  threshold: 0.35,
  distance: 120,
  minMatchCharLength: 2,
  includeMatches: true,
  ignoreLocation: true,
};

export const MIN_CHARS = 2;
export const MAX_RESULTS = 6;
const DEBOUNCE_MS = 150;

export default function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchIndex, setSearchIndex] = useState(null);

  const debounceRef = useRef(null);
  const history = useHistory();
  const indexUrl = useBaseUrl('/search-index.json');

  useEffect(() => {
    let cancelled = false;
    fetch(indexUrl)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setSearchIndex(new Fuse(data, FUSE_OPTIONS));
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [indexUrl]);

  const performSearch = useCallback(
    (term) => {
      if (!searchIndex || term.length < MIN_CHARS) {
        setResults([]);
        setIsOpen(false);
        return;
      }
      const hits = searchIndex.search(term).slice(0, MAX_RESULTS);
      setResults(hits);
      setIsOpen(hits.length > 0);
      setActiveIndex(-1);
    },
    [searchIndex],
  );

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => performSearch(value), DEBOUNCE_MS);
    },
    [performSearch],
  );

  const navigateTo = useCallback(
    (url) => {
      setIsOpen(false);
      setQuery('');
      history.push(url);
    },
    [history],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) {
        if (e.key === 'Escape') {
          setQuery('');
        }
        return;
      }
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
          break;
        case 'Enter':
          e.preventDefault();
          if (activeIndex >= 0 && results[activeIndex]) {
            navigateTo(results[activeIndex].item.url);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          break;
      }
    },
    [isOpen, results, activeIndex, navigateTo],
  );

  const clear = useCallback(() => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  }, []);

  return {
    query,
    results,
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    handleChange,
    handleKeyDown,
    navigateTo,
    clear,
  };
}
