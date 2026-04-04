import heroImage from "@/assets/Website_Background.jpg";
import laptopImage from "@/assets/embtech_mentenanta_laptop.jpg";
import pcbImage from "@/assets/embtech_reparatii_PCB_microsoldering.webp";

const Servicii = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-center gap-6 py-5">
        <a
          href="/"
          className="px-6 py-2 bg-background text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "#DCDCDC" }}
        >
          Acasă
        </a>
        <a
          href="/servicii"
          className="px-6 py-2 bg-background text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "#DCDCDC", borderBottom: "1px solid white" }}
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

      {/* Reparații Hardware Section - image LEFT, text RIGHT */}
      <section className="px-4 max-w-5xl mx-auto" style={{ marginTop: 60, marginBottom: 60 }}>
        <div className="flex flex-col md:flex-row items-start justify-between" style={{ gap: 40 }}>
          <div className="w-full md:w-1/2">
            <img
              src={pcbImage}
              alt="Reparații Hardware PCB"
              className="w-full h-auto object-cover"
              style={{ borderRadius: 20 }}
            />
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <h3 style={{ fontSize: 22, marginBottom: 15, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
              Reparații Hardware – Diagnosticare și Intervenții Electronice
            </h3>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Oferim servicii de diagnosticare și reparații hardware pentru laptopuri și PC-uri, inclusiv intervenții la nivel de placă de bază (PCB), acolo unde este posibil.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Identificăm defectele și intervenim punctual pentru remedierea problemelor, de la componente defecte și mufe deteriorate până la trasee întrerupte sau contacte imperfecte.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Punem accent pe soluții eficiente și corecte, cu scopul de a readuce echipamentul în stare de funcționare fără costuri inutile.
            </p>
            <p style={{ fontSize: 16, marginBottom: 10 }}>
              Serviciile includ:
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7, marginBottom: 15 }}>
              <li>✔ Diagnosticare hardware</li>
              <li>✔ Reparații plăci de bază (în limita intervențiilor disponibile)</li>
              <li>✔ Refacere trasee electrice (unde este posibil)</li>
              <li>✔ Înlocuire componente defecte</li>
              <li>✔ Reparații / înlocuire mufe (alimentare, USB etc.)</li>
              <li>✔ Upgrade-uri și optimizări hardware</li>
            </ul>
            <p style={{ fontSize: 16, marginBottom: 10 }}>
              Beneficii:
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7, marginBottom: 15 }}>
              <li>✔ Evaluare corectă și transparentă a defectului</li>
              <li>✔ Soluții eficiente, adaptate fiecărui caz</li>
              <li>✔ Costuri optimizate față de înlocuirea completă</li>
              <li>✔ Comunicare clară înainte de orice intervenție</li>
            </ul>
            <p style={{ fontSize: 16, marginBottom: 5, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
              Recomandare:
            </p>
            <p style={{ fontSize: 16 }}>
              În cazul problemelor hardware sau al echipamentelor nefuncționale, o diagnosticare corectă este esențială pentru alegerea celei mai bune soluții de reparație.
            </p>
          </div>
        </div>
      </section>

      {/* Mentenanță Laptop/PC Section - image RIGHT, text LEFT */}
      <section className="px-4 max-w-5xl mx-auto" style={{ marginTop: 60, marginBottom: 60 }}>
        <div className="flex flex-col md:flex-row-reverse items-start justify-between" style={{ gap: 40 }}>
          <div className="w-full md:w-1/2">
            <img
              src={laptopImage}
              alt="Mentenanță Laptop"
              className="w-full h-auto object-cover"
              style={{ borderRadius: 20 }}
            />
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <h3 style={{ fontSize: 22, marginBottom: 15, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
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
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7, marginBottom: 15 }}>
              <li>✔ Supraîncălzire și uzură accelerată</li>
              <li>✔ Scădere de performanță în aplicații și jocuri</li>
              <li>✔ Blocaje, lag sau restarturi neașteptate</li>
              <li>✔ Zgomot excesiv al ventilatoarelor</li>
            </ul>
            <p style={{ fontSize: 16, marginBottom: 10 }}>
              Serviciul include:
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7, marginBottom: 15 }}>
              <li>✔ Curățare profesională interior și exterior</li>
              <li>✔ Înlocuire pastă termoconductoare</li>
              <li>✔ Verificare și optimizare sistem de răcire (ventilatoare & airflow)</li>
              <li>✔ Inspecție generală a componentelor</li>
              <li>✔ Optimizare de performanță (setări hardware & software – ex: RAM, BIOS, sistem)</li>
            </ul>
            <p style={{ fontSize: 16, marginBottom: 5, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
              Recomandare profesională:
            </p>
            <p style={{ fontSize: 16 }}>
              Pentru a menține performanța și a preveni defectele, se recomandă efectuarea mentenanței o dată la 6–12 luni, în funcție de utilizare și mediul în care este folosit echipamentul.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicii;
