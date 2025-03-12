import { useEffect, useState } from "react";
import "./../styles/footer.css";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY; // How far we've scrolled
      const documentHeight = document.documentElement.scrollHeight; // Full height of the page

      // Show the footer only when near the bottom
      if (scrollPosition >= documentHeight - 10) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${showFooter ? "show" : "hide"}`}>
      <p>© {new Date().getFullYear()} Kat's Books. All Rights Reserved.</p>
    </footer>
  );
}
