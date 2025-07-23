import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const categories = [
  'fiction',
  'non-fiction',
  'sci-fi',
  'mystery',
  'biography',
  'fantasy',
];

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title is required';
    if (!form.author.trim()) errs.author = 'Author is required';
    if (!form.category) errs.category = 'Category is required';
    if (!form.description.trim()) errs.description = 'Description is required';
    if (!form.rating || isNaN(form.rating) || form.rating < 1 || form.rating > 5) {
      errs.rating = 'Rating must be a number between 1 and 5';
    }
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const newBook = {
        ...form,
        id: books.length ? books[books.length - 1].id + 1 : 1,
        rating: Number(form.rating),
      };
      dispatch(addBook(newBook));
      navigate('/books');
    }
  };

  return (
    <div className="add-book-page">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
          {errors.author && <div style={{ color: 'red' }}>{errors.author}</div>}
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
        </div>
        <div>
          <label>Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
          />
          {errors.rating && <div style={{ color: 'red' }}>{errors.rating}</div>}
        </div>
        <button type="submit" style={{ marginTop: 16 }}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook; 