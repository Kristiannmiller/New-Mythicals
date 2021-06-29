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
const { murder } = require('./datasets/murder');
const { marvelComics, marvelMovies } = require('./datasets/marvel');
const { players, toons } = require('./datasets/strongBad');
const { restaurants } = require('./datasets/restaurants');
const { fourteeners } = require('./datasets/fourteeners');
const { artists, ticketPrice, crowd } = require('./datasets/concerts');
const { charactersDD, weaponsDD } = require('./datasets/DandD');
const { denver } = require('./datasets/denver');
const { url } = require('./datasets/fakeUrl');
const { philosophers } = require('./datasets/philosophers');
const { showData } = require('./datasets/phish');
const { smashCharacters } = require('./datasets/smash');


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

    const result = beyonce.hits.reduce((acc, hit) => {
      hit.hair.forEach(style => {
        acc[style] ? acc[style]++ : acc[style] = 1
      })
      return acc
    }, {});
    return result;
  },
}

// =================================================================

// DATASET: broncos from ./datasets/broncos.js
const broncosPrompts = {
  highestRatedPlayer() {
    // return the name of the player with the highest rating

    const result = broncos.sort((a, b) => b.rating - a.rating)[0].name
    return result;
  },

  playerNames() {
    // return an array of the names of each player

    const result = broncos.map(player => player.name)
    return result;
  },
  adjustRatings() {
    // decrease injured players rating by 5,
    //decrease questionable players rating by 1,
    //and increase all other players rating by 2
    const result = broncos.forEach(player => {
      if(player.status === 'injured') {
        player.rating -= 5
      } else if(player.status === 'questionable') {
        player.rating -= 1
      } else {
        player.rating += 2
      }
    })
  },

  offensiveTotal() {
    // return the total number of 'offense' players

    const result = broncos.reduce((acc, player) => {
      if(player.side === 'offense') acc++
      return acc
    }, 0)
    return result;
  },

  defensiveTotal() {
    // return the total number of 'defense' players

    const result = broncos.reduce((acc, player) => {
      if(player.side === 'defense') acc++
      return acc
    }, 0)
    return result;
  },

  separateTeams() {
    // create an object with the keys 'offense' and 'defense' and let their values equal the total number of players on their respective side.

    const result = broncos.reduce((acc, player) => {
      player.side === 'offense' ? acc.offense.push(player.name) : acc.defense.push(player.name)
      return acc
    }, {offense: [], defense: []})
    return result;
  },

  offenseRatings() {
    // create an array of offense players sorted by rating; high-low

    const result = broncos.filter(player => player.side === 'offense').sort((a,b) => b.rating - a.rating)
    return result;
  },

  cornerbackRatings() {
    // create an array of cornerbacks, 'CB', sorted by rating; high-low

    const result = broncos.filter(player => player.pos === 'CB').sort((a,b) => b.rating - a.rating)
    return result;
  },
  injuredPlayers() {
    // create an array of players on 'injured' status

    const result = broncos.filter(player => player.status === 'injured')
    return result;
  },
  questionablePlayers() {
    // create an array of players on 'questionable' status

    const result = broncos.filter(player => player.status === 'questionable')
    return result;
  },
  activePlayers() {
    // return the length of broncos players that are not on 'injured' or 'questionable' status

    const result = broncos.filter(player => player.status === 'active')
    return result;
  },
}

// =================================================================

// DATASET: careBears from ./datasets/carebears.js
const careBearPrompts = {
  getBear(search) {
    // I love my Care Bears but I have collected too many.
    // Help me find my favorite ones by creating a getBear function
    // that returns an array of bear objects contain the search.

    const result = careBears.bears.filter(bear => bear.name.includes(search))
    return result;
  },

  collectionTotals() {
    // Create an object with a tally of how many bears belong to each collection

    const result = careBears.bears.reduce((collections, bear) => {
      collections[bear.collection] ? collections[bear.collection]++ : collections[bear.collection] = 1
      return collections
    }, {});
    return result;
  },

  organizedBears() {
    // Create an alphabetized array of Care Bear names

    const result = careBears.bears.map(bear => bear.name)
    return result.sort();
  },
  search(key, value) {
    // Create a more flexible searching function that takes in 2 arguements, a key and the query.
    // This should allow you to search through any key in the bear object

    const result = careBears.bears.filter(bear => {
      return bear[key].includes(value)
    })
    return result;
  },
  getAppearanceCount() {
    // Collect all the Care Bears by their appearanceCount number.

    const result = careBears.bears.reduce((appearances, bear) => {
      appearances[bear.appearanceCount] ? appearances[bear.appearanceCount].push(bear.name) : appearances[bear.appearanceCount] = [bear.name]
      return appearances
    }, {})
    return result;
  },
}

