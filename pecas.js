/*
  LISTA DE PEÇAS
  Para adicionar uma peça:
    1. Põe a fotografia na pasta "fotos" (nome sem espaços, por exemplo vaso.jpg).
    2. Copia um bloco { ... }, cola-o no fim da lista (com vírgula a separar) e altera os dados.
  "preco" é o preço em euros, como número e com ponto (4.5 aparece como 4,50 €). Se o deixares de fora, não aparece preço.
  "material" é o tipo de material (PLA, PETG, ABS…) e serve também para filtrar a galeria.
  O campo "foto" aponta para a imagem. Se o deixares de fora, aparece uma forma desenhada.
  Formas possíveis (só sem foto): vaso, cubo, torre, disco, hex, estrela.
*/
window.PECAS = [
  { nome: "Vaso espiral", cat: "Decoração", preco: 8, foto: "", forma: "vaso", cor: "#e0703a", material: "PLA", camada: "0,2 mm", tempo: "4 h 30",
    desc: "Impresso em modo vaso, com uma única parede contínua. Fica ótimo com uma planta pequena." },
  { nome: "Suporte para telemóvel", cat: "Funcionais", preco: 4.5, foto: "", forma: "cubo", cor: "#2f7fd1", material: "PETG", camada: "0,2 mm", tempo: "2 h 10",
    desc: "Aguenta o telemóvel na vertical ou na horizontal e dobra-se para caber na mochila." },
  { nome: "Torre de teste", cat: "Protótipos", preco: 3, foto: "", forma: "torre", cor: "#8a5cc9", material: "PLA", camada: "0,12 mm", tempo: "1 h 40",
    desc: "Serve para afinar a temperatura e ver como a impressora lida com ângulos e pontes." },
  { nome: "Porta-chaves redondo", cat: "Funcionais", preco: 2.5, foto: "", forma: "disco", cor: "#1f9d6b", material: "PLA", camada: "0,16 mm", tempo: "35 min",
    desc: "Com o nome gravado em relevo. Foi a primeira peça que imprimimos para oferecer." },
  { nome: "Dado hexagonal", cat: "Brinquedos", preco: 3.5, foto: "", forma: "hex", cor: "#d6a21e", material: "PLA", camada: "0,16 mm", tempo: "1 h 15",
    desc: "Dado para jogos de tabuleiro, com os números bem fundos para pintar." },
  { nome: "Estrela de Natal", cat: "Decoração", preco: 5, foto: "", forma: "estrela", cor: "#d6453d", material: "PLA seda", camada: "0,2 mm", tempo: "2 h 50",
    desc: "Para pendurar na árvore. O filamento de seda dá-lhe um brilho metálico." }
];
