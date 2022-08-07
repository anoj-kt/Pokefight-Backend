const express = require('express')
const app = express()
const port = 3000
const pokemonJson = require('./pokemon.json')

app.get('/', (req, res) => {
    res.send('use /pokemon to access all pokemons')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemonJson)
})

app.get('/pokemon/:id', (req, res) => {
    let pokeId = req.params.id;

    if(pokeId > pokemonJson.length) {
        res.status(404).send('404');
    }

    pokemonJson.map(x => {
        if(x.id == pokeId){
            res.send(x);
        } 
    })
})

app.get('/pokemon/:id/:info', (req, res) => {
    let pokeId = req.params.id;
    let info = req.params.info;

    pokemonJson.map(x => {
        if(x.id == pokeId){
            res.send(x[info]);
        }
    })
})

app.use((req, res) => {
    res.status(404).send('404');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})