// =================================================================

// DATASET: queens from ./datasets/queens.js
const queenPrompts = {
  sortQueenNames() {
    // Write a function that returns an array of queen names in alphabetical order.

    const result = queens.map(queen => queen.name).sort()
    return result;
  },
  findMissCon() {
    // Write a fuction that returns the name of Miss Congeniality

    const result = queens.find(queen => queen.missCongeniality).name
    return result;
  },
  generateStringById(id) {
    // Write a fuction that takes in an id and returns
    // the string "[Queen's Name] placed
    // [fifth, eleventh, ect...] in Season [Season number]
    // of RuPaul's Drag Race."
    const numbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth', 'eleventh', 'twelveth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth']
    const result = queens.find(queen => queen.id === id)
    return `${result.name} placed ${numbers[result.seasons[0].place - 1]} in Season ${result.seasons[0].seasonNumber} of RuPaul's Drag Race.`
  },
  getQueenQuotes() {
    // 4. Write a function that returns an an object where the keys are first names of each queen and the value is their quote. ie:
    // { Alaska: "Alaksa's Quote",
    //   Roxxy: "Roxxy's Quote",
    //   Detox: "Detox's Quote"}

    const result = queens.reduce((acc, queen) => {
      acc[queen.name] = queen.quote
      return acc
    }, {})
    return result;
  },
  getTopThreeQueens() {
    // 5. Write a functions that returns an object of the top three finishers ie:
    // { firstPlace: name,
    // secondPlace: name,
    // thirdPlace: name }
    // Extension: Make sure the object is in that exact order

    const result = queens.reduce((topThree, queen) => {
      if(queen.seasons[0].place === 1) topThree.firstPlace = queen.name
      if(queen.seasons[0].place === 2) topThree.secondPlace = queen.name
      if(queen.seasons[0].place === 3) topThree.thirdPlace = queen.name
      return topThree
    }, {thirdPlace: "", firstPlace:"", secondPlace:""})
    return result;
  },
}

// =================================================================

// DATASET: harryPotter from ./datasets/harryPotter.js
const harryPotterPrompts = {
  filterHouseHead(houseHead) {
    // Create a function where you can put the name of a house head
    // and get back the student objects that in that house

    const result = students.filter(student => student.house === houseHeads[houseHead])
    return result;
  },
  filterHouseStudents(houseHead) {
    //Can you make the array send back only the names of the students?

    const result = students.filter(student => student.house === houseHeads[houseHead])
    return result.map(student => student.name);
  },
  housePoints() {
    //How many house points have been added to the house cups overall?

    const result = students.reduce((acc, student) => {
      acc += student.pointsForHouse
      return acc
    }, 0)
    return result;
  },
  ravenclawPoints() {
    //How many house points have the Ravenclaw folks added to their cup?

    const result = students.reduce((acc, student) => {
      if(student.house === 'Ravenclaw') acc += student.pointsForHouse
      return acc
    }, 0)
    return result;
  },
  kickOutSlytherins() {
    //For all students excpet the Slytherins, add a property called 'currentlyAttending' with a value of true. For Slytherins, add make it false
    students.forEach(student => {
      student.house === 'Slytherin' ? student.currentlyAttending = false : student.currentlyAttending = true
    })
  },
  missingStudents() {
    //Check to see if any students are missing from class

    const result = students.filter(student => !student.currentlyAttending)
    return result;
  },
  dumbledorWands() {
    //Dumbledore just defeated Grindelwald and obtained the elder wand! Create an array of all his wands

    hogwarts.currentHeadmaster.wand = [hogwarts.currentHeadmaster.wand, 'Elder Wand']
  },
  dumbledoreLivingFamily() {
    //Which one of Dumbledore's family members are alive? RETURN JUST THE NAME, not an array of object

    const result = hogwarts.currentHeadmaster.family.find(person => person.alive)
    const relationship = Object.keys(result)[0]
    return result[relationship];
  },
  dumbledoreDeadFamily() {
    //Which of them are dead? RETURN JUST THE NAMES, not an array of objects

    const deceased = hogwarts.currentHeadmaster.family.filter(person => !person.alive)
    const relationship = deceased.map(person => Object.keys(person)[0])
    const result = deceased.map((person, index) => person[relationship[index]])
    return result;
  },
}

// =================================================================

