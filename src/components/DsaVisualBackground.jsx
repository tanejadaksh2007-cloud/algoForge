import React from 'react';

/**
 * DsaVisualBackground
 * Renders an ambient, animated Data Structures & Algorithms visual background:
 * - Glowing Binary Search Tree with animated search traversal
 * - Connected Graph network with directed edges and flow pulses
 * - Memory Array & Pointer visualization
 * - Floating Big-O and algorithm pattern badges
 * - Cyber matrix grid backdrop
 */
export default function DsaVisualBackground({ variant = 'default' }) {
  const isAuth = variant === 'auth';

  return (
    <div className={`dsa-bg-canvas ${isAuth ? 'dsa-bg-auth' : 'dsa-bg-dashboard'}`} aria-hidden="true">
      {/* ─── Ambient Matrix Dots & Grid ─────────────────────────────────── */}
      <div className="dsa-bg-mesh" />

      {/* ─── Binary Search Tree SVG Visualization ───────────────────────── */}
      <div className="dsa-art-tree">
        <svg viewBox="0 0 360 220" className="dsa-svg-tree" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="treeEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4a6e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="treeActiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="glowEmber" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Tree Branches (Edges) */}
          <path d="M 180 35 L 100 85" stroke="url(#treeEdgeGrad)" strokeWidth="1.8" strokeDasharray="3 3" />
          <path d="M 180 35 L 260 85" stroke="url(#treeActiveGrad)" strokeWidth="2.2" className="dsa-pulse-edge" />
          
          <path d="M 100 85 L 60 145" stroke="url(#treeEdgeGrad)" strokeWidth="1.6" strokeDasharray="2 2" />
          <path d="M 100 85 L 140 145" stroke="url(#treeEdgeGrad)" strokeWidth="1.6" strokeDasharray="2 2" />
          
          <path d="M 260 85 L 220 145" stroke="url(#treeEdgeGrad)" strokeWidth="1.6" strokeDasharray="2 2" />
          <path d="M 260 85 L 300 145" stroke="url(#treeActiveGrad)" strokeWidth="2.2" className="dsa-pulse-edge" />

          {/* Root Node: 50 */}
          <g transform="translate(180, 35)">
            <circle r="18" fill="rgba(18, 22, 36, 0.9)" stroke="#ff4a6e" strokeWidth="2" filter="url(#glowEmber)" />
            <text textAnchor="middle" dy="4" fill="#f8fafc" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">50</text>
            <text textAnchor="middle" dy="-24" fill="#f97316" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="0.08em">ROOT</text>
          </g>

          {/* Left Node: 25 */}
          <g transform="translate(100, 85)">
            <circle r="15" fill="rgba(18, 22, 36, 0.85)" stroke="rgba(255, 74, 110, 0.6)" strokeWidth="1.5" />
            <text textAnchor="middle" dy="4" fill="#cbd5e1" fontSize="10" fontFamily="var(--font-mono)">25</text>
          </g>

          {/* Right Node: 75 (Searched Path) */}
          <g transform="translate(260, 85)">
            <circle r="16" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" filter="url(#glowGreen)" />
            <text textAnchor="middle" dy="4" fill="#34d399" fontSize="10.5" fontFamily="var(--font-mono)" fontWeight="700">75</text>
          </g>

          {/* Leaf Nodes */}
          <g transform="translate(60, 145)">
            <circle r="12" fill="rgba(18, 22, 36, 0.75)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.2" />
            <text textAnchor="middle" dy="3.5" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)">12</text>
          </g>

          <g transform="translate(140, 145)">
            <circle r="12" fill="rgba(18, 22, 36, 0.75)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.2" />
            <text textAnchor="middle" dy="3.5" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)">37</text>
          </g>

          <g transform="translate(220, 145)">
            <circle r="12" fill="rgba(18, 22, 36, 0.75)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.2" />
            <text textAnchor="middle" dy="3.5" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)">63</text>
          </g>

          {/* Target Found: 90 */}
          <g transform="translate(300, 145)">
            <circle r="15" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" filter="url(#glowGreen)" />
            <text textAnchor="middle" dy="4" fill="#34d399" fontSize="10" fontFamily="var(--font-mono)" fontWeight="700">90</text>
            <text textAnchor="middle" dy="24" fill="#10b981" fontSize="8" fontFamily="var(--font-mono)">TARGET</text>
          </g>

          {/* Tree caption */}
          <text x="180" y="200" textAnchor="middle" fill="rgba(255, 74, 110, 0.7)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.1em">
            BINARY SEARCH TREE • O(log n)
          </text>
        </svg>
      </div>

      {/* ─── Directed Graph Network SVG Visualization ───────────────────── */}
      <div className="dsa-art-graph">
        <svg viewBox="0 0 320 220" className="dsa-svg-graph" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="graphEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff4a6e" stopOpacity="0.7" />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#f97316" />
            </marker>
          </defs>

          {/* Graph Edges with traversal pulse */}
          <path d="M 60 70 L 140 40" stroke="url(#graphEdgeGrad)" strokeWidth="1.6" markerEnd="url(#arrow)" />
          <path d="M 60 70 L 110 140" stroke="url(#graphEdgeGrad)" strokeWidth="1.6" markerEnd="url(#arrow)" />
          <path d="M 140 40 L 220 70" stroke="url(#graphEdgeGrad)" strokeWidth="1.8" strokeDasharray="4 2" className="dsa-pulse-edge" markerEnd="url(#arrow)" />
          <path d="M 110 140 L 200 150" stroke="url(#graphEdgeGrad)" strokeWidth="1.6" markerEnd="url(#arrow)" />
          <path d="M 220 70 L 200 150" stroke="url(#graphEdgeGrad)" strokeWidth="1.6" markerEnd="url(#arrow)" />
          <path d="M 220 70 L 270 110" stroke="url(#graphEdgeGrad)" strokeWidth="1.8" markerEnd="url(#arrow)" />
          <path d="M 200 150 L 270 110" stroke="url(#graphEdgeGrad)" strokeWidth="1.6" markerEnd="url(#arrow)" />

          {/* Graph Nodes */}
          <g transform="translate(60, 70)">
            <circle r="14" fill="rgba(249, 115, 22, 0.15)" stroke="#f97316" strokeWidth="1.8" />
            <text textAnchor="middle" dy="4" fill="#fed7aa" fontSize="10" fontFamily="var(--font-mono)" fontWeight="700">A</text>
          </g>

          <g transform="translate(140, 40)">
            <circle r="13" fill="rgba(18, 22, 36, 0.85)" stroke="rgba(255, 74, 110, 0.6)" strokeWidth="1.5" />
            <text textAnchor="middle" dy="3.5" fill="#f8fafc" fontSize="9.5" fontFamily="var(--font-mono)">B</text>
          </g>

          <g transform="translate(110, 140)">
            <circle r="13" fill="rgba(18, 22, 36, 0.85)" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1.4" />
            <text textAnchor="middle" dy="3.5" fill="#cbd5e1" fontSize="9.5" fontFamily="var(--font-mono)">C</text>
          </g>

          <g transform="translate(220, 70)">
            <circle r="15" fill="rgba(255, 74, 110, 0.2)" stroke="#ff4a6e" strokeWidth="2" filter="url(#glowEmber)" />
            <text textAnchor="middle" dy="4" fill="#ff859d" fontSize="10" fontFamily="var(--font-mono)" fontWeight="700">D</text>
          </g>

          <g transform="translate(200, 150)">
            <circle r="13" fill="rgba(18, 22, 36, 0.85)" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1.4" />
            <text textAnchor="middle" dy="3.5" fill="#fde047" fontSize="9.5" fontFamily="var(--font-mono)">E</text>
          </g>

          <g transform="translate(270, 110)">
            <circle r="15" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" filter="url(#glowGreen)" />
            <text textAnchor="middle" dy="4" fill="#34d399" fontSize="10" fontFamily="var(--font-mono)" fontWeight="700">F</text>
          </g>

          <text x="165" y="195" textAnchor="middle" fill="rgba(249, 115, 22, 0.7)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.1em">
            DIJKSTRA / BFS • O(V + E log V)
          </text>
        </svg>
      </div>

      {/* ─── Memory Array & Pointers Graphic ────────────────────────────── */}
      <div className="dsa-art-array">
        <div className="dsa-array-title">TWO POINTERS ARRAY SCAN</div>
        <div className="dsa-array-cells">
          <div className="dsa-array-cell active-left">
            <span className="cell-pointer pointer-left">L ↓</span>
            <span className="cell-val">2</span>
            <span className="cell-idx">0</span>
          </div>
          <div className="dsa-array-cell">
            <span className="cell-val">7</span>
            <span className="cell-idx">1</span>
          </div>
          <div className="dsa-array-cell">
            <span className="cell-val">11</span>
            <span className="cell-idx">2</span>
          </div>
          <div className="dsa-array-cell">
            <span className="cell-val">15</span>
            <span className="cell-idx">3</span>
          </div>
          <div className="dsa-array-cell active-right">
            <span className="cell-pointer pointer-right">R ↓</span>
            <span className="cell-val">24</span>
            <span className="cell-idx">4</span>
          </div>
        </div>
      </div>

      {/* ─── Floating DSA Theory & Complexity Badges ─────────────────────── */}
      <div className="dsa-floating-badge badge-1">
        <span className="badge-icon">⚡</span>
        <span className="badge-text">O(1) Hash Map Lookup</span>
      </div>

      <div className="dsa-floating-badge badge-2">
        <span className="badge-icon">▦</span>
        <span className="badge-text">DP: Memo[i][w] Tabulation</span>
      </div>

      <div className="dsa-floating-badge badge-3">
        <span className="badge-icon">⌖</span>
        <span className="badge-text">mid = lo + ((hi - lo) &gt;&gt; 1)</span>
      </div>

      <div className="dsa-floating-badge badge-4">
        <span className="badge-icon">⬆</span>
        <span className="badge-text">Monotonic Stack: O(n)</span>
      </div>

      <div className="dsa-floating-badge badge-5">
        <span className="badge-icon">⟶</span>
        <span className="badge-text">Floyd&apos;s Cycle: slow &amp; fast</span>
      </div>

      <div className="dsa-floating-badge badge-6">
        <span className="badge-icon">△</span>
        <span className="badge-text">Min-Heap: Top K PriorityQueue</span>
      </div>
    </div>
  );
}
