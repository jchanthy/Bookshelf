import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import SearchBook from "../searchBook.js";


const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/api/books');
                setBooks(response.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchBooks();
    }, []);
    return (
        <>
            <SearchBook onSearch={
                (query) => {
                    console.log(query);
                }
            } />
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr className="text-1xl font-bold">
                        <td>BookCode</td>
                        <td>BookTitle</td>
                        <td>Author</td>
                        <td>AverageRating</td>
                        <td>Thumbnail</td>
                        <td>status</td>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    { books.map((book, key) => (
                        <tr key={key}>
                            <td>{book.bookCode}</td>
                            <td>{book.bookTitle}</td>
                            <td><span className="badge badge-ghost badge-sm">{book.author} </span></td>
                            <td>
                                <span className="badge badge-ghost badge-sm">{book.averageRating} </span>
                                <br/>
                                <span className="">
                      <div className="rating">
{Array.from({length: 5}, (_, index) => index + 1).map((rating, index) => (
    <input
        key={index}
        type="radio"
        name={`rating-${key}`}
        className={`mask mask-star-2 ${index <= Math.floor(book.averageRating) ? 'bg-orange-400' : 'bg-gray-300'}`}
        defaultChecked={index === Math.floor(book.averageRating)}
    />
))}
                      </div>
                  </span>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="h-24 w-24">
                                            <Link to={'/book-detail'}>
                                                <img role="button"
                                                     src="https://images-na.ssl-images-amazon.com/images/I/51r6XIPWmoL._SX331_BO1,204,203,200_.jpg"
                                                     alt="Avatar Tailwind CSS Component"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p style={{color: 'blue'}}>{book.status}</p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    {/* foot */}
                </table>
            </div>

        </>

    );
}

export default Dashboard;