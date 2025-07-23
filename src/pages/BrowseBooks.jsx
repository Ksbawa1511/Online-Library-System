import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import booksData from '../data/books';
import BookCard from '../components/BookCard';
import { setBooks } from '../redux/booksSlice';

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  // On first load, if Redux books is empty, populate from dummy data
  useEffect(() => {
    if (!books || books.length === 0) {
      dispatch(setBooks(booksData));
    }
    // eslint-disable-next-line
  }, []);

  // Filter books by category if present
  let filteredBooks = books;
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Further filter by search (title or author)
  if (search.trim() !== '') {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="browse-books-page">
      {category && (
        <button 
          onClick={() => navigate('/books')} 
          style={{ 
            marginBottom: '1rem', 
            padding: '0.5rem 1rem',
            backgroundColor: '#0077cc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← Back to All Books
        </button>
      )}
      <h1>Browse Books {category && `- ${category.replace(/-/g, ' ')}`}</h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="books-list">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooks; 