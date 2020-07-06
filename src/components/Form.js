import React, { useState, useEffect } from 'react';
import { calulateInterest } from '../helpers/interestRate';

export default function Form({
  onChange,
  moneyValue,
  monthInterestValue,
  periodValue,
}) {
  const [money, setMoney] = useState(moneyValue);
  const [monthInterest, setMonthInterest] = useState(monthInterestValue);
  const [period, setPeriod] = useState(periodValue);

  const handleChangeValue = (event) => {
    setMoney(+event.target.value);
  };

  const handleChangeInterest = (event) => {
    setMonthInterest(+event.target.value);
  };

  const handleChangePeriod = (event) => {
    setPeriod(+event.target.value);
  };

  useEffect(() => {
    let interest = calulateInterest(money, money, monthInterest);

    const dataArray = [];
    dataArray.push(interest);
    for (let index = 1; index < period; index++) {
      interest = calulateInterest(
        money,
        dataArray[index - 1].total,
        monthInterest
      );
      dataArray.push(interest);
    }

    console.log(dataArray);

    onChange(dataArray);
  }, [money, monthInterest, period]);

  return (
    <div>
      <div className="input-field col s4 ">
        <input
          type="number"
          onChange={handleChangeValue}
          step="100"
          value={money}
          id="inputMoney"
        />
        <label className="active" htmlFor="input-grade">
          Montante inicial
        </label>
      </div>

      <div className="input-field input-field col s4">
        <input
          type="number"
          onChange={handleChangeInterest}
          step="0.1"
          value={monthInterest}
          id="inputInterest"
        />
        <label className="active" htmlFor="input-grade">
          Taxa de juros mensal
        </label>
      </div>

      <div className="input-field input-field col s4">
        <input
          type="number"
          value={period}
          onChange={handleChangePeriod}
          step="1"
          value={period}
          id="inputMonths"
        />
        <label className="active" htmlFor="input-grade">
          Periodo(meses)
        </label>
      </div>
    </div>
  );
}
