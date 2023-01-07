async function render() {
  const ulList = document.querySelector(".pokemon-card-list")

  ulList.innerHTML = ""

  const listaDePokemons = await getAllPokemons()

  listaDePokemons.results.forEach(pokemon => {
    const numeroNaPokedex = pokemon.url.slice(34, -1)

    ulList.insertAdjacentHTML(
      "beforeend",
      `<li class="pokemon-card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt="${pokemon.name}" class="pokemon-img">
      <p class="pokemon-name">${pokemon.name}</p>
    </li>
`
    )
  })
}
render()

function renderSearch() {
  const searchInput = document.querySelector(".search-input")
  const searchBtn = document.querySelector(".search-button")

  searchBtn.addEventListener("click", () => {
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

renderSearch()
await renderAll()
