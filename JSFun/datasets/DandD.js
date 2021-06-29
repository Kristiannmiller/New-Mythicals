const charactersDD = [
  {
    name: 'Kurt',
    health: function() {
			return Math.floor(Math.random() * 10 + 30)
		},
    mana: 300,
    profession: 'Pale Master',
    weapons: ['magebane', 'whip', 'axe', 'potion'],
    home: 'Earth',
  },
  {
    name: 'Brandon',
    health: function() {
			return Math.floor(Math.random() * 10 + 39)
		},
    mana: 470,
    profession: 'Bard',
    weapons: ['crossbow', 'axe', 'halbred', 'skateboard', 'magebane'],
    home: 'Fire',
  },
  {
    name: 'Laura',
    health: function() {
			return Math.floor(Math.random() * 10 + 32)
		},
    mana: 530,
    profession: 'Cleric',
    weapons: ['bow', 'magebane', 'computer', 'hair', 'potion'],
    home: 'Water',
  },
  {
    name: 'Kiel',
    health: function() {
			return Math.floor(Math.random() * 10 + 34)
		},
    mana: 410,
    profession: 'Paladin',
    weapons: ['axe', 'halbred', 'magebane', 'hair'],
    home: 'Earth',
  },
  {
    name: 'Gray',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},
    mana: 490,
    profession: 'Dark Wizard',
    weapons: ['magebane', 'bow', 'knife', 'computer'],
    home: 'Fire',
  },
  {
    name: 'Ben',
    health: function() {
			return Math.floor(Math.random() * 10 + 35)
		},
    mana: 130,
    profession: 'Low Peasant',
    weapons: ['whip', 'rifle', 'knife', 'hat', 'potion'],
    home: 'Earth',
  },
  {
    name: 'Mike',
    health:function() {
			return Math.floor(Math.random() * 10 + 34)
		},
    mana: 500,
    profession: 'Court Jester',
    weapons: ['computer', 'hair', 'rifle', 'potion'],
    home: 'Fire',
  },
  {
    name: 'Paul',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},
    mana: 390,
    profession: 'Monk',
    weapons: ['computer', 'magebane', 'rifle', 'hat'],
    home: 'Air',
  },
  {
    name: 'Cody',
    health:function() {
			return Math.floor(Math.random() * 10 + 32)
		},
    mana: 330,
    profession: 'ShadowDancer',
    weapons: ['crossbow', 'knife', 'knife', 'magebane'],
    home: 'Water',
  },
  {
    name: 'Alex',
    health: function() {
			return Math.floor(Math.random() * 10 + 30)
		},
    mana: 470,
    profession: 'Necromancer',
    weapons: ['computer', 'knife', 'glasses', 'potion'],
    home: 'Air',
  },
  {
    name: 'Timf',
    health: function() {
			return Math.floor(Math.random() * 10 + 34)
		},
    mana: 430,
    profession: 'Druid',
    weapons: ['rifle', 'hair', 'magebane', 'knife'],
    home: 'Earth',
  },
  {
    name: 'Nick',
    health: function() {
			return Math.floor(Math.random() * 10 + 40)
		},
    mana: 450,
    profession: 'Sorcerer',
    weapons: ['bow', 'axe', 'rifle', 'glasses', 'potion'],
    home: 'Fire',
  },
  {
    name: 'Dennis',
    health: function() {
			return Math.floor(Math.random() * 10 + 36)
		},
    mana: 340,
    profession: 'Dark Knight',
    weapons: ['whip', 'rifle', 'glasses', 'halbred'],
    home: 'Water',
  },
  {
    name: 'Tom',
    health: function() {
			return Math.floor(Math.random() * 10 + 37)
		},
    mana: 391,
    profession: 'Ranger',
    weapons: ['bow', 'crossbow', 'knife', 'computer'],
    home: 'fire',
  },
  {
    name: 'Justin',
    health:function() {
			return Math.floor(Math.random() * 10 + 29)
		},
    mana: 391,
    profession: 'Ranger',
    weapons: ['bow', 'crossbow', 'potion'],
    home: 'fire',
  },
  {
    name: 'Jesse',
    health: function() {
			return Math.floor(Math.random() * 10 + 31)
		},
    mana: 391,
    profession: 'Blacksmith',
    weapons: ['whip', 'crossbow', 'knife', 'computer'],
    home: 'Earth',
  },
  {
    name: 'Chris',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},
    mana: 391,
    profession: 'Dwarven Defender',
    weapons: ['axe', 'crossbow', 'knife', 'computer'],
    home: 'Earth',
  },
  {
    name: 'Megan',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},
    mana: 391,
    profession: 'Apothecarist',
    weapons: ['magebane', 'crossbow', 'hair', 'potion'],
    home: 'Water',
  },
  {
    name: 'Haley',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},
    mana: 391,
    profession: 'Sorceress',
    weapons: ['bow', 'magebane', 'glasses', 'hair', 'potion'],
    home: 'Water',
  },
  {
    name: 'Todd',
    health: function() {
			return Math.floor(Math.random() * 10 + 32)
		},
    mana: 391,
    profession: 'Squire',
    weapons: ['bow', 'crossbow', 'knife', 'computer'],
    home: 'Air',
  }
];

const weaponsDD = {
  magebane : {
    damage: 9,
    range: 3,
    durability: 16
   },
   potion : {
    damage: 7,
    range: 2,
    durability: 3
   },
  whip: {
    damage: 10,
    range: 5,
    durability: 7
  },
  axe: {
    damage: 8,
    range: 16,
    durability: 9
  },
  glasses: {
    damage: 0,
    range: 30,
    durability: 4
  },
  crossbow: {
    damage: 10,
    range: 25,
    durability: 10
  },
  halbred: {
    damage: 10,
    range: 5,
    durability: 12
  },
  bow: {
    damage: 12,
    range: 31,
    durability: 10
  },
  rifle: {
    damage: 15,
    range: 50,
    durability: 20
  },
  knife: {
    damage: 9,
    range: 2,
    durability: 5
  },
  hair: {
    damage: 5,
    range: 20,
    durability: 25
  },
  hat: {
    damage: 1,
    range: 1,
    durability: 15
  },
  computer: {
    damage: 12,
    range: 100,
    durability: 2
  },
  skateboard: {
    damage: 3,
    range: 8,
    durability: 9
  }
}

module.exports = {
  charactersDD,
  weaponsDD
};
