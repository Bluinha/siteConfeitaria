// Lista de itens disponíveis
const itens = [
  { nome: "Beijinho", url: "pags/beijinho.html" },
  { nome: "Bolo de Morango", url: "pags/boloDeMorango.html" },
  { nome: "Bolo de Chocolate", url: "pags/boloDeChocolate.html" },
  { nome: "Bolo Red Velvet", url: "pags/boloRedVelvet.html" },
  { nome: "Bolo de Pote de Chocolate", url: "pags/boloPoteChoco.html" },
  { nome: "Bolo de Pote de Morango", url: "pags/boloPoteMorango.html" },
  { nome: "Cupcake", url: "pags/cupcake.html" },
  { nome: "Donut de Mirtilo", url: "pags/donut.html" },
];

const campoBusca = document.getElementById("campoBusca");
const sugestoesDiv = document.getElementById("sugestoes");

campoBusca.addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  sugestoesDiv.innerHTML = "";

  if (termo.length > 0) {
    const resultados = itens.filter((item) =>
      item.nome.toLowerCase().includes(termo)
    );

    if (resultados.length > 0) {
      sugestoesDiv.style.display = "block";
      resultados.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = item.nome;
        div.addEventListener("click", () => {
          window.open(item.url, "menu");
          sugestoesDiv.innerHTML = "";
          sugestoesDiv.style.display = "none";
          campoBusca.value = "";
        });
        sugestoesDiv.appendChild(div);
      });
    } else {
      sugestoesDiv.style.display = "none";
    }
  } else {
    sugestoesDiv.style.display = "none";
  }
});

// Fecha ao clicar fora
document.addEventListener("click", function (e) {
  if (!campoBusca.contains(e.target) && !sugestoesDiv.contains(e.target)) {
    sugestoesDiv.innerHTML = "";
    sugestoesDiv.style.display = "none";
  }
});
