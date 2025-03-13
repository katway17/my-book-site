import { useEffect } from "react";
import "./../styles/goodreads.css";

export default function Goodreads() {
  useEffect(() => {
    // Dynamically load the Goodreads script
    const script = document.createElement("script");
    script.src =
      "https://www.goodreads.com/review/grid_widget/159169410.Kat%20%E2%99%A5's%20bookshelf:%20read?cover_size=medium&hide_link=&hide_title=&num_books=200&order=a&shelf=read&sort=date_added&widget_id=1741728652";
    script.type = "text/javascript";
    script.charset = "utf-8";
    document.getElementById("gr_widget_container").appendChild(script);
  }, []);

  return (
    <div className="goodreads-page">
      <div className="goodreads-container">
        <h1>My Goodreads Shelf</h1>
        <p>Check out my books from Goodreads!</p>

        {/* 📖 Goodreads Widget Embed */}
        <div id="gr_widget_container">
          <div id="gr_grid_widget_1741728652">
            <h2>
              <a
                style={{ textDecoration: "none" }}
                rel="nofollow"
                href="https://www.goodreads.com/review/list/159169410-kat?shelf=read&utm_medium=api&utm_source=grid_widget"
              >
                Kat ♥'s Bookshelf: Read
              </a>
            </h2>
            <div className="gr_grid_container">
              {/* Static content until the script loads */}
              <p>Loading books...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
