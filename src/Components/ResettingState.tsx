import React, { useState } from 'react';

interface CounterProps {
  isFancy: boolean;
}

export default function ResettingState() {
  const [isFancy, setIsFancy] = useState<boolean>(false);

  return (
    <div>
      {isFancy ? (
        <Counter isFancy={true} />
      ) : (
        <Counter isFancy={false} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }: CounterProps) {
  const [score, setScore] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}


