import React from 'react';
import Installment from './Installment';

export default function Installments({ installments }) {
  return (
    <div className="center" style={styles.flexItem}>
      {installments.map((installment, index) => {
        const position = (index + 1).toString();
        return <Installment installment={installment} position={position} />;
      })}
    </div>
  );
}

const styles = {
  flexItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};
