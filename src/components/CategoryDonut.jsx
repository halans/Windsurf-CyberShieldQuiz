import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const donutSize = 92;

const CategoryDonut = ({ value, max, label }) => {
  // Defensive: always use valid numbers
  const safeValue = typeof value === 'number' && !isNaN(value) ? value : 0;
  const safeMax = typeof max === 'number' && max > 0 ? max : 0;
  const percentage = safeMax > 0 ? (safeValue / safeMax) * 100 : 0;
  const displayPercent = isFinite(percentage) && percentage >= 0 ? Math.round(percentage) : 0;

  return (
    <div
      style={{
        width: donutSize,
        minWidth: donutSize,
        maxWidth: donutSize,
        height: donutSize + 38,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0 auto',
      }}
    >
      <div style={{ width: donutSize, height: donutSize }}>
        <CircularProgressbar
          value={displayPercent}
          text={`${displayPercent}%`}
          styles={buildStyles({
            textSize: '18px',
            pathColor: '#1976d2',
            textColor: '#222',
            trailColor: '#eee',
          })}
        />
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 15,
          textAlign: 'center',
          maxWidth: donutSize + 8,
          wordBreak: 'break-word',
          lineHeight: 1.15,
          minHeight: 34,
          overflowWrap: 'anywhere',
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default CategoryDonut;
