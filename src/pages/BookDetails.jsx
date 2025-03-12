import { useParams, Link } from "react-router-dom";
import { books } from "../data/books"; 
import "./../styles/bookdetails.css";

export default function BookDetails() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const book = books.find((b) => b.id === decodedTitle);

  if (!book) {
    return <h2>❌ Book Not Found</h2>;
  }

  return (
    <div className="book-details-page">
      <div className="book-details">
        <img src={book.image} alt={book.title} />
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>
        <p className="genre">📚 {book.genre} | 🗓️ {book.year} | 📖 {book.pages} pages</p>
        <p className="rating">⭐ {book.rating} / 5</p>
        <h3>Review</h3>
        <p>{book.fullReview}</p>

        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </div>
  );
}

