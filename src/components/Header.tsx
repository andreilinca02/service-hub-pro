import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="flex items-center justify-center gap-6 py-5 fixed top-0 left-0 right-0 z-50 bg-background transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <a
        href="/"
        className="px-6 py-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          color: "#DCDCDC",
          borderBottom: isActive("/") ? "1px solid white" : "none",
        }}
      >
        Acasă
      </a>
      <a
        href="/servicii"
        className="px-6 py-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          color: "#DCDCDC",
          borderBottom: isActive("/servicii") ? "1px solid white" : "none",
        }}
      >
        Servicii
      </a>
    </header>
  );
};

export default Header;
