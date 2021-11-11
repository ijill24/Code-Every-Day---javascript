const tipCalculator = (quality, total) => {
    if (quality === 'bad') {
      tip = .05 * total;
      return tip;
    }
    if (quality === 'ok') {
      tip = .15 * total;
      return tip;
    }
    if (quality === 'good') {
      tip = .20 * total;
      return tip;
    }
    if (quality === 'excellent') {
      tip = .30 * total;
      return tip
    }
    else {
      tip = .18 * total;
      return tip
    }
  }
  
  console.log(tipCalculator('excellent', 100))
  console.log(tipCalculator('good', 75))
  console.log(tipCalculator('ok', 150))