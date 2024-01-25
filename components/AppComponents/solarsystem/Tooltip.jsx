import React from 'react';

const Tooltip = ({ position, title, description, keyPoints }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: position.y + 10,
        left: position.x + 10,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tooltip;
