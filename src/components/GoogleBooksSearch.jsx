import { useState } from "react";
import { fetchBooks } from "../GoogleBooksAPI";
import "../styles/googlebooks.css";

export default function GoogleBooksSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  // 📚 Search for Books
  const handleSearch = async () => {
    if (query.trim() === "") return;
    const results = await fetchBooks(query);
    setBooks(results);
  };

  // ❌ Clear Search
  const handleClear = () => {
    setQuery("");
    setBooks([]);
  };

  return (
    <div className="google-books-search">
      <h2>Search Books</h2>
      <input
        type="text"
        placeholder="Enter book title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // ✅ Press Enter to Search
      />
      <div className="button-wrapper">
    <button className="search-btn" onClick={handleSearch}>🔍 Search</button>
    {books.length > 0 && (
        <button className="clear-search" onClick={() => setBooks([])}>Clear Search</button>
    )}
</div>

      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x192"}
              alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
            <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
              📖 View Book
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