// DATASET: marvelComics and marvelMovies from ./datasets/marvel.js
const marvelPrompts = {
  preMilleniumComics() {
    // return a list of comics that were written before 2000
    const comics = Object.keys(marvelComics)
    const titles = comics.map(comic => marvelComics[comic].title)
    const result = titles.filter((title, i) => {
       return marvelComics[comics[i]].publishDate < 2000
    });
    return result;
  },
  stanComics() {
    // return a list of comics that were edited by stan Lee
    const comics = Object.keys(marvelComics)
    const hasEditors = comics.filter(comic => marvelComics[comic].editors)
    const result = hasEditors.filter(comic => marvelComics[comic].editors.includes('Stan Lee'))
    return result;
  },
  adaptedMovies() {
    // return a list of movies that were adapted

    const movies = Object.keys(marvelMovies)
    const result = movies.map(movie => marvelMovies[movie].title)
    return result;
  },
  captainMedia() {
    //return an array of comics and an array of movies (concated) that feature captain America
    const captainMovTitles = Object.keys(marvelMovies).filter(movie => marvelMovies[movie].characters.includes('Captain America'))
    const captainComTitles = Object.keys(marvelComics).filter(comic => marvelComics[comic].characters.includes('Captain America'))
    const captainMovies = captainMovTitles.map(movie => marvelMovies[movie])
    const captainComics = captainComTitles.map(comic => marvelComics[comic])
    const result = [...captainMovies, ...captainComics]
    return result;
  },
  ratedRMovies() {
    // return a list of movies with an R rating
    const innapropriateMovies = Object.keys(marvelMovies).filter(movie => marvelMovies[movie].rating === 'R')
    const result = innapropriateMovies.map(movie => marvelMovies[movie].title)
    return result;
  },
  wellRecievedMovies() {
    // return a list of movies with above a 8 rating on imdb

    const highRateMovies = Object.keys(marvelMovies).filter(movie => marvelMovies[movie].imdbRating > 8)
    const result = highRateMovies.map(movie => marvelMovies[movie].title)
    return result;
  },
  sortMoviesByRating() {
    // sort the movies by their ratings
    const result = Object.keys(marvelMovies).sort((a,b) => marvelMovies[b].imdbRating - marvelMovies[a].imdbRating)
    return result.map(movie => marvelMovies[movie].title)
  },
  charactersMovies() {
    // create an object with each character as the key and the movies they appear in as the value

    const movies = Object.keys(marvelMovies)
    const characters = movies.reduce((chars, movie) => {
      marvelMovies[movie].characters.forEach(char => {
        if(!chars.includes(char)) {
          chars.push(char)
        }
      })
      return chars
    }, [])
    const result = characters.reduce((acc, char) => {
      const charMovies = movies.filter(movie => marvelMovies[movie].characters.includes(char)).map(movie => marvelMovies[movie].title)
      acc[char] = [...charMovies]
      return acc
    }, {})
    return result;
  },
};

// =================================================================

// DATASET: murder from ./datasets/murder.js
const murderPrompts = {
  culturallyInsensitive() {
    //Return an array of episodes that are culturallyInsensitive

    const result = murder.topFiveEpisodes.filter(ep => ep.culturallyInsensitive)
    return result;
  },
  findMagnum() {
    //Return the episode that includes Magnum PI

    const result = murder.topFiveEpisodes.find(ep => ep.synopsis.includes('Magnum'))
    return result;
  },
  murderStars() {
    //Return an array of all stars in the top five episodes array

    const result = murder.topFiveEpisodes.reduce((acc, ep) => {
      ep.guestStars.forEach(star => acc.push(star))
      return acc
    }, [])
    return result;
  },
  episodeStars() {
    // Return an array of objects with just the name and the guest stars for each episode

    const result = murder.topFiveEpisodes.map(ep => {
      return {name: ep.name, guestStars: ep.guestStars}
    })
    return result;
  },
  episodeSynopsis() {
    // Return an Array of Objects with the name of the episode as the key and the synopsis as the value

    const result = murder.topFiveEpisodes.map(episode => {
      return {[episode.name]: episode.synopsis}
    })
    return result;
  },
  guestStars() {
    // Return one Object with all the guest stars

    const result = murder.topFiveEpisodes.reduce((acc, ep) => {
        ep.guestStars.forEach(star => {
          if(!acc.guestStars.includes(star)) acc.guestStars.push(star)
        })
      return acc
    }, {guestStars: []})
    return result;
  },
  episodeCoStars() {
    //return an object with the episode names as keys and the co-stars as an array

    const result = murder.topFiveEpisodes.reduce((acc, ep) => {
      acc[ep.name] = [...ep.guestStars]
      return acc
    }, {})
    return result;
  },
};

// =================================================================

