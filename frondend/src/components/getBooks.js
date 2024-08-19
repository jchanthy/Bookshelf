import { useState, useEffect } from 'react';
import axios from 'axios';

const GetBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/api/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Rating</th>
                    <th>Thumbnail</th>
                </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.rating}</td>
                        <td><img src={book.thumbnail} alt="Book Thumbnail" /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetBooks;