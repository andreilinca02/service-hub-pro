import Footer from "@/components/Footer";

const TermeniSiConditii = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", flexDirection: "column" }}>
      <div className="px-4 max-w-5xl mx-auto w-full" style={{ flex: 1, paddingTop: 60, paddingBottom: 40 }}>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 32, color: "#FFFFFF", marginBottom: 30 }}>
          Termeni și Condiții
        </h1>

        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#CCCCCC", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
          <p>
            Bine ați venit pe site-ul nostru. Prin accesarea și utilizarea acestui site, sunteți de acord cu următorii termeni și condiții.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#FFFFFF" }}>1. Informații generale</h2>
          <p>
            Acest site este operat de compania noastră cu sediul în Cluj-Napoca, Cluj, Str. Galați nr.6. Toate informațiile prezentate pe site au caracter informativ și pot fi modificate fără notificare prealabilă.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#FFFFFF" }}>2. Servicii</h2>
          <p>
            Serviciile oferite sunt descrise pe paginile dedicate ale site-ului. Prețurile și disponibilitatea serviciilor pot varia și vor fi confirmate la momentul solicitării.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#FFFFFF" }}>3. Proprietate intelectuală</h2>
          <p>
            Conținutul acestui site, inclusiv texte, imagini, grafice și logo-uri, este protejat de legile privind drepturile de autor și nu poate fi reprodus fără acordul prealabil scris.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#FFFFFF" }}>4. Limitarea răspunderii</h2>
          <p>
            Nu ne asumăm responsabilitatea pentru eventualele erori sau omisiuni din conținutul site-ului. Utilizarea informațiilor de pe site se face pe propria răspundere a utilizatorului.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#FFFFFF" }}>5. Modificări ale termenilor</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările intră în vigoare la data publicării pe site.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#FFFFFF" }}>6. Contact</h2>
          <p>
            Pentru orice întrebări legate de acești termeni și condiții, ne puteți contacta prin intermediul formularului de contact disponibil pe site.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermeniSiConditii;