// DATASET: restaurants from ./datasets/restaurants.js
const restaurantPrompts = {
  totalReviews() {
    //1. sum up the the total numer of restaurant reviews for all the restaurants.

    const result = restaurants.reduce((total, res) => {
      total += res.number_of_reviews
      return total
    }, 0)
    return result;
  },
  restaurantsByReviews() {
    //2. Create an object where each property is the name of a restaurant and its key value is its number of reviews.
    const result = restaurants.reduce((reviews, res) => {
      if(!reviews[res.name]) reviews[res.name] = res.number_of_reviews
      return reviews
    }, {})
    return result;
  },
  restaurantsByType() {
    // 3. Make a new object where each key is a type of restaurant and its value is an array of the matching restaurants

    const result = restaurants.reduce((acc, res) => {
      if(!acc[res.type]) {
        acc[res.type] = [res.name]
      } else {
        acc[res.type].push(res.name)
      }
      return acc
    }, {})
    return result;
  },
  restaurantsByNeighborhood() {
    // 2B Create an object where each property is the name of the restaurant
    // and its key value is the neighborhood where its located.

    const result = restaurants.reduce((hoods, res) => {
      hoods[res.name] = res.neighborhood
      return hoods
    }, {})
    return result;
  },
  neighborhoodRestaurants() {
    //3B Create an object where each key is the neighborhood and its value is the name of each restaurant in that neighborhood.

    const result = restaurants.reduce((hoods, res) => {
      if(!hoods[res.neighborhood]) {
        hoods[res.neighborhood] = [res.name]
      } else {
        hoods[res.neighborhood].push(res.name)
      }
      return hoods
    }, {})
    return result;
  },
};

// =================================================================

// DATASET: toons and characters from ./datasets/strongBad.js
const strongBadPrompts = {
  halloweenToons() {
    /* #1:  Return an object with keys of the name of each halloween toon,
    and a value of an array of objects, where each key is a character name
    and each value is the costume they wore in that toon (no need to include
      Marshie, Senor Cardgage or Crack Stuntman as they do not appear in the
      Halloween toons, also, as a note: Homsar does not appear in the first
      Halloween toon: 'Homestarloween Party', but does appear in all others,
      so list him with a value of "none" for that toon).*/
    const characters = ['Homestar Runner', 'Strong Bad', 'The Cheat', 'Strong Mad', 'Strong Sad', 'Pom Pom', 'Marzipan', 'Coach Z', 'Bubs', 'The King of Town', 'The Poopsmith', 'Homsar']
    const findCostume = (costumes, character) => {
      characterIndex = players.findIndex(char => char.name === character)
      return costumes.find(costume => players[characterIndex].costumes.includes(costume))
    }
    const result = toons.halloweenToons.reduce((acc, toon) => {
      const costumeMatches = characters.reduce((matches, per) => {
        const match = findCostume(toon.costumes, per) || 'none'
        matches.push({[per]: match})
        return matches
      }, [])
      acc[toon.name] = costumeMatches
      return acc
    }, {})
    return result;
  },
  dangeresque() {
    /* Return an object of each Dangeresque episode/film where each
    value is an array of the characters that most likely appear in it.*/

    const result = toons.dangeresque.episodesAndFilms.reduce((acc, toon) => {
      const castList = players.reduce((cast, player) => {
        if(player.dangeresqueApperences[toon] === true) {
          let names = toons.dangeresque.characters.filter(char => player.aliases.includes(char))
          names.forEach(name => cast.push(name))
        }
        return cast
      }, [])
      acc[toon] = castList.length > 1 ? castList : ['none']
      return acc
    }, {})
    return result;
  },
  performers() {
    /* Return an object with keys of each character and values of an array
    of all of the songs they have performed (Keep in mind, some
    characters/groups may have songs listed in the "bands" object).*/
    let result = toons.songs.reduce((acc, song) => {
      if(typeof song.performers === 'string') {
        acc[song.performers] ? acc[song.performers].push(song.name) : acc[song.performers] = [song.name]
      } else {
        song.performers.forEach(perf => acc[perf] ? acc[perf].push(song.name) : acc[perf] = [song.name])
      }
      return acc
    }, {})
    let bands = Object.keys(toons.bands).map(band => (band[0].toUpperCase() + band.slice(1)).split(/(?=[A-Z])/).join(" "))
    let bandKeys = Object.keys(toons.bands)
    bands.forEach((band, i) => {
      if(result[band]) {
        toons.bands[bandKeys[i]].songs.forEach(song => result[band].push(song))
      } else {
        result[band] = [...toons.bands[bandKeys[i]].songs]
      }
    })
    return result;
  },
};

// =================================================================

