const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Tous les livres ont-ils été empruntés au moins 1 fois ?")
  books.forEach(book => {
console.log(book.rented >= 1)
})


console.log("Quel est le livre le plus emprunté ?")
most_rented_book = books[0].rented;
for (let book of books) {
  if (book.rented > most_rented_book) {
    most_rented_book = book;
    console.log(book.title);
  }
}

console.log("Quel est le livre le moins emprunté ?")
least_rented_book = books[0].rented;
for (let book of books) {
  if (book.rented < least_rented_book) {
    least_rented_book = book;
    console.log(book.title);
  }
}


console.log("Quel est le livre avec l'ID 873495 ?")
function idBook(number) {
  return number.id === 873495;
}
console.log(books.find(idBook));


console.log("Supprime le livre avec l'ID 133712: ")
let book_to_delete = 133712
for (let book of books) {
  if (book.id === book_to_delete) {
  books.splice(books.indexOf(book), 1)}
}
console.log(books);



console.log("Livres triés par ordre alphabétique sans l'ID 133712 : ")
console.log(books.sort(function(a,b){
    return a.title.localeCompare(b.title);
}));