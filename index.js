let listA = document.querySelector("#pokemon-a-dropdown")
let listB = document.querySelector("#pokemon-b-dropdown")
let pokemonAImage = document.querySelector("#pokemon-a-img")
let pokemonBImage = document.querySelector("#pokemon-b-img")


    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
    .then(res => res.json())
    .then(data => renderPokemonLists(data))

    function createOnePokemon(URL) {
        let optionA = document.createElement('option')
        let optionB = document.createElement('option')
        
        fetch(URL).then(res => res.json()).then(function (data) {
            optionA.innerHTML = data.name
            optionB.innerHTML = data.name
            listA.append(optionA)
            listB.append(optionB)
            console.log(optionA)
        } )
    }


    function renderPokemonLists(data) {
        
        let pokemons = data["results"]

        for (const pokemon of pokemons) {
            createOnePokemon(pokemon.url)
        }
        let currentPokemon = fetch('https://pokeapi.co/api/v2/pokemon/101/').then(res => res.json()).then(data => console.log(data))

        console.log(currentPokemon)
        // pokemonAImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
        // pokemonBImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
        // let index = 0
        // for (const pokemon of pokemons) {
            
        //     let optionA = document.createElement('option')
        //     optionA.id = index
        //     optionA.innerHTML = pokemon.name
            
        //     let currentPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${optionA.id+1}`).then(res => res.json()).then(data => console.log(data))
        //     console.log(currentPokemon)
            
        //     listA.append(optionA)
            
        //     index++

            
        
            
            

        //     let optionB = document.createElement('option')
        //     optionB.innerHTML = pokemon.name
        //     listB.append(optionB)
            
            
        // }
    }

    listA.addEventListener('change', function (event) {
        console.log(event.target)
    })
   

    listB.addEventListener('change', function (event) {
        console.log(event.target.value)
    })

    // function renderPokemon(pokemon) {
    //     let img= document.querySelector("#pokemon-a-img")
        
    //     img.src = (pokemon['sprites']['back_default'])
    //     console.log(img)
    //     // document.querySelector("#pokemon-a-img").src = (pokemon['sprites']['back_default:'])
    // }
    