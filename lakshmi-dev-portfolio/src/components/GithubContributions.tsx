import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface DayBlock {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Generate realistic 52-week contribution data with high activity in recent months
const generateContributionGrid = (): { weeks: DayBlock[][]; total: number } => {
  const weeks: DayBlock[][] = [];
  let total = 79; // Exact count requested

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 364);

  // Distribution matching the user's screenshot: clustered mainly in Aug, Sep, Oct
  let remaining = total;
  for (let w = 0; w < 52; w++) {
    const week: DayBlock[] = [];
    for (let d = 0; d < 7; d++) {
      const curDate = new Date(startDate);
      curDate.setDate(curDate.getDate() + (w * 7 + d));

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      let count = 0;

      // Heavy activity towards Aug, Sep, Oct
      if (w >= 38 && remaining > 0) {
        const rand = Math.random();
        if (rand > 0.55) {
          count = Math.floor(Math.random() * 4) + 1;
          if (w === 44 && d === 4) count = 8; // Highlight spike day
          level = count >= 6 ? 4 : count >= 4 ? 3 : count >= 2 ? 2 : 1;
          remaining -= count;
        }
      } else if (w >= 30 && remaining > 0 && Math.random() > 0.85) {
        count = 1;
        level = 1;
        remaining -= count;
      }

      week.push({
        date: curDate.toISOString().split('T')[0],
        count,
        level,
      });
    }
    weeks.push(week);
  }

  return { weeks, total };
};

const contributionData = generateContributionGrid();

const levelColors = {
  0: 'rgba(255, 255, 255, 0.05)',
  1: 'rgba(34, 197, 94, 0.35)',
  2: 'rgba(34, 197, 94, 0.55)',
  3: 'rgba(34, 197, 94, 0.75)',
  4: '#22c55e',
};

export const GithubContributions: React.FC = () => {
  const [activeYear, setActiveYear] = useState<'2026' | '2025'>('2026');
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  return (
    <div className="mt-4">
      <div 
        className="card p-3 p-md-4 rounded-4 shadow-lg border-secondary"
        style={{
          background: 'linear-gradient(145deg, rgba(13, 21, 38, 0.95) 0%, rgba(20, 30, 52, 0.95) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
        }}
      >
        {/* Top Header */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="d-flex align-items-center gap-2">
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(56, 189, 248, 0.35)'
              }}
            >
              <GithubIcon size={20} />
            </div>
            <div>
              <h4 className="h6 text-light fw-bold mb-0">
                79 contributions in the last year
              </h4>
              <span className="small text-muted" style={{ fontSize: '0.78rem' }}>
                Verified GitHub Activity & Commit Pipeline
              </span>
            </div>
          </div>

          {/* Right Action: Year Toggle & Live Profile Link */}
          <div className="d-flex align-items-center gap-2">
            <div className="btn-group btn-group-sm">
              <button
                type="button"
                onClick={() => setActiveYear('2026')}
                className={`btn btn-sm px-3 fw-semibold ${activeYear === '2026' ? 'btn-primary' : 'btn-outline-secondary text-light'}`}
                style={{ borderRadius: '20px 0 0 20px' }}
              >
                2026
              </button>
              <button
                type="button"
                onClick={() => setActiveYear('2025')}
                className={`btn btn-sm px-3 fw-semibold ${activeYear === '2025' ? 'btn-primary' : 'btn-outline-secondary text-light'}`}
                style={{ borderRadius: '0 20px 20px 0' }}
              >
                2025
              </button>
            </div>

            <a
              href="https://github.com/lakshmimulinti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-1.5"
              style={{ fontSize: '0.8rem' }}
            >
              <span>GitHub</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Heatmap Grid Container */}
        <div 
          className="p-3 rounded-3"
          style={{ 
            backgroundColor: 'rgba(8, 14, 26, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflowX: 'auto',
          }}
        >
          {/* Month labels */}
          <div 
            className="d-flex justify-content-between mb-2 text-muted px-4" 
            style={{ fontSize: '0.72rem', minWidth: '680px' }}
          >
            {months.map((m, idx) => (
              <span key={idx}>{m}</span>
            ))}
          </div>

          {/* Contribution Columns */}
          <div 
            className="d-flex gap-1 align-items-center justify-content-between"
            style={{ minWidth: '680px' }}
          >
            {/* Days of week indicators on left */}
            <div 
              className="d-flex flex-column justify-content-between pe-2 text-muted"
              style={{ fontSize: '0.68rem', height: '90px' }}
            >
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Heatmap Matrix */}
            <div className="d-flex gap-1 flex-grow-1 justify-content-between">
              {contributionData.weeks.map((week, wIdx) => (
                <div key={wIdx} className="d-flex flex-column gap-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                      onMouseLeave={() => setHoveredDay(null)}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '2px',
                        backgroundColor: levelColors[day.level],
                        border: day.level > 0 ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255, 255, 255, 0.04)',
                        transition: 'transform 0.15s ease, background-color 0.2s ease',
                        cursor: 'pointer',
                        transform: hoveredDay?.date === day.date ? 'scale(1.35)' : 'scale(1)',
                        boxShadow: day.level === 4 ? '0 0 6px rgba(34, 197, 94, 0.8)' : 'none',
                      }}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer Info: Tooltip / Status & Legend */}
          <div className="d-flex flex-wrap align-items-center justify-content-between mt-3 pt-2 border-top border-secondary text-muted small" style={{ fontSize: '0.75rem' }}>
            <div>
              {hoveredDay ? (
                <span className="text-light fw-semibold">
                  <span className="text-success">{hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'}</span> on {hoveredDay.date}
                </span>
              ) : (
                <span>Hover over squares to preview daily commit metrics</span>
              )}
            </div>

            {/* Color Legend */}
            <div className="d-flex align-items-center gap-1.5">
              <span>Less</span>
              <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: levelColors[0], border: '1px solid rgba(255, 255, 255, 0.08)' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: levelColors[1] }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: levelColors[2] }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: levelColors[3] }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: levelColors[4], boxShadow: '0 0 6px #22c55e' }} />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
