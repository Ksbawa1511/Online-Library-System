import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, showDetailsLink = true }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>by {book.author}</p>
    {showDetailsLink && (
      <Link to={`/books/details/${book.id}`}>View Details</Link>
    )}
  </div>
);

export default BookCard; 