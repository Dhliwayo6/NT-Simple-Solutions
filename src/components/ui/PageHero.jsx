import React from 'react';

export default function PageHero({ label, title }) {
  return (
    <div className="page-hero">
      <div className="page-hero__content container">
        <span className="section-label">{label}</span>
        <h1 className="page-hero__title display-heading">{title}</h1>
      </div>
    </div>
  );
}
