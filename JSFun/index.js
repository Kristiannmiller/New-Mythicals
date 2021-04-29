const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// SINGLE DATASETS

// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    const result = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name);
    return result;
  },

  sortByAge() {
    const result = kitties.sort((a, b) => b.age - a.age);
    return result;
  },

  growUp() {
    kitties.forEach(kitty => kitty.age = kitty.age + 2)
    const result = kitties;
    return result;
  }
};

// =================================================================

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    return clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        if(!acc[member]) {
          acc[member] = [club.club]
        } else {
          acc[member].push(club.club)
        }
      })
      return acc
    }, {})
  }
};

// =================================================================

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    const result = mods.map(course => {
      return {mod: course.mod, studentsPerInstructor: Math.round(course.students / course.instructors)}
    });
    return result;
  }
};

// =================================================================

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    const result = cakes.map(cake => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock}
    });
    return result;
  },

  onlyInStock() {
    const result = cakes.filter(cake => cake.inStock > 0);
    return result;
  },

  totalInventory() {
    const result = cakes.reduce((total, cake) => {
      total += cake.inStock
      return total
    }, 0);
    return result;
  },

  allToppings() {
    const result = cakes.reduce((toppings, cake) => {
      cake.toppings.forEach(topping => {
        if(!toppings.includes(topping)) {
          toppings.push(topping)
        }
      })
      return toppings
    }, []);
    return result;
  },

  groceryList() {
    const result = cakes.reduce((list, cake) => {
      cake.toppings.forEach(topping => {
        if(list[topping]) {
          list[topping]++
        } else {
          list[topping] = 1
        }
      })
      return list
    }, {});
    return result;
  }
};

// =================================================================

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    const result = classrooms.filter(room => {
      return room.program === 'FE'
    });
    return result;
  },

  totalCapacities() {
    const result = classrooms.reduce((capacities, room) => {
      room.program === 'FE' ? capacities.feCapacity += room.capacity : capacities.beCapacity += room.capacity
      return capacities
    }, {feCapacity: 0, beCapacity: 0});
    return result;
  },

  sortByCapacity() {
    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;
  }
};

// =================================================================

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    const scaryFilter = books.filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime')
    const result = scaryFilter.map(book => book.title)
    return result;
  },
  getNewBooks() {
    const millenialBooks = books.filter(book => {
      return book.published > 1989 && book.published < 2010
    })
    const result = millenialBooks.map(book => {
      return {title: book.title, year: book.published}
    });
    return result;
  }
};

// =================================================================

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    const result = weather.reduce((avgs, curr) => {
      let avg = (curr.temperature.high + curr.temperature.low) / 2
      avgs.push(avg)
      return avgs
    }, []);
    return result;
  },
  findSunnySpots() {
    const result = weather.reduce((sunnyPhrases, place) => {
      if(place.type === 'sunny' || place.type === 'mostly sunny') {
        sunnyPhrases.push(`${place.location} is ${place.type}.`)
      }
      return sunnyPhrases
    }, []);
    return result;
  },
  findHighestHumidity() {
    const result = weather.sort((a, b) => b.humidity - a.humidity)[0];
    return result;
  }
};

// =================================================================

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    const result = nationalParks.reduce((parkStatus, park) => {
      park.visited ? parkStatus.parksVisited.push(park.name) : parkStatus.parksToVisit.push(park.name)
      return parkStatus
    }, {parksToVisit: [], parksVisited: []});
    return result;
  },
  getParkInEachState() {
    const result = nationalParks.reduce((stateParks, park) => {
      stateParks.push({[park.location]: park.name})
      return stateParks
    }, []);
    return result;
  },
  getParkActivities() {
    const result = nationalParks.reduce((activities, park) => {
      park.activities.forEach(activity => {
        if(!activities.includes(activity)) {
          activities.push(activity)
        }
      })
      return activities
    }, []);
    return result;
  }
};


// =================================================================

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    const result = breweries.reduce((totalBeers, brewery) => {
      totalBeers += brewery.beers.length
      return totalBeers
    }, 0);
    return result;
  },
  getBreweryBeerCount() {
    const result = breweries.reduce((beerCount, brewery) => {
      beerCount.push({name: brewery.name, beerCount: brewery.beers.length})
      return beerCount
    }, []);
    return result;
  },
  findHighestAbvBeer() {
    const beers = breweries.reduce((allBeers, brewery) => {
      brewery.beers.forEach(beer => allBeers.push(beer))
      return allBeers
    }, [])
    const result = beers.sort((a, b) => b.abv - a.abv)[0];
    return result;
  }
};

// =================================================================

// DOUBLE DATASETS

// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    const result = instructors.map(instructor => {
      const instructorStudentCount = {name: instructor.name, studentCount: 0}
      instructorStudentCount.studentCount = cohorts.find(cohort => cohort.module === instructor.module).studentCount
      return instructorStudentCount
    });
    return result;
  },
  studentsPerInstructor() {
    const result = cohorts.reduce((stats, cohort) => {
      const cohortTitle = `cohort${cohort.cohort}`
      const totalInstructors = instructors.filter(instructor => instructor.module === cohort.module).length
      stats[cohortTitle] = cohort.studentCount / totalInstructors
      return stats
    }, {})
    return result;
  },
  modulesPerTeacher() {
    const result = instructors.reduce((mods, teacher) => {
      const teachableMods = []
      teacher.teaches.forEach(subject => {
        cohorts.forEach(cohort => {
          if(cohort.curriculum.includes(subject) && !teachableMods.includes(cohort.module)) {
            teachableMods.push(cohort.module)
          }
        })
        mods[teacher.name] = teachableMods.sort()
      })
      return mods
    }, {});
    return result;
  },
  curriculumPerTeacher() {
    const result = instructors.reduce((subjects, teacher) => {
      teacher.teaches.forEach(subject => {
        if(subjects[subject]) {
          subjects[subject].push(teacher.name)
        } else {
          subjects[subject] = [teacher.name]
        }
      })
      return subjects
    }, {});
    return result;
  }
};

// =================================================================

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    const bossNames = Object.keys(bosses)
    const result = bossNames.map(boss => {
      let name = boss.charAt(0).toUpperCase() + boss.slice(1)
      let loyaltyTotal = bosses[boss].sidekicks.reduce((total, sidekick) => {
        let loyalty = sidekicks.find(char => char.name === sidekick.name).loyaltyToBoss
        total += loyalty
        return total
      }, 0)
      return {bossName: name, sidekickLoyalty: loyaltyTotal}
    })
    return result;
  }
};

// =================================================================

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {

  starsInConstellations() {
    const constellationNames = Object.keys(constellations)
    const result = stars.filter(star => {
      let included = false
      constellationNames.forEach(constellation => {
        if(constellations[constellation].stars.includes(star.name)) {
          included = true
        }
      })
      return included
    });
    return result;
  },
  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((colors, star) => {
      if(colors[star.color]) {
        colors[star.color].push(star)
      } else {
        colors[star.color] = [star]
      }
      return colors
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.
    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.
    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
