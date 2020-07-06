import React, { useState } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [installments, setInstallments] = useState([]);

  const handleChangeForm = (dataArray) => {
    setInstallments(dataArray);
  };

  return (
    <div className="container">
      <h1>React - Juros Compostos</h1>

      <div className="row">
        <Form
          moneyValue={2000}
          monthInterestValue={0.5}
          periodValue={12}
          onChange={handleChangeForm}
        />
      </div>
      <Installments installments={installments} />
    </div>
  );
}
