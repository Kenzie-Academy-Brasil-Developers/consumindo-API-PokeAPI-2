async function getAllPokemons() {
  const pokemonApi = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=905`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      return res
    })

  return pokemonApi
}

async function getPokemonByName(pokemon) {
  const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      const ulPokemonList = document.querySelector(".pokemon-card-list")

      ulPokemonList.innerHTML = ""

      const pokedexNumber = res.species.url.slice(42, -1)

      ulPokemonList.insertAdjacentHTML(
        "beforeend",
        `
            <li class="pokemon-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png" alt="${res.species.name}" class="pokemon-img">
            <p class="pokemon-name">${res.species.name}</p>
          </li>
            `
      )
    })

  return pokemons
}
