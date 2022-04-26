
    fetch('https://pokeapi.co/api/v2/pokemon/35')
    .then(res => res.json())
    .then(data => console.log(data))
    