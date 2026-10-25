import { useSelector, useDispatch } from 'react-redux';
import { selectQuestionStatus, setQuestionStatus } from '../store/progressSlice';
import { useToast } from '../context/ToastContext';

export default function QuestionCard({ topicId, question, cardKey, isOpen, onToggle }) {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const status = useSelector((state) => selectQuestionStatus(state, topicId, question.name));
  const link = question.link || question.leetcode;
  const linkLabel = question.linkLabel || 'LeetCode ↗';

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
    <div className={`q-card ${status}`} onClick={onToggle}>
      <div className="q-row">
        <div className={`q-dot ${status}`} />
        <div className="q-name">
          <span>{question.name}</span>
          {question.topicName && (
            <span className="q-topic-badge" title={`Topic: ${question.topicName}`}>
              {question.topicIcon || '◈'} {question.topicName}
            </span>
          )}
          {question.companies && question.companies.length > 0 && (
            <div className="q-companies-wrap">
              {question.companies.slice(0, 3).map((comp) => (
                <span key={comp} className={`company-tag comp-${comp.toLowerCase().replace(/\s+/g, '')}`}>
                  {comp}
                </span>
              ))}
              {question.companies.length > 3 && (
                <span className="company-tag-more" title={question.companies.slice(3).join(', ')}>
                  +{question.companies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
        <span className={`q-tag t-${question.tag}`}>{question.tag}</span>
        <span className={`q-chevron ${isOpen ? 'open' : ''}`}>›</span>
      </div>
      <div className={`q-body ${isOpen ? 'open' : ''}`}>
        {question.companies && question.companies.length > 0 && (
          <div className="q-companies-detail-row">
            <span className="q-companies-label">🏢 Frequently asked at:</span>
            <div className="q-companies-pills">
              {question.companies.map((comp) => (
                <span key={comp} className={`q-company-pill comp-${comp.toLowerCase().replace(/\s+/g, '')}`}>
                  {comp}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="q-concept">
          <span className="q-concept-badge">💡 Intuition</span>
          <span className="q-concept-text">{question.concept}</span>
        </div>

        {question.theory && (
          <div className="q-theory-card">
            <div className="q-theory-header">
              <span className="q-theory-icon">🧠</span>
              <span className="q-theory-title">DSA Concept &amp; Core Theory</span>
            </div>
            <p className="q-theory-body">{question.theory}</p>
          </div>
        )}

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
              {linkLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
