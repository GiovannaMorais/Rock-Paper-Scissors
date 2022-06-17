const btnPedra = document.querySelector(".pedra");
const btnPapel = document.querySelector(".papel");
const btnTesoura = document.querySelector(".tesoura");
const User = document.querySelector(".user");
const PC = document.querySelector(".pc");

const pontUser = document.querySelector(".pontUser");
const pontPC = document.querySelector(".pontPc");
const score = document.querySelector(".score");

const result = document.querySelector(".result");
let userTotal = 0;
let pcTotal = 0;

const computerChoices = () => {
  const opctions = ["tesoura", "papel", "pedra"];
  const randomNumber = Math.floor(Math.random() * 3);
  return opctions[randomNumber];
};
// console.log(computerChoices());
const convertendo = (string) => {
if(string === "tesoura") return 'Tesoura'
if(string === "pedra") return 'Pedra'
if(string === "papel") return 'Papel'

}
const win = (choice,pcChoices) => {
    userTotal+=1
    pontUser.innerHTML = userTotal;
    pontPC.innerHTML = pcTotal;
    result.innerHTML = `${convertendo(choice)}  com  ${convertendo(pcChoices)}  
    .Você Ganhou!`
}
const lose = (choice,pcChoices) => {
    pcTotal+=1
    pontUser.innerHTML = userTotal;
    pontPC.innerHTML = pcTotal;
    result.innerHTML = `${convertendo(choice)}  com  ${convertendo(pcChoices)}  
    .Você Perdeu!`
}

const draw = (choice,pcChoices) => {
    pontUser.innerHTML = userTotal;
    pontPC.innerHTML = pcTotal;
    result.innerHTML = `${convertendo(choice)}  com  ${convertendo(pcChoices)}  
    . Deu Empate`
}

const game = (choice) => {
  const pcChoices = computerChoices();
  switch (choice +' '+ pcChoices) {
    case "tesoura papel":
    case "papel pedra":
    case "pedra tesoura":
      win(choice, pcChoices)
      break;

    case "pedra papel":
    case "papel tesoura":
    case "tesoura pedra":
      lose(choice, pcChoices)
      break;

    case "tesoura tesoura":
    case "papel papel":
    case "pedra pedra":
      draw(choice, pcChoices)
      break;
  }
};

const actionButton = () => {
  btnTesoura.addEventListener("click", () => {
    game("tesoura");
  });

  btnPedra.addEventListener("click", () => {
    game("pedra");
  });

  btnPapel.addEventListener("click", () => {
    game("papel");
  });
};
actionButton();

