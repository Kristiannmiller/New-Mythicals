let students = [
  {
    name: 'Hermione',
    gender: 'female',
    house: 'Gryffindor',
    pointsForHouse: 50,
    personality: ['logical', 'kind', 'just', 'book worm']
  },
  {
    name: 'Harry',
    gender: 'male',
    house: 'Gryffindor',
    pointsForHouse: 35,
    personality: ['brave', 'loyal', 'selfless', 'courage']
  },
  {
    name: 'Ron',
    gender: 'male',
    house: 'Gryffindor',
    pointsForHouse: -5,
    personality: ['stubborn', 'strategist', 'loyal', 'passionate']
  },
  {
    name: 'Luna',
    gender: 'female',
    house: 'Ravenclaw',
    pointsForHouse: 15,
    personality: ['whimsical', 'quiet', 'dependable']
  },
  {
    name: 'Cedric',
    gender: 'male',
    house: 'Hufflepuff',
    pointsForHouse: 20,
    personality: ['brave', 'just', 'modest']
  },
  {
    name: 'Draco',
    gender: 'male',
    house: 'Slytherin',
    pointsForHouse: 30,
    personality: ['cunning', 'arrogant', 'jealous']
  },
  {
    name: 'Pansy',
    gender: 'female',
    house: 'Slytherin',
    pointsForHouse: 10,
    personality: ['leader', 'selfish', 'team-player']
  },
  {
    name: 'Cho',
    gender: 'female',
    house: 'Ravenclaw',
    pointsForHouse: 20,
    personality: ['brave', 'loyal', 'intelligent', 'extrovert']
  }
]

let houseHeads = {
  McGonagall: 'Gryffindor',
  Snape: 'Slytherin',
  Sprout: 'Hufflepuff',
  Flitwick: 'Ravenclaw'
}

//Problems 1-3 use everything above, problems 4-5 use the hogwarts object

let hogwarts = {
  classes: [
    { name: 'Transfiguration', instructor: 'McGonagall', type: 'core' },
    { name: 'Charms', instructor: 'Flitwick', type: 'core' },
    { name: 'Potions', instructor: 'Snape', type: 'core' },
    { name: 'History of Magic', instructor: 'P. Binns', type: 'core' },
    { name: 'Defence Against the Dark Arts', instructor: 'N/A', type: 'core' },
    { name: 'Astronomy', instructor: 'P. Sinistra', type: 'core' },
    { name: 'Herbology', instructor: 'Sprout', type: 'core' },
    { name: 'Arithmancy', instructor: 'P. Vector', type: 'elective' },
    { name: 'Muggle Studies', instructor: 'P. Burbage', type: 'elective' },
    { name: 'Divination', instructor: 'P. Trelawney', type: 'elective' },
    { name: 'Study of Ancient Runes', instructor: 'P. Babbling', type: 'elective' },
    { name: 'Care of Magical Creatures', instructor: 'Hagrid', type: 'elective' }
  ],
  rooms: ['Great Hall', 'Kitchens', 'Ravenclaw House', 'Slytherin House', 'Gryffindor House', 'Hufflepuff House', 'Instructor quarters', 'Headmasters Office', 'Hospital Wing', 'Chamber of Secrets', 'Greenhouses', 'Astronomy Tower'],
  populations: {
    students: 280,
    professors: 15,
    ghosts: 22,
    'house elves': 100,
  },
  founders: ['Godrick Gryffindor', 'Helga Hufflepuff', 'Rowena  Ravenclaw', 'Salazar Slytherin'],
  currentHeadmaster: {
    name: 'Albus Percival Wulfric Brian Dumbledore',
    age: 115,
    alive: true,
    wand: '15 inch Elder Thestral tail hair core',
    gender: 'male',
    'eye color': 'Blue',
    family: [
      { father: 'Percival', alive: false },
      { mother: 'Kendra', alive: false },
      { sister: 'Ariana', alive: false },
      { brother: 'Aberforth', alive: true }
    ]
  }
}
module.exports = {
  students,
  houseHeads,
  hogwarts
}
