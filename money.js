let job = {
  nome: 'Degaleto',
  ligaAtual: 'prata',
  precoDaLigaAtual: 0,
  divisaoAtual: 4,
  ligaDesejada: 'platina',
  divisaoDesejada: 4,
  duoBoost: false,
  divisoesParaSubir: 0,
  preco: 0,
};

let info = { 
  ligas: ["ferro", "bronze", "prata", "gold", "platina", "diamante"],
  precoPorLiga: [5, 10, 20, 25, 35, 65],
  precoPorEloDuoBoost: [5, 10, 20, 25, 35, 65],
};

while(job.ligaAtual !== job.ligaDesejada) {
let posicaoDoEloAtual;
 for (let i = 0; i < info.ligas.length; i++){
    if (job.ligaAtual === info.ligas[i] ){
      job.precoDaLigaAtual = info.precoPorLiga[i]
      posicaoDoEloAtual = i;
  }
}
job.preco += job.precoDaLigaAtual * job.divisaoAtual;
posicaoDoEloAtual++;
job.ligaAtual = info.ligas[posicaoDoEloAtual];
job.divisaoAtual = 4;
}

for (let i = 0; i < info.ligas.length; i++){
  if (job.ligaAtual === info.ligas[i] ){
    job.precoDaLigaAtual = info.precoPorLiga[i]
    posicaoDoEloAtual = i;
}
}
if (job.ligaAtual === job.ligaDesejada) {
  job.divisoesParaSubir = job.divisaoAtual - job.divisaoDesejada;
  job.preco += job.divisoesParaSubir * job.precoDaLigaAtual
}
console.log(job.preco);