// DATASET: fourteeners from ./datasets/fourteeners.js
const fourteenerPrompts = {
  over14000() {
    // Question: return an array of all of the peaks that are over 14000
    const result = Object.keys(fourteeners).reduce((peaks, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        if(fourteeners[range].peaks[peak].elevation > 13999) peaks.push(peak)
      })
      return peaks
    }, [])
    return result ;
  },
  class2() {
    // Question: create an array of all of the class 2 routes within the front range
    const result = Object.keys(fourteeners).reduce((routes, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        Object.keys(fourteeners[range].peaks[peak].routes).forEach(route => {
          if(fourteeners[range].peaks[peak].routes[route].difficulty === 'class 2') {
            routes.push(route)
          }
        })
      })
      return routes
    }, [])
    return result ;
  },
  totalRoutes() {
    // Question: How many routes are in the front range
    const result = Object.keys(fourteeners).reduce((routes, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        Object.keys(fourteeners[range].peaks[peak].routes).forEach(route => {
          routes.push(route)
        })
      })
      return routes
    }, [])
    return result.length ;
  },
  class4() {
    // Question: create an array containing all of the class 4 routes
    const result = Object.keys(fourteeners).reduce((routes, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        Object.keys(fourteeners[range].peaks[peak].routes).forEach(route => {
          if(fourteeners[range].peaks[peak].routes[route].difficulty === 'class 4') {
            routes.push(route)
          }
        })
      })
      return routes
    }, [])
    return result ;
  },
  rangeNames() {
    // Question: Create an array of all the mountain range names
    const result = Object.keys(fourteeners).map(range => (range[0].toUpperCase() + range.slice(1)).split(/(?=[A-Z])/).join(" "))
    return result;
  },
  longsMileage() {
    // Question: What is the total mileage for the routes on Long's Peak
    const result = Object.keys(fourteeners.frontRange.peaks.longsPeak.routes).reduce((miles, route) => {
      miles += fourteeners.frontRange.peaks.longsPeak.routes[route].mileage
      return miles
    }, 0)
    return result;
  },
  sawatchMileage() {
    // Question: What is the total gain for the Sawatch range
    const result = Object.keys(fourteeners.sawatchRange.peaks).reduce((gain, peak) => {
      Object.keys(fourteeners.sawatchRange.peaks[peak].routes).forEach(route => {
        gain += fourteeners.sawatchRange.peaks[peak].routes[route].gain
      })
      return gain
    }, 0)
    return result;
  },
  tallestPeaks() {
    // Question: Create an array containing the tallest peak in each range
    const result = Object.keys(fourteeners).map(range => fourteeners[range].highestPeak)
    return result;
  },
  totalMileage() {
    // Question: What is the total mileage of all of the routes?
    const result = Object.keys(fourteeners).reduce((miles, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        Object.keys(fourteeners[range].peaks[peak].routes).forEach(route => {
          miles += fourteeners[range].peaks[peak].routes[route].mileage
        })
      })
      return miles
    }, 0)
    return result;
  },
  totalGain() {
    // Question: What is the total gain of all of the routes?
    const result = Object.keys(fourteeners).reduce((gain, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        Object.keys(fourteeners[range].peaks[peak].routes).forEach(route => {
          gain += fourteeners[range].peaks[peak].routes[route].gain
        })
      })
      return gain
    }, 0)
    return result;
  },
  rankedPeaks() {
    // Question : create an array of all ranked fourteeners arranged from first to 53rd
    const result = Object.keys(fourteeners).reduce((rated, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        if(fourteeners[range].peaks[peak].rank !== 'unranked') {
          const newPeak = { name: (peak[0].toUpperCase() + peak.slice(1)).split(/(?=[A-Z])/).join(" "),
                          rank: fourteeners[range].peaks[peak].rank }
          rated.push(newPeak)
        }
      })
      return rated
    }, []).sort((a, b) => a.rank - b.rank)
    return result.map(peak => peak.name);
  },
  sortedFourteeners() {
    // Question : create an array of all fourteeners arranged from tallest to shortest
    const result = Object.keys(fourteeners).reduce((sorted14s, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        const new14r = { name: (peak[0].toUpperCase() + peak.slice(1)).split(/(?=[A-Z])/).join(" "),
                        elevation: fourteeners[range].peaks[peak].elevation }
        sorted14s.push(new14r)
      })
      return sorted14s
    }, []).sort((a,b) => b.elevation - a.elevation)
    return result.map(peak => peak.name);
  },
  peaksData() {
    // Question: Create an object where the key is the peak and the value is an
    // object containing the total mileage and total gain of each peak
    const result = Object.keys(fourteeners).reduce((peakData, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        peakData[peak] = Object.keys(fourteeners[range].peaks[peak].routes).reduce((totals, route) => {
          totals.totalMiles += fourteeners[range].peaks[peak].routes[route].mileage
          totals.totalGain += fourteeners[range].peaks[peak].routes[route].gain
          return totals
        }, { totalMiles: 0, totalGain: 0 })
      })
      return peakData
    }, {})
    return result;
  },
  rangeData() {
    // Question: create an object with keys of each mountain range, and the
    // value is an object that counts the number of each route in that range
    const result = Object.keys(fourteeners).reduce((rangeData, range) => {
      rangeData[range] = Object.keys(fourteeners[range].peaks).reduce((routeData, peak) => {
        Object.keys(fourteeners[range].peaks[peak].routes).forEach(route => {
          if(routeData[fourteeners[range].peaks[peak].routes[route].difficulty]) {
            routeData[fourteeners[range].peaks[peak].routes[route].difficulty] ++
          } else {
            routeData[fourteeners[range].peaks[peak].routes[route].difficulty] = 1
          }
        })
        return routeData
      }, {})
      return rangeData
    }, {})
    return result;
  },
  unranked() {
    // Question : create an array of all the unranked fourteeners
    const result = Object.keys(fourteeners).reduce((noRankPeaks, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        if(fourteeners[range].peaks[peak].rank === 'unranked') {
          noRankPeaks.push((peak[0].toUpperCase() + peak.slice(1)).split(/(?=[A-Z])/).join(" "))
        }
      })
      return noRankPeaks
    }, [])
    return result;
  },
  tallestFourteener() {
    // Question : find the tallest fourteener
    const result = Object.keys(fourteeners).reduce((all14rs, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        const newPeak = { name: (peak[0].toUpperCase() + peak.slice(1)).split(/(?=[A-Z])/).join(" "),
                        elevation: fourteeners[range].peaks[peak].elevation }
        all14rs.push(newPeak)
      })
      return all14rs
    }, []).sort((a, b) => b.elevation - a.elevation)[0].name
    return result;
  },
  shortestFourteener() {
    // Question : find the shortest fourteener
    const result = Object.keys(fourteeners).reduce((all14rs, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        const newPeak = { name: (peak[0].toUpperCase() + peak.slice(1)).split(/(?=[A-Z])/).join(" "),
                        elevation: fourteeners[range].peaks[peak].elevation }
        all14rs.push(newPeak)
      })
      return all14rs
    }, []).sort((a, b) => a.elevation - b.elevation)[0].name
    return result;
  },
  forestData() {
    // Question : create an object with keys of each forest and values
    // being number of fourteeners in that forest
    const result = Object.keys(fourteeners).reduce((forests, range) => {
      Object.keys(fourteeners[range].peaks).forEach(peak => {
        const peakName = (peak[0].toUpperCase() + peak.slice(1)).split(/(?=[A-Z])/).join(" ")
        if(forests[fourteeners[range].peaks[peak].forest]) {
          forests[fourteeners[range].peaks[peak].forest].push(peakName)
        } else {
          forests[fourteeners[range].peaks[peak].forest] = [peakName]
        }
      })
      return forests
    }, {})
    return result;
  },
  rangePeakData() {
    // Question : Create an array of objects where the keys are the mountain range
    // and the value is the number of peaks
    const result = Object.keys(fourteeners).reduce((ranges, range) => {
      const rangeName = (range[0].toUpperCase() + range.slice(1)).split(/(?=[A-Z])/).join(" ")
      ranges[rangeName] = Object.keys(fourteeners[range].peaks).length
      return ranges
    }, {})
    return result;
  },
}

