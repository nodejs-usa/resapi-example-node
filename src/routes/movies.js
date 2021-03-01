const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

router.get('/', (req,res) =>{
    console.log("GET");
    res.json(movies);
});

// Create
router.post('/', (req,res) =>{
    const { titulo, director, year, raiting  } = req.body;
    if ( titulo && director && year && raiting ) {
        const id = movies.length + 1
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({ error: 'There was an error.'  });
    }
});


router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if ( movie.id == id ) {
            movies.splice(i, 1);
        }
    })
    res.send(movies);
});


router.put('/:id', (req, res) =>{
    const { id } = req.params;
    const { titulo, director, year, raiting  } = req.body;

    if ( titulo && director && year && raiting ) {
        _.each(movies, (movie, i) => {
            if ( movie.id == id ) {
                movie.titulo = titulo;
                movie.director = director;
                movie.year = year;
                movie.raiting = raiting;
            }
        })
        res.send(movies);
    } else {
        res.status(500).json({ error: 'There was an error.'  });
    }
});

module.exports = router;