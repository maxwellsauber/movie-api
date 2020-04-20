const movies = require('../movies')

const getAllMovies = (request, response) => response.send(movies)

const getMoviesByQuery = (request, response) => {
  const { query } = request.params
  const matchingMovies = movies.filter(movie => movie.directors
    .concat(movie.title).join().toLowerCase().includes(query.toLowerCase()))

  return matchingMovies.length
    ? response.send(matchingMovies)
    : response.status(404).send(`No movies found for "${query}"`)
}

const createMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response
      .status(400)
      .send('The following fields are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMoviesByQuery, createMovie }
