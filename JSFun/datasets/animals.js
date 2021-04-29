// created by Patrick Goulding

const animals = [
  {
    name:'Rhino',
    weight: 1700,
    type: 'Herbivore',
    home: 'Africa'
  },
  {
    name:'Grizly Bear',
    weight: 800,
    type: 'Omnivore',
    home: 'North America'
  },
  {
    name:'Monkey',
    weight: 60,
    type: 'Herbivore',
    home: 'Africa'
  },
    {
    name:'Lion',
    weight: 400,
    type: 'Carnivore',
    home: 'Africa'
  },
    {
    name:'Tiger',
    weight: 600,
    type: 'Carnivore',
    home: 'Africa'
  },
  {
    name:'Wolf',
    weight: 90,
    type: 'Carnivore',
    home: 'North America'
  },
  {
    name: 'Panda',
    weight: 700,
    type: 'Herbivore',
    home: 'Asia'
  }
]


const zoos = [
  {
    name: 'Denver Zoo',
    maxWeight: 10000,
    typesAllowed:['Herbivore', 'Omnivore'],
    continents:['Africa', 'Asia', 'North America']
  },
  {
    name: 'Bronx Zoo',
    maxWeight: 5000,
    typesAllowed:['Herbivore'],
    continents:['Africa', 'Asia', 'North America']
  },
  {
    name: 'San Diego Wild Animal Park',
    maxWeight: 7500,
    typesAllowed:['Herbivore', 'Carnivore'],
    continents:['Asia', 'North America']
  },
  {
    name: 'Kansas City Zoo',
    maxWeight: 8000,
    typesAllowed:['Omnivore', 'Carnivore'],
    continents:['Africa', 'Asia']
  },
  {
    name: 'Central Park Zoo',
    maxWeight: 7000,
    typesAllowed:['Carnivore'],
    continents:['Africa', 'North America']
  },
    {
    name: 'San Antonio Zoo',
    maxWeight: 3000,
    typesAllowed:['Herbivore', 'Omnivore'],
    continents:['Asia', 'North America']
  },
]

module.exports = {
  animals,
  zoos
}
