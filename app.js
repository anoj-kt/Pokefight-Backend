const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const pokemonRoutes = require('./routes/PokemonRoutes');
const mongoose = require('mongoose');
const PokemonList = require('./models/PokemonDatabase'); 

app.use(cors({
    origin: '*'
}))

const dbURI = 'mongodb+srv://Pokefighters:Pokefighters1@pokefight.ziwnlry.mongodb.net/Pokemon?retryWrites=true&w=majority';  
mongoose.connect(dbURI)
.then((result) => app.listen(port, () => console.log('Connected to DB')))
.catch((err) => console.log('DB connection error: ' + err))

app.use('/', pokemonRoutes);

app.use((req, res) => {
    res.status(404).send('404');
})

