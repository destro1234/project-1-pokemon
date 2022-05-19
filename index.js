
document.addEventListener('DOMContentLoaded', function (params) {
    


let dropDownA = document.querySelector("#pokemon-a-dropdown")
let dropDownB = document.querySelector("#pokemon-b-dropdown")

let pokemonBImage = document.querySelector("#pokemon-b-img")
let hpa = document.querySelector('#HP_a')
const pokemonObjects = []
const dropDown = document.createElement('select')




    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150')
    .then(res => res.json())
    .then(function (data) {
        getAllPokemon(data)
    })

    function getAllPokemon(data) {
        let pokemons = data['results']
        for (const pokemon of pokemons) {
            fetch(pokemon.url)
            .then(res => res.json())
            .then(function (data) {
                createOptions(data)
                pokemonObjects.push(data)
            })
        }

        
    }


    

    
    createPokemonDropdown()

    function createPokemonDropdown() {
        const container = document.querySelector("#container-wrapper");
        const div = document.createElement('div');
        div.innerHTML = 
        `<h4>Choose a Pokemon:</h4>
        <img id= "pokemon_img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="image goes here">
        <br>
        <label for="pokemon-a">Choose your pokemon:</label>
        <br>
        <br>`
        div.append(dropDown)
        
        
            
        
        
        container.append(div)
    

    }

    function createOptions(data) {
        const option = document.createElement('option')
        option.innerHTML = data.name
        dropDown.append(option)
        console.log(dropDown)
    }

    

    


   

    // function createPokemonLists(data) {

    //     let optionA = document.createElement('option')
    //     let optionB = document.createElement('option')
        
    //         optionA.innerHTML = data.name
    //         optionB.innerHTML = data.name
    //         dropDownA.append(optionA)
    //         dropDownB.append(optionB)
            
        
    // }
   

    
   dropDown.addEventListener('change', function (event) {
        const pokemon = pokemonObjects.find(pokemon => pokemon.name === event.target.value) 
            // if (pokemon.name == event.target.value) {
                let pokemonImage = document.querySelector("#pokemon_img")
                pokemonImage.src = pokemon.sprites.front_default
            //     hpa.innerHTML = `HP: ${pokemon['stats'][0]['base_stat']}`
                
            // }
            
    
    })
})