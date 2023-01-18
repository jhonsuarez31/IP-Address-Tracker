import React from "react";

export const Card = ({ title, message }) => {
  return (
    <main>
      <div className="card card-line">
        <p>{title}</p>
        <h2>{message}</h2>
      </div>
    </main>
  );
};
