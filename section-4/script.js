const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
/*
const book = getBook(2);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// works because title and author is properties in book
console.log(author, title, genres);
// Destructuring of arrays

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// primaryGenre;
// secondaryGenre;

// using destrucutring, same like objects but using [] instead of {}
// ... rest operator, and the rest operator must be the last in the destructuring pattern
const [primaryGenre, secondaryGenre, ...thRestGenres] = genres;
console.log(primaryGenre, ",", secondaryGenre, thRestGenres);

// const newGenres = [genres, "epic fantasy"]; // It gives array inside array
// So we use spread operator
const newGenres = [...genres, "epic fantasy"]; // Stick to genres a new genre
newGenres;

const updatedBook = {
  ...book,
  // New prop
  moviePublicationDate: "2001-12-19",
  // Overriding an existing prop
  pages: 12100,
}; // Adding new properties to the object using Spread operator
updatedBook;
// We can also override properties, like we did when we updated pages above to 12100.

// Template Literals `` back ticks to express JavaScript variables inside
const summary = `${title} is a book has ${123 + 50} pages and published in ${
  publicationDate.split("-")[0]
}`;
summary;

// Ternaries instead of if/else statements
const pagesRange =
  pages > 1000 ? "over a thousand pages" : "less than one thousand pages";
pagesRange;

// Arrow functions
const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));
*/
const book = getBooks();

const x = [1, 2, 3, 4, 5].map((le) => le * 2);
x;

const title = book.map((book) => book.title); // For each book element, return his book title

const essentialData = book.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialData;