// =================================================================

// DATASET: artists, ticketPrice and crowd from ./datasets/concerts.js
const concertPrompts = {
  artistNames() {
    // Return an array of just the artists names
    const result = 'RESULT GOES HERE'
    return result
  },
  findByName() {
    // Write a function that takes a name as a parameter and returns the first artist where the name matches .  ex. findByName('Jack Garratt')
    const result = 'RESULT GOES HERE'
    return result
  },
  addPrice() {
    // Write some code to add the appropriate ticket price to each artist.
    const result = 'RESULT GOES HERE'
    return result
  },
  getByLabel() {
    // Write a function that takes a label as a parameter and returns an array containing all the artists of that label .  ex. getByLabel('atlantic')
    const result = 'RESULT GOES HERE'
    return result
  },
  totalCost() {
    // Write some code to determine how much it would cost to go to all to the shows
    const result = 'RESULT GOES HERE'
    return result
  },
  artistsByLabel() {
    // Make an object containing each label as keys and all the associated artists in an array as the value.
    const result = 'RESULT GOES HERE'
    return result
  },
  addCrowdSize() {
    //write some code that will add the crowdsize to each artist
    const result = 'RESULT GOES HERE'
    return result
  },
}

// =================================================================

// DATASET: charactersDD and weaponsDD from ./datasets/DandD.js
const dungeonsPrompts = {
  totalWeaponDamage() {
//  1) Return the sum of the amount of damage for all the weapons that our characters can use
    const result = 'RESULT GOES HERE'
    return result
  },
  characterStats() {
//  2) Return the sum damage, total range, and total durability for each character as an object.
    const result = 'RESULT GOES HERE'
    return result
  },
  showWeapons() {
//  3) Write a function that takes in a character name as an input and returns the weapons it can use and its total damage and range.
    const result = 'RESULT GOES HERE'
    return result
  },
  determineWinner() {
//  4) Write a function that takes in two character names as arguments and determines who will win based on who has higher total damage along with the remaining durability.
    const result = 'RESULT GOES HERE'
    return result
  },
  determineSurvival() {
//  5) Write a function that takes two names as arguments. First name is the attacker, the second Name the defender.  Determine whether the defender will survive an attack from the attacker based on the AttackersDmg - defendersHealth.
    const result = 'RESULT GOES HERE'
    return result
  },
  compareHomes() {
// 6) Write a function that takes in two homes as arguments and returns the winner based on sum dmg and health of all the characters that belong to the home. (firstHomeDmg - secondHomeHealth) vs (secondHomeDmg - firstHomeHealth); home that has greater value is winner.
    const result = 'RESULT GOES HERE'
    return result
  },
  winningChance() {
// 7) :: EUROPEAN EXTREME :: Write a function that takes in two arguments, a fighter and the fighter's target, and determine the percent chance the fighter has of winning against that target, (by recursively or iteratively matching them against one another for at least 100 fights) and returning a string containing the result:
    const result = 'RESULT GOES HERE'
    return result
  },
};

