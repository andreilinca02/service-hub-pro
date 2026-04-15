import Footer from "@/components/Footer";
import Header from "@/components/Header";

const h2Style: React.CSSProperties = { fontWeight: 700, fontSize: 18, color: "#FFFFFF" };

const PoliticaCookies = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ paddingTop: 60 }} />
      <div className="px-4 max-w-5xl mx-auto w-full" style={{ flex: 1, paddingTop: 60, paddingBottom: 40 }}>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 26, color: "#FFFFFF", marginBottom: 30 }}>
          POLITICA DE COOKIES
        </h1>

        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#CCCCCC", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
          <p>Această politică se referă la cookie-urile și paginile web operate de LINCA ANDREI PERSOANA FIZICA AUTORIZATA cu sediul social pe Str. Galați nr. 6, Cluj-napoca, jud. Cluj, 400584.</p>

          <h2 style={h2Style}>1. CE ESTE UN COOKIE?</h2>
          <p>Cookie-ul este un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se accesează Internetul. Cookie-ul este instalat prin solicitarea emisă de către un web-server unui browser (ex: Internet Explorer, Chrome) și este complet „pasiv" (nu conține programe software, viruși sau spyware și nu poate accesa informațiile de pe hard disk-ul utilizatorului).</p>

          <h2 style={h2Style}>2. LA CE SUNT FOLOSITE COOKIE-URILE?</h2>
          <p>Aceste fișiere fac posibilă recunoașterea terminalului utilizatorului și prezentarea conținutului într-un mod relevant, adaptat preferințelor utilizatorului. Cookie-urile asigură utilizatorilor o experiență plăcută de navigare și susțin eforturile noastre pentru a oferi servicii confortabile utilizatorilor: ex: – preferințele în materie de confidențialitate online, coșul de cumpărături. De asemenea, sunt utilizate în pregătirea unor statistici anonime agregate care ne ajută să înțelegem cum un utilizator beneficiază de paginile noastre web, permițându-ne îmbunătățirea structurii și conținutului lor, excluzând indentificarea personală a utilizatorului.</p>

          <h2 style={h2Style}>3. CE COOKIE-URI FOLOSIM?</h2>
          <p>Folosim două tipuri de cookie-uri: per sesiune și fixe. Cele per sesiune sunt fișiere temporare ce rămân în terminalul utilizatorului până la terminarea sesiunii sau închiderea aplicației (browser-ului web). Cele fixe rămân pe terminalul utilizatorului pe o perioadă definită de parametrii cookie-ului sau până sunt șterse manual de utilizator.</p>

          <h2 style={h2Style}>4. CUM SUNT FOLOSITE COOKIE-URILE DE CĂTRE ACEST SITE?</h2>
          <p>O vizită pe acest site poate plasa cookie-uri în scopuri de:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- Cookie-uri de funcționare și securitate</li>
            <li>- Cookie-uri de performanță internă (necesare funcționării platformei)</li>
            <li>- Cookie-uri de performanță a site-ului</li>
            <li>- Cookie-uri de analiză a vizitatorilor</li>
          </ul>

          <h2 style={h2Style}>5. CONȚIN COOKIE-URILE DATE PERSONALE?</h2>
          <p>Cookie-urile în sine nu solicită informații cu caracter personal pentru a putea fi utilizate și, în cele mai multe cazuri, nu identifică personal utilizatorii de Internet. Datele personale colectate prin utilizarea cookie-urilor pot fi colectate doar pentru a facilita anumite funcționalități pentru utilizator. Atare date sunt criptate într-un mod care face imposibil accesul persoanelor neautorizate la ele.</p>

          <h2 style={h2Style}>6. ȘTERGEREA COOKIE-URILOR</h2>
          <p>În general, o aplicație folosită pentru accesarea paginilor web permite salvarea cookie-urilor pe terminal în mod implicit. Aceste setări pot fi schimbate în așa fel încât administrarea automată a cookie-urilor să fie blocată de browser-ul web sau utilizatorul să fie informat de fiecare dată când cookie-urile sunt trimise către terminalul său. Informații detaliate despre posibilitățile și modurile de administrare a cookie-urilor pot fi găsite în zona de setări a aplicației (browser-ului web). Limitarea folosirii cookie-urilor poate afecta anumite funcționalități ale paginii web.</p>

          <h2 style={h2Style}>7. DE CE SUNT COOKIE-URILE IMPORTANTE PENTRU INTERNET?</h2>
          <p>Cookie-urile reprezintă punctul central al funcționării eficiente a Internetului, ajutând la generarea unei experiențe de navigare prietenoase și adaptată preferințelor și intereselor fiecărui utilizator. Refuzarea sau dezactivarea cookie-urilor poate face unele site-uri imposibil de folosit.</p>
          <p>Refuzarea sau dezactivarea cookie-urilor nu înseamnă că nu veți mai primi publicitate online – ci doar ca aceasta nu va mai putea ține cont de preferințele și interesele dumneavoastră, evidențiate prin comportamentul de navigare.</p>
          <p>Exemple de întrebuințări importante ale cookie-urilor (care nu necesită autentificarea unui utilizator prin intermediul unui cont):</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- Conținut și servicii adaptate preferințelor utilizatorului – categorii de produse și servicii.</li>
            <li>- Oferte adaptate pe interesele utilizatorilor – reținerea parolelor.</li>
            <li>- Reținerea filtrelor de protecție a copiilor privind conținutul pe Internet (opțiuni family mode, funcții de safe search).</li>
            <li>- Limitarea frecvenței de difuzare a reclamelor – limitarea numărului de afișari a unei reclame pentru un anumit utilizator pe un site.</li>
            <li>- Furnizarea de publicitate mai relevantă pentru utilizator.</li>
            <li>- Măsurarea, optimizarea și caracteristicile de analytics – cum ar fi confirmarea unui anumit nivel de trafic pe un website, ce tip de conținut este vizualizat și modul cum un utilizator ajunge pe un website (ex: prin motoare de căutare, direct, din alte website-uri etc.). Website-urile derulează aceste analize a utilizării lor pentru a îmbunătăți site-urile în beneficiul utilizatorilor.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
