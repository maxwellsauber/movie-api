const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMoviesByQuery, createMovie } = require('./controllers/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:query', getMoviesByQuery)

app.post('/movies', bodyParser.json(), createMovie)

app.listen(1338, () => {
  console.log('Listening on port 1338...') // eslint-disable-line no-console
})
