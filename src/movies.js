// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map(
    (nameOfDirector) => nameOfDirector.director
  );
  return allDirectors;
}

//Bonus 1
function getUniqueDirectors(moviesArray) {
  const uniqueDirectors = [];
  for (let i = 0; i < getAllDirectors(moviesArray).length; i++) {
    if (uniqueDirectors.includes(getAllDirectors(moviesArray)[i]) === false) {
      uniqueDirectors.push(getAllDirectors(moviesArray)[i]);
    }
  }
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const allMovies = moviesArray.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
  let amountofDramamovies = allMovies.length;
  return amountofDramamovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length !== 0) {
    const sum = moviesArray.reduce((sum, movie) => sum + movie.score, 0);
    const avg = sum / moviesArray.length;
    const factor = Math.pow(10, 2);
    const roundedAvg = Math.round(avg * factor) / factor;
    return roundedAvg;
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