// =================================================================

// DATASET: denver from ./datasets/denver.js
const denverPrompts = {
  sortBeers() {
// sort all of the breweries beers in order of decreasing abv
    const result = 'RESULT GOES HERE'
    return result
  },
  addBeerPrices() {
// give each beer a random price between $4 and $10
    const result = 'RESULT GOES HERE'
    return result
  },
  findMuseum() {
// find 'the museum of nature and science'
    const result = 'RESULT GOES HERE'
    return result
  },
  neighborhoodEats() {
// Create a neighborhoods object with breweries and restaurant properties
    const result = 'RESULT GOES HERE'
    return result
  },
  mostReviewedRestaurant() {
// which restaurant has the most reviews
    const result = 'RESULT GOES HERE'
    return result
  },
  allRestaurants() {
// create an array with all the restaurant names
    const result = 'RESULT GOES HERE'
    return result
  },
  allBuildings() {
// create an array containing all commercial building names
    const result = 'RESULT GOES HERE'
    return result
  },
  bigBreweries() {
// create an array with all the breweries serving more than 14 beers
    const result = 'RESULT GOES HERE'
    return result
  },
  dinnerTime() {
// find all of the restaurants that have a type 'Dinner'
    const result = 'RESULT GOES HERE'
    return result
  },
  howManyBeers() {
// sum up the different number of beers served at the various breweries
    const result = 'RESULT GOES HERE'
    return result
  },
  howManyFloors() {
// sum up the number of floors of all buildings in the buildings object
    const result = 'RESULT GOES HERE'
    return result
  },
  avgAbv() {
// find the average abv for all the breweries which have beers
    const result = 'RESULT GOES HERE'
    return result
  },
  avgIbu() {
// find the average ibu for all the breweries which have beers
    const result = 'RESULT GOES HERE'
    return result
  },
  beerTypes() {
// create an array with all the different types of beer served by the different breweries without having duplicates in the array.
    const result = 'RESULT GOES HERE'
    return result
  },
  breweryAvgs() {
// create an object where the properties are brewery names and the value is an object which contains that breweries average abv and average ibu
    const result = 'RESULT GOES HERE'
    return result
  },
  tallestBuilding() {
// find the tallest building in the buildings object (hint: .find probably will not work here.)
    const result = 'RESULT GOES HERE'
    return result
  },
  buildingTypes() {
// create an object where the properties are the types of buildings and the values are the number of buildings of that type
    const result = 'RESULT GOES HERE'
    return result
  },
  neighborhoodHangs() {
// create an object where each property is a neighborhood where the value is an object with two properties "breweries" and "restaurants" where each value is an array containing the brewery and restaurant objects
    const result = 'RESULT GOES HERE'
    return result
  },
};

// =================================================================

// DATASET: url from ./datasets/fakeUrl.js
const fakeUrlPrompts = {
  secondToLast() {
// return the second to last piece of information in the string
    const result = 'RESULT GOES HERE'
    return result
  },
  addMythical() {
// return the url with this string added between categories and unicorns: 'mythical_creatures'
    const result = 'RESULT GOES HERE'
    return result
  },
  changeCreature() {
// return the url with 'unicorns' replaced with 'werewolves'
    const result = 'RESULT GOES HERE'
    return result
  },
};

// =================================================================

