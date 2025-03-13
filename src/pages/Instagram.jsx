import "./../styles/instagram.css";

export default function Instagram() {
  return (
    <div className="instagram-page">
      <div className="instagram-container">
        <h1>📖 My Instagram Feed</h1>
        <p>Check out my latest bookstagram posts!</p>

        {/* 📸 Instagram Profile Embed */}
        <div className="instagram-embed">
          <iframe
            src="https://www.instagram.com/kats.books17/embed/"
            width="400"
            height="480"
            frameBorder="0"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

