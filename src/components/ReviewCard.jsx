import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  console.log("✅ Rendering review:", review); // 🐞 Debugging step

  return (
    <div className="review-card">
      <img src={review.image} alt={review.title} />
      <h2>{review.title}</h2>
      <p className="author">by {review.author}</p>
      <p className="rating">⭐ {review.rating} / 5</p>
      <p className="summary">{review.summary}</p>

      <Link to={`/review/${review.id}`} className="read-more">
        Read More →
      </Link>
    </div>
  );
}


