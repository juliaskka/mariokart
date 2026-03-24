🏁 Simulador de Corridas (Estilo Mario Kart) — Node.js
📌 Descrição

Desenvolva um simulador de corridas no terminal utilizando Node.js, inspirado em Mario Kart. O sistema executa toda a lógica da corrida, enquanto os jogadores (personagens) competem em uma pista com eventos aleatórios.

O jogo é baseado em turnos (rodadas), combinando atributos dos personagens com sorte (dados) e eventos especiais como confrontos com itens.

🎮 Regras & Mecânicas
👤 Jogadores
A corrida terá 2 personagens
Cada personagem é um objeto com:
nome
velocidade
manobrabilidade
poder
pontos (inicia em 0)
🛣️ Pista
A corrida terá 5 rodadas
A cada rodada, será sorteado um tipo de bloco:
🟩 RETA
🟨 CURVA
🟥 CONFRONTO
🎲 Mecânica das Rodadas
🟩 RETA
Jogadores rolam 1 dado (1–6)
Soma com velocidade
Quem vencer:
✅ +1 ponto
🟨 CURVA
Jogadores rolam 1 dado (1–6)
Soma com manobrabilidade
Quem vencer:
✅ +1 ponto
🟥 CONFRONTO (Atualizado 🔥)
Jogadores rolam 1 dado (1–6)
Soma com poder
🧨 Penalidade para quem perde:
Sorteia um evento:
🐢 Casco → perde -1 ponto
💣 Bomba → perde -2 pontos
🚀 Bônus para quem vence:
Chance de ganhar Turbo
🎯 Se ativado → ganha +1 ponto extra
⚠️ Regras Importantes
A pontuação mínima é 0 (não pode ser negativa)
Sempre aplicar:
pontos = Math.max(0, pontos)
🏆 Condição de Vitória

Após 5 rodadas:

Vence quem tiver mais pontos
Em caso de empate → declarar empate
🧠 Estrutura dos Personagens
const mario = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0
}

const bowser = {
  nome: "Bowser",
  velocidade: 2,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0
}
🔁 Fluxo do Jogo
Criar personagens
Iniciar corrida
Para cada rodada:
Sortear tipo da pista
Jogadores rolam dados
Aplicar regras da rodada
Se confronto:
Aplicar penalidade aleatória
Verificar turbo
Atualizar placar
Mostrar resultado final
🎲 Funções importantes (sugestão)
function rolarDado() {
  return Math.floor(Math.random() * 6) + 1
}

function sortearBloco() {
  const blocos = ["RETA", "CURVA", "CONFRONTO"]
  return blocos[Math.floor(Math.random() * blocos.length)]
}

function sortearItem() {
  return Math.random() < 0.5 ? "CASCO" : "BOMBA"
}

function turboAtivado() {
  return Math.random() < 0.5
}
🧩 Exemplo de Execução
🏁 Corrida iniciada!

Rodada 3 - CONFRONTO

Mario: 4 + 3 = 7
Bowser: 2 + 5 = 7

Empate! Ninguém perde ponto.

Rodada 4 - CONFRONTO

Mario: 3 + 3 = 6
Bowser: 5 + 5 = 10

Mario perdeu!
💣 Bomba! -2 pontos

Bowser ganhou!
🚀 Turbo ativado! +1 ponto

Placar:
Mario: 0
Bowser: 3
🚀 Possíveis Melhorias
Mais personagens
Sistema de itens completo (banana, estrela, etc.)
Interface interativa com readline
Logs coloridos no terminal (chalk)
Multiplayer futuramente

