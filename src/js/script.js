"use strict";

const numberOfFilms = +prompt("how many films you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Last film what did you watch?", "");
const b = +prompt("What rate will you give it?", "");

const c = prompt("Last film what did you watch?", "");
const d = +prompt("What rate will you give it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
