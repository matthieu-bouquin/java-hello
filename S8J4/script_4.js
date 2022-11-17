const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("Voici les entrepreneurs nés dans les seventies :")
  let seventies =  entrepreneurs.filter(function(entrepreneur) {
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
});
  console.log(seventies);



console.log("Voici les prénoms et noms des entrepreneurs :")
  for (let entrepreneurAttribut in entrepreneurs) {
    console.log(entrepreneurs[entrepreneurAttribut].first + " " + entrepreneurs[entrepreneurAttribut].last)
  };


console.log("******************")

console.log("Aujourd'hui, les entrepreneurs ont:");
  for (let entrepreneur of entrepreneurs) {
    let birthday_year = entrepreneur.year
    let year_now = 2022
    age_today = year_now - birthday_year
    console.log(`${entrepreneur.first} ${entrepreneur.last}:${age_today} ans`);
  }

  console.log("Voici la liste des entrepreneurs classée par ordre alphabétique :")
  console.log(entrepreneurs.sort(function(a,b){
      return a.last.localeCompare(b.last);
  }));
