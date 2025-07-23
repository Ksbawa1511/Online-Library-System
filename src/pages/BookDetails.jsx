import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import booksData from '../data/books';
import { FaGithub } from 'react-icons/fa';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = booksData.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div>
        <h2>Book Not Found</h2>
        <button onClick={() => navigate('/books')}>Back to Browse</button>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate('/books')}>Back to Browse</button>
    </div>
  );
};

export default BookDetails; 