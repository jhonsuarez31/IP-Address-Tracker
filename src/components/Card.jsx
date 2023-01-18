import React from "react";

export const Card = ({ title, message, haveLine }) => {
  const cardLine = haveLine ? 'card-line' : 'sin-card'
  return (
    <main>
      <div className={`card ${cardLine}` }>
        <p>{title}</p>
        <h2>{message}</h2>
      </div>
    </main>
  );
};
