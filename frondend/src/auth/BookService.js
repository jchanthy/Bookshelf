import { useState, useEffect } from 'react';
import axios from "axios";

const BookService = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getBooks = async () => {
        try {
            const response = await axios.get('/api/books');
            const data = response.data;
            setBooks(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const readBook = async (bookId) => {
        try {
            const response = await fetch(`/api/books/${bookId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isRead: true }),
            });
            const data = await response.json();
            setBooks((prevBooks) =>
                prevBooks.map((book) => (book.id === bookId ? data : book))
            );
        } catch (error) {
            setError(error);
        }
    };

    const getAlreadyReadBooks = () => {
        return books.filter((book) => book.isRead);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return {
        books,
        loading,
        error,
        readBook,
        getAlreadyReadBooks,
    };
};

export default BookService;