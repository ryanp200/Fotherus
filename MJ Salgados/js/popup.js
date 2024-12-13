document.addEventListener("DOMContentLoaded", () => {
  const salgados25 = document.getElementById("salgados25");
  const salgados50 = document.getElementById("salgados50");
  const salgados75 = document.getElementById("salgados75");
  const salgados100 = document.getElementById("salgados100");
  const churros25 = document.getElementById("churros25");
  const churros50 = document.getElementById("churros50");
  const churros75 = document.getElementById("churros75");
  const churros100 = document.getElementById("churros100");

  const popup25salgados = document.getElementById("popup25salgados");
  const popup50salgados = document.getElementById("popup50salgados");
  const popup75salgados = document.getElementById("popup75salgados");
  const popup100salgados = document.getElementById("popup100salgados");
  const popup25churros = document.getElementById("popup25churros");
  const popup50churros = document.getElementById("popup50churros");
  const popup75churros = document.getElementById("popup75churros");
  const popup100churros = document.getElementById("popup100churros");

  const fecharBotoes = document.querySelectorAll(".outer-botao-fechar");

  salgados25.onclick = function () {
      popup25salgados.showModal();
  };
  salgados50.onclick = function () {
      popup50salgados.showModal();
  };
  salgados75.onclick = function () {
    popup75salgados.showModal();
  };
  salgados100.onclick = function () {
    popup100salgados.showModal();
  };
  churros25.onclick = function () {
    popup25churros.showModal();
  };
  churros50.onclick = function () {
    popup50churros.showModal();
  };
  churros75.onclick = function () {
    popup75churros.showModal();
  };
  churros100.onclick = function () {
    popup100churros.showModal();
  };
  fecharBotoes.forEach(botao => {
      botao.onclick = function () {
          const popup = botao.closest("dialog");
          if (popup) {
              popup.close();
          };
      };
  });
});
