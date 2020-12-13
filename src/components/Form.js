import React, { useEffect, useState } from "react";

export default function Form({ onValuesChange }) {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(0.5);
  const [period, setPeriod] = useState(1);

  useEffect(() => {
    const values = {
      amount,
      rate,
      period,
    };
    onValuesChange(values);
  }, [amount, rate, period]);

  const valueChange = ({ target }) => {
    const { id, value } = target;

    if (id === "amount") {
      setAmount(value);
    }
    if (id === "rate") {
      setRate(value);
    }
    if (id === "period") {
      setPeriod(value);
    }
  };

  return (
    <div>
      <h2>React - Juros Compostos</h2>
      <div style={styles.inputs}>
        <div className="input-field">
          <input
            id="amount"
            type="number"
            min="0"
            step="100"
            value={amount}
            onChange={valueChange}
          />
          <label className="active" htmlFor="amount">
            Montante Inicial:
          </label>
        </div>

        <div className="input-field">
          <input
            id="rate"
            type="number"
            min="-12"
            max="12"
            step="0.1"
            value={rate}
            onChange={valueChange}
          />
          <label className="active" htmlFor="rate">
            Taxa mensal:
          </label>
        </div>

        <div className="input-field">
          <input
            id="period"
            type="number"
            min="0"
            step="1"
            value={period}
            onChange={valueChange}
          />
          <label className="active" htmlFor="period">
            Período (mensal):
          </label>
        </div>
      </div>
    </div>
  );
}

const styles = {
  inputs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
