import Book from "../../models/bookSchema.js";

 const createBook = async ( req, res) => {
    // Create a new book document and save it to the database
    const book = new Book(req.body);

    // Check if the book already exists
    const existingBook = await Book.findOne({ bookTitle: req.body.bookTitle,});
    if (existingBook) {
        return res.status(400).json({ message: 'Book already exists' });
    }

    // Save the book document to the database
    await book.save();
    res.status(201).json({ message: 'Book created successfully', book });
};

 export default createBook;