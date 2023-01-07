async function render() {
  const ulList = document.querySelector(".pokemon-card-list")

  ulList.innerHTML = ""

  const listaDePokemons = await getAllPokemons()

  listaDePokemons.results.forEach(pokemon => {
    const pokedexNumber = pokemon.url.slice(34, -1)

    ulList.insertAdjacentHTML(
      "beforeend",
      `<li class="pokemon-card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png" alt="${pokemon.name}" class="pokemon-img">
      <p class="pokemon-name">${pokemon.name}</p>
    </li>
`
    )
  })
}

function renderSearch() {
  const searchInput = document.querySelector(".search-input")
  const searchButton = document.querySelector(".search-button")

  searchButton.addEventListener("click", () => {
    getPokemonByName(searchInput.value.toLocaleLowerCase().trim())
  })
}

async function renderAll() {
  const pokemon = await getAllPokemons()
  const AllPokemons = document.querySelector("#AllPokemons")

  AllPokemons.addEventListener("click", () => {
    render(pokemon)
  })
}

render()
renderSearch()
await renderAll()
