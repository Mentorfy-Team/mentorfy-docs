import React, { useState, useEffect, useRef, useMemo } from 'react';
import useSearch, { MIN_CHARS } from './useSearch';
import styles from './styles.module.css';

function highlightText(text, query) {
  if (!query || query.length < MIN_CHARS) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className={styles.highlight}>{part}</mark>
    ) : (
      part
    ),
  );
}

function SearchIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ResultsDropdown({ results, activeIndex, setActiveIndex, navigateTo, query, className }) {
  const levelIcon = useMemo(() => ({ 0: '📄', 1: '📑', 2: '📌', 3: '🔹' }), []);

  return (
    <ul className={className || styles.dropdown} id="search-results" role="listbox">
      {results.map((result, index) => (
        <li
          key={`${result.item.url}-${index}`}
          id={`search-result-${index}`}
          role="option"
          aria-selected={index === activeIndex}
          className={`${styles.resultItem} ${index === activeIndex ? styles.resultItemActive : ''}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseDown={(e) => {
            e.preventDefault();
            navigateTo(result.item.url);
          }}
        >
          <div className={styles.resultIcon}>
            {levelIcon[result.item.level] || '📄'}
          </div>
          <div className={styles.resultContent}>
            <span className={styles.resultTitle}>
              {highlightText(result.item.title, query)}
            </span>
            <span className={styles.resultExcerpt}>
              {highlightText(result.item.content, query)}
            </span>
            <span className={styles.resultBreadcrumb}>
              {result.item.breadcrumb}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const search = useSearch();

  useEffect(() => {
    if (expanded) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [expanded]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setExpanded(false);
        search.setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleShortcut(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setExpanded(true);
      }
    }
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, []);

  function handleKeyDown(e) {
    if (e.key === 'Escape' && !search.isOpen) {
      setExpanded(false);
      search.clear();
      return;
    }
    search.handleKeyDown(e);
    if (e.key === 'Escape') {
      setExpanded(false);
    }
  }

  function closeSearch() {
    setExpanded(false);
    search.clear();
  }

  return (
    <div className={styles.navContainer} ref={containerRef}>
      {!expanded ? (
        <button
          className={styles.lupaButton}
          onClick={() => setExpanded(true)}
          aria-label="Buscar"
          type="button"
        >
          <SearchIcon size={18} />
        </button>
      ) : (
        <div
          className={styles.expandedWrapper}
          onClick={(e) => { if (e.target === e.currentTarget) closeSearch(); }}
        >
          <div className={styles.inputWrapper}>
            <SearchIcon size={16} />
            <input
              ref={inputRef}
              type="text"
              className={styles.searchInput}
              placeholder="Buscar na documentação..."
              value={search.query}
              onChange={search.handleChange}
              onKeyDown={handleKeyDown}
              aria-label="Buscar na documentação"
              aria-expanded={search.isOpen}
              aria-haspopup="listbox"
              aria-controls="search-results"
              role="combobox"
              autoComplete="off"
            />
            <button
              className={styles.clearButton}
              onClick={search.query ? () => { search.clear(); inputRef.current?.focus(); } : closeSearch}
              aria-label={search.query ? 'Limpar' : 'Fechar'}
              type="button"
            >
              <CloseIcon />
            </button>
          </div>

          {search.isOpen && search.results.length > 0 && (
            <ResultsDropdown
              results={search.results}
              activeIndex={search.activeIndex}
              setActiveIndex={search.setActiveIndex}
              navigateTo={(url) => { search.navigateTo(url); setExpanded(false); }}
              query={search.query}
            />
          )}
        </div>
      )}
    </div>
  );
}

export { SearchIcon, highlightText };
