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
const { students, houseHeads, hogwarts } = require('./datasets/harryPotter');
const { animals, zoos } = require('./datasets/animals');
const { beyonce } = require('./datasets/beyonce');
const { broncos } = require('./datasets/broncos');
const { careBears } = require('./datasets/careBears');
const { queens } = require('./datasets/queens');


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
    const result = stars.reduce((colors, star) => {
      if(colors[star.color]) {
        colors[star.color].push(star)
      } else {
        colors[star.color] = [star]
      }
      return colors
    }, {});
    return result;
  },
  constellationsStarsExistIn() {
    const sortedStars = stars.sort((a, b) => a.visualMagnitude - b.visualMagnitude)
    const result = sortedStars.map(star => star.constellation).filter(name => name !== "");
    return result;
  }
};

// =================================================================

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {
    const result = characters.reduce((damageTotal, character) => {
      character.weapons.forEach(weapon => {
        damageTotal += weapons[weapon].damage
      })
      return damageTotal
    }, 0);
    return result;
  },

  charactersByTotal() {
    const result = characters.map(character => {
      let damageTotal = character.weapons.reduce((total, weapon) => {
        total += weapons[weapon].damage
        return total
      }, 0)
      let rangeTotal = character.weapons.reduce((total, weapon) => {
        total += weapons[weapon].range
        return total
      }, 0)
      return {[character.name]: {damage: damageTotal, range: rangeTotal}}
    });
    return result;
  },
};

// =================================================================

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    const result = movies.reduce((awesomeDinosObj, movie) => {
      let awesomeDinoCount = movie.dinos.reduce((total, dino) => {
        if(dinosaurs[dino].isAwesome) total++
        return total
      }, 0)
      awesomeDinosObj[movie.title] = awesomeDinoCount
      return awesomeDinosObj
    }, {});
    return result;
  },

  averageAgePerMovie() {
    const result = movies.reduce((avgAgeObj, movie) => {
      let avgAge = movie.cast.reduce((total, person) => {
        total += movie.yearReleased - humans[person].yearBorn
        return total
      }, 0) / movie.cast.length
      if(avgAgeObj[movie.director]) {
        avgAgeObj[movie.director][movie.title] = Math.floor(avgAge)
      } else {
        avgAgeObj[movie.director] = {[movie.title]: Math.floor(avgAge)}
      }
      return avgAgeObj
    }, {});
    return result;
  },

  uncastActors() {
    let fullCastList = movies.reduce((allCast, movie) => {
      movie.cast.forEach(person => {
        if(!allCast.includes(person)) allCast.push(person)
      })
      return allCast
    }, [])
    let unusedActors = Object.keys(humans).filter(human => {
      return !fullCastList.includes(human)
    })
    const result = unusedActors.map(actor => {
      return {name: actor, nationality: humans[actor].nationality, imdbStarMeterRating: humans[actor].imdbStarMeterRating}
    });
    return result;
  },

  actorsAgesInMovies() {
    let fullCastList = movies.reduce((allCast, movie) => {
      movie.cast.forEach(person => {
        if(!allCast.includes(person)) allCast.push(person)
      })
      return allCast
    }, []).map(human => {return {name: human, ages: []}})
    const result = movies.reduce((castAges, movie) => {
      movie.cast.forEach(member => {
        let age = movie.yearReleased - humans[member].yearBorn
        castAges.find(a => a.name === member).ages.push(age)
      })
      return castAges
    }, [...fullCastList]);
    return result;
  }
};

// =================================================================

// IRON FE DATASETS

// =================================================================

// DATASET: animals, zoos from ./datasets/animals
const animalPrompts = {
  findCarnivores() {
    const result = zoos.filter(zoo => zoo.typesAllowed.includes('Carnivore'));
    return result;
  },

  asianAnimals() {
    const result = zoos.filter(zoo => zoo.continents.includes('Asia'));
    return result;
  },

  findHome(name) {
    const result = animals.find(animal => animal.name === name).home;
    return result;
  },

  weighingAnimals(name, total) {
    const result = animals.find(animal => animal.name === name).weight * total;
    return result;
  },

  wolfAcceptingZoos() {
    const result = this.findCarnivores().filter(zoo => zoo.continents.includes('North America'));
    return result;
  },

  heaviestAnimal() {
    const result = animals.sort((a,b) => b.weight - a.weight)[0];
    return result;
  },

  smallestAnimalZoo() {
    const result = zoos.sort((a,b) => a.maxWeight - b.maxWeight)[0];
    return result;
  },

  zooAnimalsAccepted() {
    // create a new object with the zoo name as the key and the animals allowed as the value
    const result = zoos.reduce((acc, zoo) => {
      let animalsAllowed = animals.filter(animal => {
        return zoo.typesAllowed.includes(animal.type) && zoo.continents.includes(animal.home)
      }).map(animal => animal.name)
      if(!acc[zoo.name]) {
        acc[zoo.name] = animalsAllowed
      }
      return acc
    }, {})
    return result;
  }
}

