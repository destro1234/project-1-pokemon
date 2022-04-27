
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(res => res.json())
    .then(data => renderPokemon(data))

    function renderPokemon(pokemon) {
        let img= document.querySelector("#pokemon-a-img")
        
        img.src = (pokemon['sprites']['back_default'])
        console.log(img)
        // document.querySelector("#pokemon-a-img").src = (pokemon['sprites']['back_default:'])
    }
    