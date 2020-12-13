import React from "react";

export default function Installment({ values }) {
  console.log(values);
  const { period, newAmount, diff, diffPerc } = values;

  return (
    <div className="card" style={styles.flexRow}>
      <div style={{ marginRight: "10px" }}>{period}</div>
      <div>
        <p>{newAmount.toFixed(2)}</p>
        <p>{diff.toFixed(2)}</p>
        <p>{diffPerc.toFixed(2)}</p>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
};

//return <p>{`period: ${period} `}</p>;
