const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatMoney(value) {
  return moneyFormatter.format(value);
}

function calulateInterest(initialCapital, capital, taxaJuros, duration = 1) {
  //var taxaJuros = taxaJuros / 100;

  var initialValue = capital * Math.pow(1 + taxaJuros, duration);

  var total = initialValue;
  var totalString = formatMoney(initialValue);
  //var men = formatMoney(total - capital);

  var perc = (initialValue / initialCapital) * 100 - 100;
  var percString = formatPercent((initialValue / initialCapital) * 100 - 100);
  var increase = formatMoney(initialValue - initialCapital);

  return {
    total,
    perc,
    percString,
    totalString,
    increase,
  };
}

function formatPercent(value) {
  if (!value) {
    return '';
  }
  return value.toFixed(2).replace('.', ',') + '%';
}

export { calulateInterest };
