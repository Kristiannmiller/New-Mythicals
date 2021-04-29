const chai = require("chai");
const expect = chai.expect;

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
  beyoncePrompts
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
    it.skip("totalDamage", () => {
      const e = ultimaPrompts.totalDamage();

      expect(e).to.deep.equal(113)
    });

    it.skip("charactersByTotal", () => {
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
    it.skip("countAwesomeDinosaurs", () => {
      const e = dinosaurPrompts.countAwesomeDinosaurs();

      expect(e).to.deep.equal({
        'Jurassic Park': 5,
        'The Lost World: Jurassic Park': 8,
        'Jurassic Park III': 9,
        'Jurassic World': 11,
        'Jurassic World: Fallen Kingdom': 18
      })
    });

    it.skip("averageAgePerMovie", () => {
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

    it.skip("uncastActors", () => {
      const e = dinosaurPrompts.uncastActors();

      expect(e).to.deep.equal([{
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
      }])
    });

    it.skip("actorsAgesInMovies", () => {
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
    it.skip("findCarnivores", () => {
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

    it.skip("asianAnimals", () => {
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

    it.skip("findHome", () => {
      const e = animalPrompts.findHome('Tiger');

      expect(e).to.equal('Africa')
    })

    it.skip("weighingAnimals", () => {
      const e = animalPrompts.weighingAnimals('Wolf', 6);

      expect(e).to.equal(540)
    })

    it.skip("wolfAcceptingZoos", () => {
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

    it.skip("heaviestAnimal", () => {
      const e = animalPrompts.heaviestAnimal();

      expect(e).to.deep.equal(
        { name:'Rhino',
          weight: 1700,
          type: 'Herbivore',
          home: 'Africa' }
      )
    })

    it.skip("smallestAnimalZoo", () => {
      const e = animalPrompts.smallestAnimalZoo();

      expect(e).to.deep.equal(
        { name: 'San Antonio Zoo',
          maxWeight: 3000,
          typesAllowed:['Herbivore', 'Omnivore'],
          continents:['Asia', 'North America'] }
      )
    })

    it.skip("zooAnimalsAccepted", () => {
      const e = animalPrompts.zooAnimalsAccepted();

      expect(e).to.deep.equal(
        { 'Denver Zoo': [ 'Rhino', 'Grizly Bear', 'Monkey', 'Panda' ],
          'Bronx Zoo': [ 'Rhino', 'Monkey', 'Panda' ],
          'San Diego Wild Animal Park': [ 'Wolf', 'Panda' ],
          'Kansas City Zoo': [ 'Lion', 'Tiger' ],
          'Central Park Zoo': [ 'Lion', 'Tiger', 'Wolf' ],
          'San Antonio Zoo': [ 'Grizly Bear', 'Panda' ] }
      )
    })
  });

  describe("Beyonce Prompts", () => {
    it.skip("beyonceHits", () => {
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

    it.skip("fierceRatings", () => {
      const e = beyoncePrompts.fierceRatings();

      expect(e).to.deep.equal([ 7, 10, 10, 10, 7, 9 ])
    });

    it.skip("noBodySuit", () => {
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

    it.skip("bodySuits", () => {
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

    it.skip("highFierce", () => {
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

    it.skip("whereIsNicki", () => {
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

    it.skip("soloSongs", () => {
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

    it.skip("post2006Movies", () => {
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

    it.skip("groupHitSongs", () => {
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

    it.skip("blondeSong", () => {
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

    it.skip("sorry", () => {
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

    it.skip("superFierce", () => {
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

    it.skip("avgFierceness", () => {
      const e = beyoncePrompts.avgFierceness();

      expect(e).to.equal(8.833333333333334)
    });

    it.skip("movieRatingSum", () => {
      const e = beyoncePrompts.movieRatingSum();

      expect(e).to.equal(48)
    });

    it.skip("movieRatingAvg", () => {
      const e = beyoncePrompts.movieRatingAvg();

      expect(e).to.equal(6)
    });

    it.skip("fierceObject", () => {
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

    it.skip("movieRatings", () => {
      const e = beyoncePrompts.movieRatings();

      expect(e).to.deep.equal({
        "Austin Power's Goldmember": { rating: 5, averageRating: 'REPLACE WITH YOUR RESULT HERE' },
        Dreamgirls: { rating: 7, averageRating: 'REPLACE WITH YOUR RESULT HERE' },
        Obsessed: { rating: 6, averageRating: 'REPLACE WITH YOUR RESULT HERE' },
        'Cadillac Records': { rating: 8, averageRating: 'REPLACE WITH YOUR RESULT HERE' },
        'Life is But a Dream': { rating: 6, averageRating: 'REPLACE WITH YOUR RESULT HERE' },
        'The Pink Panther': { rating: 4, averageRating: 'REPLACE WITH YOUR RESULT HERE' },
        Epic: { rating: 7, averageRating: 'REPLACE WITH YOUR RESULT HERE' },
        'The Fighting Temptations': { rating: 5, averageRating: 'REPLACE WITH YOUR RESULT HERE' }
      })
    });

    it.skip("dancersSum", () => {
      const e = beyoncePrompts.dancersSum();

      expect(e).to.equal(34)
    });

    it.skip("allHairstyles", () => {
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

      expect(e).to.equal({
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
})
