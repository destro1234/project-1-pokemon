
document.addEventListener('DOMContentLoaded', function () {
    
const dropDown = document.createElement('select')   
let pokemonObjects = []
let pokemonCard = document.querySelector("#pokemon-card")
let statsCard = document.createElement("ul")


const addButton = document.createElement('button')
const pokemonTeam = []
const team = document.querySelector('#pokemon-team')




    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150')
    .then(res => res.json())
    .then(function (data) {
        getAllPokemon(data)
    })

    function getAllPokemon(data) {
        const pokemons = data['results']
        for (const pokemon of pokemons) {
            fetch(pokemon.url)
            .then(res => res.json())
            .then(function (data) {
                createOptions(data)
                pokemonObjects.push(data)
                renderStats(pokemonObjects[0])
            })
        }
        
    }

     function createOptions(data) {
        const option = document.createElement('option')
        option.innerHTML = data.name[0].toUpperCase() + data.name.slice(1)
        dropDown.append(option)
    }
    
    createPokemonDropdown()
    

    function createPokemonDropdown() {
        const container = document.querySelector("#dropDown_List");
        const div = document.createElement('div');
        div.id = "pokemon-card"
        
        let h4 = document.createElement('h4')
        h4.innerHTML = "Choose a Pokemon:"
        
        div.append(h4, dropDown)

       
        const linebreak = document.createElement('br')
        div.append(linebreak)
        
        console.log(pokemonObjects)
        
        let img = document.createElement('img')
        img.id = "pokemon_img"
        
        addButton.id = "addButton"
        addButton.innerHTML = "Add to Team!"
        

        let pokemonName = document.createElement('h4')
        pokemonName.id = "pokemonName"
        
        let hp = document.createElement('li')
        hp.id = "healthpoints"

        let attack = document.createElement('li')
        attack.id = 'attack'

        let defense = document.createElement('li')
        defense.id = 'defense'

        let special_attack = document.createElement('li')
        special_attack.id = 'special_attack'

        let special_defense = document.createElement('li')
        special_defense.id = 'special_defense'

        let speed = document.createElement('li')
        speed.id = 'speed'

        statsCard.id = 'stats-card'
        statsCard.append(img, pokemonName, hp, attack, defense, special_attack, special_defense, speed)
        div.append(statsCard)

        div.append(linebreak)
        div.append(addButton)
        container.append(div)
    
        
    }

   
    
    function renderStats(pokemon) {
        pokemonCard = document.querySelector("#pokemon-card")

        let pokemonName = document.querySelector('#pokemonName')
        pokemonName.innerHTML = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

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
        
        let pokemonImage = document.querySelector("#pokemon_img")
        pokemonImage.src = pokemon.sprites.front_default
        console.log(pokemon.sprites)
    }

    

    function renderPokemon(pokemon) {

            const div = document.createElement('div')
            div.id = "pokemon"
            div.innerHTML = 
            `
            
            <h4 id="name"> ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </h4>
            <h4 id="nickname"></h4>
            <img id= "pokemon_team_img" src=${pokemon.sprites.front_default} alt="image goes here">

            <figcaption>HP: ${pokemon.stats[0]['base_stat']}/ Attack: ${pokemon.stats[1]['base_stat']}</figcaption>

            <label for="pokemon-moves"> Moves List: </label>
            <ol id="pokemon-moves"> 
                <li>${pokemon.moves[0].move.name}</li>
                <li>${pokemon.moves[1].move.name}</li>
                <li>${pokemon.moves[2].move.name}</li>
                <li>${pokemon.moves[3].move.name}</li>
            </ol>


            <form id="pokemon-nickname">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Give your ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} nickname!</label>
                    <input type="text" id="nickname" class="form-control">
                
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br>
            

            <button id="remove" >Remove!</button>
            `
            team.append(div)

            const form = div.querySelector("#pokemon-nickname")
            form.addEventListener('submit', function (event) {
                event.preventDefault()
                const nicknameDiv = div.querySelector("#nickname")
                nicknameDiv.innerHTML = event.target.nickname.value

                
    
            })
            
            div.querySelector('#remove').addEventListener('click', function (event) {

                event.target.parentNode.parentNode.parentNode.remove()
                
                pokemonTeam.pop()

                
            })
            
        }


   

    
   dropDown.addEventListener('change', function (event) {
       
        const pokemon = pokemonObjects.find(pokemon => pokemon.name === event.target.value.toLowerCase()) 
                renderStats(pokemon)
            })

    
    addButton.addEventListener('click', function () {
        if (pokemonTeam.length < 6) {
        const option = dropDown.options[dropDown.selectedIndex].value
        const pokemon = pokemonObjects.find(pokemon => pokemon.name === option.toLowerCase())
        pokemonTeam.push(pokemon)
        renderPokemon(pokemon)
        }
    })
})