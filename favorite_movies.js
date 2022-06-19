// movieのobjectを引数として渡した時、上映時間が長いか短いかはかる
function runTime(object) {
  if (object.time) {
    if (object.time < 60) {
        return 'short film';
    } else if (object.time <= 120) {
        return 'not so long film';
    } else if (object.time <= 150) {
        return 'long film';
    } else {
      return 'so long film';
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

  titleArray.sort();

  return titleArray;
}

// console.log(title(movies));

function country(array) {
  let countryArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i].countries)) {
        for (let j = 0; j < array[i].countries.length; j++) {
            countryArray.push(array[i].countries[j]);
        }
    } else {
        countryArray.push(array[i].countries);
    }
  }

  let backArray = new Set(countryArray);

  return Array.from(backArray);
}

// console.log(country(movies));


function directorName(array) {
  let storeArray = [];

  for (let i = 0; i < array.length; i++) {
    storeArray.push(array[i].director);
  }

  let directorsArray = new Set(storeArray);

  return Array.from(directorsArray);
}

// console.log(directorName(movies));

function released(array) {
  let storeArray = [];

  for (let i = 0; i < array.length; i++) {
    storeArray.push(array[i].release);
  }

  let backArray = new Set(storeArray);

  return Array.from(backArray);
}

// console.log(released(movies));
// console.log(released(movies).sort((a, b) => a - b));

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

// console.log(sortedRelease(released(movies), movies));

function genre(array) {
  let genresArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i].genres)) {
        for (let j = 0; j < array[i].genres.length; j++) {
            genresArray.push(array[i].genres[j]);
        }
    } else {
        genresArray.push(array[i].genres);
    }
  }
  // console.log(genresArray);

  let backArray = new Set(genresArray);

  return Array.from(backArray);
}

// console.log(genre(movies));

function sortedRunTime(array) {
  const storedArray = [];

  for(let i = 0; i < array.length; i++) {
    storedArray.push(array[i].time);
  }

  const simpleArray = new Set(storedArray);
  const backArray = Array.from(simpleArray).sort((a, b) => a - b);

  return backArray;
}

// console.log(sortedRunTime(movies));

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
const selectOptions = document.querySelector('.select');
const results = document.querySelector('.results');
const submitButton = document.querySelector('.submitButton');

function setOptions(selectedBy) {
  // const selectOptions = document.querySelector(".select");
  selectOptions.disabled = false;
  
  if(selectedBy !== "disSelect") {
    selected[selectedBy].forEach((any, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.classList.add('child');
      option.innerHTML = any;
      selectOptions.appendChild(option);
    });
  }
}

searchBy.addEventListener('change', (e) => {
  // const selectOptions = document.querySelector(".select");
  let children = document.querySelectorAll('.child');
  if(children.length > 0) {
    for(let i = 0; i < children.length; i++) {
      selectOptions.removeChild(children[i]);
    }
  }
  setOptions(e.target.value);
})

function setInformations(array) {
  for(let x = 0; x < array.length; x++) {
    const list = document.createElement('li');
    list.value = x;
    list.classList.add('info');
    // list.innerHTML = array[x];
    list.innerHTML = 
    `<div class="title">${array[x]["name"]}</div><br><span class="basedInfo">run time:</span> ${array[x]["time"]}min (${runTime(array[x])})<br><span class="basedInfo">genres:</span> ${array[x]["genres"]}<br><span class="basedInfo">release:</span> ${array[x]["release"]}<br><span class="basedInfo">countries:</span> ${array[x]["countries"]}<br><span class="basedInfo">director:</span> ${array[x]["director"]}`;
    results.appendChild(list);
  }
}

submitButton.addEventListener('click', () => {
  let infos = document.querySelectorAll('.info');
  const newArray = [];
  const change = {
    "title": "name",
    "run time": "time",
    "genre": "genres",
    "released": "release",
    "country": "countries",
    "director": "director"
  }

  if(infos.length > 0) {
    for(let i = 0; i < infos.length; i++) {
      results.removeChild(infos[i]);
    }
  }

  if(change[searchBy.value] === "name") {
    let titleArray = title(movies);
    for(const obj of movies) {
      if(obj["name"] === titleArray[selectOptions.value]) {
        newArray.push(obj);
      }
    }
  } else if(change[searchBy.value] === "time") {
    let timeArray = sortedRunTime(movies);
    for(const obj of movies) {
      if(obj["time"] === timeArray[selectOptions.value]) {
        newArray.push(obj);
      }
    }
  } else if(change[searchBy.value] === "genres") {
    let genresArray = genre(movies);
    for(const obj of movies) {
      if(obj["genres"] === genresArray[selectOptions.value]) {
        newArray.push(obj);
      } else if(Array.isArray(obj["genres"]) && obj["genres"].includes(genresArray[selectOptions.value])) {
        newArray.push(obj);
      }
    }
  } else if(change[searchBy.value] === "release") {
    let yearsArray = released(movies).sort((a, b) => a - b);
    for(const obj of movies) {
      if(obj["release"] === yearsArray[selectOptions.value]) {
        newArray.push(obj);
      }
    }
  } else if(change[searchBy.value] === "countries") {
    let countriesArray = country(movies);
    for(const obj of movies) {
      if(obj["countries"] === countriesArray[selectOptions.value]) {
        newArray.push(obj);
      } else if(Array.isArray(obj["countries"]) && obj["countries"].includes(countriesArray[selectOptions.value])) {
        newArray.push(obj);
      }
    }
  } else if(change[searchBy.value] === "director") {
    let directorsArray = directorName(movies);
    for(const obj of movies) {
      if(obj["director"] === directorsArray[selectOptions.value]) {
        newArray.push(obj);
      }
    }
  }

  // console.log(newArray);
  // console.log(searchBy.value, selectOptions.value);

  setInformations(newArray);
}, false);

