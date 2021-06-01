let characters = [
  {
    name: 'Homestar Runner',
    quotes: [ 'Seriously', 'Homestar Runner dot net, it\'s dot com!', 'I say, monstwosity, do you has the times?' ],
    aliases: [ 'Stingy Relenque', 'The Popcorn Lumper', 'Dangeresque Too', 'DJ Mankiewicz', 'The Jack \'Em Up Kid', 'The Office Dullard', 'Kevin DuBrow' ],
    costumes: [ 'Kurt Cobain', 'The Greatest American Hero', 'Angus Young', 'John McEnroe', 'Carl Spackler', 'Moocher', 'Teen Wolf', 'Artie, the Strongest Man in the World', 'Yahoo Serious(ly)', 'Crispin Glover as Rubin Farr', 'The Alien Super-Being', 'Tobias Fünke', 'H.I. McDunnough', 'Mr. B. Natural', 'Power Alley Dale Murphy' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': true,
      'The Hot Jones Hi-Jack': true
    }
  },
  {
    name: 'Strong Bad',
    quotes: [ 'Holy crap!', 'Check me out! No, seriously, check me out!', 'DELETED!', 'It\'s a crazy world of emails in this crazy world' ],
    aliases: [ 'Cara Carabowditbowdit', 'Vance Mudgeman', 'Dangeresque', 'Il Cartographer', 'Sharp Deane', 'Strong Badman', 'The Huuuuudge', 'Sterence', 'Stinkoman' ],
    costumes: [ 'Carmen Miranda', 'Carmen Sandiego', 'The Bee/Homestar', 'Ozone', 'Cesar Romero as The Joker', 'Jambi the Genie', 'Father Guido Sarducci', 'Beetlejuice', 'The Planet on the Cover of The Hitchhiker\'s Guide to the Galaxy', 'Skull Kid', 'Fragile Lamp', 'Mac Tonight', 'David Lee Roth', 'No-Face', 'Killer BOB' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': true,
      'The Curly Fried Caper': true,
      'The Hot Jones Hi-Jack': true
    }
  },
  {
    name: 'The Cheat',
    quotes: [ 'Meh' ],
    aliases: [ 'Tito the Tophaticent', 'Istanbul', 'Cheatbot', 'Saberlord\'s Scritchascratch Cakemonger The Cheat', 'Ilko Skevüld', 'Szechuan Steve', 'Firebert' ],
    costumes: [ 'Garfield', 'Punchy', 'Russell', 'Izzy', 'Sigmund', 'Toad', 'Gizmo', 'Penfold', 'Drywall', 'The Lorax', 'The Grinch\'s dog', 'Spaceman Spiff', 'Fudgie The Whale', 'The Angriest Dog in the World', 'Maxwell' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': true,
      'The Hot Jones Hi-Jack': true
    }
  },
  {
    name: 'Strong Mad',
    quotes: [ 'I\'M STRONG MAD!', 'MY PANTIES!', 'GARBLEDINA!' ],
    aliases: [ 'Killingyouguy' ],
    costumes: [ 'Slim Goodbody', 'William "The Fridge" Perry', 'A Ghost', 'Magnum P.I.', 'Ben Wallace', 'Gossamer', 'The Maxx', 'Nikolai Volkoff', 'A Thwomp', 'Sal', 'The Abominable Snowman', 'Goro', 'TiVo', 'Monica and Rachel\'s Door (from Friends)', 'Powdered Toast Man' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Strong Sad',
    quotes: [ 'Uh, Strong Bad, were you just first basin\' it with that piece of loose leaf?!', 'I don\'t like food anymore.', 'I call them Soolnds!' ],
    aliases: [ 'Garden Boy', 'The Deathly Pallor', 'Hot Tub' ],
    costumes: [ 'Gorbachev', 'Andy Warhol', 'Vyvyan', 'David Byrne', 'David Bowie', 'Devo Member', 'Tony Clifton', 'The Fat Kid from The Far Side', 'Sam Kinison', 'Doyle', 'Ralphie Parker', 'Pale Man', 'Cameron Frye', 'The UTZ girl', 'Hercule Poirot' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Pom Pom',
    quotes: [ '*bubble sounds*' ],
    aliases: [ 'J. William Pom Thomas C. Pom' ],
    costumes: [ 'Stay-Puft Marshmallow Man', 'Michael Moore', 'Kool-Aid Man', 'Kamala the Ugandan Giant', 'Bob\'s Big Boy', 'Walter Sobchak', 'Mario Batali', 'A Cacodemon', 'SCUD', 'Pooka', 'A Snow Globe', 'King-Size Homer', 'Wilson', 'The Orange Bird', 'Violet Beauregarde' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': false,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Marzipan',
    quotes: [ 'Hi, I\'m Marzipan, and this is my guitar Carol.', 'That\'s so crazy!!! I\'VE always wanted to see Ira Glass and Ira Flatow wrestle too!!', 'Hey! Watch those hands David Coppafeel!' ],
    aliases: [ 'Cutesy Buttons' ],
    costumes: [ 'Jeannie', 'Joey Ramone', 'Left Eye Lopes', 'The Log Lady', 'Willie Nelson', 'Beaker', 'Frida Kahlo', 'Prince', 'Stevie Ray Vaughan', 'Lola', 'Cindy Lou Who', 'Anton Chigurh', 'Tom Servo', 'Captain EO', 'Margot Tenebaum', 'Joanna from Chotchkie\'s' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': true,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Coach Z',
    quotes: [ 'Coach. Z. One-Two, One-Two.', 'I\'m just not cut out to say the word jerb...', 'These peoples try to fade me!' ],
    aliases: [ 'Damp Towelman', 'Renaldo' ],
    costumes: [ 'Flavor Flav', 'Humpty Hump', 'Kid', 'Kool Moe Dee', 'Tupac', 'Theo Huxtable', 'Queen Latifah', 'So So Def Recordings Logo', 'DJ Lance Rock', 'MC Skat Kat', 'Notebook Paper', 'A Tribe Called Quest', 'André 3000', 'Kwamé', 'PaRappa the Rapper' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': true,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Bubs',
    quotes: [ 'If I had thumbs, I\d be stickin\' \'em in my armpits right now!', 'Check it out check it out check it out check it out...', 'Crabadonk!' ],
    aliases: [ 'The Thnikkaman', 'King Bubsgonzola Supreme', 'Baron Darin Diamonocle' ],
    costumes: [ 'Rerun', 'Mars Blackmon', 'Captain Lou Albano', 'Mel', 'One of The Three Most Important People in the World', 'Apollo Creed', 'Coach McGuirk', 'Ross', 'The Junkyard Dog', 'Jules Winnfield', 'Dead Guy from Die Hard', 'Adam Yauch as MCA as Nathan Wind as Cochese', 'Chuck Barris', 'Billy Mitchell', 'Grunkle Stan' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': false,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': true,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'The King of Town',
    quotes: [ 'Let the King have some!', 'Doo Hoo Hoo', 'They tells me I shouldn\'t drinks it, but I still drinks it!' ],
    aliases: [ 'The svelt, young prince of town', 'Perducci' ],
    costumes: [ 'Cap\'n Crunch', 'Hagar the Horrible', 'Mario', 'The Hamburglar', 'The Mayor of Halloweentown', 'Colonel Sanders', 'The Gorton\'s Fisherman', 'Rev. Al Sharpton', 'Hello Kitty', 'Colonel Mustard', 'Heat Miser', 'Ram Man', 'Devil\'s Tower Mashed Potatoes', 'Scrubbing Bubbles', 'Alice from the "Don\'t Come Around Here No More" video' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': true,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'The Poopsmith',
    quotes: [ '...' ],
    aliases: null,
    costumes: [ 'Tron', 'Laser Tag', 'A Sleestak', 'M. Bison', 'Lion-O', 'Ookla the Mok', 'Necron 99', 'Doc Brown', 'Dr. Zoidberg', 'Darunia', 'Voldar', 'Mean Machine Angel', 'Feyd-Rautha', 'Flaming Globes of Sigmund', 'Instant Martian' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': false,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Homsar',
    quotes: [ 'I was raised by a cup of coffee!', 'I\'m a trendy tote bag!', 'Let\'s sing a song of Pennzoil!' ],
    aliases: null,
    costumes: [ 'Wimpy', 'Ghost Dog', 'Slash', 'Kumar', 'Tingle', 'Ed Grimley', 'The "Noony Noony Noo" Typewriter Guy', 'Captain Caveman', 'Little Orphan Annie', 'Dungeonmaster', 'Fidgit', 'Zebraman', 'Greg' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': false,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Marshie',
    quotes: [ 'Yeah, still!', 'I\'M AN ABOMINATION! And I\'m coming to your house after school!', 'JUST WALK AWAY MOTHER!' ],
    aliases: [ 'Gel-arshie' ],
    costumes: [ 'vampire' ],
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': false,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Senor Cardgage',
    quotes: [ 'Good evening, Bontilda.  Forty-twon will be on your lest.', 'Oh. I should eat a pony.', 'My left name is tremendous savings, Ms. America!' ],
    aliases: null,
    costumes: null,
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': false,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': false
    }
  },
  {
    name: 'Crack Stuntman',
    quotes: [ 'I SAID SEVERAL LIMES!', 'BLAAAAAAA-I\'m Crack Stuntman!', 'But *I* still get paid, right!?' ],
    aliases: [ 'Gunhaver' ],
    costumes: null,
    dangeresqueApperences: {
      'Dangeresque 1: Dangeresque, Too?': false,
      'Dangeresque II: This Time, It\'s Not Dangeresque 1': false,
      'The Curly Fried Caper': false,
      'The Hot Jones Hi-Jack': true
    }
  }
]

let toons = {
    halloweenToons: [
        {
          name: 'Homestarloween Party',
          year: 2000,
          costumes: [ 'Kurt Cobain', 'Carmen Miranda', 'Garfield', 'Slim Goodbody', 'Gorbachev', 'Stay-Puft Marshmallow Man', 'Jeannie', 'Flavor Flav', 'Rerun', 'Cap\'n Crunch', 'Tron' ]
        },
        {
          name: 'The House That Gave Sucky Treats',
          year: 2001,
          costumes: [ 'The Greatest American Hero', 'Carmen Sandiego', 'Punchy', 'William "The Fridge" Perry', 'Andy Warhol', 'Michael Moore', 'Joey Ramone', 'Humpty Hump', 'Mars Blackmon', 'Hagar the Horrible', 'Laser Tag', 'Wimpy' ]
        },
        {
          name: 'Pumpkin Carve-nival',
          year: 2002,
          costumes: [ 'Angus Young', 'The Bee/Homestar', 'Russell', 'A Ghost', 'Vyvyan', 'Kool-Aid Man', 'Left Eye Lopes', 'Kid', 'Captain Lou Albano', 'Mario', 'A Sleestak', 'Ghost Dog' ]
        },
        {
          name: '3 Times Halloween Funjob',
          year: 2003,
          costumes: [ 'John McEnroe', 'Ozone', 'Izzy', 'Magnum P.I.', 'David Byrne', 'Kamala the Ugandan Giant', 'The Log Lady', 'Kool Moe Dee', 'Mel', 'The Hamburglar', 'M. Bison', 'Slash' ]
        },
        {
          name: 'Halloween Fairstival',
          year: 2004,
          costumes: [ 'Carl Spackler', 'Cesar Romero as The Joker', 'Sigmund', 'Ben Wallace', 'David Bowie', 'Bob\'s Big Boy', 'Willie Nelson', 'Tupac', 'One of The Three Most Important People in the World', 'The Mayor of Halloweentown', 'Lion-O', 'Kumar' ]
        },
        {
          name: 'Halloween Potion-ma-jig',
          year: 2005,
          costumes: [ 'Moocher', 'Jambi the Genie', 'Toad', 'Gossamer', 'Devo Member', 'Walter Sobchak', 'Beaker', 'Theo Huxtable', 'Apollo Creed', 'Colonel Sanders', 'Ookla the Mok', 'Tingle' ]
        },
        {
          name: 'Happy Hallow-day',
          year: 2006,
          costumes: [ 'Teen Wolf', 'Father Guido Sarducci', 'Gizmo', 'The Maxx', 'Tony Clifton', 'Mario Batali', 'Frida Kahlo', 'Queen Latifah', 'Coach McGuirk', 'The Gorton\'s Fisherman', 'Necron 99', 'Ed Grimley' ]
        },
        {
          name: 'Jibblies 2',
          year: 2007,
          costumes: [ 'Artie, the Strongest Man in the World', 'Beetlejuice', 'Penfold', 'Nikolai Volkoff', 'The Fat Kid from The Far Side', 'A Cacodemon', 'Prince', 'So So Def Recordings Logo', 'Ross', 'Rev. Al Sharpton', 'Doc Brown', 'The "Noony Noony Noo" Typewriter Guy' ]
        },
        {
          name: 'Most in the Graveyard',
          year: 2008,
          costumes: [ 'Yahoo Serious(ly)', 'The Planet on the Cover of The Hitchhiker\'s Guide to the Galaxy', 'Drywall', 'A Thwomp', 'Sam Kinison', 'SCUD', 'Stevie Ray Vaughan', 'DJ Lance Rock', 'The Junkyard Dog', 'Hello Kitty', 'Dr. Zoidberg', 'Captain Caveman' ]
        },
        {
          name: 'Doomy Tales of the Macabre',
          year: 2009,
          costumes: [ 'Crispin Glover as Rubin Farr', 'Skull Kid', 'The Lorax', 'Sal', 'Doyle', 'Pooka', 'Lola', 'MC Skat Kat', 'Jules Winnfield', 'Colonel Mustard', 'Darunia', 'Little Orphan Annie' ]
        },
        {
          name: 'Which Ween Costumes',
          year: 2010,
          costumes: [ 'The Alien Super-Being', 'Fragile Lamp', 'The Grinch\'s dog', 'The Abominable Snowman', 'Ralphie Parker', 'A Snow Globe', 'Cindy Lou Who', 'Notebook Paper', 'Dead Guy from Die Hard', 'Heat Miser', 'Voldar' ]
        },
        {
          name: 'I Killed Pom Pom',
          year: 2014,
          costumes: [ 'Tobias Fünke', 'Mac Tonight', 'Spaceman Spiff', 'Goro', 'Pale Man', 'King-Size Homer', 'Tom Servo', 'A Tribe Called Quest', 'Adam Yauch as MCA as Nathan Wind as Cochese', 'Ram Man', 'Mean Machine Angel', 'Dungeonmaster' ]
        },
        {
          name: 'The House That Gave Sucky Tricks',
          year: 2015,
          costumes: [ 'H.I. McDunnough', 'David Lee Roth', 'Fudgie The Whale', 'TiVo', 'Cameron Frye', 'Wilson', 'Captain EO', 'André 3000', 'Chuck Barris', 'Devil\'s Tower Mashed Potatoes', 'Feyd-Rautha', 'Fidgit' ]
        },
        {
          name: 'Later That Night....',
          year: 2016,
          costumes: [ 'Mr. B. Natural', 'No-Face', 'The Angriest Dog in the World', 'Monica and Rachel\'s Door (from Friends)', 'The UTZ girl', 'The Orange Bird', 'Margot Tenebaum', 'Kwamé', 'Billy Mitchell', 'Scrubbing Bubbles', 'Flaming Globes of Sigmund', 'Zebraman' ]
        },
        {
          name: 'Haunted Photo Booth',
          year: 2017,
          costumes: [ 'Power Alley Dale Murphy', 'Killer BOB', 'Maxwell', 'Powdered Toast Man', 'Hercule Poirot', 'Violet Beauregarde', 'Joanna from Chotchkie\'s', 'PaRappa the Rapper', 'Grunkle Stan', 'Alice from the "Don\'t Come Around Here No More" video', 'Instant Martian', 'Greg' ]
        }
      ],
    songs: [
        {
          name: 'Loading Screens',
          performers: 'All characters',
          cheatMusicVideo: false
        },
        {
          name: 'Where You Goin\' 2?',
          performers: 'The Cheat',
          cheatMusicVideo: false
        },
        {
          name: 'One Two, One Two',
          performers: 'Homestar Runner',
          cheatMusicVideo: false
        },
        {
          name: 'An Important Rap Song',
          performers: 'Crack Stuntman',
          cheatMusicVideo: false
        },
        {
          name: 'Experimental Film',
          performers: 'Strong Sad',
          cheatMusicVideo: false
        },
        {
          name: 'Rap Song',
          performers: [ 'Coach Z', 'Peacey P', 'Tenerence Love', 'The Cheat' ],
          cheatMusicVideo: true
        },
        {
          name: 'Trudgemank',
          performers: [ 'Peacey P', 'Taranchula' ],
          cheatMusicVideo: true
        },
        {
          name: 'Fish Eye Lens',
          performers: [ 'Coach Z', 'Strong Bad' ],
          cheatMusicVideo: true
        },
        {
          name: 'These Peoples Try to Fade Me',
          performers: 'Coach Z',
          cheatMusicVideo: true
        },
        {
          name: 'Everybody to the Limit',
          performers: [ 'Strong Bad', 'The Cheat' ],
          cheatMusicVideo: true
        },
        {
          name: 'Crystal Fortress',
          performers: 'Strong Bad',
          cheatMusicVideo: true
        },
        {
          name: 'Decomposing Pumpkin',
          performers: 'Brainkrieg',
          cheatMusicVideo: false
        },
        {
          name: 'The Cheat Theme Song',
          performers: 'The Cheat',
          cheatMusicVideo: true
        }
      ],

    teenGirlSquad: {
      mainCharacters: [ 'Cheerleader', 'So-and-so', 'Whats-her-face', 'The Ugly One' ],
      sideCharacters: [ 'Thompkins', 'Peacey P', 'Brainkrieg', 'Manolios UglyOne' ],
      fourGregs: [ 'Sci-fi Greg', 'DnD Greg', 'Open Source Greg', 'Japanese Culture Greg' ]
    },

    poweredByTheCheat: {
      hasTheCheatDoneAnImpressionOf: {
        homestarRunner: true,
        strongBad: true,
        theCheat: null,
        strongMad: false,
        strongSad: true,
        pomPom: false,
        marzipan: true,
        coachZ: true,
        bubs: true,
        theKingOfTown: false,
        thePoopsmith: false,
        homsar: false
      }
    },

    bands: {
      limozeen: {
        genre: 'hair metal',
        origin: 'Staten Island, NY',
        members: [ 	'Larry Palaroncini', 'Gary Palaroncini', 'Perry Palaroncini','Mary Palaroncini', 'Harry Palaroncini', 'Terry Palaroncini' ],
        songs: [ 'Nite Mamas', 'Brain Sister', 'Feed the Childrens', 'Because, It\'s Midnite', 'Colorin\' (Outside The Lines)', 'Today Is Alright 4 2Nite' ],
      },
      taranchula: {
        genre: 'death metal',
        origin: 'Scandinavia',
        members: [ 'Dave Bjornborg', 'Dave Olafstenston', 'Schenkel McDoo' ],
        songs: [ 'Trudgemank', 'Moving Very Slowly', 'The Decoupage', 'Brother in a Jar' ]
      },
      sloshy: {
        genre: 'lo-fi/alt rock',
        origin: undefined,
        members: [ 'Mitch Stockton', 'Clark Cross', 'Doug Tarndner', 'Dan DiMinilliditto', 'Mark D.' ],
        songs: [ 'We Don\'t Even Really Care About You', 'American Football Championship Game', 'Phoning This One In', 'B-est of B-sides' ]
      },
      coolTapes: {
        genre: 'rock/punk',
        origin: 'Free Country, USA',
        members: [ 'Marzipan', 'The Cheat', 'Strong Mad' ],
        songs: [ 'Cool Tapes', 'Rockin\' the Spot', 'Doley-O', 'Limozeen Is Not Very Nice', 'My Face (Please Don\'t Put Needles In It)' ]
      }
    },

    dangeresque: {
      episodesAndFilms: [ 'Dangeresque 0: The Prequel Begins', 'Dangeresque 1: Dangeresque, Too?', 'Dangeresque II: This Time, It\'s Not Dangeresque 1', 'Dangeresque 3: The Criminal Projective', 'The Curly Fried Caper', 'Dangeresque 4 ÷ 2 = 6', 'The Hot Jones Hi-Jack', 'Dangeresque: Put Em on Ice!' ],
      characters: [ 'Dangeresque', 'Dangeresque Too', 'Renaldo', 'Cutesy Buttons', 'Baron Darin Diamonocle', 'Hot Tub', 'Perducci', 'Istanbul', 'Killingyouguy', 'Szechuan Steve', 'Stingy Relenque', 'The Chief', 'Firebert', 'Gunhaver' ]
    }
  }

  module.exports = {
    toons,
    characters
  }
