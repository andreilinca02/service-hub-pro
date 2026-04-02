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
              Mentenanță Laptop / PC – Prevenție și Performanță
            </h3>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Serviciile de mentenanță PC și curățare laptop profesională sunt esențiale pentru menținerea temperaturilor optime și prevenirea defectelor costisitoare.
            </p>
            <p style={{ fontSize: 16, marginBottom: 10 }}>
              În timp, praful acumulat și degradarea pastei termice pot duce la:
            </p>
            <ul style={{ fontSize: 16, marginBottom: 15, paddingLeft: 20, listStyleType: "'• '", display: "flex", flexDirection: "column", gap: 7 }}>
              <li>supraîncălzire</li>
              <li>scădere de performanță</li>
              <li>blocaje sau opriri neașteptate</li>
            </ul>
            <p style={{ fontSize: 16, marginBottom: 10 }}>
              Serviciul nostru de service laptop și PC include:
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 20, listStyleType: "'• '", display: "flex", flexDirection: "column", gap: 7 }}>
              <li>curățare profesională interior/exterior</li>
              <li>înlocuire pastă termoconductoare</li>
              <li>verificare ventilatoare și airflow</li>
              <li>inspecție generală componente</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicii;
