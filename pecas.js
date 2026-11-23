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
 /* { nome: "Vaso espiral", cat: "Decoração", preco: 8, foto: "", forma: "vaso", cor: "#e0703a", material: "PLA", camada: "0,2 mm", tempo: "4 h 30",
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
    desc: "Para pendurar na árvore. O filamento de seda dá-lhe um brilho metálico." },*/
  { nome: "Presépio", cat: "Decoração", preco: 15, foto: "fotos/navityscene.jpg", material: "PLA", camada: "0,2 mm", tempo: "2 h 50",
    desc: "Presépio com a Sagrada Família, os Reis Magos e os animais, sob um arco de malha com estrela." },
  { nome: "Laço vermelho", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/treebowredone.jpg",
    desc: "Laço grande com argola para pendurar na árvore ou numa porta." },
  { nome: "Laço com corações", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/treebowredtwo.jpg",
    desc: "Laço com dois corações recortados nas pontas e argola para pendurar." },
  { nome: "Grinch e árvore", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/grinchtreehand.jpg",
    desc: "Enfeite em várias cores com a mão do Grinch a segurar uma árvore de Natal." },
  { nome: "Grinch na bola de Natal", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/grinchtreeone.jpg",
    desc: "Enfeite em várias cores com o Grinch de gorro a espreitar de uma bola com flocos de neve." },
  { nome: "Bola de Natal com olhos (verde)", cat: "Decoração", preco: 2.5, material: "PLA", foto: "fotos/treejokagreen.jpg",
    desc: "Bola de Natal com olhos grandes, pés e argola para pendurar." },
  { nome: "Bola de Natal com olhos (vermelha)", cat: "Decoração", preco: 2.5, material: "PLA", foto: "fotos/treejokared.jpg",
    desc: "Bola de Natal com olhos grandes, pés e argola para pendurar." },
  { nome: "Casa do Jack", cat: "Decoração", preco: 7, material: "PLA", foto: "fotos/jackhouse.jpg",
    desc: "Casa assombrada com portão, gato, abóbora e pinheiros numa base hexagonal." },
  { nome: "Casinha de Natal", cat: "Decoração", preco: 5, material: "PLA", foto: "fotos/chritmashouse.jpg",
    desc: "Casinha coberta de neve com uma coroa de Natal na porta e chaminé." },
  { nome: "Igreja de Natal", cat: "Decoração", preco: 5, material: "PLA", foto: "fotos/christmaschurch.jpg",
    desc: "Igreja com torre, pinheiros e boneco de neve numa base redonda." },
  { nome: "Plataforma 9¾", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/christmashpplataformtree.jpg",
    desc: "Enfeite de pendurar inspirado na plataforma 9¾, em preto, vermelho e branco." },
  { nome: "HO com gorro de Pai Natal", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/christmasohred.jpg",
    desc: "Letras H e O em vermelho com um gorro de Pai Natal em branco." },
  { nome: "Gnomo de Natal verde", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/christmasgnomegreen.jpg",
    desc: "Gnomo de Natal em forma de árvore, com abertura redonda." },
  { nome: "Gnomo de Natal branco", cat: "Decoração", preco: 2, material: "PLA", foto: "fotos/christmasgnomewhite.jpg",
    desc: "Gnomo de Natal de gorro às riscas, com abertura redonda." },
  { nome: "Rena Ho Ho Ho", cat: "Decoração", preco: 4, material: "PLA", foto: "fotos/christmasreindeerwhite.jpg",
    desc: "Rena num círculo com estrelas e a frase Ho Ho Ho, com base para pousar." },
  { nome: "Bota de Natal com nome", cat: "Personalizados", preco: 2, material: "PLA", foto: "fotos/nameboot.jpg",
    desc: "Enfeite personalizado em forma de bota, com o Pai Natal, azevinho e o nome gravado." },
  { nome: "Bola de Natal com nome (Manuel)", cat: "Personalizados", preco: 2, material: "PLA", foto: "fotos/nametreeone.jpg",
    desc: "Bola de Natal personalizada com o nome, flocos de neve, azevinho, laço e sinos." },
  { nome: "Bola de Natal com nome (Judite)", cat: "Personalizados", preco: 2, material: "PLA", foto: "fotos/nametreetwo.jpg",
    desc: "Bola de Natal personalizada com o nome, laço, azevinho, flocos de neve e sinos." },
  { nome: "Nome Judite", cat: "Personalizados", preco: 5, material: "PLA", foto: "fotos/juditenamegreen.jpg",
    desc: "Nome em relevo, em verde e branco, com um coração no i." },
  { nome: "Iniciais para casal", cat: "Personalizados", preco: 18, material: "PLA", foto: "fotos/coupleletters.jpg",
    desc: "Coração vermelho sobre letras brancas, com mensagem personalizada." }
];
