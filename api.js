const express = require('express');
const CORS = require('cors');

const app = express();

app.use(express.json());
app.use(CORS());

const movies = [
  {
    id: 1,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    metascore: 100,
    stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
  },
  {
    id: 2,
    title: 'Star Wars',
    director: 'George Lucas',
    metascore: 92,
    stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
  },
  {
    id: 3,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    metascore: 92,
    stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
  },
  {
    id: 4,
    title: 'Terminator 2: Judgement Day',
    director: 'James Cameron',
    metascore: 94,
    stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
  },
  {
    id: 5,
    title: 'Dumb and Dumber',
    director: 'The Farely Brothers',
    metascore: 76,
    stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
  },
  {
    id: 6,
    title: 'Tombstone',
    director: 'George P. Cosmatos',
    metascore: 89,
    stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
  },
];

app.get('/api/movies', (req, res) => {
  res.status(200).json(movies.map(({ id, title, director, metascore, stars }) => ({ id, title, director, metascore, stars })));
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(movie => movie.id.toString() === req.params.id);
  res.status(200).json(movie);
});

app.post('/api/movies', (req, res) => {
  if (req.body.id !== undefined) movies.push(req.body);
  res.status(201).json(movies);
});

app.listen(5001, () => {
  console.log('Server listening on port 5001');
});
