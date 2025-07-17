let cards = document.querySelectorAll('.card');
let res = document.getElementById('res');

cards.forEach(function(card) {
  card.addEventListener('mouseenter', function() {
    card.style.backgroundColor = 'rgb(101, 211, 125)'
  });

  card.addEventListener('mouseleave', function() {
    card.style.backgroundColor = ''; // volta ao normal
  });
});

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

cards.forEach(function(card, index) {
  card.addEventListener('click', function () {
    // Limpa seleção anterior
    cards.forEach(c => c.classList.remove('selecionado'));
    card.classList.add('selecionado');

    let escolhaJogador = opcoes[index];
    let escolhaPC = opcoes[numAle()];
    let resultado = ''

    if (escolhaJogador === escolhaPC) {
        resultado = 'Empate!';
    } else if (
        (escolhaJogador === 'Pedra' && escolhaPC === 'Tesoura') ||
        (escolhaJogador === 'Papel' && escolhaPC === 'Pedra') ||
        (escolhaJogador === 'Tesoura' && escolhaPC === 'Papel')
    ) {
        resultado = 'Você venceu!';
    } else {
        resultado = 'Você perdeu!';
    }
    
    res.innerHTML = `Você escolheu <strong>${escolhaJogador}</strong> e o PC escolheu <strong>${escolhaPC}</strong>. <br>${resultado}`;
  });
});

function numAle() {
  return Math.floor(Math.random() * 3);
}
