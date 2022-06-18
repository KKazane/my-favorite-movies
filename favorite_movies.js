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
}
];


// movieのobjectを引数として渡した時、上映時間が長いか短いかはかる
function runTime(object) {
if (object.time) {
  if (object.time < 60) {
      console.log('short film');
  } else if (object.time <= 120) {
      console.log('not long film');
  } else if (object.time > 120) {
      console.log('long film');
  }
}
};

// release年順に情報を並べ替える
// function releasedSort(array) {
// let storedObj = {};
// let storedArr = [];
// let backArr = [];
// for (let i = 0; i < array.length; i++) {
//   storedObj[`Number${i}`] = [array[i].release, array[i]];
//   storedArr.push(array[i].release);
// }

// storedArr.sort((a, b) => a - b);
// for (let i = 0; i < storedArr.length; i++) {
//   if (storedArr[i] === storedObj[`Number${i}`][0]) {
//       backArr.push(storedObj[i][1]);
//   }
// }
// return backArr;
// }

// console.log(releasedSort(movies));

function title(array) {
let titleArray = [];

for (let i = 0; i < array.length; i++) {
  titleArray.push(array[i].name);
}

return titleArray;
}

console.log(title(movies));

function country(array) {
let countryArray = [];

for (let i = 0; i < array.length; i++) {
  if (Array.isArray(array[i].countries)) {
      for (let j = 0; j < array[i].countries; j++) {
          countryArray.push(array[i].countries[j]);
      }
  } else {
      countryArray.push(array[i].countries);
  }
}

let backArray = new Set(countryArray);

return Array.from(backArray);
}

console.log(country(movies));


function directorName(array) {
let storeArray = [];

for (let i = 0; i < array.length; i++) {
  storeArray.push(array[i].director);
}

let directorsArray = new Set(storeArray);

return Array.from(directorsArray);
}

console.log(directorName(movies));

function released(array) {
let storeArray = [];

for (let i = 0; i < array.length; i++) {
  storeArray.push(array[i].release);
}

let backArray = new Set(storeArray);

return Array.from(backArray);
}

console.log(released(movies));
console.log(released(movies).sort((a, b) => a - b));

function sortedRelease(array, arrayOfObject) {
  const sortedArray = [];
  const newArray = array.sort((a, b) => a - b);

  for(let i = 0; i < newArray.length; i++) {
    for(let x = 0; x < arrayOfObject.length; x++) {
      if(newArray[i] === arrayOfObject[x].release) {
        sortedArray.push(arrayOfObject[x]);
      }
    }
  }

  const backArray = new Set(sortedArray);

  return Array.from(backArray);
}

console.log(sortedRelease(released(movies), movies));

function genre(array) {
let genresArray = [];

for (let i = 0; i < array.length; i++) {
  if (Array.isArray(array[i].genres)) {
      for (let j = 0; j < array[i].genres; j++) {
          genresArray.push(array[i].genres[j]);
      }
  } else {
      genresArray.push(array[i].genres);
  }
}

let backArray = new Set(genresArray);

return Array.from(backArray);
}

console.log(genre(movies));

function sortedRunTime(array) {
  const storedArray = [];

  for(let i = 0; i < array.length; i++) {
    storedArray.push(array[i].time);
  }

  const simpleArray = new Set(storedArray);
  const backArray = Array.from(simpleArray).sort((a, b) => a - b);

  return backArray;
}

// ページ稼働
const selected = {
  "title": title(movies),
  "run time": sortedRunTime(movies),
  "genre": genre(movies),
  "released": released(movies).sort((a, b) => a - b),
  "country": country(movies),
  "director": directorName(movies)
}
// console.log(selected);
const searchBy = document.querySelector(".searchBy");

function setOptions(selectedBy) {
  const selectOptions = document.querySelector(".select");
  selectOptions.disabled = false;

  selected[selectedBy].forEach((any, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.classList.add('child');
    option.innerHTML = any;
    selectOptions.appendChild(option);
  });
}

searchBy.addEventListener('change', (e) => {
  const selectOptions = document.querySelector(".select");
  let children = document.querySelectorAll('.child');
  if(children.length > 0) {
    for(let i = 0; i < children.length; i++) {
      selectOptions.removeChild(children[i]);
    }
  }
  setOptions(e.target.value);
})