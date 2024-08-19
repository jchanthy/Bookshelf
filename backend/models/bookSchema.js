import mongoose from "mongoose";


const { Schema, model } = mongoose;
const bookSchema = new Schema({
    bookCode: {
        type: String,
        required: true,
    },
    bookTitle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    averageRating: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

const Book = model('Book', bookSchema);
export default Book;