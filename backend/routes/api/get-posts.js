import Book from "../../models/bookSchema.js";

export default async (req, res) => {
 try
 {
  const books = await Book.find();

  if (!books) {
   return res.status(404).json({ message: 'No books found' });
  }

  res.json(books);
 }
 catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
 }

};
