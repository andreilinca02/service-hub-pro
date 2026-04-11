import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import heroImage from "@/assets/Website_Background.jpg";
import laptopImage from "@/assets/embtech_mentenanta_laptop.jpg";
import pcbImage from "@/assets/embtech_reparatii_PCB_microsoldering.webp";
import consoleImage from "@/assets/embtech_mentenanta_console.webp";
import biosImage from "@/assets/embtech_software_BIOS.jpeg";

const Servicii = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

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

      {/* Reparații Hardware Section */}
      <section id="reparatii-hardware" className="px-4 max-w-5xl mx-auto" style={{ marginTop: 40, marginBottom: 40 }}>
        <div className="p-[30px] md:p-[40px]" style={{ background: "#111111", border: "1px solid #2A2A2A", borderRadius: 20, boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}>
        {/* Top row: image LEFT, text RIGHT */}
        <div className="flex flex-col md:flex-row items-start justify-between" style={{ gap: 40 }}>
          <div className="w-full md:w-1/2">
            <img
              src={pcbImage}
              alt="Reparații Hardware PCB"
              className="w-full h-auto object-cover"
              style={{ borderRadius: 15 }}
            />
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <h3 className="text-center font-bold text-2xl mt-[30px]" style={{ marginBottom: 15, fontFamily: "'Inter', sans-serif" }}>
              Reparații Hardware – Diagnosticare și Intervenții Electronice
            </h3>
            <p className="mt-[80px] mb-[15px]" style={{ fontSize: 16, marginBottom: 15 }}>
              Oferim servicii de diagnosticare și reparații hardware pentru laptopuri și PC-uri, inclusiv intervenții la nivel de placă de bază (PCB), acolo unde este posibil.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Identificăm defectele și intervenim punctual pentru remedierea problemelor, de la componente defecte și mufe deteriorate până la trasee întrerupte sau contacte imperfecte.
            </p>
            <p style={{ fontSize: 16 }}>
              Punem accent pe soluții eficiente și corecte, cu scopul de a readuce echipamentul în stare de funcționare fără costuri inutile.
            </p>
          </div>
        </div>

        {/* Bottom row: Serviciile includ LEFT, Beneficii RIGHT */}
        <div className="flex flex-col md:flex-row items-start" style={{ gap: 40, marginTop: 30 }}>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <p className="text-center font-bold mb-[15px]" style={{ fontSize: 16 }}>
              Serviciile includ
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li className="text-center">✔ Diagnosticare hardware</li>
              <li className="text-center">✔ Reparații plăci de bază (în limita intervențiilor disponibile)</li>
              <li className="text-center">✔ Refacere trasee electrice (unde este posibil)</li>
              <li className="text-center">✔ Înlocuire componente defecte</li>
              <li className="text-center">✔ Reparații / înlocuire mufe (alimentare, USB etc.)</li>
              <li className="text-center">✔ Upgrade-uri și optimizări hardware</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <p className="text-center font-bold mb-[15px]" style={{ fontSize: 16 }}>
              Beneficii
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li className="text-center">✔ Evaluare corectă și transparentă a defectului</li>
              <li className="text-center">✔ Soluții eficiente, adaptate fiecărui caz</li>
              <li className="text-center">✔ Costuri optimizate față de înlocuirea completă</li>
              <li className="text-center">✔ Comunicare clară înainte de orice intervenție</li>
            </ul>
          </div>
        </div>

        {/* Recomandare underneath */}
        <div className="mt-[80px] mb-[15px]" style={{ fontFamily: "'Inter', sans-serif", color: "#DCDCDC" }}>
          <p className="text-center font-bold mb-[10px]" style={{ fontSize: 16, fontFamily: "'Inter', sans-serif" }}>
            Recomandare
          </p>
          <p className="text-center" style={{ fontSize: 16, fontWeight: 300 }}>
            În cazul problemelor hardware sau al echipamentelor nefuncționale, o diagnosticare corectă este esențială pentru alegerea celei mai bune soluții de reparație.
          </p>
        </div>
        </div>
      </section>

      {/* Mentenanță Laptop/PC Section - image RIGHT, text LEFT */}
      <section id="mentenanta-laptop-pc" className="px-4 max-w-5xl mx-auto" style={{ marginTop: 40, marginBottom: 40 }}>
        <div className="p-[30px] md:p-[40px]" style={{ background: "#111111", border: "1px solid #2A2A2A", borderRadius: 20, boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}>
        {/* Row 1: text LEFT, image RIGHT */}
        <div className="flex flex-col md:flex-row-reverse items-start justify-between" style={{ gap: 40 }}>
          <div className="w-full md:w-1/2">
            <img
              src={laptopImage}
              alt="Mentenanță Laptop"
              className="w-full h-auto object-cover"
              style={{ borderRadius: 15 }}
            />
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <h3 className="text-center font-bold text-2xl mt-[30px]" style={{ marginBottom: 15, fontFamily: "'Inter', sans-serif" }}>
              Mentenanță Laptop / PC – Prevenție și performanță
            </h3>
            <p className="mt-[80px] mb-[15px]" style={{ fontSize: 16, marginBottom: 15 }}>
              Laptopurile și calculatoarele sunt esențiale în activitatea zilnică, iar funcționarea lor optimă depinde direct de starea componentelor interne. În timp, acumularea de praf și degradarea pastei termoconductoare afectează sistemul de răcire, ducând la temperaturi ridicate și performanțe instabile.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Fără o mentenanță periodică, aceste probleme pot evolua în defecte costisitoare sau pierderi de performanță semnificative.
            </p>
            <p style={{ fontSize: 16 }}>
              Prin servicii profesionale de mentenanță, echipamentul tău este curățat, verificat și optimizat pentru a funcționa în condiții ideale.
            </p>
          </div>
        </div>

        {/* Row 2: Serviciul include LEFT, Probleme prevenite RIGHT */}
        <div className="flex flex-col md:flex-row items-start" style={{ gap: 40, marginTop: 30 }}>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <p className="text-center font-bold mb-[15px]" style={{ fontSize: 16 }}>
              Serviciul include
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li className="text-center">✔ Curățare profesională interior și exterior</li>
              <li className="text-center">✔ Înlocuire pastă termoconductoare</li>
              <li className="text-center">✔ Verificare și optimizare sistem de răcire (ventilatoare & airflow)</li>
              <li className="text-center">✔ Inspecție generală a componentelor</li>
              <li className="text-center">✔ Optimizare de performanță (setări hardware & software – ex: RAM, BIOS, sistem)</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <p className="text-center font-bold mb-[15px]" style={{ fontSize: 16 }}>
              Probleme prevenite prin mentenanță
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li className="text-center">✔ Supraîncălzire și uzură accelerată</li>
              <li className="text-center">✔ Scădere de performanță în aplicații și jocuri</li>
              <li className="text-center">✔ Blocaje, lag sau restarturi neașteptate</li>
              <li className="text-center">✔ Zgomot excesiv al ventilatoarelor</li>
            </ul>
          </div>
        </div>

        {/* Row 3: Recomandare */}
        <div className="mt-[80px] mb-[15px]" style={{ fontFamily: "'Inter', sans-serif", color: "#DCDCDC" }}>
          <p className="text-center font-bold mb-[10px]" style={{ fontSize: 16, fontFamily: "'Inter', sans-serif" }}>
            Recomandare profesională
          </p>
          <p className="text-center" style={{ fontSize: 16, fontWeight: 300 }}>
            Pentru a menține performanța și a preveni defectele, se recomandă efectuarea mentenanței o dată la 6–12 luni, în funcție de utilizare și mediul în care este folosit echipamentul.
          </p>
        </div>
        </div>
      </section>

      {/* Mentenanță Consolă Section - image LEFT, text RIGHT */}
      <section id="mentenanta-consola" className="px-4 max-w-5xl mx-auto" style={{ marginTop: 40, marginBottom: 40 }}>
        <div className="p-[30px] md:p-[40px]" style={{ background: "#111111", border: "1px solid #2A2A2A", borderRadius: 20, boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}>
        <div className="flex flex-col md:flex-row items-start justify-between" style={{ gap: 40 }}>
          <div className="w-full md:w-1/2">
            <img
              src={consoleImage}
              alt="Mentenanță Consolă"
              className="w-full h-auto object-cover"
              style={{ borderRadius: 15 }}
            />
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <h3 className="text-center font-bold text-2xl mt-[30px]" style={{ marginBottom: 15, fontFamily: "'Inter', sans-serif" }}>
              Mentenanță profesională pentru console
            </h3>
            <p className="mt-[80px] mb-[15px]" style={{ fontSize: 16, marginBottom: 15 }}>
              Consolele moderne sunt echipamente de înaltă performanță, proiectate pentru experiențe fluide și sesiuni intense de gaming. În timp, acumularea de praf și uzura componentelor interne pot afecta eficiența sistemului de răcire, conducând la temperaturi ridicate, zgomot excesiv și scăderi de performanță.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Prin servicii de mentenanță realizate cu atenție la detalii — curățare internă completă, înlocuire pastă termoconductoare și verificarea sistemului de răcire — consola ta este readusă la standardele optime de funcționare.
            </p>
            <p style={{ fontSize: 16 }}>
              Rezultatul este o experiență de gaming mai silențioasă, mai stabilă și mai fiabilă, chiar și în cele mai solicitante momente.
            </p>
          </div>
        </div>

        <div className="flex justify-center" style={{ marginTop: 30 }}>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <p className="text-center font-bold mb-[15px]" style={{ fontSize: 16 }}>
              Beneficii esențiale
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li className="text-center">✔ Performanță constantă și fără compromisuri</li>
              <li className="text-center">✔ Temperatură controlată și eficiență termică optimă</li>
              <li className="text-center">✔ Reducerea semnificativă a zgomotului</li>
              <li className="text-center">✔ Protecție împotriva uzurii premature</li>
              <li className="text-center">✔ Extinderea duratei de viață a echipamentului</li>
            </ul>
          </div>
        </div>

        <div className="mt-[80px] mb-[15px]" style={{ fontFamily: "'Inter', sans-serif", color: "#DCDCDC" }}>
          <p className="text-center font-bold mb-[10px]" style={{ fontSize: 16, fontFamily: "'Inter', sans-serif" }}>
            Recomandare profesională
          </p>
          <p className="text-center" style={{ fontSize: 16, fontWeight: 300 }}>
            Pentru a păstra performanța și fiabilitatea la standarde optime, se recomandă efectuarea mentenanței la un interval de 6–12 luni, în funcție de condițiile de utilizare.
          </p>
        </div>
        </div>
      </section>

      {/* Servicii Software Section - image RIGHT, text LEFT */}
      <section id="servicii-software" className="px-4 max-w-5xl mx-auto" style={{ marginTop: 40, marginBottom: 40 }}>
        <div className="p-[30px] md:p-[40px]" style={{ background: "#111111", border: "1px solid #2A2A2A", borderRadius: 20, boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}>
        <div className="flex flex-col md:flex-row-reverse items-start justify-between" style={{ gap: 40 }}>
          <div className="w-full md:w-1/2">
            <img
              src={biosImage}
              alt="Servicii Software BIOS"
              className="w-full h-auto object-cover"
              style={{ borderRadius: 15 }}
            />
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <h3 className="text-center font-bold text-2xl mt-[30px]" style={{ marginBottom: 15, fontFamily: "'Inter', sans-serif" }}>
              Servicii Software – Instalare, Optimizare și Configurare Avansată
            </h3>
            <p className="mt-[80px] mb-[15px]" style={{ fontSize: 16, marginBottom: 15 }}>
              Un sistem de operare instalat corect și configurat optim este esențial pentru performanța, stabilitatea și securitatea oricărui laptop sau PC.
            </p>
            <p style={{ fontSize: 16, marginBottom: 15 }}>
              Instalăm sistemul de operare curat, fără aplicații inutile, și îl configurăm pentru performanță, stabilitate și securitate optimă. Sistemul tău va fi pregătit de utilizare imediată, fără erori sau încetiniri.
            </p>
            <p style={{ fontSize: 16 }}>
              Realizăm, de asemenea, actualizări și configurări BIOS (UEFI) în siguranță, pentru a asigura compatibilitatea și funcționarea corectă a componentelor.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start" style={{ gap: 40, marginTop: 30 }}>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <p className="text-center font-bold mb-[15px]" style={{ fontSize: 16 }}>
              Serviciile includ
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li className="text-center">✔ Instalare sistem de operare (clean install, fără aplicații inutile)</li>
              <li className="text-center">✔ Instalare și configurare drivere corecte</li>
              <li className="text-center">✔ Instalare și configurare software esențial</li>
              <li className="text-center">✔ Optimizare performanță și consum de resurse</li>
              <li className="text-center">✔ Configurare securitate sistem</li>
              <li className="text-center">✔ Actualizare / rescriere BIOS (UEFI) în condiții de siguranță</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: "#DCDCDC" }}>
            <p className="text-center font-bold mb-[15px]" style={{ fontSize: 16 }}>
              Beneficii
            </p>
            <ul style={{ fontSize: 16, paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              <li className="text-center">✔ Sistem rapid, stabil și pregătit de utilizare imediată</li>
              <li className="text-center">✔ Eliminarea erorilor și aplicațiilor nedorite</li>
              <li className="text-center">✔ Performanță optimizată pentru activități zilnice sau profesionale</li>
              <li className="text-center">✔ Securitate îmbunătățită împotriva riscurilor software</li>
              <li className="text-center">✔ Compatibilitate extinsă cu hardware nou</li>
            </ul>
          </div>
        </div>

        <div className="mt-[80px] mb-[15px]" style={{ fontFamily: "'Inter', sans-serif", color: "#DCDCDC" }}>
          <p className="text-center font-bold mb-[10px]" style={{ fontSize: 16, fontFamily: "'Inter', sans-serif" }}>
            Recomandare
          </p>
          <p className="text-center" style={{ fontSize: 16, fontWeight: 300 }}>
            Reinstalarea și optimizarea sistemului sunt recomandate atunci când apar încetiniri, erori sau după o perioadă îndelungată de utilizare.
          </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Servicii;
