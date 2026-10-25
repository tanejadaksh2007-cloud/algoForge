import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FAANG_QUESTIONS, FAANG_COMPANIES } from '../data/faangQuestions';
import { selectProgressState } from '../store/progressSlice';
import FaangQuestionCard from '../components/FaangQuestionCard';

export default function FaangPage() {
  const progressState = useSelector(selectProgressState);

  // Filter states
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficulty, setDifficulty] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('freq-desc');
  const [openCards, setOpenCards] = useState({});

  function toggleCard(id) {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  // Calculate solved stats
  const stats = useMemo(() => {
    let solved = 0;
    let attempted = 0;
    FAANG_QUESTIONS.forEach((q) => {
      const topicId = q.topicId || 'faang';
      const st = progressState[topicId]?.[q.name] || 'none';
      if (st === 'solved') solved++;
      else if (st === 'attempted') attempted++;
    });
    const total = FAANG_QUESTIONS.length;
    const pct = total ? Math.round((solved / total) * 100) : 0;
    return { total, solved, attempted, pct };
  }, [progressState]);

  // Filter and sort questions
  const filteredQuestions = useMemo(() => {
    const qTerm = searchQuery.trim().toLowerCase();

    return FAANG_QUESTIONS.filter((q) => {
      // 1. Company filter
      if (selectedCompany !== 'all') {
        const matchesCompany = q.companies?.some(
          (c) => c.toLowerCase() === selectedCompany.toLowerCase()
        );
        if (!matchesCompany) return false;
      }

      // 2. Search query filter
      if (qTerm) {
        const titleMatch = q.name?.toLowerCase().includes(qTerm);
        const conceptMatch = q.concept?.toLowerCase().includes(qTerm);
        const theoryMatch = q.theory?.toLowerCase().includes(qTerm);
        const patternMatch = q.keyPattern?.toLowerCase().includes(qTerm);
        const topicMatch = q.topicName?.toLowerCase().includes(qTerm);
        const compMatch = q.companies?.some((c) => c.toLowerCase().includes(qTerm));
        if (!titleMatch && !conceptMatch && !theoryMatch && !patternMatch && !topicMatch && !compMatch) {
          return false;
        }
      }

      // 3. Difficulty filter
      if (difficulty !== 'all' && q.tag !== difficulty) {
        return false;
      }

      // 4. Status filter
      if (statusFilter !== 'all') {
        const topicId = q.topicId || 'faang';
        const st = progressState[topicId]?.[q.name] || 'none';
        if (statusFilter === 'solved' && st !== 'solved') return false;
        if (statusFilter === 'attempted' && st !== 'attempted') return false;
        if (statusFilter === 'unsolved' && st !== 'none') return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'freq-desc') return (b.frequency || 0) - (a.frequency || 0);
      if (sortBy === 'title-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'diff-asc') {
        const w = { easy: 1, medium: 2, hard: 3 };
        return w[a.tag] - w[b.tag];
      }
      if (sortBy === 'diff-desc') {
        const w = { easy: 1, medium: 2, hard: 3 };
        return w[b.tag] - w[a.tag];
      }
      return 0;
    });
  }, [selectedCompany, searchQuery, difficulty, statusFilter, sortBy, progressState]);

  return (
    <div className="faang-page">
      {/* ─── Hero Section ──────────────────────────────────────────────── */}
      <header className="faang-hero-header">
        <div className="faang-title-wrap">
          <div className="faang-badge-pill">🔥 High Yield Interview Essentials</div>
          <h1 className="faang-main-title">FAANG Frequently Asked Questions</h1>
          <p className="faang-subtext">
            Master the most critical, high-frequency interview problems tested at Google, Meta, Amazon, Microsoft, Apple, and Netflix.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="faang-stats-row">
          <div className="faang-stat-card">
            <span className="faang-stat-num">{stats.solved} / {stats.total}</span>
            <span className="faang-stat-label">FAANG Solved</span>
          </div>
          <div className="faang-stat-card">
            <span className="faang-stat-num" style={{ color: 'var(--c-rose)' }}>{stats.pct}%</span>
            <span className="faang-stat-label">Readiness Rate</span>
          </div>
          <div className="faang-stat-card">
            <span className="faang-stat-num" style={{ color: 'var(--c-amber)' }}>90%+</span>
            <span className="faang-stat-label">Interview Recurrence</span>
          </div>
        </div>
      </header>

      {/* ─── Company Selector Tabs ───────────────────────────────────────── */}
      <div className="faang-company-tabs-wrapper">
        <div className="faang-company-tabs">
          {FAANG_COMPANIES.map((company) => {
            const isActive = selectedCompany === company.id;
            return (
              <button
                key={company.id}
                type="button"
                className={`faang-comp-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCompany(company.id)}
              >
                <span className="comp-icon">{company.icon}</span>
                <span className="comp-name">{company.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Filter & Search Control Panel ──────────────────────────────── */}
      <div className="faang-controls-card">
        <div className="faang-search-wrap">
          <span className="faang-search-icon">⌕</span>
          <input
            type="text"
            className="form-input faang-search-input"
            placeholder="Search FAANG questions by title, company, topic, pattern, or theory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="faang-clear-search"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="faang-filter-selects">
          <div className="faang-filter-item">
            <label htmlFor="faang-diff-select" className="faang-filter-label">Difficulty</label>
            <select
              id="faang-diff-select"
              className="form-input form-select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="faang-filter-item">
            <label htmlFor="faang-status-select" className="faang-filter-label">Status</label>
            <select
              id="faang-status-select"
              className="form-input form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="solved">Solved</option>
              <option value="attempted">Attempted</option>
              <option value="unsolved">Unsolved</option>
            </select>
          </div>

          <div className="faang-filter-item">
            <label htmlFor="faang-sort-select" className="faang-filter-label">Sort By</label>
            <select
              id="faang-sort-select"
              className="form-input form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="freq-desc">Frequency (Highest First)</option>
              <option value="diff-asc">Difficulty (Easy → Hard)</option>
              <option value="diff-desc">Difficulty (Hard → Easy)</option>
              <option value="title-asc">Title (A → Z)</option>
            </select>
          </div>
        </div>

        <div className="faang-results-meta">
          <span>Showing <strong>{filteredQuestions.length}</strong> questions</span>
          {(searchQuery || difficulty !== 'all' || statusFilter !== 'all' || selectedCompany !== 'all') && (
            <button
              type="button"
              className="faang-reset-filters-btn"
              onClick={() => {
                setSelectedCompany('all');
                setSearchQuery('');
                setDifficulty('all');
                setStatusFilter('all');
                setSortBy('freq-desc');
              }}
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* ─── Questions List ─────────────────────────────────────────────── */}
      <div className="faang-questions-list">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <FaangQuestionCard
              key={q.id}
              question={q}
              isOpen={Boolean(openCards[q.id])}
              onToggle={() => toggleCard(q.id)}
            />
          ))
        ) : (
          <div className="explorer-empty-box">
            <div className="explorer-empty-icon">🏢</div>
            <h3 className="explorer-empty-title">No FAANG questions match your filters</h3>
            <p className="explorer-empty-desc">
              Try adjusting your search query, company selection, or difficulty criteria.
            </p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                setSelectedCompany('all');
                setSearchQuery('');
                setDifficulty('all');
                setStatusFilter('all');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
