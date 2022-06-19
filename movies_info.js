const movies = [
  {
    name: "3idiots",
    time: 171,
    genres: "Comedy",
    release: 2009,
    countries: "India",
    director: "Rajkumar Hirani"
  },
  {
    name: "The Darjeeling Limited",
    time: 91,
    genres: "Comedy",
    release: 2007,
    countries: "United States",
    director: "Wes Anderson"
  },
  {
    name: "Bajrangi Bhaijaan",
    time: 160,
    genres: "Drama",
    release: 2015,
    countries: "India",
    director: "Kabir Khan"
  },
  {
    name: "Promising Young Woman",
    time: 113,
    genres: ["Drama", "Thriller"],
    release: 2020,
    countries: ["United Kingdom", "United States"],
    director: "Emerald Fennel"
  },
  {
    name: "Gunpowder Milkshake",
    time: 114,
    genres: ["Action", "Adventure", "Thriller"],
    release: 2021,
    countries: ["Germany", "France", "United States"],
    director: "Navot Papushado"
  },
  {
    name: "Ocean's 8",
    time: 120,
    genres: ["Action", "Comedy", "Thriller"],
    release: 2018,
    countries: "United States",
    director: "Gary Ross"
  },
  {
    name: "Little Women",
    time: 135,
    genres: ["Drama", "Romance"],
    release: 2019,
    countries: "United States",
    director: "Greta Gerwig"
  },
  {
    name: "20th Century Women",
    time: 118,
    genres: ["Comedy", "Drama"],
    release: 2016,
    countries: "United States",
    director: "Mike Mills"
  },
  {
    name: "Onneli ja Anneli",
    time: 80,
    genres: "Children's/Family",
    release: 2014,
    countries: "Finland",
    director: "Saara Centell"
  },
  {
    name: "God Help the Girl",
    time: 111,
    genres: ["Comedy", "Drama", "Musical"],
    release: 2014,
    countries: "United Kingdom",
    director: "Stuart Murdoch"
  },
  {
    name: "Short Term12",
    time: 96,
    genres: "Drama",
    release: 2013,
    countries: "United States",
    director: "Destin Daniel Cretton"
  },
  {
    name: "Fantastic Planet",
    time: 72,
    genres: "Science Fiction",
    release: 1973,
    countries: ["Czechia", "France"],
    director: "René Laloux"
  },
  {
    name: "Paterson",
    time: 118,
    genres: ["Comedy", "Drama"],
    release: 2016,
    countries: ["Germany", "France", "United States"],
    director: "Jim Jarmusch"
  },
  {
    name: "Bagdad Cafe",
    time: 91,
    genres: ["Comedy", "Drama"],
    release: 1988,
    countries: ["Germany", "United States"],
    director: "Percy Adlon"
  },
  {
    name: "Frances Ha",
    time: 85,
    genres: ["Comedy", "Drama"],
    release: 2013,
    countries: "United States",
    director: "Noah Baumbach"
  },
  {
    name: "Charlie's Angels",
    time: 118,
    genres: ["Action", "Comedy"],
    release: 2019,
    countries: "United States",
    director: "Elizabeth Banks"
  },
  {
    name: "Big Fish",
    time: 125,
    genres: ["Comedy", "Drama"],
    release: 2003,
    countries: "United States",
    director: "Tim Burton"
  },
  {
    name: "Mad Max: Fury Road",
    time: 120,
    genres: "Action",
    release: 2015,
    countries: ["American Samoa", "Australia", "United States", "South Africa"],
    director: "George Miller"
  },
  {
    name: "Les Misérables",
    time: 150,
    genres: "Musical",
    release: 2012,
    countries: ["United States", "United Kingdom"],
    director: "Tom Hooper"
  },
  {
    name: "Never Rarely Sometimes Always",
    time: 101,
    genres: "Drama",
    release: 2020,
    countries: ["United Kingdom", "United States"],
    director: "Eliza Hittman"
  },
  {
    name: "Thelma and Louise",
    time: 130,
    genres: ["Comedy", "Drama", "Action"],
    release: 1991,
    countries: ["Canada", "France", "United States"],
    director: "Ridley Scott"
  },
  {
    name: "Fried Green Tomatoes",
    time: 130,
    genres: ["Comedy", "Drama"],
    release: 1991,
    countries: ["United Kingdom", "United States"],
    director: "Jon Avnet"
  },
  {
    name: "Legally Bronde",
    time: 96,
    genres: "Comedy",
    release: 2001,
    countries: "United States",
    director: "Robert Luketic"
  },
  {
    name: "Babette's Feast",
    time: 105,
    genres: "Drama",
    release: 1987,
    countries: "Denmark",
    director: "Gabriel Axel"
  },
  {
    name: "Tully",
    time: 95,
    genres: ["Comedy", "Drama"],
    release: 2018,
    countries: "United States",
    director: "Jason Reitman"
  },
  {
    name: "I Feel Pretty",
    time: 110,
    genres: "Comedy",
    release: 2017,
    countries: "United States",
    director: "Addy Kohn"
  },
  {
    name: "Attila Marcel",
    time: 106,
    genres: "Drama",
    release: 2013,
    countries: "France",
    director: "Sylvain Chomet"
  },
  {
    name: "Hairspray",
    time: 117,
    genres: ["Comedy", "Drama"],
    release: 2007,
    countries: ["Canada", "United Kingdom", "United States"],
    director: "Adam Shankman"
  },
  {
    name: "The Handmaiden",
    time: 145,
    genres: ["Drama", "Romance"],
    release: 2016,
    countries: ["Korea", "South", "Norway"],
    director: "Chan-wook Park"
  },
  {
    name: "Tove",
    time: 103,
    genres: "Drama",
    release: 2020,
    countries: ["Finland", "United States"],
    director: "Zaida Bergroth"
  },
  {
    name: "Miss Marx",
    time: 107,
    genres: "Biography",
    release: 2020,
    countries: ["Italy", "Belgium"],
    director: "Susanna Nicchiarelli"
  },
  {
    name: "Kiss Me Before It Blows Up",
    time: 105,
    genres: ["Comedy", "Drama", "Romance"],
    release: 2020,
    countries: ["Germany", "Israel"],
    director: "Shirel Peleg"
  },
  {
    name: "Woman at War",
    time: 101,
    genres: ["Action", "Drama", "Thriller"],
    release: 2019,
    countries: ["France", "Iceland", "United States"],
    director: "Benedikt Erlingsson"
  },
  {
    name: "A Simple Favor",
    time: 117,
    genres: ["Crime", "Thriller"],
    release: 2018,
    countries: "United States",
    director: "Paul Felg"
  },
  {
    name: "Gone Girl",
    time: 147,
    genres: "Thriller",
    release: 2014,
    countries: "United States",
    director: "David Ficher"
  },
  {
    name: "Parasite",
    time: 132,
    genres: ["Comedy", "Drama"],
    release: 2019,
    countries: ["Korea", "South", "Norway"],
    director: "Joon-ho Bong"
  },
  {
    name: "The Suicide Shop",
    time: 85,
    genres: ["Comedy", "Musical"],
    release: 2012,
    countries: "France",
    director: "Patrice Leconte"
  },
  {
    name: "Fight Club",
    time: 140,
    genres: ["Comedy", "Drama"],
    release: 1999,
    countries: "United States",
    director: "David Fincher"
  },
  {
    name: "Girl, Interrupted",
    time: 127,
    genres: "Drama",
    release: 1999,
    countries: ["India", "United States"],
    director: "James Mangold"
  },
  {
    name: "An Education",
    time: 95,
    genres: "Drama",
    release: 2008,
    countries: ["United Kingdom", "United States"],
    director: "Lone Scherfig"
  },
  {
    name: "Innocence",
    time: 115,
    genres: ["Drama", "Avant-garde/Experimontal"],
    release: 2004,
    countries: ["Belgium", "France"],
    director: "Lucile Hadzihaliovic"
  },
  {
    name: "Evolution",
    time: 81,
    genres: ["Horror", "Thriller"],
    release: 2015,
    countries: "France",
    director: "Lucile Hadzihaliovic"
  },
  {
    name: "Diana Has the Right Shape",
    time: 87,
    genres: "Comedy",
    release: 2017,
    countries: "France",
    director: "Fabien Gorgeart"
  },
  {
    name: "La Belle saison",
    time: 105,
    genres: "Romance",
    release: 2015,
    countries: ["France", "Belgium"],
    director: "Catherine Corsini"
  },
  {
    name: "August: Osage Country",
    time: 121,
    genres: "Comedy",
    release: 2013,
    countries: "United States",
    director: "John Wells"
  },
  {
    name: "The Dragon's Demise",
    time: 26,
    genres: "France",
    release: 2015,
    countries: "France",
    director: "Marina Diaby"
  },
  {
    name: "Tristesse Club",
    time: 90,
    genres: ["Comedy", "Drama"],
    release: 2014,
    countries: "France",
    director: "Uincent Mariette"
  },
  {
    name: "Burlesque",
    time: 119,
    genres: "Musical",
    release: 2010,
    countries: "United States",
    director: "Steve Antin"
  },
  {
    name: "My Fair Lady",
    time: 170,
    genres: "Musical",
    release: 1964,
    countries: "United States",
    director: "George Cukor"
  },
  {
    name: "Un Grand Silence",
    time: 29,
    genres: "Drama",
    release: 2016,
    countries: "France",
    director: "Julie Gourdain"
  },
  {
    name: "Micmacs",
    time: 99,
    genres: "Comedy",
    release: 2009,
    countries: "France",
    director: "Jean-Pierre Jeunet"
  },
  {
    name: "Amelie",
    time: 120,
    genres: ["Romance", "Comedy"],
    release: 2001,
    countries: ["Germany", "France"],
    director: "Jean-Pierre Jeunet"
  },
  {
    name: "Pride and Prejudice and Zombies",
    time: 107,
    genres: ["Comedy", "Horror", "Romance"],
    release: 2016,
    countries: "United States",
    director: "Burr Steers"
  },
  {
    name: "The Fall",
    time: 121,
    genres: "Fantacy",
    release: 2006,
    countries: ["United Kingdom", "India", "United States"],
    director: "Tarsem Singh"
  }
  ];