
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
    .then(res => res.json())
    .then(data => renderAllPokemonNames(data))


    function renderAllPokemonNames(data) {
        let pokemons = data["results"]
        for (const pokemon of pokemons) {
            let list = document.querySelector("#pokemon-a-dropdown")
            let option = document.createElement('option')
            option.innerHTML = pokemon.name
            list.append(option)
            console.log(list)
        }
        console.log(data["results"])
    }

    // function renderPokemon(pokemon) {
    //     let img= document.querySelector("#pokemon-a-img")
        
    //     img.src = (pokemon['sprites']['back_default'])
    //     console.log(img)
    //     // document.querySelector("#pokemon-a-img").src = (pokemon['sprites']['back_default:'])
    // }
    