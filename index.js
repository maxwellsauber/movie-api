const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMoviesByQuery, createMovie } = require('./controllers/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:query', getMoviesByQuery)

app.post('/movies', bodyParser.json(), createMovie)

app.all('*', (request, response) => response.status(404).send('Page Not Found'))

app.listen(1332, () => {
  console.log('Listening on port 1332...') // eslint-disable-line no-console
})
