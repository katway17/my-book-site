import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p className="author">by {book.author}</p>
      <p className="rating">⭐ {book.rating} / 5</p>
      <p className="summary">{book.summary}</p>

      {/* ✅ Ensure the link uses book.id exactly as in books.js */}
      <Link to={`/book/${book.id}`} className="read-more">
        Read More →
      </Link>
    </div>
  );
}


