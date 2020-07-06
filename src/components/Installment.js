import React from 'react';
import css from './installment.module.css';

export default function Installment({ installment, position }) {
  const { increase, totalString, perc, percString } = installment;

  return (
    <div className={css.boxItem}>
      <div className={css.flexItem}>
        <div>{position}</div>
        <div>
          <div style={perc >= 0 ? { color: 'green' } : { color: 'red' }}>
            {totalString}
          </div>
          <div style={perc >= 0 ? { color: 'green' } : { color: 'red' }}>
            {perc > 0 && '+'} {increase}
          </div>
          <div style={perc >= 0 ? { color: '#3498db' } : { color: '#d35400' }}>
            {percString}
          </div>
        </div>
      </div>
    </div>
  );
}
