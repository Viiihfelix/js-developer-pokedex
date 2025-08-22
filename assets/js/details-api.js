let pokeInformacoes = {
    imagem: "",
    nome: "",
    altura: "",
    peso: "",
    habilidades: "",
    tipo: "",
};

function buscarInformacoes(nome) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      pokeInformacoes.imagem =
        response.sprites.other.dream_world.front_default;
      pokeInformacoes.nome = nome.charAt(0).toUpperCase() + nome.slice(1);
      pokeInformacoes.altura = response.height / 10;
      pokeInformacoes.peso = response.weight / 10;
      pokeInformacoes.habilidades = response.abilities.map(
        (i) => i.ability.name
      );
      pokeInformacoes.tipo = response.types[0].type.name;
      console.log(pokemonInformacoes.tipo);
    });

  setTimeout(() => montarModal(), 500);
}