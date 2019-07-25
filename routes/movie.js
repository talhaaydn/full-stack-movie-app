const routes = require('express').Router();
const Movies = require('../models').Movies;

/* Get all movies */
routes.get('/movies', (req, res) => {
    Movies.findAll({})
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

/* GET one movie */
routes.get('/movies/:id', (req, res) => {
    Movies.findOne({ where: { id: req.params.id } })
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

/* Create new movie */
routes.post('/movies', (req, res) => {
    const newMovie = {
        title: req.body.title,
        cover: req.body.cover
    }

    Movies.create(newMovie)
        .then(() => res.json({ message: 'Movie succesfully created.' }))
        .catch(err => res.json(err));
});

/* Update a movie */
routes.put('/movies/:id', (req, res) => {
    const updateMovie = {
        title: req.body.title,
        cover: req.body.cover
    }

    const movieQuery = {
        where: { id: req.params.id }
    }

    Movies.update(updateMovie, movieQuery)
        .then(() => res.json({ message: 'Movie succesfully updated.' }))
        .catch(err => res.json(err));
});

/* Delete a movie */
routes.delete('/movies/:id', (req, res) => {
    const movieQuery = {
        where: { id: req.params.id }
    }

    Movies.destroy(movieQuery)
        .then(() => res.json({ message: 'Movie succesfully deleted.' }))
        .catch(err => res.json(err));
});

module.exports = routes;