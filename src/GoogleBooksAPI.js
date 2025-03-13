import axios from "axios";

const API_KEY = "AIzaSyCtlssFowKHKEh2Rgk8O1LsWj1ou5nB_xg";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

/**
 * Fetch books by title using Google Books API.
 * @param {string} query - The book title or keyword.
 * @returns {Promise} - Returns book data.
 */

export const fetchBooks = async (query) => {
    try {
      const response = await axios.get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: query,
          key: API_KEY,
          maxResults: 10,
        },
      });
      console.log("📚 API Response:", response.data);
      return response.data.items || [];
    } catch (error) {
      console.error("🚨 Error fetching books:", error.response?.data || error.message);
      return [];
    }
  };