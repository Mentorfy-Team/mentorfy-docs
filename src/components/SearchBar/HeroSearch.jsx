import React, { useState, useRef, useEffect, useCallback } from 'react';
import { translate } from '@docusaurus/Translate';
import useSearch, { MIN_CHARS } from './useSearch';
import { ResultsDropdown, SearchIcon } from './index';
import styles from './styles.module.css';

const CHAR_DELAY = 80;
const PAUSE_AFTER_TYPING = 1800;
const ERASE_DELAY = 40;

function useTypingAnimation(text, onComplete) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, CHAR_DELAY);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pause'), PAUSE_AFTER_TYPING);
      }
    } else if (phase === 'pause') {
      setPhase('erasing');
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, ERASE_DELAY);
      } else {
        setPhase('done');
        onComplete?.();
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, phase, text]);

  return { displayed, phase, cancel: () => { clearTimeout(timeoutRef.current); setPhase('done'); } };
}

export default function HeroSearch() {
  const [expanded, setExpanded] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const search = useSearch();

  const typingText = translate({
    id: 'search.hero.typingPlaceholder',
    message: 'Pesquisa rápida',
  });
  const typing = useTypingAnimation(typingText, () => setAnimDone(true));

  const expand = useCallback(() => {
    typing.cancel();
    setAnimDone(true);
    setExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 80);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (!search.query) {
          setExpanded(false);
        }
        search.setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [search.query]);

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      if (search.isOpen) {
        search.setIsOpen(false);
      } else {
        setExpanded(false);
        search.clear();
        inputRef.current?.blur();
      }
      return;
    }
    search.handleKeyDown(e);
  }

  if (!expanded) {
    return (
      <div className={styles.heroSearchContainer} ref={containerRef}>
        <button
          className={styles.heroTeaser}
          onClick={expand}
          type="button"
          aria-label={translate({
            id: 'search.hero.openAriaLabel',
            message: 'Abrir pesquisa',
          })}
        >
          <span className={`${styles.heroTeaserIcon} ${animDone ? styles.heroTeaserIconPulse : ''}`}>
            <SearchIcon size={15} />
          </span>
          {!animDone && typing.displayed && (
            <span className={styles.heroTeaserText}>
              {typing.displayed}
              <span className={styles.heroTeaserCursor}>|</span>
            </span>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.heroSearchContainer} ref={containerRef}>
      <div className={styles.heroExpandedWrapper}>
        <div className={styles.heroInputWrapper}>
          <SearchIcon size={16} />
          <input
            ref={inputRef}
            type="text"
            className={styles.heroSearchInput}
            placeholder={translate({
              id: 'search.input.placeholder',
              message: 'Buscar na documentação...',
            })}
            value={search.query}
            onChange={search.handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (search.query.length >= MIN_CHARS && search.results.length > 0) {
                search.setIsOpen(true);
              }
            }}
            aria-label={translate({
              id: 'search.hero.inputAriaLabel',
              message: 'Pesquisa rápida',
            })}
            aria-expanded={search.isOpen}
            aria-haspopup="listbox"
            role="combobox"
            autoComplete="off"
          />
          <kbd className={styles.heroShortcut}>esc</kbd>
        </div>

        {search.isOpen && search.results.length > 0 && (
          <ResultsDropdown
            results={search.results}
            activeIndex={search.activeIndex}
            setActiveIndex={search.setActiveIndex}
            navigateTo={(url) => {
              search.navigateTo(url);
              setExpanded(false);
              inputRef.current?.blur();
            }}
            query={search.query}
            className={styles.heroDropdown}
          />
        )}
      </div>
    </div>
  );
}
