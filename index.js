
document.addEventListener('DOMContentLoaded', function (params) {
    


let dropDownA = document.querySelector("#pokemon-a-dropdown")
let dropDownB = document.querySelector("#pokemon-b-dropdown")
let pokemonCard = document.querySelector("#pokemon-card")
let statsCard = document.createElement("ul")

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
        div.id = "pokemon-card"
        let linebreak = document.createElement('br')
        div.innerHTML = 
        `<h4>Choose a Pokemon:</h4>
        <img id= "pokemon_img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="image goes here">
        <br>
        <label for="pokemon-a">Choose your pokemon:</label>
        <br>
        <br>`
        const addButton = document.createElement('button')
        addButton.innerHTML = "Add to Team!"
        div.append(dropDown)

        let hp = document.createElement('li')
        hp.id = "healthpoints"
        hp.innerHTML = `HP: 45`

        let attack = document.createElement('li')
        attack.id = 'attack'
        attack.innerHTML = "Attack: 49"

        let defense = document.createElement('li')
        defense.id = 'defense'
        defense.innerHTML = "Defense: 49"

        let special_attack = document.createElement('li')
        special_attack.id = 'special_attack'
        special_attack.innerHTML = "Special Attack: 65"

        let special_defense = document.createElement('li')
        special_defense.id = 'special_defense'
        special_defense.innerHTML = "Special Defense: 65"

        let speed = document.createElement('li')
        speed.id = 'speed'
        speed.innerHTML = "Speed: 45"

        statsCard.id = 'stats-card'
        statsCard.append(hp,attack, defense, special_attack, special_defense, speed)
        div.append(statsCard)

        div.append(linebreak)
        div.append(addButton)
        
        
            
        
        
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

    function renderStats(pokemon) {
        pokemonCard = document.querySelector("#pokemon-card")
        let hp = pokemonCard.querySelector("#healthpoints")
        hp.innerHTML = `HP: ${pokemon.stats[0]['base_stat']}`

        let attack = pokemonCard.querySelector('#attack')
        attack.innerHTML = `Attack: ${pokemon.stats[1]['base_stat']}`

        let defense = pokemonCard.querySelector('#defense')
        defense.innerHTML = `Defense: ${pokemon.stats[2]['base_stat']}`

        let special_attack = pokemonCard.querySelector('#special_attack')
        special_attack.innerHTML = `Special Attack: ${pokemon.stats[3]['base_stat']}`

        let special_defense = pokemonCard.querySelector('#special_defense')
        special_defense.innerHTML = `Special Defense: ${pokemon.stats[4]['base_stat']}`

        let speed = pokemonCard.querySelector('#speed')
        speed.innerHTML = `Speed: ${pokemon.stats[5]['base_stat']}`


        console.log(hp)
        // pokemonCard.append(h4)
        let pokemonImage = document.querySelector("#pokemon_img")
        pokemonImage.src = pokemon.sprites.front_default
    }
   

    
   dropDown.addEventListener('change', function (event) {
       
        const pokemon = pokemonObjects.find(pokemon => pokemon.name === event.target.value) 
            // if (pokemon.name == event.target.value) {
                
                console.log(pokemon)
                renderStats(pokemon)
                // pokemonCard.querySelector('#healthpoints').remove()
                
                
            //     hpa.innerHTML = `HP: ${pokemon['stats'][0]['base_stat']}`
                
            // }
            
    
    })
})