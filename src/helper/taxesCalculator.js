function calculateTaxes({ amount, rate, period }) {
  const initialAmount = amount;
  let newAmount;
  let diff;
  let diffPerc;
  let allInstallments = [];
  let currentPeriod = 1;
  while (period >= currentPeriod) {
    newAmount = amount * (1 + rate / 100);
    diff = newAmount - initialAmount;
    diffPerc = (diff / initialAmount) * 100;
    allInstallments.push({
      period: currentPeriod,
      newAmount,
      diff,
      diffPerc,
    });
    amount = newAmount;
    currentPeriod++;
  }
  return allInstallments;
}

export { calculateTaxes };
