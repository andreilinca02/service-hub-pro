import { Link } from "react-router-dom";
import salImage from "@/assets/SAL.png";
import solImage from "@/assets/SOL.png";

const Footer = () => {
  return (
    <footer className="px-4 max-w-5xl mx-auto">
      {/* Separator */}
      <div style={{ width: "100%", height: 1, backgroundColor: "#5A5A5A", marginTop: 60 }} />

      {/* Footer Content */}
      <div
        className="flex flex-col md:flex-row md:justify-between md:items-start items-center"
        style={{ paddingTop: 30, paddingBottom: 30, gap: 40 }}
      >
        {/* Left */}
        <div className="flex flex-col items-center md:items-start" style={{ gap: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: "#5A5A5A" }}>
            Informații utile
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            Termeni și Condiții
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            Politică de Cookies
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            Politică de Confidențialitate
          </span>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center" style={{ gap: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: "#5A5A5A" }}>
            Date firmă
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            CUI: 12345678
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            Nr. registru: J01/1234/5678
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            Sediu social: Cluj-Napoca, Cluj
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            Str. Galați nr.6
          </span>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end" style={{ gap: 10 }}>
          <div className="text-right" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400, color: "#5A5A5A" }}>
            <div className="text-center md:text-right">AUTORITATEA NAȚIONALĂ PENTRU</div>
            <div className="text-center md:text-right">PROTECȚIA CONSUMATORULUI</div>
          </div>
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
            <img src={salImage} alt="SAL - ANPC" style={{ width: 250, height: 50, objectFit: "contain" }} />
          </a>
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            <img src={solImage} alt="SOL - Soluționarea Online a Litigiilor" style={{ width: 250, height: 50, objectFit: "contain" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
