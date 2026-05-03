import React, { useEffect, useRef } from 'react';
import { rolesData } from '../data';

export default function Roles() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    cardRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section roles-section" id="roles">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">👥 Roles</span>
          <h2 className="section-title">Key Election Roles</h2>
          <p className="section-desc">Understand who does what in an election — every role is critical for a free and fair process.</p>
        </div>
        <div className="roles-grid">
          {rolesData.map((r, i) => (
            <div key={i} className="role-card fade-in" ref={el => cardRefs.current[i] = el}>
              <span className="role-emoji">{r.emoji}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
