const chai = require("chai");
const expect = chai.expect;
const { broncos } = require('./datasets/broncos');
const { students } = require('./datasets/harryPotter');
const { hogwarts } = require('./datasets/harryPotter');
const { marvelMovies } = require('./datasets/marvel');


const {
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
  dinosaurPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
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
  fourteenerPrompts
} = require("./index");

describe("PROTOTYPES", () => {
  describe("Kitty Prompts", () => {
    it("orangeKittyNames", () => {
      const e = kittyPrompts.orangeKittyNames();

      expect(e).to.deep.equal(["Tiger", "Snickers"])
    });

    it("sortByAge", () => {
      const e = kittyPrompts.sortByAge();

      expect(e).to.deep.equal([{
        name: "Snickers",
        age: 8,
        color: "orange"
      }, {
        name: "Tiger",
        age: 5,
        color: "orange"
      }, {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, {
        name: "Max",
        age: 1,
        color: "tuxedo"
      }])
    });

    it("growUp", () => {
      const e = kittyPrompts.growUp();

      expect(e).to.deep.equal([{
        name: "Snickers",
        age: 10,
        color: "orange"
      }, {
        name: "Tiger",
        age: 7,
        color: "orange"
      }, {
        name: "Felicia",
        age: 4,
        color: "grey"
      }, {
        name: "Max",
        age: 3,
        color: "tuxedo"
      }])
    })
  });

  describe("Club Prompts", () => {
    it("membersBelongingToClubs", () => {
      const e = clubPrompts.membersBelongingToClubs({
        Louisa: ["Drama", "Art"],
        Pam: ["Drama", "Chess", "Newspaper"],
        Nathaniel: ["Drama", "Astronomy"],
        Leta: ["Band", "Newspaper", "Astronomy"],
        Robbie: ["Band", "Chess", "FBLA"],
        Jhun: ["Band", "Art"],
        Will: ["Band"],
        David: ["Chess", "Newspaper", "FBLA"],
        Brittany: ["Chess", "Newspaper"],
        Christie: ["Newspaper", "FBLA"]
      });

      expect(e).to.deep.equal({
        Louisa: ['Drama', 'Art'],
        Pam: ['Drama', 'Chess', 'Newspaper'],
        Nathaniel: ['Drama', 'Astronomy'],
        Leta: ['Band', 'Newspaper', 'Astronomy'],
        Robbie: ['Band', 'Chess', 'FBLA'],
        Jhun: ['Band', 'Art'],
        Will: ['Band'],
        David: ['Chess', 'Newspaper', 'FBLA'],
        Brittany: ['Chess', 'Newspaper'],
        Christie: ['Newspaper', 'FBLA']
      })
    })
  });

  describe("Mod Prompts", () => {
    it("studentsPerMod", () => {
      const e = modPrompts.studentsPerMod();

      expect(e).to.deep.equal([{
        mod: 1,
        studentsPerInstructor: 9
      }, {
        mod: 2,
        studentsPerInstructor: 11
      }, {
        mod: 3,
        studentsPerInstructor: 10
      }, {
        mod: 4,
        studentsPerInstructor: 8
      }])
    })
  });

  describe("Cake Prompts", () => {
    it("stockPerCake", () => {
      const e = cakePrompts.stockPerCake();

      expect(e).to.deep.equal([{
        flavor: "dark chocolate",
        inStock: 15
      }, {
        flavor: "yellow",
        inStock: 14
      }, {
        flavor: "white chiffon",
        inStock: 0
      }, {
        flavor: "butter rum",
        inStock: 9
      }, {
        flavor: "vanilla",
        inStock: 21
      }, {
        flavor: "honey",
        inStock: 0
      }])
    });

    it("onlyInStock", () => {
      const e = cakePrompts.onlyInStock();

      expect(e).to.deep.equal([{
        cakeFlavor: "dark chocolate",
        filling: null,
        frosting: "dark chocolate ganache",
        toppings: ["dutch process cocoa", "toasted sugar", "smoked sea salt"],
        inStock: 15
      }, {
        cakeFlavor: "yellow",
        filling: "citrus glaze",
        frosting: "chantilly cream",
        toppings: ["berries", "edible flowers"],
        inStock: 14
      }, {
        cakeFlavor: "butter rum",
        filling: "ginger cardamom swirl",
        frosting: "spiced rum glaze",
        toppings: ["crystallized ginger", "toasted sugar"],
        inStock: 9
      }, {
        cakeFlavor: "vanilla",
        filling: "St Germaine",
        frosting: "whipped cream",
        toppings: ["smoked sea salt", "crystallized ginger", "berries"],
        inStock: 21
      }])
    });

    it("totalInventory", () => {
      const e = cakePrompts.totalInventory();

      expect(e).to.deep.equal(59)
    });

    it("allToppings", () => {
      const e = cakePrompts.allToppings();

      expect(e).to.deep.equal(["dutch process cocoa", "toasted sugar", "smoked sea salt", "berries", "edible flowers", "mint", "cranberry", "crystallized ginger"])
    });

    it("groceryList", () => {
      const e = cakePrompts.groceryList();

      expect(e).to.deep.equal({
        "dutch process cocoa": 1,
        "toasted sugar": 3,
        "smoked sea salt": 3,
        berries: 2,
        "edible flowers": 2,
        mint: 1,
        cranberry: 1,
        "crystallized ginger": 2
      })
    })
  });

  describe("Class Prompts", () => {
    it("feClassrooms", () => {
      const e = classPrompts.feClassrooms();

      expect(e).to.deep.equal([{
        roomLetter: "A",
        program: "FE",
        capacity: 32
      }, {
        roomLetter: "C",
        program: "FE",
        capacity: 27
      }, {
        roomLetter: "E",
        program: "FE",
        capacity: 22
      }, {
        roomLetter: "G",
        program: "FE",
        capacity: 29
      }])
    });

    it("totalCapacities", () => {
      const e = classPrompts.totalCapacities();

      expect(e).to.deep.equal({
        feCapacity: 110,
        beCapacity: 96
      })
    });

    it("sortByCapacity", () => {
      const e = classPrompts.sortByCapacity();

      expect(e).to.deep.equal([{
        roomLetter: "H",
        program: "BE",
        capacity: 18
      }, {
        roomLetter: "F",
        program: "BE",
        capacity: 19
      }, {
        roomLetter: "E",
        program: "FE",
        capacity: 22
      }, {
        roomLetter: "C",
        program: "FE",
        capacity: 27
      }, {
        roomLetter: "B",
        program: "BE",
        capacity: 29
      }, {
        roomLetter: "G",
        program: "FE",
        capacity: 29
      }, {
        roomLetter: "D",
        program: "BE",
        capacity: 30
      }, {
        roomLetter: "A",
        program: "FE",
        capacity: 32
      }])
    })
  });

  describe("Book prompts", () => {
    it("removeViolence", () => {
      const e = bookPrompts.removeViolence();

      expect(e).to.deep.equal(['1984',
        'The Great Gatsby',
        'Lord of the Flies',
        'Harry Potter and the Sorcerer\'s Stone',
        'The Hitchhiker\'s Guide to the Galaxy',
        'Flowers for Algernon',
        'Slaughterhouse-Five',
        'The Handmaid\'s Tale',
        'The Metamorphosis', 'Brave New World',
        'Life of Pi',
        'The Curious Incident of the Dog in the Night-Time',
        'The Bell Jar',
        'Catch-22',
        'Treasure Island'])
    });

    it("getNewBooks", () => {
      const e = bookPrompts.getNewBooks();

      expect(e).to.deep.equal([{
        title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
        { title: 'Life of Pi', year: 2001 },
        { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003
      }])
    })
  });

  describe("Weather prompts", () => {
    it("getAverageTemps", () => {
      const e = weatherPrompts.getAverageTemps();

      expect(e).to.deep.equal([
        40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5
      ])
    }),
    it("findSunnySpots", () => {
      const e = weatherPrompts.findSunnySpots();

      expect(e).to.deep.equal(['Atlanta, Georgia is sunny.', 'New Orleans, Louisiana is sunny.', 'Raleigh, North Carolina is mostly sunny.']
      )
    }),
    it("findHighestHumidity", () => {
      const e = weatherPrompts.findHighestHumidity();

      expect(e).to.deep.equal({
        location: 'Portland, Oregon',
        type: 'cloudy',
        humidity: 84,
        temperature: { high: 49, low: 38 }
      })
    })
  });

  describe("National Park Prompts", () => {
    it("getParkVisitList", () => {
      const e = nationalParksPrompts.getParkVisitList();

      expect(e).to.deep.equal({
        parksToVisit: [ 'Yellowstone', 'Glacier', 'Everglades' ],
        parksVisited: [ 'Rocky Mountain', 'Acadia', 'Zion' ]
      })
    }),
    it("getParkActivities", () => {
      const e = nationalParksPrompts.getParkActivities();

      expect(e).to.deep.equal(
      [ 'hiking',
        'shoeshoing',
        'camping',
        'fishing',
        'boating',
        'watching wildlife',
        'cross-country skiing',
        'swimming',
        'bird watching',
        'canyoneering',
        'backpacking',
        'rock climbing'
      ])
    }),
    it("getParkInEachState", () => {
      const e = nationalParksPrompts.getParkInEachState();

      expect(e).to.deep.equal(
        [
          { Colorado: 'Rocky Mountain' },
          { Wyoming: 'Yellowstone' },
          { Montana: 'Glacier' },
          { Maine: 'Acadia' },
          { Utah: 'Zion' },
          { Florida: 'Everglades' }
        ])
    })
  });

  describe("Brewery Prompts", () => {
    it("getBeerCount", () => {
      const e = breweryPrompts.getBeerCount();

      expect(e).to.deep.equal(40)
    });

    it("getBreweryBeerCount", () => {
      const e = breweryPrompts.getBreweryBeerCount();

      expect(e).to.deep.equal([{
        name: "Little Machine Brew",
        beerCount: 12
      }, {
        name: "Ratio Beerworks",
        beerCount: 5
      }, {
        name: "Spangalang Brewery",
        beerCount: 9
      }, {
        name: "Beryl's Beer Co.",
        beerCount: 7
      }, {
        name: "Platt Park Brewing Co.",
        beerCount: 7
      }])
    });

    it("findHighestAbvBeer", () => {
      const e = breweryPrompts.findHighestAbvBeer();

      expect(e).to.deep.equal({
        name: "Barrel Aged Nature's Sweater",
        type: "Barley Wine",
        abv: 10.9,
        ibu: 40
      })
    })
  });

  describe("Turing Prompts", () => {
    it("studentsForEachInstructor", () => {
      const e = turingPrompts.studentsForEachInstructor();

      expect(e).to.deep.equal([{
        name: "Pam",
        studentCount: 21
      }, {
        name: "Brittany",
        studentCount: 21
      }, {
        name: "Nathaniel",
        studentCount: 21
      }, {
        name: "Robbie",
        studentCount: 18
      }, {
        name: "Leta",
        studentCount: 18
      }, {
        name: "Travis",
        studentCount: 30
      }, {
        name: "Louisa",
        studentCount: 30
      }, {
        name: "Christie",
        studentCount: 20
      }, {
        name: "Will",
        studentCount: 20
      }])
    });

    it("studentsPerInstructor", () => {
      const e = turingPrompts.studentsPerInstructor();

      expect(e).to.deep.equal({
        cohort1806: 15,
        cohort1804: 7,
        cohort1803: 10,
        cohort1801: 9
      })
    });

    it("modulesPerTeacher", () => {
      const e = turingPrompts.modulesPerTeacher();

      expect(e).to.deep.equal({
        Pam: [2, 4],
        Brittany: [2, 4],
        Nathaniel: [2, 4],
        Robbie: [4],
        Leta: [2, 4],
        Travis: [1, 2, 3, 4],
        Louisa: [1, 2, 3, 4],
        Christie: [1, 2, 3, 4],
        Will: [1, 2, 3, 4]
      })
    });

    it("curriculumPerTeacher", () => {
      const e = turingPrompts.curriculumPerTeacher();

      expect(e).to.deep.equal({
        html: ["Travis", "Louisa"],
        css: ["Travis", "Louisa"],
        javascript: ["Travis", "Louisa", "Christie", "Will"],
        recursion: ["Pam", "Leta"],
        scope: ["Pam", "Nathaniel", "Will"],
        oop: ["Brittany", "Nathaniel", "Will"],
        react: ["Christie", "Will"],
        redux: ["Will"],
        pwas: ["Brittany", "Robbie", "Leta", "Louisa"],
        mobile: ["Nathaniel"],
        node: ["Pam", "Robbie", "Leta", "Louisa", "Christie"]
      })
    })
  });

  describe("Boss Prompts", () => {
    it("bossLoyalty", () => {
      const e = bossPrompts.bossLoyalty();

      expect(e).to.deep.equal([{
        bossName: "Scar",
        sidekickLoyalty: 16
      }, {
        bossName: "Ursula",
        sidekickLoyalty: 20
      }, {
        bossName: "Jafar",
        sidekickLoyalty: 3
      }])
    })
  });

  describe("Astronomy Prompts", () => {
    it("starsInConstellations", () => {
      const e = astronomyPrompts.starsInConstellations();

      expect(e).to.deep.equal([{
        name: 'Rigel',
        visualMagnitude: 0.13,
        constellation: 'Orion',
        lightYearsFromEarth: 860,
        color: 'blue'
      }, { name: 'Betelgeuse',
        visualMagnitude: 0.5,
        constellation: 'Orion',
        lightYearsFromEarth: 640,
        color: 'red'
      }])
    });

    it("starsByColor", () => {
      const e = astronomyPrompts.starsByColor();

      expect(e).to.deep.equal({
        blue: [{
          name: "Sirius",
          visualMagnitude: -1.46,
          constellation: "Canis Major",
          lightYearsFromEarth: 8.6,
          color: "blue"
        }, {
          name: "Vega",
          visualMagnitude: .3,
          constellation: "Lyra",
          lightYearsFromEarth: 25,
          color: "blue"
        }, {
          name: "Rigel",
          visualMagnitude: .13,
          constellation: "Orion",
          lightYearsFromEarth: 860,
          color: "blue"
        }, {
          name: "Achernar",
          visualMagnitude: .46,
          constellation: "The Plow",
          lightYearsFromEarth: 140,
          color: "blue"
        }, {
          name: "Hadar",
          visualMagnitude: .61,
          constellation: "The Little Dipper",
          lightYearsFromEarth: 350,
          color: "blue"
        }],
        white: [{
          name: "Canopis",
          visualMagnitude: -.74,
          constellation: "Carina",
          lightYearsFromEarth: 310,
          color: "white"
        }, {
          name: "Procyon",
          visualMagnitude: .34,
          constellation: "Canis Minor",
          lightYearsFromEarth: 11,
          color: "white"
        }],
        yellow: [{
          name: "Alpha Centauri",
          visualMagnitude: -.27,
          constellation: "",
          lightYearsFromEarth: 4.4,
          color: "yellow"
        }, {
          name: "Capella",
          visualMagnitude: .08,
          constellation: "Auriga",
          lightYearsFromEarth: 42,
          color: "yellow"
        }],
        orange: [{
          name: "Arcturus",
          visualMagnitude: -.05,
          constellation: "Boötes",
          lightYearsFromEarth: 37,
          color: "orange"
        }],
        red: [{
          name: "Betelgeuse",
          visualMagnitude: .5,
          constellation: "Orion",
          lightYearsFromEarth: 640,
          color: "red"
        }]
      })
    });

    it("constellationsStarsExistIn", () => {
      const e = astronomyPrompts.constellationsStarsExistIn();

      expect(e).to.deep.equal(["Canis Major", "Carina", "Boötes", "Auriga", "Orion", "Lyra", "Canis Minor", "The Plow", "Orion", "The Little Dipper"])
    })
  });

  describe("Ultima Prompts", () => {
    it("totalDamage", () => {
      const e = ultimaPrompts.totalDamage();

      expect(e).to.deep.equal(113)
    });

    it("charactersByTotal", () => {
      const e = ultimaPrompts.charactersByTotal();

      expect(e).to.deep.equal([{
        Avatar: {
          damage: 27,
          range: 24
        }
      }, {
        Iolo: {
          damage: 28,
          range: 46
        }
      }, {
        Shamino: {
          damage: 31,
          range: 39
        }
      }, {
        Dupre: {
          damage: 27,
          range: 24
        }
      }])
    })
  });

  describe("Dinosaur Prompts", () => {
    it("countAwesomeDinosaurs", () => {
      const e = dinosaurPrompts.countAwesomeDinosaurs();

      expect(e).to.deep.equal({
        'Jurassic Park': 5,
        'The Lost World: Jurassic Park': 8,
        'Jurassic Park III': 9,
        'Jurassic World': 11,
        'Jurassic World: Fallen Kingdom': 18
      })
    });

    it("averageAgePerMovie", () => {
      const e = dinosaurPrompts.averageAgePerMovie();

      expect(e).to.deep.equal({
        'Steven Spielberg': {
          'Jurassic Park': 34,
          'The Lost World: Jurassic Park': 37
        },
        'Joe Johnston': {
          'Jurassic Park III': 44
        },
        'Colin Trevorrow': {
          'Jurassic World': 56
        },
        'J. A. Bayona': {
          'Jurassic World: Fallen Kingdom': 59
        }
      })
    });

    it("uncastActors", () => {
      const e = dinosaurPrompts.uncastActors();

      expect(e).to.deep.equal([
        { name: 'Tom Wilhoit', nationality: 'Kiwi', imdbStarMeterRating: 1 },
        { name: 'Jeo D', nationality: 'Martian', imdbStarMeterRating: 0 },
        { name: 'Justin Duncan', nationality: 'Alien', imdbStarMeterRating: 0 },
        { name: 'Karin Ohman', nationality: 'Chinese', imdbStarMeterRating: 0 }
      ])
    });

    it("actorsAgesInMovies", () => {
      const e = dinosaurPrompts.actorsAgesInMovies();

      expect(e).to.deep.equal([{
        name: 'Sam Neill',
        ages: [46, 54]
      }, {
        name: 'Laura Dern',
        ages: [26, 34]
      }, {
        name: 'Jeff Goldblum',
        ages: [41, 45, 63, 66]
      }, {
        name: 'Richard Attenborough',
        ages: [70, 74, 92, 95]
      }, {
        name: 'Ariana Richards',
        ages: [14, 18]
      }, {
        name: 'Joseph Mazello',
        ages: [10, 14]
      }, {
        name: 'BD Wong',
        ages: [33, 55, 58]
      }, {
        name: 'Chris Pratt',
        ages: [36, 39]
      }, {
        name: 'Bryce Dallas Howard',
        ages: [34, 37]
      }])
    })
  })

  describe("Animal Prompts", () => {
    it("findCarnivores", () => {
      const e = animalPrompts.findCarnivores();

      expect(e).to.deep.equal([
        { name: 'San Diego Wild Animal Park',
          maxWeight: 7500,
          typesAllowed: [ 'Herbivore', 'Carnivore' ],
          continents: [ 'Asia', 'North America' ] },
        { name: 'Kansas City Zoo',
          maxWeight: 8000,
          typesAllowed: [ 'Omnivore', 'Carnivore' ],
          continents: [ 'Africa', 'Asia' ] },
        { name: 'Central Park Zoo',
          maxWeight: 7000,
          typesAllowed: [ 'Carnivore' ],
          continents: [ 'Africa', 'North America' ] }
      ])
    });

    it("asianAnimals", () => {
      const e = animalPrompts.asianAnimals();

      expect(e).to.deep.equal([
        { name: 'Denver Zoo',
          maxWeight: 10000,
          typesAllowed: [ 'Herbivore', 'Omnivore' ],
          continents: [ 'Africa', 'Asia', 'North America' ] },
        { name: 'Bronx Zoo',
          maxWeight: 5000,
          typesAllowed: [ 'Herbivore' ],
          continents: [ 'Africa', 'Asia', 'North America' ] },
        { name: 'San Diego Wild Animal Park',
          maxWeight: 7500,
          typesAllowed: [ 'Herbivore', 'Carnivore' ],
          continents: [ 'Asia', 'North America' ] },
        { name: 'Kansas City Zoo',
          maxWeight: 8000,
          typesAllowed: [ 'Omnivore', 'Carnivore' ],
          continents: [ 'Africa', 'Asia' ] },
        { name: 'San Antonio Zoo',
          maxWeight: 3000,
          typesAllowed: [ 'Herbivore', 'Omnivore' ],
          continents: [ 'Asia', 'North America' ]
      }])
    })

    it("findHome", () => {
      const e = animalPrompts.findHome('Tiger');

      expect(e).to.equal('Africa')
    })

    it("weighingAnimals", () => {
      const e = animalPrompts.weighingAnimals('Wolf', 6);

      expect(e).to.equal(540)
    })

    it("wolfAcceptingZoos", () => {
      const e = animalPrompts.wolfAcceptingZoos();

      expect(e).to.deep.equal([
        { name: 'San Diego Wild Animal Park',
          maxWeight: 7500,
          typesAllowed: [ 'Herbivore', 'Carnivore' ],
          continents: [ 'Asia', 'North America' ] },
        { name: 'Central Park Zoo',
          maxWeight: 7000,
          typesAllowed: [ 'Carnivore' ],
          continents: [ 'Africa', 'North America' ] }
      ])
    })

    it("heaviestAnimal", () => {
      const e = animalPrompts.heaviestAnimal();

      expect(e).to.deep.equal(
        { name:'Rhino',
          weight: 1700,
          type: 'Herbivore',
          home: 'Africa' }
      )
    })

    it("smallestAnimalZoo", () => {
      const e = animalPrompts.smallestAnimalZoo();

      expect(e).to.deep.equal(
        { name: 'San Antonio Zoo',
          maxWeight: 3000,
          typesAllowed:['Herbivore', 'Omnivore'],
          continents:['Asia', 'North America'] }
      )
    })

    it("zooAnimalsAccepted", () => {
      const e = animalPrompts.zooAnimalsAccepted();

      expect(e).to.deep.equal(
        {
          'San Antonio Zoo': [ 'Grizly Bear', 'Panda' ],
          'Bronx Zoo': [ 'Rhino', 'Panda', 'Monkey' ],
          'Central Park Zoo': [ 'Tiger', 'Lion', 'Wolf' ],
          'San Diego Wild Animal Park': [ 'Panda', 'Wolf' ],
          'Kansas City Zoo': [ 'Tiger', 'Lion' ],
          'Denver Zoo': [ 'Rhino', 'Grizly Bear', 'Panda', 'Monkey' ]
        }
      )
    })
  });

  describe("Beyonce Prompts", () => {
    it("beyonceHits", () => {
      const e = beyoncePrompts.beyonceHits();

      expect(e).to.deep.equal([
          'bootylicious',
          'singleLadies',
          'letMeUpgradeYou',
          'sorry',
          'sayMyName',
          'feelingMyself'
      ])
    });

    it("fierceRatings", () => {
      const e = beyoncePrompts.fierceRatings();

      expect(e).to.deep.equal([ 7, 10, 10, 10, 7, 9 ])
    });

    it("noBodySuit", () => {
      const e = beyoncePrompts.noBodySuit();

      expect(e).to.deep.equal({
        title: 'bootylicious',
        group: true,
        groupName: 'destinysChild',
        hair: [ 'straight', 'blonde', 'pink tips' ],
        signatureLook: 'fedora with yellow feather',
        videoTheme: 'dressing room dance',
        bestLine: 'Move your body up and down, make your booty touch the ground',
        fierceness: 7,
        formation: false,
        dancers: 20
      })
    });

    it("bodySuits", () => {
      const e = beyoncePrompts.bodySuits();

      expect(e).to.deep.equal([
        {
          title: 'singleLadies',
          group: false,
          groupName: 'none',
          hair: [ 'honey brown', 'half up, half down' ],
          signatureLook: 'black bodysuit and legs for days',
          videoTheme: 'single ladies dance',
          bestLine: "if you like it then you should've put a ring on it",
          fierceness: 10,
          formation: true,
          dancers: 2
        },
        {
          title: 'letMeUpgradeYou',
          group: false,
          groupName: 'none',
          hair: [ 'beaded bun', 'wet hair', 'honey brown', 'waves' ],
          signatureLook: 'flapper dress and bodysuit',
          videoTheme: 'decadence, water, gold beads and pearls',
          bestLine: 'I could do for you what Martin did for the people',
          fierceness: 10,
          formation: true,
          dancers: 5
        },
        {
          title: 'sorry',
          group: false,
          groupName: 'none',
          hair: [ 'braids', 'bun', 'blonde', 'waves', 'bob' ],
          signatureLook: 'braided crown with gold bikini top',
          videoTheme: 'party bus and Serena Williams in bodysuit',
          bestLine: 'Boi bye',
          fierceness: 10,
          formation: false,
          dancers: 1
        },
        {
          title: 'feelingMyself',
          group: true,
          groupName: 'Nicki Minaj featuring Beyonce',
          hair: [ 'blonde', 'wavy' ],
          signatureLook: 'sporty bodysuit',
          videoTheme: 'Coachella music festival',
          bestLine: 'Im felling myself',
          fierceness: 9,
          formation: false,
          dancers: 0
        }
      ])
    });

    it("highFierce", () => {
      const e = beyoncePrompts.highFierce();

      expect(e).to.deep.equal([
        {
          title: 'singleLadies',
          group: false,
          groupName: 'none',
          hair: [ 'honey brown', 'half up, half down' ],
          signatureLook: 'black bodysuit and legs for days',
          videoTheme: 'single ladies dance',
          bestLine: "if you like it then you should've put a ring on it",
          fierceness: 10,
          formation: true,
          dancers: 2
        },
        {
          title: 'letMeUpgradeYou',
          group: false,
          groupName: 'none',
          hair: [ 'beaded bun', 'wet hair', 'honey brown', 'waves' ],
          signatureLook: 'flapper dress and bodysuit',
          videoTheme: 'decadence, water, gold beads and pearls',
          bestLine: 'I could do for you what Martin did for the people',
          fierceness: 10,
          formation: true,
          dancers: 5
        },
        {
          title: 'sorry',
          group: false,
          groupName: 'none',
          hair: [ 'braids', 'bun', 'blonde', 'waves', 'bob' ],
          signatureLook: 'braided crown with gold bikini top',
          videoTheme: 'party bus and Serena Williams in bodysuit',
          bestLine: 'Boi bye',
          fierceness: 10,
          formation: false,
          dancers: 1
        },
        {
          title: 'feelingMyself',
          group: true,
          groupName: 'Nicki Minaj featuring Beyonce',
          hair: [ 'blonde', 'wavy' ],
          signatureLook: 'sporty bodysuit',
          videoTheme: 'Coachella music festival',
          bestLine: 'Im felling myself',
          fierceness: 9,
          formation: false,
          dancers: 0
        }
      ])
    });

    it("whereIsNicki", () => {
      const e = beyoncePrompts.whereIsNicki();

      expect(e).to.deep.equal(
        {
          title: 'feelingMyself',
          group: true,
          groupName: 'Nicki Minaj featuring Beyonce',
          hair: [ 'blonde', 'wavy' ],
          signatureLook: 'sporty bodysuit',
          videoTheme: 'Coachella music festival',
          bestLine: 'Im felling myself',
          fierceness: 9,
          formation: false,
          dancers: 0
        }
      )
    });

    it("soloSongs", () => {
      const e = beyoncePrompts.soloSongs();

      expect(e).to.deep.equal(
        [
          {
            title: 'singleLadies',
            group: false,
            groupName: 'none',
            hair: [ 'honey brown', 'half up, half down' ],
            signatureLook: 'black bodysuit and legs for days',
            videoTheme: 'single ladies dance',
            bestLine: "if you like it then you should've put a ring on it",
            fierceness: 10,
            formation: true,
            dancers: 2
          },
          {
            title: 'letMeUpgradeYou',
            group: false,
            groupName: 'none',
            hair: [ 'beaded bun', 'wet hair', 'honey brown', 'waves' ],
            signatureLook: 'flapper dress and bodysuit',
            videoTheme: 'decadence, water, gold beads and pearls',
            bestLine: 'I could do for you what Martin did for the people',
            fierceness: 10,
            formation: true,
            dancers: 5
          },
          {
            title: 'sorry',
            group: false,
            groupName: 'none',
            hair: [ 'braids', 'bun', 'blonde', 'waves', 'bob' ],
            signatureLook: 'braided crown with gold bikini top',
            videoTheme: 'party bus and Serena Williams in bodysuit',
            bestLine: 'Boi bye',
            fierceness: 10,
            formation: false,
            dancers: 1
          }
        ]
      )
    });

    it("post2006Movies", () => {
      const e = beyoncePrompts.post2006Movies();

      expect(e).to.deep.equal([
          { title: 'Dreamgirls', year: 2006, rating: 7 },
          { title: 'Obsessed', year: 2009, rating: 6 },
          { title: 'Cadillac Records', year: 2008, rating: 8 },
          { title: 'Life is But a Dream', year: 2013, rating: 6 },
          { title: 'The Pink Panther', year: 2006, rating: 4 },
          { title: 'Epic', year: 2013, rating: 7 }
      ])
    });

    it("groupHitSongs", () => {
      const e = beyoncePrompts.groupHitSongs();

      expect(e).to.deep.equal([
        {
          title: 'bootylicious',
          group: true,
          groupName: 'destinysChild',
          hair: [ 'straight', 'blonde', 'pink tips' ],
          signatureLook: 'fedora with yellow feather',
          videoTheme: 'dressing room dance',
          bestLine: 'Move your body up and down, make your booty touch the ground',
          fierceness: 7,
          formation: false,
          dancers: 20
        },
        {
          title: 'sayMyName',
          group: true,
          groupName: 'destinysChild',
          hair: [ 'blonde', 'curly', 'braid', 'pony tail' ],
          signatureLook: 'none',
          videoTheme: 'color blocked scenes with group',
          bestLine: 'say my name, say my name',
          fierceness: 7,
          formation: true,
          dancers: 6
        },
        {
          title: 'feelingMyself',
          group: true,
          groupName: 'Nicki Minaj featuring Beyonce',
          hair: [ 'blonde', 'wavy' ],
          signatureLook: 'sporty bodysuit',
          videoTheme: 'Coachella music festival',
          bestLine: 'Im felling myself',
          fierceness: 9,
          formation: false,
          dancers: 0
        }
      ])
    });

    it("blondeSong", () => {
      const e = beyoncePrompts.blondeSong();

      expect(e).to.deep.equal({
        title: 'bootylicious',
        group: true,
        groupName: 'destinysChild',
        hair: [ 'straight', 'blonde', 'pink tips' ],
        signatureLook: 'fedora with yellow feather',
        videoTheme: 'dressing room dance',
        bestLine: 'Move your body up and down, make your booty touch the ground',
        fierceness: 7,
        formation: false,
        dancers: 20
      })
    });

    it("sorry", () => {
      const e = beyoncePrompts.sorry();

      expect(e).to.deep.equal({
        title: 'sorry',
        group: false,
        groupName: 'none',
        hair: ['braids', 'bun', 'blonde', 'waves', 'bob'],
        signatureLook: 'braided crown with gold bikini top',
        videoTheme: 'party bus and Serena Williams in bodysuit',
        bestLine: 'Boi bye',
        fierceness: 10,
        formation: false,
        dancers: 1
      })
    });

    it("superFierce", () => {
      const e = beyoncePrompts.superFierce();

      expect(e).to.deep.equal([
        {
          title: 'singleLadies',
          group: false,
          groupName: 'none',
          hair: [ 'honey brown', 'half up, half down' ],
          signatureLook: 'black bodysuit and legs for days',
          videoTheme: 'single ladies dance',
          bestLine: "if you like it then you should've put a ring on it",
          fierceness: 10,
          formation: true,
          dancers: 2
        },
        {
          title: 'letMeUpgradeYou',
          group: false,
          groupName: 'none',
          hair: [ 'beaded bun', 'wet hair', 'honey brown', 'waves' ],
          signatureLook: 'flapper dress and bodysuit',
          videoTheme: 'decadence, water, gold beads and pearls',
          bestLine: 'I could do for you what Martin did for the people',
          fierceness: 10,
          formation: true,
          dancers: 5
        },
        {
          title: 'sorry',
          group: false,
          groupName: 'none',
          hair: [ 'braids', 'bun', 'blonde', 'waves', 'bob' ],
          signatureLook: 'braided crown with gold bikini top',
          videoTheme: 'party bus and Serena Williams in bodysuit',
          bestLine: 'Boi bye',
          fierceness: 10,
          formation: false,
          dancers: 1
        }
      ])
    });

    it("avgFierceness", () => {
      const e = beyoncePrompts.avgFierceness();

      expect(e).to.equal(8.833333333333334)
    });

    it("movieRatingSum", () => {
      const e = beyoncePrompts.movieRatingSum();

      expect(e).to.equal(48)
    });

    it("movieRatingAvg", () => {
      const e = beyoncePrompts.movieRatingAvg();

      expect(e).to.equal(6)
    });

    it("fierceObject", () => {
      const e = beyoncePrompts.fierceObject();

      expect(e).to.deep.equal({
        bootylicious: 7,
        singleLadies: 10,
        letMeUpgradeYou: 10,
        sorry: 10,
        sayMyName: 7,
        feelingMyself: 9
      })
    });

    it("movieRatings", () => {
      const e = beyoncePrompts.movieRatings();

      expect(e).to.deep.equal({
        "Austin Power's Goldmember": { rating: 5, averageRating: 6 },
        Dreamgirls: { rating: 7, averageRating: 6 },
        Obsessed: { rating: 6, averageRating: 6 },
        'Cadillac Records': { rating: 8, averageRating: 6 },
        'Life is But a Dream': { rating: 6, averageRating: 6 },
        'The Pink Panther': { rating: 4, averageRating: 6 },
        Epic: { rating: 7, averageRating: 6 },
        'The Fighting Temptations': { rating: 5, averageRating: 6 }
      })
    });

    it("dancersSum", () => {
      const e = beyoncePrompts.dancersSum();

      expect(e).to.equal(34)
    });

    it("allHairstyles", () => {
      const e = beyoncePrompts.allHairstyles();

      expect(e).to.deep.equal([
        'straight',           'blonde',
        'pink tips',          'honey brown',
        'half up, half down', 'beaded bun',
        'wet hair',           'waves',
        'braids',             'bun',
        'bob',                'curly',
        'braid',              'pony tail',
        'wavy'
      ])
    });

    it("hairstyleTotals", () => {
      const e = beyoncePrompts.hairstyleTotals();

      expect(e).to.deep.equal({
        straight: 1,
        blonde: 4,
        'pink tips': 1,
        'honey brown': 2,
        'half up, half down': 1,
        'beaded bun': 1,
        'wet hair': 1,
        waves: 2,
        braids: 1,
        bun: 1,
        bob: 1,
        curly: 1,
        braid: 1,
        'pony tail': 1,
        wavy: 1
      })
    });
  })

  describe("Broncos Prompts", () => {
    it("highestRatedPlayer", () => {
      const e = broncosPrompts.highestRatedPlayer();

      expect(e).to.equal('Von Miller')
    });
    it("playerNames", () => {
      const e = broncosPrompts.playerNames();

      expect(e).to.deep.equal([
        'Von Miller',       'Courtland Sutton',
        'Joe Flacco',       'Shelby Harris',
        'Todd Davis',       'Phillip Lindsay',
        'Garett Bolles',    'Chris Harris Jr.',
        'Shamarko Thomas',  'Connor McGovern',
        'DaeSean Hamilton', 'Elijah Wilkinson',
        'Will Parks',       'Derek Wolfe',
        'Kareem Jackson',   'JaWuan James',
        'Isaac Yiadom',     'Bradley Chubb',
        'Nico Falah',       'Josey Jewell',
        'Troy Fumagalli',   'Adam Gotsis',
        'Tim Patrick',      'Ronald Leary',
        'Dymonte Thomas',   'Devontae Booker',
        'Justin Simmons',   'Sam Jones',
        'Jake Butt',        'Royce Freeman',
        'Will Parks',       'Kevin Hogan',
        'Andy Janovich'
      ])
    });
    it("adjustRatings", () => {
      expect(broncos.map(bronco => bronco.rating)).to.deep.equal([
        95, 90, 90, 89, 88, 88, 88, 88, 87,
        86, 85, 84, 84, 83, 83, 82, 82, 82,
        81, 80, 80, 80, 79, 79, 79, 79, 79,
        78, 78, 77, 77, 72, 71
      ])

      broncosPrompts.adjustRatings();

      expect(broncos.map(bronco => bronco.rating)).to.deep.equal([
        97, 92, 92, 91, 90, 87, 90, 90, 82,
        88, 87, 86, 86, 85, 85, 84, 81, 84,
        76, 82, 82, 82, 81, 81, 81, 81, 81,
        80, 77, 79, 72, 74, 73
      ]);
    });

    it("offensiveTotal", () => {
      const e = broncosPrompts.offensiveTotal();

      expect(e).to.equal(18)
    });
    it("defensiveTotal", () => {
      const e = broncosPrompts.defensiveTotal();

      expect(e).to.equal(15)
    });
    it("separateTeams", () => {
      const e = broncosPrompts.separateTeams();

      expect(e).to.deep.equal({
        offense: [
          'Courtland Sutton', 'Joe Flacco',
          'Phillip Lindsay',  'Garett Bolles',
          'Connor McGovern',  'DaeSean Hamilton',
          'Elijah Wilkinson', 'JaWuan James',
          'Nico Falah',       'Troy Fumagalli',
          'Tim Patrick',      'Ronald Leary',
          'Devontae Booker',  'Sam Jones',
          'Jake Butt',        'Royce Freeman',
          'Kevin Hogan',      'Andy Janovich'
        ],
        defense: [
          'Von Miller',      'Shelby Harris',
          'Todd Davis',      'Chris Harris Jr.',
          'Shamarko Thomas', 'Will Parks',
          'Derek Wolfe',     'Kareem Jackson',
          'Isaac Yiadom',    'Bradley Chubb',
          'Josey Jewell',    'Adam Gotsis',
          'Dymonte Thomas',  'Justin Simmons',
          'Will Parks'
        ]
      })
    });

    it("offenseRatings", () => {
      const e = broncosPrompts.offenseRatings();

      expect(e.map(player => player.name)).to.deep.equal([
        'Courtland Sutton', 'Joe Flacco',
        'Garett Bolles',    'Connor McGovern',
        'Phillip Lindsay',  'DaeSean Hamilton',
        'Elijah Wilkinson', 'JaWuan James',
        'Troy Fumagalli',   'Tim Patrick',
        'Ronald Leary',     'Devontae Booker',
        'Sam Jones',        'Royce Freeman',
        'Jake Butt',        'Nico Falah',
        'Kevin Hogan',      'Andy Janovich'
      ])
    });
    it("cornerbackRatings", () => {
      const e = broncosPrompts.cornerbackRatings();

      expect(e).to.deep.equal([
        {
          name: 'Chris Harris Jr.',
          pos: 'CB',
          status: 'active',
          side: 'defense',
          rating: 90
        },
        {
          name: 'Kareem Jackson',
          pos: 'CB',
          status: 'active',
          side: 'defense',
          rating: 85
        },
        {
          name: 'Isaac Yiadom',
          pos: 'CB',
          status: 'questionable',
          side: 'defense',
          rating: 81
        }
      ])
    });
    it("injuredPlayers", () => {
      const e = broncosPrompts.injuredPlayers();

      expect(e).to.deep.equal([
        {
          name: 'Shamarko Thomas',
          pos: 'FS',
          status: 'injured',
          side: 'defense',
          rating: 82
        },
        {
          name: 'Nico Falah',
          pos: 'LG',
          status: 'injured',
          side: 'offense',
          rating: 76
        },
        {
          name: 'Will Parks',
          pos: 'FS',
          status: 'injured',
          side: 'defense',
          rating: 72
        }
      ])
    });
    it("questionablePlayers", () => {
      const e = broncosPrompts.questionablePlayers();

      expect(e).to.deep.equal([
        {
          name: 'Phillip Lindsay',
          pos: 'RB',
          status: 'questionable',
          side: 'offense',
          rating: 87
        },
        {
          name: 'Isaac Yiadom',
          pos: 'CB',
          status: 'questionable',
          side: 'defense',
          rating: 81
        },
        {
          name: 'Jake Butt',
          pos: 'TE',
          status: 'questionable',
          side: 'offense',
          rating: 77
        }
      ])
    });
    it("activePlayers", () => {
      const e = broncosPrompts.activePlayers();

      expect(e.map(player => player.name)).to.deep.equal([
        'Von Miller',       'Courtland Sutton',
        'Joe Flacco',       'Shelby Harris',
        'Todd Davis',       'Garett Bolles',
        'Chris Harris Jr.', 'Connor McGovern',
        'DaeSean Hamilton', 'Elijah Wilkinson',
        'Will Parks',       'Derek Wolfe',
        'Kareem Jackson',   'JaWuan James',
        'Bradley Chubb',    'Josey Jewell',
        'Troy Fumagalli',   'Adam Gotsis',
        'Tim Patrick',      'Ronald Leary',
        'Dymonte Thomas',   'Devontae Booker',
        'Justin Simmons',   'Sam Jones',
        'Royce Freeman',    'Kevin Hogan',
        'Andy Janovich'
      ])
    });
  });

  describe("Care Bear Prompts", () => {
    it("getBear", () => {
      const e = careBearPrompts.getBear('Oopsy');

      expect(e).to.deep.equal([{
        appearanceCount: 2,
        collection: '00s',
        bellyBadge: 'He does not have his own Belly badge but he will often draw a yellow shooting star (or in the intro The Show Logo) on his stomach with a marker. Occasionally, he also draws other things on his belly as well.',
        furColor: 'Light green',
        gender: 'Male',
        name: 'Oopsy Bear',
        nationality: 'Care-a-Lot, Kingdom of Caring' }
      ])
    });

    it("collectionTotals", () => {
      const e = careBearPrompts.collectionTotals();

      expect(e).to.deep.equal({
        Original: 10,
        '90s': 16,
        '00s': 20,
        '10s': 3,
        Other: 3
      })
    });
    it("organizedBears", () => {
      const e = careBearPrompts.organizedBears();

      expect(e).to.deep.equal([
        'All My Heart Bear', 'Always There Bear',
        'America Cares Bear', 'Amigo Bear',
        'Baby Hugs Bear', 'Baby Tugs Bear',
        'Bashful Heart Bear', 'Bedtime Bear',
        'Best Friend Bear', 'Birthday Bear',
        'Champ Bear', 'Cheer Bear',
        'Daydream Bear', 'Do Your Best Bear',
        'Forest Friend Bear', 'Friend Bear',
        'Funshine Bear', 'Good Luck Bear',
        'Grams Bear', 'Great Giving Bear',
        'Grumpy Bear', 'Harmony Bear',
        'Heartsong Bear', 'Helpful Heart Bear',
        'I Love You Bear', 'Laugh-a-Lot Bear',
        'Love-a-Lot Bear', 'Me Bear',
        'Messy Bear', 'Oopsy Bear',
        'Perfetct Panda', 'Piece of Heart Bear',
        'Pink Power Bear', 'Play-a-Lot Bear',
        'Polite Panda', 'Sea Friend Bear',
        'Secret Bear', 'Share Bear',
        'Shine Bright Bear', 'Smart Heart Bear',
        'Superstar Bear', 'Surprise Bear',
        'Sweet Dreams Bear', 'Sweet Sakura Bear',
        'Take Care Bear', 'Tenderheart Bear',
        'Thanks-a-Lot Bear', 'Too Loud Bear',
        'True Heart Bear', 'Wish Bear',
        'Wonderheart Bear', 'Work of Heart Bear'
      ])
    });
    it("search", () => {
      const e = careBearPrompts.search('furColor', 'Fuchsia');

      expect(e).to.deep.equal([ { appearanceCount: 2,
        collection: '00s',
        bellyBadge: 'Sunrise inside a violet heart',
        furColor: 'Fuchsia',
        gender: 'Female',
        name: 'Shine Bright Bear',
        nationality: 'Care-a-Lot, Kingdom of Caring' }
      ])
    });

    it("getAppearanceCount", () => {
      const e = careBearPrompts.getAppearanceCount();

      expect(e).to.deep.equal({
        '1': [
          'Forest Friend Bear',  'I Love You Bear',
          'Sea Friend Bear',     'Take Care Bear',
          'America Cares Bear',  'Smart Heart Bear',
          'Helpful Heart Bear',  'All My Heart Bear',
          'Heartsong Bear',      'Play-a-Lot Bear',
          'Superstar Bear',      'Always There Bear',
          'Pink Power Bear',     'Sweet Sakura Bear',
          'Great Giving Bear',   'Wonderheart Bear',
          'Piece of Heart Bear', 'Me Bear',
          'Messy Bear',          'Too Loud Bear'
        ],
        '2': [
          'Daydream Bear',
          'Grams Bear',
          'Perfetct Panda',
          'Bashful Heart Bear',
          'Do Your Best Bear',
          'Thanks-a-Lot Bear',
          'Amigo Bear',
          'Oopsy Bear',
          'Shine Bright Bear',
          'Work of Heart Bear',
          'Sweet Dreams Bear'
        ],
        '3': [ 'Baby Tugs Bear', 'Polite Panda', 'Best Friend Bear' ],
        '4': [
          'Birthday Bear',
          'Secret Bear',
          'Surprise Bear',
          'True Heart Bear'
        ],
        '5': [ 'Grumpy Bear', 'Baby Hugs Bear', 'Share Bear', 'Laugh-a-Lot Bear' ],
        '6': [ 'Harmony Bear' ],
        '7': [ 'Cheer Bear', 'Friend Bear', 'Good Luck Bear', 'Wish Bear' ],
        '8': [ 'Funshine Bear', 'Tenderheart Bear' ],
        '9': [ 'Love-a-Lot Bear', 'Champ Bear' ],
        '10': [ 'Bedtime Bear' ]
      })
    });
  });

  describe("queen Prompts", () => {
    it("sortQueenNames", () => {
      const e = queenPrompts.sortQueenNames();

      expect(e).to.deep.equal([
        'Alaska Thunderfuck 5000',
        'Alyssa Edwards',
        'Coco Montrese',
        'Detox Icunt',
        'Honey Mahogany',
        'Ivy Winters',
        'Jade Jolie',
        'Jinkx Monsoon',
        'Lineysha Sparx',
        'Monica Beverly Hillz',
        'Penny Tration',
        'Roxxy Andrews',
        'Serena Cha Cha',
        'Vivienne Pinay'
      ])
    });
    it("findMissCon", () => {
      const e = queenPrompts.findMissCon();

      expect(e).to.equal('Ivy Winters')
    });
    it("generateStringById", () => {
      const e = queenPrompts.generateStringById(62);

      expect(e).to.equal(`Alaska Thunderfuck 5000 placed second in Season 5 of RuPaul's Drag Race.`)
    });
    it("getQueenQuotes", () => {
      const e = queenPrompts.getQueenQuotes();

      expect(e).to.deep.equal({
        'Lineysha Sparx': "Don't worry, she thinks she's fashion but... She dresses like a Dracula",
        'Vivienne Pinay': 'Vivienne is all about glamour. My beauty is everything.',
        'Monica Beverly Hillz': "I'm Monica Beverly Hillz with a z.",
        'Coco Montrese': "I'm not joking bitch!",
        'Ivy Winters': 'Hey ladies! Oh my god!',
        'Roxxy Andrews': 'When life pulls you down, put on a shiny sequence gown',
        'Detox Icunt': 'I have HAD IT... officially!',
        'Alyssa Edwards': 'BACKROLLS?!?!',
        'Serena Cha Cha': "Does it bother you I keep saying I'm 21?!",
        'Honey Mahogany': 'Hey sisters!',
        'Penny Tration': 'Hello boys!',
        'Jade Jolie': 'Serving up fish, tuna on a platter.',
        'Jinkx Monsoon': "I am Seattle's premiere Jewish narcoleptic drag queen, thank you.",
        'Alaska Thunderfuck 5000': "I'll send you 10,000 dollars via PayPal if you let me stay in this competition"
      })
    });
    it("getTopThreeQueens", () => {
      const e = queenPrompts.getTopThreeQueens();

      expect(e).to.deep.equal({
        thirdPlace: 'Roxxy Andrews',
        firstPlace: 'Jinkx Monsoon',
        secondPlace: 'Alaska Thunderfuck 5000'
      })
    });
  });
  describe("Harry Potter Prompts", () => {
    it("filterHouseHead", () => {
      const e = harryPotterPrompts.filterHouseHead('McGonagall');

      expect(e).to.deep.equal([
        {
          name: 'Hermione',
          gender: 'female',
          house: 'Gryffindor',
          pointsForHouse: 50,
          personality: [ 'logical', 'kind', 'just', 'book worm' ]
        },
        {
          name: 'Harry',
          gender: 'male',
          house: 'Gryffindor',
          pointsForHouse: 35,
          personality: [ 'brave', 'loyal', 'selfless', 'courage' ]
        },
        {
          name: 'Ron',
          gender: 'male',
          house: 'Gryffindor',
          pointsForHouse: -5,
          personality: [ 'stubborn', 'strategist', 'loyal', 'passionate' ]
        }
      ])
    });
    it("filterHouseStudents", () => {
      const e = harryPotterPrompts.filterHouseStudents('McGonagall');

      expect(e).to.deep.equal([ 'Hermione', 'Harry', 'Ron' ])
    });
    it("housePoints", () => {
      const e = harryPotterPrompts.housePoints();

      expect(e).to.deep.equal(175)
    });
    it("ravenclawPoints", () => {
      const e = harryPotterPrompts.ravenclawPoints();

      expect(e).to.deep.equal(35)
    });
    it("kickOutSlytherins", () => {
      expect(students).to.deep.equal([
        {
          name: 'Hermione',
          gender: 'female',
          house: 'Gryffindor',
          pointsForHouse: 50,
          personality: [ 'logical', 'kind', 'just', 'book worm' ]
        },
        {
          name: 'Harry',
          gender: 'male',
          house: 'Gryffindor',
          pointsForHouse: 35,
          personality: [ 'brave', 'loyal', 'selfless', 'courage' ]
        },
        {
          name: 'Ron',
          gender: 'male',
          house: 'Gryffindor',
          pointsForHouse: -5,
          personality: [ 'stubborn', 'strategist', 'loyal', 'passionate' ]
        },
        {
          name: 'Luna',
          gender: 'female',
          house: 'Ravenclaw',
          pointsForHouse: 15,
          personality: [ 'whimsical', 'quiet', 'dependable' ]
        },
        {
          name: 'Cedric',
          gender: 'male',
          house: 'Hufflepuff',
          pointsForHouse: 20,
          personality: [ 'brave', 'just', 'modest' ]
        },
        {
          name: 'Draco',
          gender: 'male',
          house: 'Slytherin',
          pointsForHouse: 30,
          personality: [ 'cunning', 'arrogant', 'jealous' ]
        },
        {
          name: 'Pansy',
          gender: 'female',
          house: 'Slytherin',
          pointsForHouse: 10,
          personality: [ 'leader', 'selfish', 'team-player' ]
        },
        {
          name: 'Cho',
          gender: 'female',
          house: 'Ravenclaw',
          pointsForHouse: 20,
          personality: [ 'brave', 'loyal', 'intelligent', 'extrovert' ]
        }
      ])

      harryPotterPrompts.kickOutSlytherins();

      expect(students).to.deep.equal([
        {
          name: 'Hermione',
          gender: 'female',
          house: 'Gryffindor',
          pointsForHouse: 50,
          personality: [ 'logical', 'kind', 'just', 'book worm' ],
          currentlyAttending: true
        },
        {
          name: 'Harry',
          gender: 'male',
          house: 'Gryffindor',
          pointsForHouse: 35,
          personality: [ 'brave', 'loyal', 'selfless', 'courage' ],
          currentlyAttending: true
        },
        {
          name: 'Ron',
          gender: 'male',
          house: 'Gryffindor',
          pointsForHouse: -5,
          personality: [ 'stubborn', 'strategist', 'loyal', 'passionate' ],
          currentlyAttending: true
        },
        {
          name: 'Luna',
          gender: 'female',
          house: 'Ravenclaw',
          pointsForHouse: 15,
          personality: [ 'whimsical', 'quiet', 'dependable' ],
          currentlyAttending: true
        },
        {
          name: 'Cedric',
          gender: 'male',
          house: 'Hufflepuff',
          pointsForHouse: 20,
          personality: [ 'brave', 'just', 'modest' ],
          currentlyAttending: true
        },
        {
          name: 'Draco',
          gender: 'male',
          house: 'Slytherin',
          pointsForHouse: 30,
          personality: [ 'cunning', 'arrogant', 'jealous' ],
          currentlyAttending: false
        },
        {
          name: 'Pansy',
          gender: 'female',
          house: 'Slytherin',
          pointsForHouse: 10,
          personality: [ 'leader', 'selfish', 'team-player' ],
          currentlyAttending: false
        },
        {
          name: 'Cho',
          gender: 'female',
          house: 'Ravenclaw',
          pointsForHouse: 20,
          personality: [ 'brave', 'loyal', 'intelligent', 'extrovert' ],
          currentlyAttending: true
        }
      ])
    });
    it("missingStudents", () => {
      const e = harryPotterPrompts.missingStudents();

      expect(e).to.deep.equal([
        {
          name: 'Draco',
          gender: 'male',
          house: 'Slytherin',
          pointsForHouse: 30,
          personality: [ 'cunning', 'arrogant', 'jealous' ],
          currentlyAttending: false
        },
        {
          name: 'Pansy',
          gender: 'female',
          house: 'Slytherin',
          pointsForHouse: 10,
          personality: [ 'leader', 'selfish', 'team-player' ],
          currentlyAttending: false
        }
      ])
    });
    it("dumbledorWands", () => {
      const e = harryPotterPrompts.dumbledorWands();

      expect(hogwarts.currentHeadmaster.wand).to.deep.equal([
         '15 inch Elder Thestral tail hair core',
         'Elder Wand'
       ])
    });
    it("dumbledoreLivingFamily", () => {
      const e = harryPotterPrompts.dumbledoreLivingFamily();

      expect(e).to.deep.equal('Aberforth')
    });
    it("dumbledoreDeadFamily", () => {
      const e = harryPotterPrompts.dumbledoreDeadFamily();

      expect(e).to.deep.equal(['Percival', 'Kendra', 'Ariana'])
    });
  });
  describe("Marvel Prompts", () => {
    it("preMilleniumComics", () => {
      const e = marvelPrompts.preMilleniumComics();

      expect(e).to.deep.equal([
        "Incredible Hulk Vol. 1 #377 'Honey, I Shrunk the Hulk'",
        "X-Men: Alpha Vol. 1 #1 'Beginnings...'",
        "New Mutants Vol. 1 #98 'The Beginning of the End, Pt. 1'",
        "Captain America Comics Vol. 1 #1 'Meet Captain America'",
        "Amazing Fantasy Vol. 1 #15 'Spider-Man!'",
        "The Avengers Vol. 1 #1 'The Coming of the Avengers!'",
        "Fantastic Four Vol. 1 #1 'The Fantastic Four'",
        "Tales of Suspense Vol. 1 #39 'Iron Man Is Born!'",
        "Strange Tales Vol. 1 #110 'Doctor Strange Master of Black Magic'",
        "Incredible Hulk Vol. 1 #181 'And Now..the Wolverine!'",
        "Tales of Suspense Vol. 1 #52 'The Crimson Dynamo Strikes Again!'",
        "Fantastic Four Vol. 1 #52 'The Black Panther!'",
        "Tales to Astonish Vol. 1 #35 'Return of the Ant-Man'",
        "Iron Man Vol. 1 #55 'Beware the ... Blood Brothers!'",
        "Amazing Spider-Man Vol. 1 #2 'Duel to the Death with the Vulture!'",
        "Marvel Feature Vol. 1 #1 'The Day of the Defenders!'",
        "Uncanny X-Men Vol. 1 #266 'Gambit: Out of the Frying Pan'",
        "X-Factor Vol. 1 #15 'Whose Death is it, Anyway?'"
      ])
    });
    it("stanComics", () => {
      const e = marvelPrompts.stanComics();

      expect(e).to.deep.equal([
        'amazingFantasy',
        'avengers',
        'fantasticFour',
        'ironMan',
        'strangeTales',
        'blackWidow',
        'blackPanther',
        'talesToAstonish',
        'amazingSpiderman',
        'defenders'
      ])
    });
    it("adaptedMovies", () => {
      const e = marvelPrompts.adaptedMovies();

      expect(e).to.deep.equal([
        'Captain America: Civil War',
        'Logan',
        'The Avengers',
        'Thor Ragnarok',
        'Black Panther',
        'Doctor Strange',
        'Ant-Man',
        'Captain Marvel',
        'Spider-Man: Homecoming',
        'X2',
        'Deadpool',
        'Guardians of the Galaxy',
        'Avengers: Infinity War'
      ])
    });
    it("captainMedia", () => {
      const e = marvelPrompts.captainMedia();

      expect(e).to.deep.equal([
        {
          title: 'Captain America: Civil War',
          releaseYear: 2016,
          directors: [ 'Joe Russo', 'Anthony Russo' ],
          rating: 'PG13',
          stars: [
            'Chris Evans',
            'Robert Downey Jr.',
            'Sebtastian Stan',
            'Paul Rudd',
            'Elizabeth Olsen',
            'Paul Bettany',
            'Jeremy Renner',
            'Scarlett Johansson',
            'Anthony Mackie',
            'Tom Holland'
          ],
          imdbRating: 7.8,
          characters: [
            'Iron Man',
            'Captain America',
            'Bucky Barnes',
            'Scarlet Witch',
            'Spider-Man',
            'Vision',
            'Ant-Man',
            'Hawkeye',
            'Black Widow',
            'Falcon'
          ],
          basedOn: [ 'Civil War' ],
          link: 'https://www.imdb.com/title/tt3498820/',
          img: 'https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg',
          id: 1,
          favorite: false
        },
        {
          title: 'The Avengers',
          releaseYear: 2012,
          directors: [ 'Joss Whedon' ],
          rating: 'PG13',
          stars: [
            'Chris Evans',
            'Robert Downey Jr.',
            'Scarlett Johansson',
            'Chris Hemsworth',
            'Samuel L. Jackson',
            'Tom Hiddleston',
            'Mark Ruffalo',
            'Jeremy Renner'
          ],
          imdbRating: 8.1,
          characters: [
            'Captain America',
            'Iron Man',
            'Black Widow',
            'Thor',
            'Nick Fury',
            'Loki',
            'Hulk',
            'Hawkeye'
          ],
          basedOn: [ 'The New Avengers' ],
          link: 'https://www.imdb.com/title/tt0848228/?ref_=nv_sr_1',
          img: 'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
          id: 3,
          favorite: false
        },
        {
          title: 'Avengers: Infinity War',
          releaseYear: 2018,
          directors: [ 'Anthony Russo', 'Joe Russo' ],
          rating: 'PG13',
          stars: [
            'Robert Downey Jr.', 'Chris Hemsworth',
            'Chris Evans',       'Josh Brolin',
            'Mark Ruffalo',      'Scarlett Johansson',
            'Don Cheadle',       'Benedict Cumberbatch',
            'Tom Holland',       'Chadwick Boseman',
            'Zoe Saldana',       'Tom Hiddleston',
            'Anthony Mackie',    'Karen Gillian',
            'Chris Pratt',       'Dave Bautista',
            'Sebastian Stan',    'Elizabeth Olsen',
            'Bradley Cooper',    'Samuel L. Jackson',
            'Jeremy Renner'
          ],
          imdbRating: 8.5,
          characters: [
            'Iron Man',       'Captain America',
            'Thor',           'Thanos',
            'Hulk',           'Black Widow',
            'War Machine',    'Doctor Strange',
            'Spider-Man',     'Black Panther',
            'Gamora',         'Loki',
            'Falcon',         'Gamora',
            'Star-Lord',      'Drax',
            'Bucky Barnes',   'Scarlet Witch',
            'Rocket Raccoon', 'Nick Fury',
            'Hawkeye'
          ],
          basedOn: [ 'The Infinity Gauntlet' ],
          link: 'https://www.imdb.com/title/tt4154756/',
          img: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
          id: 13,
          favorite: false
        },
        {
          title: "Captain America Vol. 5 #1 'Out of Time: Part 1'",
          publishDate: 2005,
          writers: [ 'Ed Brubaker' ],
          pencillers: [ 'Steve Epting' ],
          inkers: [ 'Steve Epting' ],
          letterers: [ 'Randy Gentile' ],
          colorists: [ "Frank D'Armata" ],
          editors: [ 'Tom Brevoort', 'Andy Schmidt', 'Nicole Wiley', 'Molly Lazer' ],
          characters: [ 'Captain America', 'Bucky Barnes' ],
          adapted: false,
          summary: "Steve deals with the repurcussions of the Avengers disbanding and a cybernetic assassin breaks into Red Skull's apartment to kill him and steal his Cosmic Cube.",
          link: 'https://marvel.fandom.com/wiki/File:Captain_America_Vol_5_1.jpg',
          img: 'https://vignette.wikia.nocookie.net/marveldatabase/images/9/9d/Captain_America_Vol_5_1.jpg/revision/latest/scale-to-width-down/312?cb=20181116202236',
          id: 27,
          favorite: false
        },
        {
          title: 'Civil War',
          publishDate: 2006,
          writers: [ 'Mark Millar' ],
          pencillers: [ 'Steve McNiven' ],
          inkers: [ 'Dexter Vines' ],
          letterers: [ 'Chris Eliopoulos' ],
          colorists: [ 'Morry Hollowell' ],
          editors: [
            'Molly Lazer',
            'Aubrey Sitterson',
            'Andy Schmidt',
            'Tom Brevoort'
          ],
          characters: [
            'Iron Man',
            'Spider-Man',
            'Doctor Strange',
            'Luke Cage',
            'Mister Fantastic',
            'Henry Pym',
            'Captain America',
            'Black Panther'
          ],
          adapted: true,
          summary: 'After a huge number of civilian lives lost, the government tries to enact The Superhero Registration Act, an authoritarian law where all heroes will have to register with the government. Some heroes, like Iron Man, are in favor of the law while others, like Captain America, are not.',
          link: 'https://marvel.fandom.com/wiki/Civil_War_(Event)',
          img: 'https://vignette.wikia.nocookie.net/marveldatabase/images/0/0f/Civil_War_Vol_1_1_Turner_Variant.jpg/revision/latest?cb=20070524065830',
          id: 15,
          favorite: false
        },
        {
          title: 'House of M',
          publishDate: 2005,
          writers: [ 'Brian Michael Bendis' ],
          pencillers: [ 'Oliver Coipel' ],
          inkers: [ 'Tim Townsend' ],
          letterers: null,
          colorists: [ "Frank D'Armata" ],
          editors: null,
          characters: [
            'Scarlet Witch',
            'Quicksilver',
            'Magneto',
            'Professor Xavier',
            'Captain America',
            'Emma Frost',
            'Doctor Strange'
          ],
          adapted: false,
          summary: 'Mutant Scarlet Witch suffers a breakdown and cannot control her powers. The Avengers quarrel on how to help her, some of them think there is no other way than to kill her, while others think they could control her magic. When they try to talk to her, she alters the reality of Earth and the lives of the heroes in it.',
          link: 'https://marvel.fandom.com/wiki/Earth-58163',
          img: 'https://vignette.wikia.nocookie.net/marveldatabase/images/6/67/Family_Magnus_%28Earth-58163%29_from_House_of_M_Vol_1_6_001.jpg/revision/latest/scale-to-width-down/700?cb=20061206101145',
          id: 16,
          favorite: false
        },
        {
          title: 'Captain Marvel Vol. 7 #1',
          publishDate: 2012,
          writers: [ 'Kelly Sue DeConnick' ],
          pencillers: [ 'Dexter Soy' ],
          inkers: [ 'Dexter Soy' ],
          letterers: [ 'Joe Caramagna' ],
          colorists: [ 'Dexter Soy' ],
          editors: [ 'Stephen Wacker' ],
          characters: [ 'Captain Marvel', 'Captain America' ],
          adapted: true,
          summary: 'The first appearance of Carol Danvers as Captain Marvel, ace pilot and legendary avenger.',
          link: 'https://marvel.fandom.com/wiki/File:Captain_Marvel_Vol_1_1.jpg',
          img: 'https://vignette.wikia.nocookie.net/marveldatabase/images/9/92/Captain_Marvel_Vol_1_1.jpg/revision/latest/scale-to-width-down/317?cb=20080816201429',
          id: 25,
          favorite: false
        },
        {
          title: "Captain America Comics Vol. 1 #1 'Meet Captain America'",
          publishDate: 1941,
          writers: [ 'Joe Simon', 'Jack Kirby' ],
          pencillers: [ 'Joe Simon', 'Jack Kirby' ],
          inkers: [ 'Al Liederman' ],
          letterers: null,
          colorists: null,
          editors: [ 'Joe Simon' ],
          characters: [ 'Captain America' ],
          adapted: true,
          summary: 'A young soldier is given serum to become bigger, faster, and stronger than a normal human. The doctor who gave it to him calls him Captain America and tells him his duty is to protect America from nazi forces.',
          link: 'https://marvel.fandom.com/wiki/File:Captain_America_Comics_Vol_1_1.jpg',
          img: 'https://vignette.wikia.nocookie.net/marveldatabase/images/9/9f/Captain_America_Comics_Vol_1_1.jpg/revision/latest/scale-to-width-down/337?cb=20180404011756',
          id: 26,
          favorite: false
        }
      ])
    });
    it("ratedRMovies", () => {
      const e = marvelPrompts.ratedRMovies();

      expect(e).to.deep.equal([ 'Logan', 'Deadpool' ])
    });
    it("wellRecievedMovies", () => {
      const e = marvelPrompts.wellRecievedMovies();

      expect(e).to.deep.equal([
        'Logan',
        'The Avengers',
        'Guardians of the Galaxy',
        'Avengers: Infinity War'
      ])
    });
    it("sortMoviesByRating", () => {
      const e = marvelPrompts.sortMoviesByRating();

      expect(e).to.deep.equal([
        'Avengers: Infinity War',
        'Logan',
        'The Avengers',
        'Guardians of the Galaxy',
        'Deadpool',
        'Thor Ragnarok',
        'Captain America: Civil War',
        'Doctor Strange',
        'Spider-Man: Homecoming',
        'X2',
        'Black Panther',
        'Ant-Man',
        'Captain Marvel'
      ])
    });
    it("charactersMovies", () => {
      const e = marvelPrompts.charactersMovies();

      expect(e).to.deep.equal({
        'Iron Man': [
          'Captain America: Civil War',
          'The Avengers',
          'Spider-Man: Homecoming',
          'Avengers: Infinity War'
        ],
        'Captain America': [
          'Captain America: Civil War',
          'The Avengers',
          'Avengers: Infinity War'
        ],
        'Bucky Barnes': [ 'Captain America: Civil War', 'Avengers: Infinity War' ],
        'Scarlet Witch': [ 'Captain America: Civil War', 'Avengers: Infinity War' ],
        'Spider-Man': [
          'Captain America: Civil War',
          'Spider-Man: Homecoming',
          'Avengers: Infinity War'
        ],
        Vision: [ 'Captain America: Civil War' ],
        'Ant-Man': [ 'Captain America: Civil War', 'Ant-Man' ],
        Hawkeye: [
          'Captain America: Civil War',
          'The Avengers',
          'Avengers: Infinity War'
        ],
        'Black Widow': [
          'Captain America: Civil War',
          'The Avengers',
          'Avengers: Infinity War'
        ],
        Falcon: [ 'Captain America: Civil War', 'Ant-Man', 'Avengers: Infinity War' ],
        Wolverine: [ 'Logan', 'X2' ],
        'X-23': [ 'Logan' ],
        'Professor Xavier': [ 'Logan', 'X2' ],
        Thor: [ 'The Avengers', 'Thor Ragnarok', 'Avengers: Infinity War' ],
        'Nick Fury': [ 'The Avengers', 'Captain Marvel', 'Avengers: Infinity War' ],
        Loki: [ 'The Avengers', 'Thor Ragnarok', 'Avengers: Infinity War' ],
        Hulk: [ 'The Avengers', 'Thor Ragnarok', 'Avengers: Infinity War' ],
        Valkyrie: [ 'Thor Ragnarok' ],
        Hela: [ 'Thor Ragnarok' ],
        Surtur: [ 'Thor Ragnarok' ],
        Grandmaster: [ 'Thor Ragnarok' ],
        Odin: [ 'Thor Ragnarok' ],
        Korg: [ 'Thor Ragnarok' ],
        Miek: [ 'Thor Ragnarok' ],
        'Black Panther': [ 'Black Panther', 'Avengers: Infinity War' ],
        Shuri: [ 'Black Panther' ],
        "M'Baku": [ 'Black Panther' ],
        Okoye: [ 'Black Panther' ],
        Killmonger: [ 'Black Panther' ],
        Nakia: [ 'Black Panther' ],
        'Doctor Stephen Strange': [ 'Doctor Strange' ],
        'Ancient One': [ 'Doctor Strange' ],
        'Karl Mordo': [ 'Doctor Strange' ],
        Wong: [ 'Doctor Strange' ],
        Wasp: [ 'Ant-Man' ],
        'Hank Pym': [ 'Ant-Man' ],
        'Yellow Jacket': [ 'Ant-Man' ],
        'Captain Marvel': [ 'Captain Marvel' ],
        Talos: [ 'Captain Marvel' ],
        Korath: [ 'Captain Marvel' ],
        'Phil Coulson': [ 'Captain Marvel' ],
        Ronan: [ 'Captain Marvel', 'Guardians of the Galaxy' ],
        Vulture: [ 'Spider-Man: Homecoming' ],
        Magneto: [ 'X2' ],
        Storm: [ 'X2' ],
        'Jean Grey': [ 'X2' ],
        Cyclops: [ 'X2' ],
        Rogue: [ 'X2' ],
        Mystique: [ 'X2' ],
        Nightcrawler: [ 'X2' ],
        Deadpool: [ 'Deadpool' ],
        'Negasonic Teenage Warhead': [ 'Deadpool' ],
        Ajax: [ 'Deadpool' ],
        Colossus: [ 'Deadpool' ],
        'Star-Lord': [ 'Guardians of the Galaxy', 'Avengers: Infinity War' ],
        Gamora: [ 'Guardians of the Galaxy', 'Avengers: Infinity War' ],
        Groot: [ 'Guardians of the Galaxy' ],
        'Rocket Raccoon': [ 'Guardians of the Galaxy', 'Avengers: Infinity War' ],
        Drax: [ 'Guardians of the Galaxy', 'Avengers: Infinity War' ],
        Nebula: [ 'Guardians of the Galaxy' ],
        Yondu: [ 'Guardians of the Galaxy' ],
        Thanos: [ 'Avengers: Infinity War' ],
        'War Machine': [ 'Avengers: Infinity War' ],
        'Doctor Strange': [ 'Avengers: Infinity War' ]
      })
    });
  });
  describe("Murder Prompts", () => {
    it("culturallyInsensitive", () => {
      const e = murderPrompts.culturallyInsensitive();

      expect(e).to.deep.equal([
        {
          name: 'Birds of a Feather',
          season: 1,
          episode: 2,
          synopsis: 'Drag murderer suspect',
          culturallyInsensitive: true,
          guestStars: [ 'Jeff Conaway', 'Gabe Kaplan', 'Martin Landau' ]
        },
        {
          name: 'Curse of the Daanav',
          season: 4,
          episode: 14,
          synopsis: 'Cursed Indian ruby',
          culturallyInsensitive: true,
          guestStars: [ 'Jane Badler', 'Kabir Bedi', 'Larry Linville' ]
        }
      ])
    });
    it("findMagnum", () => {
      const e = murderPrompts.findMagnum();

      expect(e).to.deep.equal({
        name: "Magnum on Ice ",
        season: 3,
        episode: 8,
        synopsis: "Magnum PI crossover",
        culturallyInsensitive: false,
        guestStars: [
          "John McMartin",
          "Tom Selleck",
          "Jessica Walter"
        ]
      })
    });
    it("murderStars", () => {
      const e = murderPrompts.murderStars();

      expect(e).to.deep.equal([
        'Jeff Conaway',    'Gabe Kaplan',
        'Martin Landau',   'Vicki Lawrence',
        'Leslie Nielsen',  'Jo Anne Worley',
        'Bryan Cranston',  'Linda Hamilton',
        'David Spielberg', 'John McMartin',
        'Tom Selleck',     'Jessica Walter',
        'Jane Badler',     'Kabir Bedi',
        'Larry Linville'
      ])
    });
    it("episodeStars", () => {
      const e = murderPrompts.episodeStars();

      expect(e).to.deep.equal([
        {
          name: 'Birds of a Feather',
          guestStars: [ 'Jeff Conaway', 'Gabe Kaplan', 'Martin Landau' ]
        },
        {
          name: 'My Johnny Lies Over the Ocean',
          guestStars: [ 'Vicki Lawrence', 'Leslie Nielsen', 'Jo Anne Worley' ]
        },
        {
          name: 'Menace, Anyone?',
          guestStars: [ 'Bryan Cranston', 'Linda Hamilton', 'David Spielberg' ]
        },
        {
          name: 'Magnum on Ice ',
          guestStars: [ 'John McMartin', 'Tom Selleck', 'Jessica Walter' ]
        },
        {
          name: 'Curse of the Daanav',
          guestStars: [ 'Jane Badler', 'Kabir Bedi', 'Larry Linville' ]
        }
      ])
    });
    it("episodeSynopsis", () => {
      const e = murderPrompts.episodeSynopsis();

      expect(e).to.deep.equal([
        { 'Birds of a Feather': 'Drag murderer suspect' },
        { 'My Johnny Lies Over the Ocean': 'Mayhem at sea' },
        { 'Menace, Anyone?': 'Tennis star scandal' },
        { 'Magnum on Ice ': 'Magnum PI crossover' },
        { 'Curse of the Daanav': 'Cursed Indian ruby' }
      ])
    });
    it("guestStars", () => {
      const e = murderPrompts.guestStars();

      expect(e).to.deep.equal({
        guestStars: [
          'Jeff Conaway',    'Gabe Kaplan',
          'Martin Landau',   'Vicki Lawrence',
          'Leslie Nielsen',  'Jo Anne Worley',
          'Bryan Cranston',  'Linda Hamilton',
          'David Spielberg', 'John McMartin',
          'Tom Selleck',     'Jessica Walter',
          'Jane Badler',     'Kabir Bedi',
          'Larry Linville'
        ]
      })
    });
    it("episodeCoStars", () => {
      const e = murderPrompts.episodeCoStars();

      expect(e).to.deep.equal({
        'Birds of a Feather': [ 'Jeff Conaway', 'Gabe Kaplan', 'Martin Landau' ],
        'My Johnny Lies Over the Ocean': [ 'Vicki Lawrence', 'Leslie Nielsen', 'Jo Anne Worley' ],
        'Menace, Anyone?': [ 'Bryan Cranston', 'Linda Hamilton', 'David Spielberg' ],
        'Magnum on Ice ': [ 'John McMartin', 'Tom Selleck', 'Jessica Walter' ],
        'Curse of the Daanav': [ 'Jane Badler', 'Kabir Bedi', 'Larry Linville' ]
      })
    });
  });
  describe("Restaurant Prompts", () => {
    it("totalReviews", () => {
      const e = restaurantPrompts.totalReviews();

      expect(e).to.equal(6501)
    });
    it("restaurantsByReviews", () => {
      const e = restaurantPrompts.restaurantsByReviews();

      expect(e).to.deep.equal({
        'Fruition Restaurant': 788,
        'Sushi Den': 479,
        'Sam\'s No. 3': 1870,
        'Pete\'s Kitchen': 236,
        'Root Down': 972,
        'The Capital Grille': 531,
        Acorn: 309,
        Panzano: 1316 })
    });
    it("restaurantsByType", () => {
      const e = restaurantPrompts.restaurantsByType();

      expect(e).to.deep.equal({
        'Fine Dining': [ 'Fruition Restaurant', 'Sushi Den' ],
        'Cheap Eats': [ "Sam's No. 3", "Pete's Kitchen" ],
        Lunch: [ 'Root Down', 'The Capital Grille' ],
        Dinner: [ 'Acorn', 'Panzano' ]
      })
    });
    it("restaurantsByNeighborhood", () => {
      const e = restaurantPrompts.restaurantsByNeighborhood();

      expect(e).to.deep.equal({
        'Fruition Restaurant': 'Cap Hill',
        'Sushi Den': 'Platt Park',
        'Sam\'s No. 3': 'LoDo',
        'Pete\'s Kitchen': 'City Park',
        'Root Down': 'Highlands',
        'The Capital Grille': 'LoDo',
        Acorn: 'RiNo',
        Panzano: 'LoDo'
      })
    });
    it("neighborhoodRestaurants", () => {
      const e = restaurantPrompts.neighborhoodRestaurants();

      expect(e).to.deep.equal({
        'Cap Hill': [ 'Fruition Restaurant' ],
        'Platt Park': [ 'Sushi Den' ],
        LoDo: [ 'Sam\'s No. 3', 'The Capital Grille', 'Panzano' ],
        'City Park': [ 'Pete\'s Kitchen' ],
        Highlands: [ 'Root Down' ],
        RiNo: [ 'Acorn' ]
      })
    });
  });
  describe("Strong Bad Prompts", () => {
    it.skip("halloweenToons", () => {
      const e = strongBadPrompts.halloweenToons();

      expect(e).to.deep.equal({})
      // let halloweenCostumes = {
//   'Homestarloween Party': [
//       { 'Homestar Runner': 'Kurt Cobain' },
//       { 'Strong Bad': 'Carmen Miranda' },
//       { 'The Cheat': 'Garfield' },
//       { 'Strong Mad': 'Slim Goodbody' },
//       { 'Strong Sad': 'Gorbachev' },
//       { 'Pom Pom': 'Stay-Puft Marshmallow Man' },
//       { 'Marzipan': 'Jeannie' },
//       { 'Coach Z': 'Flavor Flav' },
//       { 'Bubs': 'Rerun' },
//       { 'The King of Town': 'Cap\'n Crunch' },
//       { 'The Poopsmith': 'Tron' },
//       { 'Homsar': 'none' }
//    ],

//    'The House That Gave Sucky Treats': [
//      { 'Homestar Runner': 'The Greatest American Hero' },
//      { 'Strong Bad': 'Carmen Sandiego' },
//      ...
//    ]
//    ...
// }
    });
    it.skip("dangeresque", () => {
      const e = strongBadPrompts.dangeresque();

      expect(e).to.deep.equal({})
      // let dangeresque = {
//   'Dangeresque 0: The Prequel Begins': [ 'none' ],
//   'Dangeresque 1: Dangeresque, Too?': [ 'Dangeresque', 'Cutesy Buttons', 'Renaldo', 'Baron Darin Diamonocle' ],
//   ...
// }
    });
    it.skip("performers", () => {
      const e = strongBadPrompts.performers();

      expect(e).to.deep.equal({})
      // let performers = {
//   'All characters': [ 'Loading Screens' ],
//   'The Cheat': [ 'Where You Goin\' 2?', 'Rap Song', 'Everybody to the Limit', 'The Cheat Theme Song', 'Cool Tapes', 'Rockin\' the Spot', 'Doley-O', 'Limozeen Is Not Very Nice', 'My Face (Please Don\'t Put Needles In It)' ],
//   ...
// }
    });
    it.skip("performers", () => {
      const e = strongBadPrompts.performers();

      expect(e).to.deep.equal({})
      // let performers = {
//   'All characters': [ 'Loading Screens' ],
//   'The Cheat': [ 'Where You Goin\' 2?', 'Rap Song', 'Everybody to the Limit', 'The Cheat Theme Song', 'Cool Tapes', 'Rockin\' the Spot', 'Doley-O', 'Limozeen Is Not Very Nice', 'My Face (Please Don\'t Put Needles In It)' ],
//   ...
// }
    });
  });
  describe("Fourteener Prompts", () => {
    it.skip("over14000", () => {
      const e = fourteenerPrompts.over14000();

      expect(e).to.deep.equal({})
    });
    it.skip("class2", () => {
      const e = fourteenerPrompts.class2();
      // Example: ['south ridge', 'southwest ridge', etc...]
      expect(e).to.deep.equal({})
    });
    it.skip("totalRoutes", () => {
      const e = fourteenerPrompts.totalRoutes();

      expect(e).to.deep.equal({})
    });
    it.skip("class4", () => {
      const e = fourteenerPrompts.class4();

      expect(e).to.deep.equal({})
    });
    it.skip("rangeNames", () => {
      const e = fourteenerPrompts.rangeNames();

      expect(e).to.deep.equal({})
    });
    it.skip("longsMileage", () => {
      const e = fourteenerPrompts.longsMileage();

      expect(e).to.deep.equal({})
    });
    it.skip("sawatchMileage", () => {
      const e = fourteenerPrompts.sawatchMileage();

      expect(e).to.deep.equal({})
    });
    it.skip("tallestPeaks", () => {
      const e = fourteenerPrompts.tallestPeaks();

      expect(e).to.deep.equal({})
    });
    it.skip("totalMileage", () => {
      const e = fourteenerPrompts.totalMileage();

      expect(e).to.deep.equal({})
    });
    it.skip("totalGain", () => {
      const e = fourteenerPrompts.totalGain();

      expect(e).to.deep.equal({})
    });
    it.skip("rankedPeaks", () => {
      const e = fourteenerPrompts.rankedPeaks();

      expect(e).to.deep.equal({})
    });
    it.skip("sortedFourteeners", () => {
      const e = fourteenerPrompts.sortedFourteeners();

      expect(e).to.deep.equal({})
    });
    it.skip("peaksData", () => {
      const e = fourteenerPrompts.peaksData();

      expect(e).to.deep.equal({})
    });
    it.skip("rangeData", () => {
      const e = fourteenerPrompts.rangeData();
      // ie { tenMile: { 'class 1': 3, 'class 2': 5...etc}
      expect(e).to.deep.equal({})
    });
    it.skip("unranked", () => {
      const e = fourteenerPrompts.unranked();

      expect(e).to.deep.equal({})
    });
    it.skip("tallestFourteener", () => {
      const e = fourteenerPrompts.tallestFourteener();

      expect(e).to.deep.equal({})
    });
    it.skip("shortestFourteener", () => {
      const e = fourteenerPrompts.shortestFourteener();

      expect(e).to.deep.equal({})
    });
    it.skip("forestData", () => {
      const e = fourteenerPrompts.forestData();

      expect(e).to.deep.equal({})
    });
    it.skip("rangePeakData", () => {
      const e = fourteenerPrompts.rangePeakData();

      expect(e).to.deep.equal({})
    });
  });


});
