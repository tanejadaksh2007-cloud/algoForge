import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuestionStatus, setQuestionStatus } from '../store/progressSlice';
import { useToast } from '../context/ToastContext';

export default function FaangQuestionCard({ question, isOpen, onToggle }) {
  const dispatch = useDispatch();
  const { toast } = useToast();
  // Store progress under its topicId or 'faang'
  const topicId = question.topicId || 'faang';
  const status = useSelector((state) => selectQuestionStatus(state, topicId, question.name));
  const link = question.leetcode || question.link;

  function mark(value, event) {
    event.stopPropagation();
    dispatch(setQuestionStatus({ topicId, qName: question.name, status: value }));
    if (value === 'solved') {
      toast.success(`"${question.name}" marked as solved!`);
    } else if (value === 'attempted') {
      toast.info(`"${question.name}" marked as attempted.`);
    } else {
      toast.info(`Reset status for "${question.name}".`);
    }
  }

  return (
    <div className={`q-card faang-card ${status}`} onClick={onToggle}>
      <div className="q-row faang-card-row">
        <div className={`q-dot ${status}`} />
        
        <div className="faang-card-main">
          <div className="faang-title-line">
            <span className="q-name-text">{question.name}</span>
            {question.topicName && (
              <span className="faang-topic-pill" title={`Topic: ${question.topicName}`}>
                {question.topicName}
              </span>
            )}
          </div>

          {/* Company Badges & Frequency Indicator */}
          <div className="faang-meta-line">
            {question.frequency && (
              <span className="faang-freq-badge" title="Interview occurrence frequency across top tech companies">
                🔥 {question.frequency}% freq
              </span>
            )}
            <div className="faang-companies-list">
              {question.companies?.map((company) => (
                <span key={company} className={`faang-company-chip comp-${company.toLowerCase()}`}>
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span className={`q-tag t-${question.tag}`}>{question.tag}</span>
        <span className={`q-chevron ${isOpen ? 'open' : ''}`}>›</span>
      </div>

      <div className={`q-body ${isOpen ? 'open' : ''}`}>
        {/* Core Intuition */}
        <div className="q-concept">
          <span className="q-concept-badge">💡 Intuition</span>
          <span className="q-concept-text">{question.concept}</span>
        </div>

        {/* Detailed DSA Theory */}
        {question.theory && (
          <div className="q-theory-card">
            <div className="q-theory-header">
              <span className="q-theory-icon">🧠</span>
              <span className="q-theory-title">DSA Concept &amp; Core Theory</span>
            </div>
            <p className="q-theory-body">{question.theory}</p>
          </div>
        )}

        {/* FAANG Interview Follow-up Tip */}
        {question.faangTip && (
          <div className="faang-tip-card">
            <div className="faang-tip-header">
              <span className="faang-tip-icon">🏢</span>
              <span className="faang-tip-title">FAANG Interview Follow-Up &amp; Insight</span>
            </div>
            <p className="faang-tip-text">{question.faangTip}</p>
          </div>
        )}

        {/* Complexity & Strategy Chips */}
        {(question.timeComplexity || question.spaceComplexity || question.keyPattern) && (
          <div className="q-complexity-row">
            {question.timeComplexity && (
              <span className="q-chip q-chip-time" title="Time Complexity">
                <span className="q-chip-label">⏱️ Time:</span>
                <span className="q-chip-val">{question.timeComplexity}</span>
              </span>
            )}
            {question.spaceComplexity && (
              <span className="q-chip q-chip-space" title="Space Complexity">
                <span className="q-chip-label">💾 Space:</span>
                <span className="q-chip-val">{question.spaceComplexity}</span>
              </span>
            )}
            {question.keyPattern && (
              <span className="q-chip q-chip-pattern" title="Algorithmic Pattern">
                <span className="q-chip-label">🎯 Pattern:</span>
                <span className="q-chip-val">{question.keyPattern}</span>
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="q-actions">
          <button
            type="button"
            className={`qa-btn qa-solve ${status === 'solved' ? 'active' : ''}`}
            onClick={(e) => mark('solved', e)}
          >
            Mark solved
          </button>
          <button
            type="button"
            className={`qa-btn qa-attempt ${status === 'attempted' ? 'active' : ''}`}
            onClick={(e) => mark('attempted', e)}
          >
            Attempted
          </button>
          <button type="button" className="qa-btn qa-reset" onClick={(e) => mark('none', e)}>
            Reset
          </button>
          {link && (
            <a
              className="qa-btn qa-lc"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              LeetCode ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
