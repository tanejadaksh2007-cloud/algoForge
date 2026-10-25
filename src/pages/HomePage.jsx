import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TOPICS } from '../data';
import { selectOverallStats } from '../store/progressSlice';
import HowItWorks from '../components/HowItWorks';
import TopicCard from '../components/TopicCard';
import DailyChallengeCard from '../components/DailyChallengeCard';

export default function HomePage() {
  const stats = useSelector(selectOverallStats);

  return (
    <div className="home-content">
      <header className="home-header">
        <div className="home-title-row">
          <div>
            <h1>AlgoForge</h1>
            <p className="home-subtitle">Forge Your Problem-Solving Skills.</p>
          </div>
          <Link to="/problems" className="home-explorer-link">
            <span>⌕</span> Explore All Problems
          </Link>
        </div>
        <div className="hero-stats">
          <div className="hs-card">
            <div className="hs-num">{stats.solved}</div>
            <div className="hs-label">Problems solved</div>
          </div>
          <div className="hs-card">
            <div className="hs-num">{stats.mastered}</div>
            <div className="hs-label">Topics mastered</div>
          </div>
          <div className="hs-card">
            <div className="hs-num">{TOPICS.length - stats.mastered}</div>
            <div className="hs-label">Topics remaining</div>
          </div>
        </div>
      </header>

      <DailyChallengeCard />

      {/* ─── FAANG HIGHLIGHT SECTION ──────────────────────────── */}
      <div className="home-faang-banner">
        <div className="hfb-left">
          <div className="hfb-badge">🔥 High-Yield Top Tech Questions</div>
          <h2 className="hfb-title">Frequently Asked by FAANG Companies</h2>
          <p className="hfb-desc">
            Directly practice the highest-recurrence interview problems tested at Google, Meta, Amazon, Microsoft, Apple, and Netflix with in-depth DSA theory.
          </p>
          <div className="hfb-companies">
            <span className="hfb-comp comp-google">🔍 Google</span>
            <span className="hfb-comp comp-meta">∞ Meta</span>
            <span className="hfb-comp comp-amazon">📦 Amazon</span>
            <span className="hfb-comp comp-microsoft">⊞ Microsoft</span>
            <span className="hfb-comp comp-apple"> Apple</span>
            <span className="hfb-comp comp-netflix">🎬 Netflix</span>
          </div>
        </div>
        <Link to="/faang" className="hfb-cta-btn">
          Explore FAANG List →
        </Link>
      </div>

      <HowItWorks />

      <div className="topics-grid">
        {TOPICS.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
