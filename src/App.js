import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";
import * as calc from "./helper/taxesCalculator";

export default function App() {
  const [allInstallment, setAllInstallment] = useState([
    {
      period: 1,
      newAmount: 1005,
      diff: 5,
      diffPerc: 0.5,
    },
  ]);

  const handleValuesChange = (values) => {
    const newAllInstallment = calc.calculateTaxes(values);
    setAllInstallment(newAllInstallment);
  };

  return (
    <div className="container center">
      <Form onValuesChange={handleValuesChange} />
      <Installments data={allInstallment} />
    </div>
  );
}
