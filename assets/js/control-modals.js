const modal = document.getElementById("modal_details");
const modalHeader = document.querySelector(".modal_details__header");
const modalImage = document.getElementById("modal_details__image");
const modalName = document.getElementById("modal_details__name");
const modalAltura = document.getElementById("modal_details__height");
const modalWeight = document.getElementById("modal_details__weight");
const modalHabilidades = document.getElementById("modal_details__habilidades");

const fade = document.getElementById("fade");
const botaoFecharModalDetails = document.getElementById(
  "botaoFecharModalDetails"
);

modalName.innerText = "Carregando...";

modalAltura.innerText = "Carregando...";

modalWeight.innerText = "Carregando...";

modalHabilidades.innerText = "Carregando...";

botaoFecharModalDetails.addEventListener("click", fecharModalDetails);
fade.addEventListener("click", fecharModalDetails);

setTimeout(() => {
  const itensLista = document.querySelectorAll("li.pokemon span.name");

  itensLista.forEach((itemLista) => {
    itemLista.addEventListener("click", abrirModalDetails);
  });
}, 2000);

function abrirModalDetails(e) {
  modal.classList.remove("hidden");
  fade.classList.remove("hidden");

  const nome = e.target.innerText.toLowerCase();
  buscarInformacoes(nome);
}

function fecharModalDetails() {
  modal.classList.add("hidden");
  fade.classList.add("hidden");

  modalHeader.classList.remove(pokeInformacoes.tipo);

  modalImage.setAttribute("src", "");
  modalImage.setAttribute("alt", "");

  modalName.innerText = "Carregando...";

  modalAltura.innerText = "Carregando...";

  modalWeight.innerText = "Carregando...";

  modalHabilidades.innerText = "Carregando...";
}

function montarModal() {
  modalHeader.classList.add(pokeInformacoes.tipo);

  modalImage.setAttribute("src", pokeInformacoes.imagem);
  modalImage.setAttribute("alt", pokeInformacoes.nome);

  modalName.innerText = pokeInformacoes.nome;

  if (pokeInformacoes.altura < 1)
    modalAltura.innerText = `${pokeInformacoes.altura} cm`;
  else modalAltura.innerText = `${pokeInformacoes.altura} m`;

  modalWeight.innerText = `${pokeInformacoes.peso} kg`;

  modalHabilidades.innerText = pokeInformacoes.habilidades.join(", ");
}