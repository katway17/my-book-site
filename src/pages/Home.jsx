import { books } from "../data/books";
import BookCard from "../components/BookCard";
import "./../styles/home.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      {/* 🏠 Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Kat's Books</h1>
          <p>Exploring stories, one page at a time.</p>
        </div>
        <div className="hero-image">
          <img src="/public/Kat.jpg" alt="Kathleen Wayman" />
        </div>
      </div>

      {/* 🌟 Favorite Books Section */}
      <div className="favorite-books">
        <h2>My Favorite Books</h2>
        <div className="book-grid">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