// =================================================================

// DATASET: beyonce from ./datasets/beyonce.js
const beyoncePrompts = {
  beyonceHits() {
    // return an array of all the hits
    const result = beyonce.hits.map(hit => hit.title)
    return result;
  },

  fierceRatings() {
    // create an array with a list of all of Beyonce's fierceness ratings

    const result = beyonce.hits.map(hit => hit.fierceness);
    return result;
  },

  noBodySuit() {
    // give me a song where Beyonce is not wearing a bodysuit

    const result = beyonce.hits.find(hit => !hit.signatureLook.includes("bodysuit"));
    return result;
  },

  bodySuits() {
    // give me all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme

    const result = beyonce.hits.filter(hit => hit.signatureLook.includes("bodysuit") || hit.videoTheme.includes("bodysuit"));
    return result;
  },

  highFierce() {
    // create an array with all of the songs where Beyonce's fierceness is greater than or equal to 8

    const result = beyonce.hits.filter(hit => hit.fierceness >= 8);
    return result;
  },

  whereIsNicki() {
    // find a song where Nicki Minaj is part of the group

    const result = beyonce.hits.find(hit => hit.groupName.includes("Nicki Minaj"));
    return result;
  },

  soloSongs() {
    // create an array with all Beyonce's songs that were not with a group

    const result = beyonce.hits.filter(hit => !hit.group);
    return result;
  },

  post2006Movies() {
    // create an array with all of the movies Beyonce made in 2006 and after

    const result = beyonce.movies.filter(movie => movie.year >= 2006);
    return result;
  },

  groupHitSongs() {
    // find all of the group hit songs

    const result = beyonce.hits.filter(hit => hit.group);
    return result;
  },

  blondeSong() {
    // find a hit song where Beyonce's hair is blonde

    const result = beyonce.hits.find(hit => hit.hair.includes("blonde"));
    return result;
  },

  sorry() {
    // find the hit song sorry

    const result = beyonce.hits.find(hit => hit.title === "sorry");
    return result;
  },

  superFierce() {
    // find all hit songs where Beyonce's fierceness rating is 10

    const result = beyonce.hits.filter(hit => hit.fierceness === 10);
    return result;
  },

  avgFierceness() {
    // get the average fierceness value for all of her hit songs

    const result = beyonce.hits.reduce((acc, hit) => {
      acc += hit.fierceness
      return acc
    }, 0) / beyonce.hits.length
    return result;
  },

  movieRatingSum() {
    // sum up Beyonces rating value for all of her movies

    const result = beyonce.movies.reduce((acc, movie) => {
      acc += movie.rating
      return acc
    }, 0);
    return result;
  },

  movieRatingAvg() {
    // get the average rating value for all of her movies

    const result = beyonce.movies.reduce((acc, movie) => {
      acc += movie.rating
      return acc
    }, 0) / beyonce.movies.length
    return result;
  },

  fierceObject() {
    // create an object where the properties are song names and the value is an object which contains that fierceness

    const result = beyonce.hits.reduce((acc, hit) => {
      acc[hit.title] = hit.fierceness
      return acc
    }, {});
    return result;
  },

  movieRatings() {
    // create an object where the properties are movie names and the value is an object which contains that rating and average rating

    const result = beyonce.movies.reduce((acc, movie) => {
      acc[movie.title] = {rating: movie.rating, averageRating: this.movieRatingAvg()}
      return acc
    }, {});
    return result;
  },

  dancersSum() {
    // sum up the total number of dancers in all of the hit song videos

    const result = beyonce.hits.reduce((acc, hit) => {
      acc += hit.dancers
      return acc
    }, 0);
    return result;
  },

  allHairstyles() {
    // create an array of beyonces hairstyles without repeats

    const result = beyonce.hits.reduce((acc, hit) => {
      hit.hair.forEach(style => {
        if(!acc.includes(style)) acc.push(style)
      })
      return acc
    }, []);
    return result;
  },

  hairstyleTotals() {
    // create an object list with beyonces hairstyles with a tally of each

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
}





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// DATASET: broncos from ./datasets/broncos.js
const broncosPrompts = {
  highestRatedPlayer() {
    // return the name of the player with the highest rating

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  playerNames() {
    // return an array of the names of each player

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  adjustRatings() {
    // decrease injured players rating by 5,
    //decrease questionable players rating by 1,
    //and increase all other players rating by 2

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  offensiveTotal() {
    // return the total number of 'offense' players

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  defensiveTotal() {
    // return the total number of 'defense' players

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  separateTeams() {
    // create an object with the keys 'offense' and 'defense' and let their values equal the total number of players on their respective side.

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  offenseRatings() {
    // create an array of offense players sorted by rating; high-low

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  cornerbackRatings() {
    // create an array of cornerbacks, 'CB', sorted by rating; high-low

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  injuredPlayers() {
    // create an array of players on 'injured' status

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  questionablePlayers() {
    // create an array of players on 'questionable' status

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  activePlayers() {
    // return the length of broncos players that are not on 'injured' or 'questionable' status

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
}





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// DATASET: careBears from ./datasets/carebears.js
const careBearPrompts = {
  getBear() {
    // I love my Care Bears but I have collected too many.
    // Help me find my favorite ones by creating a getBear function
    // that returns an array of bear objects contain the search.

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  collectionTotals() {
    // Create an object with a tally of how many bears belong to each collection

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  organizedBears() {
    // Create an alphabetized array of Care Bear names

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  search() {
    // Create a more flexible searching function that takes in 2 arguements, a key and the query.
    // This should allow you to search through any key in the bear object

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  getAppearanceCount() {
    // Collect all the Care Bears by their appearanceCount number.

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
}





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// DATASET: queens from ./datasets/queens.js
const queenPrompts = {
  sortQueenNames() {
    // Write a function that returns an array of queen names in alphabetical order.

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  findMissCon() {
    // Write a fuction that returns the name of Miss Congeniality

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  generateStringById(id) {
    // Write a fuction that takes in an id and returns
    // the string "[Queen's Name] placed
    // [fifth, eleventh, ect...] in Season [Season number]
    // of RuPaul's Drag Race."

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  getQueenQuotes() {
    // 4. Write a function that returns an an object where the keys are first names of each queen and the value is their quote. ie:
    // { Alaska: "Alaksa's Quote",
    //   Roxxy: "Roxxy's Quote",
    //   Detox: "Detox's Quote"}

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  getTopThreeQueens() {
    // 5. Write a functions that returns an object of the top three finishers ie:
    // { firstPlace: name,
    // secondPlace: name,
    // thirdPlace: name }
    // Extension: Make sure the object is in that exact order

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
}





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// DATASET: harryPotter from ./datasets/harryPotter.js
const harryPotterPrompts = {
  filterHouseHead() {
    // Create a function where you can put the name of a house head
    // and get back the student objects that in that house

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  filterHouseStudents() {
    //Can you make the array send back only the names of the students?

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  housePoints() {
    //How many house points have been added to the house cups overall?

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  ravenclawPoints() {
    //How many house points have the Ravenclaw folks added to their cup?

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  kickOutSlytherins() {
    //For all students excpet the Slytherins, add a property called 'currentlyAttending' with a value of true. For Slytherins, add make it false

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  missingStudents() {
    //Check to see if any students are missing from class

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  sortQueenNames() {
    //Dumbledore just defeated Grindelwald and obtained the elder wand! Create an array of all his wands

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  sortQueenNames() {
    //Which one of Dumbledore's family members are alive? RETURN JUST THE NAME, not an array of object

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  sortQueenNames() {
    //Which of them are dead? RETURN JUST THE NAMES, not an array of objects

    const result = 'REPLACE WITH YOUR RESULT HERE'
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
}


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
  dinosaurPrompts,
  animalPrompts,
  beyoncePrompts,
  broncosPrompts,
  careBearPrompts,
  queenPrompts,
  harryPotterPrompts
};
