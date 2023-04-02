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
    const sum = moviesArray.reduce((sum, movie) => {
      let score;
      if (movie.score) {
        score = movie.score;
      } else {
        score = 0;
      }
      return sum + score;
    }, 0);
    const avg = sum / moviesArray.length;
    const factor = Math.pow(10, 2);
    const roundedAvg = Math.round(avg * factor) / factor;
    return roundedAvg;
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movies) => movies.genre.includes("Drama") === true
  );

  if (dramaMovies.length !== 0) {
    const sumOfDramaMovies = dramaMovies.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.score;
    }, 0);

    const averageScore = sumOfDramaMovies / dramaMovies.length;
    const factor = Math.pow(10, 2);
    const roundedAvg = Math.round(averageScore * factor) / factor;

    return roundedAvg;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// compare
function orderByYear(moviesArray) {
  const clonedArray = Array.from(moviesArray);
  const compare = (a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.year === b.year || a.title > b.title) return -1;
    if (a.year === b.year || a.title < b.title) return 1;
  };
  return clonedArray.sort(compare);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const clonedArray = Array.from(moviesArray);
  const compare = (a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    if (a.title === b.title) return 0;
  };
  const alphebeticallyOrdered = clonedArray
    .sort(compare)
    .map((movie) => movie.title);
  if (alphebeticallyOrdered.length < 20) {
    return alphebeticallyOrdered;
  } else if (alphebeticallyOrdered.length >= 20) {
    return alphebeticallyOrdered.slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //clone array
  //get access to the duration properties
  //transform the value 2h 22m into 2*60 + 22 = 142 minutes.
  // first using filter to get to: const captializedCities = cities.map(city => city[0].toUpperCase() + city.slice(1));

  const clonedArray = Array.from(moviesArray);

  const durationMinutes = clonedArray.map((movie) => {
    const totalString = movie.duration.split(" ");
    const hours = Number(
      totalString[0]?.substring(0, totalString[0].length - 1)
    );
    const minutes = Number(
      totalString[1]?.substring(0, totalString[1].length - 3)
    );
    const totalMinutes = 60 * hours + minutes;
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: totalMinutes,
      genre: movie.genre,
      score: movie.score,
    };
  });

  return durationMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const clonedArray = Array.from(moviesArray);
  if (clonedArray.length === 0) {
    return null;
  } else {
    //Create a new array "groupByYear" that groups the original array using year and the expected output will be:
    //const groupByYear = [{year:1929, items:[{year: 1929, rating:3},{year: 1929, rating:3}]},{}];
    //With groupByYear array, use reduce to calculate the sum of each year and create a new array "groupByYearTotalRatings": with year and the sum
    //Create a new array "groupByYearAvgRating" that contain the year with average rating.
    const groupedByYear = clonedArray.reduce((accu, movie) => {
      accu[movie.year] = accu[movie.year] || [];
      accu[movie.year].push(movie);
      return accu;
    }, {});

    const clustered = Object.entries(groupedByYear).map(([year, movies]) => ({
      year,
      movies,
    }));

  }
  return clustered
}
