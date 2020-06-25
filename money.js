const money = (eloAtual, divisaoAtual, eloDesejado, divisaoDesejada, duoboost) => {
  let priceElo = [5, 10, 20, 25, 35, 65];
  let priceEloDuo = [5, 10, 20, 25, 35, 65];

  const elos = ["ferro", "bronze", "prata", "gold", "platina", "diamante"];
  let atual = [eloAtual, divisaoAtual];
  const desejado = [eloDesejado, divisaoDesejada];
  let valorDoEloAtual;
  let priceTotal = 0;
  let eloAtualIndex;


  // Fara isso enquanto nao estiver no elo desejado, 
  while (atual[0] !== desejado[0]) {
    // Verifica qual o elo (ferro,bronze...) e atribui o preço referente
    for (let i = 0; i < elos.length; i++) {
      if (atual[0] === elos[i]) {
        valorDoEloAtual = priceElo[i];
        // i representa ndice do preço referente, sera incrementado futuramente quando o usuario subir de elo
        eloAtualIndex = i;
      }
    }
    // preço recebe o valor por divisao do elo atua e multiplica por quantas vezes ele precisara subir
    priceTotal += valorDoEloAtual * atual[1];
    // Como supracitado era incrimentar pois aqui o usuario ja subiu de elo
    eloAtualIndex++;
    // Elo atual passa a ser o proximo na lista
    atual[0] = elos[eloAtualIndex];
    // Como passou de elo, automaticamente passou para a divisão 4
    atual[1] = 4;
  }

// Pela segunda vez, verifica qual o elo e atribui o preço referente 
  for (let i = 0; i < elos.length; i++) {
    if (atual[0] === elos[i]) {
      valorDoEloAtual = priceElo[i];
      eloAtualIndex = i;
    }
  }
    // Aqui ele ja estara no elo desejado, mas não necessariamente divisão desejada
  if (atual[0] === desejado[0]) {
    // Quantidades de divisão que ainda precisa subir
    let divisoes = atual[1] - desejado[1];
    priceTotal = priceTotal + divisoes * valorDoEloAtual;
  }
  console.log(priceTotal);
};
money("prata", 4, "platina", 4, true);
