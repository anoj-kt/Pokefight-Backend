const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const pokemonRoutes = require('./routes/PokemonRoutes')

app.use(cors({
    origin: '*'
}))

app.use('/', pokemonRoutes);

app.use((req, res) => {
    res.status(404).send('404');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})