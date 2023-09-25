import React, { useState } from 'react';
import './JogoJokenpo.css';

function JogoJokenpo() {
  const [vitoria, setVitoria] = useState(0);
  const [derrota, setDerrota] = useState(0);
  const [empate, setEmpate] = useState(0);
  const [escolhaPc, setEscolhaPc] = useState(null);

  function resetarContadores() {
    setVitoria(0);
    setDerrota(0);
    setEmpate(0);
    setEscolhaPc(null);
  }

  function showWin() {
    setEscolhaPc(null);
    delay();
  }

  function showDraw() {
    setEscolhaPc(null);
    delay();
  }

  function showLose() {
    delay();
  }

  function delay() {
    setTimeout(function () {
      // Não é mais necessário manipular o DOM aqui
    }, 750);
  }

  function compare(arma) {
    let computer = ["Pedra!", "Papel!", "Tesoura!"];
    let random = computer[Math.floor(Math.random() * computer.length)];

    setEscolhaPc(random);

    if (arma === "pedra") {
      if (random === "Pedra!") {
        setEmpate(empate + 1);
        showDraw();
      } else if (random === "Papel!") {
        setDerrota(derrota + 1);
        showLose();
      } else if (random === "Tesoura!") {
        setVitoria(vitoria + 1);
        showWin();
      }
    } else if (arma === "papel") {
      if (random === "Pedra!") {
        setVitoria(vitoria + 1);
        showWin();
      } else if (random === "Papel!") {
        setEmpate(empate + 1);
        showDraw();
      } else if (random === "Tesoura!") {
        setDerrota(derrota + 1);
        showLose();
      }
    } else if (arma === "tesoura") {
      if (random === "Pedra!") {
        setDerrota(derrota + 1);
        showLose();
      } else if (random === "Papel!") {
        setVitoria(vitoria + 1);
        showWin();
      } else if (random === "Tesoura!") {
        setEmpate(empate + 1);
        showDraw();
      }
    }
  }

  return (
    <div className="container">
      <h1>JOKENPO</h1>

      <div className="links">
        <h3>Selecione sua arma:</h3>
        <button id="pedra" onClick={() => compare("pedra")}>
          Pedra!
        </button>
        <button id="papel" onClick={() => compare("papel")}>
          Papel!
        </button>
        <button id="tesoura" onClick={() => compare("tesoura")}>
          Tesoura!
        </button>
      </div>

      <div className="computer">
        <form id="pchoose">
          <p>
            <label htmlFor="pc">Computador:</label>
            <input type="text" name="pc" value={escolhaPc || ''} readOnly />
          </p>
        </form>
      </div>

      <div className="count">
        <form id="contar">
          <label htmlFor="vic">Vitorias:</label>
          <input type="text" name="vic" value={vitoria} readOnly />
          <label htmlFor="lose">Derrotas:</label>
          <input type="text" name="lose" value={derrota} readOnly />
          <label htmlFor="empate">Empates:</label>
          <input type="text" name="empate" value={empate} readOnly />
          <input type="reset" value="Resetar " id="reset" onClick={resetarContadores} />
        </form>
      </div>

      <div id="choose">
        <div className="escolha">
          <div id="win">
            <h2 className="h2">Você Ganhou!</h2>
            <span>Parabéns!</span>
          </div>

          <div id="lose">
            <h2 className="h2">Você Perdeu!</h2>
            <span>Que pena!</span>
          </div>
          <div id="draw">
            <h2 className="h2">Empate!</h2>
            <span>Boa Sorte... Na Próxima</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JogoJokenpo;
