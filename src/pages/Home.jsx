import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Fiction',
  'Non-Fiction',
  'Sci-Fi',
  'Mystery',
  'Biography',
  'Fantasy',
];

const popularBooks = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'Dune', author: 'Frank Herbert' },
];

const Home = () => (
  <div className="home-page">
    <h1>Welcome to the Online Library</h1>
    <h2>Categories</h2>
    <ul>
      {categories.map((cat) => (
        <li key={cat}>
          <Link to={`/books/${cat.toLowerCase().replace(/ /g, '-')}`}>{cat}</Link>
        </li>
      ))}
    </ul>
    <h2>Popular Books</h2>
    <ul>
      {popularBooks.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author} <Link to={`/books/details/${book.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home; 