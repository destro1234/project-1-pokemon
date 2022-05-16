
document.addEventListener('DOMContentLoaded', function (params) {
    


let listA = document.querySelector("#pokemon-a-dropdown")
let listB = document.querySelector("#pokemon-b-dropdown")
let pokemonAImage = document.querySelector("#pokemon-a-img")
let pokemonBImage = document.querySelector("#pokemon-b-img")
let pokemonObjects = []
pokemonAImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
pokemonBImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"



    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
    .then(res => res.json())
    .then(function (data) {
        renderAllPokemon(data)
    })

    function renderAllPokemon(data) {
        let pokemons = data['results']
        for (const pokemon of pokemons) {
            fetch(pokemon.url)
            .then(res => res.json())
            .then(function (data) {
                // console.log(data)
                pokemonObjects.push(data)
                // console.log(pokemonObjects)
                createPokemonLists(pokemon)
            })
        }

        
    }

    console.log(pokemonObjects)
   

    function createPokemonLists(pokemon) {

        let optionA = document.createElement('option')
        let optionB = document.createElement('option')
        
        fetch(pokemon.url).then(res => res.json()).then(function (data) {
            optionA.innerHTML = data.name
            optionB.innerHTML = data.name
            listA.append(optionA)
            listB.append(optionB)
            
        } )
    }

    function updateList(data) {
        listA.addEventListener('change', function (event) {
            pokemonAImage.src = 
            console.log(event)
            
        })
    }
   

    
    listA.addEventListener('change', function (event) {
        pokemonObjects.filter(function (pokemon) {
            if (pokemon.name == event.target.value) {
                pokemonAImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`

                console.log(pokemon)
            }
            
        })
    })

   

    
   

    listB.addEventListener('change', function (event) {
        pokemonObjects.filter(function (pokemon) {
            if (pokemon.name == event.target.value) {
                pokemonBImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`

                console.log(pokemon)
            }
            
        })
    })
})