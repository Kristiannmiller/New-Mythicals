const artists = [
  { name: 'SG Lewis', label: 'atlantic' },
  { name: 'HONNE', label: 'virgin' },
  { name: 'BORNS', label: 'capital' },
  { name: 'Leisure', label: 'capital' },
  { name: 'St. Lucia', label: 'capital' },
  { name: 'Gallant', label: 'capital' },
  { name: 'Marcus Marr', label: 'virgin' },
  { name: 'Penguin Prison', label: 'atlantic' },
  { name: 'Future Islands', label: 'atlantic' },
  { name: 'Roosevelt', label: 'capital' },
  { name: 'Jack Garratt', label: 'capital' },
  { name: 'Chet Faker', label: 'virgin' },
  { name: 'Sam Sparro', label: 'virgin' }
];

const ticketPrice = {
  atlantic: 20,
  virgin: 25,
  capital: 30
};

const crowd = {
  atlantic: 20,
  virgin: 100,
  capital: 100100000,
}

module.exports = {
  artists,
  ticketPrice,
  crowd
};
