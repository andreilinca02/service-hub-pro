import heroImage from "@/assets/Website_Background.jpg";
import laptopImage from "@/assets/embtech_mentenanta_laptop.jpg";

const Servicii = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-center gap-6 py-5">
        <a
          href="/"
          className="px-6 py-2 bg-background text-foreground font-light text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
        >
          Acasă
        </a>
        <a
          href="/servicii"
          className="px-6 py-2 bg-background text-foreground font-light text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, borderBottom: "1px solid white" }}
        >
          Servicii
        </a>
      </header>

      {/* Hero Image */}
      <section className="w-full flex justify-center" style={{ marginTop: 40, marginBottom: 40 }}>
        <img
          src={heroImage}
          alt="EMB-TECH"
          className="object-contain px-4"
          style={{ maxWidth: "40%", width: "100%" }}
        />
      </section>

      {/* Mentenanță Laptop/PC Feature Section */}
      <section className="px-4 max-w-5xl mx-auto" style={{ marginTop: 60, marginBottom: 60 }}>
        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: 40 }}>
          <div className="w-full md:w-1/2">
            <img
              src={laptopImage}
              alt="Mentenanță Laptop"
              className="w-full h-auto object-cover"
              style={{ borderRadius: 20 }}
            />
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, color: "#FFFFFF" }}>
            <h3 style={{ fontSize: 22, marginBottom: 15, fontWeight: 300 }}>
              Mentenanță Laptop / PC – Preventie si performanta
            </h3>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Laptopurile și calculatoarele sunt esențiale în activitatea zilnică, iar funcționarea lor optimă depinde direct de starea componentelor interne. În timp, acumularea de praf și degradarea pastei termoconductoare afectează sistemul de răcire, ducând la temperaturi ridicate și performanțe instabile.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Fără o mentenanță periodică, aceste probleme pot evolua în defecte costisitoare sau pierderi de performanță semnificative.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Prin servicii profesionale de mentenanță, echipamentul tău este curățat, verificat și optimizat pentru a funcționa în condiții ideale.
            </p>
            <p style={{ fontSize: 16, marginBottom: 10 }}>
              Probleme prevenite prin mentenanță:
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 20, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li>✔ Supraîncălzire și uzură accelerată</li>
              <li>✔ Scădere de performanță în aplicații și jocuri</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicii;
