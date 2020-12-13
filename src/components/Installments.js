import React from "react";
import Installment from "./Installment";

export default function Installments({ data }) {
  return (
    <div style={styles.flexRow}>
      {data.map((currData) => {
        return <Installment values={currData} />;
      })}
    </div>
  );
}

const styles = {
  flexRow: {},
};