// DATASET: philosophers from ./datasets/philosophers.js
const philosopherPrompts = {
  analyticPhilosophers() {
//Return an array of the names of all the philosophers who's school is 'Analytic Philosophy'
    const result = 'RESULT GOES HERE'
    return result
  },
  oldestPhilosopher() {
//Return the age of the oldest philosopher
    const result = 'RESULT GOES HERE'
    return result
  },
  allInterests() {
//Return an array of all the main interests with no duplicates.
    const result = 'RESULT GOES HERE'
    return result
  },
};

// =================================================================

// DATASET: showData from ./datasets/phish.js
const phishPrompts = {
  tourDates() {
// Create a list of all of the tour dates
    const result = 'RESULT GOES HERE'
    return result
  },
  longShows() {
// Find all of the shows with a duration longer than 10000000
    const result = 'RESULT GOES HERE'
    return result
  },
  showsByVenue() {
// Create an object that has how many shows were played at each venue
    const result = 'RESULT GOES HERE'
    return result
  },
  venueLatitudes() {
// Create a function that returns an array of venue objects whose keys are the name of the venue and it’s latitude. There should be no repeat venues and they should be sorted by latitude
    const result = 'RESULT GOES HERE'
    return result
  },
  findShowById(id) {
// Find the show with the id of 1910
    const result = 'RESULT GOES HERE'
    return result
  },
  totalDuration() {
// Find the total duration of all the shows in hours, minutes, and seconds (hh:mm:ss) *duration provided is in ms*
    const result = 'RESULT GOES HERE'
    return result
  },
  slashTourDates() {
// Return another list of all the tour dates, but with the dashes (-) replaced with slashes(/)
    const result = 'RESULT GOES HERE'
    return result
  },
};

// =================================================================

// DATASET: smashCharacters from ./datasets/smash.js
const smashPrompts = {
  playersByRank() {
//Give me an array of the characters based on their rank.
    const result = 'RESULT GOES HERE'
    return result
  },
  featherWeights() {
//Give me an array of all FeatherWeight characters
    const result = 'RESULT GOES HERE'
    return result
  },
  bigSmasher() {
//Give me the name of character whose 'strongest smash' is most powerful
    const result = 'RESULT GOES HERE'
    return result
  },
  slowestRunners() {
//Give me the three slowest runners in the game in array
    const result = 'RESULT GOES HERE'
    return result
  },
  allCharacters() {
//Give me an array of all characters in the Mario universe
    const result = 'RESULT GOES HERE'
    return result
  },
  aList() {
///Give me an array of character names in the A tier.
    const result = 'RESULT GOES HERE'
    return result
  },
  bListMs() {
//Give me an array of character names in the B tier that start with the letter M.
    const result = 'RESULT GOES HERE'
    return result
  },
  findCharacter(class, minJump, minSpeed, counter) {
///Find me a character in the middleweight class, with a jump height above 35, a run speed above 1.75, and a counter move.
    const result = 'RESULT GOES HERE'
    return result
  },
  slowTraits() {
//Give me an object where each key is a character name, and the value is an array of their cons that contain the word 'slow'.
    const result = 'RESULT GOES HERE'
    return result
  },
  topMiddleWeights() {
//Give me an array of characters who are middleweights and are in the top 10 (tier.rank).
    const result = 'RESULT GOES HERE'
    return result
  },
  charactersByUniverse() {
////Give me an object where each key is a universe and the value is array of names of the characters in that universe.
    const result = 'RESULT GOES HERE'
    return result
  },
  winPercentage() {
//Give me an array of characters where each character is an object where the key is the name and the value is the character's win percentage
    const result = 'RESULT GOES HERE'
    return result
  },
  charactersByGame() {
//Give me an object where each property is a smash game and the value is an array of character names who appear in that game
    const result = 'RESULT GOES HERE'
    return result
  },
  charactersBySpeed() {
//PT. 1 - Give me array of Objects where each object has 2 properties: name, and overall speed rank.  Calculate the overall speed rank by taking the average of the initial dash, run, and air speeds.
    const result = 'RESULT GOES HERE'
    return result
  },
  charactersBySpeedSuperScript() {
//PT. 2 - Using the array you created above, map over it and add the correct superscript to each character's speed rank.
    const result = 'RESULT GOES HERE'
    return result
  },
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
  dinosaurPrompts,
  animalPrompts,
  beyoncePrompts,
  broncosPrompts,
  careBearPrompts,
  queenPrompts,
  harryPotterPrompts,
  marvelPrompts,
  murderPrompts,
  restaurantPrompts,
  strongBadPrompts,
  fourteenerPrompts,
  concertPrompts,
  dungeonsPrompts,
  denverPrompts,
  fakeUrlPrompts,
  philosopherPrompts,
  phishPrompts,
  smashPrompts
};
