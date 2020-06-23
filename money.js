const money = (eloAtual, divisaoAtual, eloDesejado, divisaoDesejada, duoboost) => {
  let priceElo = [5, 10, 20, 25, 35, 65];
  let priceEloDuo = [5, 10, 20, 25, 35, 65];

  const elos = ["ferro", "bronze", "prata", "gold", "platina", "diamante"];
  let atual = [eloAtual, divisaoAtual];
  const desejado = [eloDesejado, divisaoDesejada];
  let valorDoEloAtual;
  let priceTotal = 0;
  let eloAtualIndex;

  while (atual[0] !== desejado[0]) {
    for (let i = 0; i < elos.length; i++) {
      if (atual[0] === elos[i]) {
        valorDoEloAtual = priceElo[i];
        eloAtualIndex = i;
      }
    }

    priceTotal += valorDoEloAtual * atual[1];
    eloAtualIndex++;
    atual[0] = elos[eloAtualIndex];
    atual[1] = 4;
  }
  for (let i = 0; i < elos.length; i++) {
    if (atual[0] === elos[i]) {
      valorDoEloAtual = priceElo[i];
      eloAtualIndex = i;
    }
  }
  if (atual[0] === desejado[0]) {
    let divisoes = atual[1] - desejado[1];
    priceTotal = priceTotal + divisoes * valorDoEloAtual;
  }
  console.log(priceTotal);
};
money("prata", 4, "platina", 4, true);
