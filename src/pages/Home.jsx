import { books } from "../data/books";
import BookCard from "../components/BookCard";
import "./../styles/home.css";
import GoogleBooksSearch from "../components/GoogleBooksSearch";
import { useState, useEffect } from "react";

export default function Home() {
  // 🔽 Scroll Function to Move to Search Section
  const scrollToSearch = () => {
    const searchSection = document.getElementById("search-section");
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔝 Show "Back to Top" Button after Scrolling Down
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // ✅ Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      {/* 🏠 Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Kat's Books</h1>
          <p>Exploring stories, one page at a time.</p>
          <button className="hero-search-btn" onClick={scrollToSearch}>
            Search Books »
          </button>
        </div>
        <div className="hero-image">
          <img src="/kat.jpg" alt="Kathleen Wayman" />
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

      {/* 📚 Google Books Section */}
      <div id="search-section" className="google-books-section">
        <GoogleBooksSearch />
      </div>

      {/* 🔝 Back to Top Button (Appears after scroll) */}
      {showButton && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ⬆ Back to Top
        </button>
      )}
    </div>
  );
}


