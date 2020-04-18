const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMoviesByQuery = (request, response) => {
  const { query } = request.params
  const matchingTitles = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))

  if (matchingTitles.length > 0) return response.send(matchingTitles)

  const matchingDirectors = movies.filter(movie => movie.directors.join().toLowerCase().includes(query.toLowerCase()))

  if (matchingDirectors.length > 0) return response.send(matchingDirectors)

  else return response.status(404).send('No Matching Movies Found')
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
