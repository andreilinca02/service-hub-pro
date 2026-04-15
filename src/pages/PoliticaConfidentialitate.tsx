import Footer from "@/components/Footer";

const h2Style: React.CSSProperties = { fontWeight: 700, fontSize: 18, color: "#FFFFFF" };

const PoliticaConfidentialitate = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", flexDirection: "column" }}>
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
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "#DCDCDC" }}
        >
          Servicii
        </a>
      </header>
      <div className="px-4 max-w-5xl mx-auto w-full" style={{ flex: 1, paddingTop: 60, paddingBottom: 40 }}>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 26, color: "#FFFFFF", marginBottom: 30 }}>
          POLITICA DE CONFIDENȚIALITATE
        </h1>

        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#CCCCCC", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>

          <h2 style={h2Style}>1. POLITICA DE CONFIDENȚIALITATE PRIVIND PROTECȚIA DATELOR CU CARACTER PERSONAL</h2>
          <p>Începând cu data de 25 mai 2018, Regulamentul 2016/679/UE privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date (în continuare „Regulamentul") va fi aplicat de toate statele Uniunii Europene. Prin intermediul acestui Regulament se dorește crearea unui cadru legislativ unitar și uniform pe teritoriul Uniunii Europene care să nu mai necesite măsuri naționale de implementare.</p>
          <p>Este responsabil pentru operarea paginii web <strong>www.emb-tech.ro</strong> și are <strong>calitatea de operator LINCA ANDREI PERSOANĂ FIZICĂ AUTORIZATĂ</strong> cu adresa în str. Galați nr. 6, Cluj-Napoca, jud Cluj, CUI 42408855.</p>
          <p>În vederea respectării obligațiilor care ne revin, derivând din Regulament, și având în vedere că protecția datelor dvs reprezintă o preocupare majoră și constantă pentru noi, am elaborat prezentul document, care stabilește <strong>categoriile de date cu caracter personal</strong> pe care le colectăm la vizita dvs pe pagina noastră web, <strong>scopul și temeiul prelucrării</strong>, <strong>durata prelucrării</strong>, <strong>unde păstrăm și cui transmitem aceste date</strong>, precum și <strong>drepturile pe care le aveți în calitatea dvs de persoana vizată</strong>, implementate special pentru a asigura protecția drepturilor și libertăților fundamentale ale dvs. și în special a dreptului acestora la protecția datelor cu caracter personal.</p>

          <h2 style={h2Style}>1.1. Definiții</h2>
          <p><strong><em>„date cu caracter personal"</em></strong> orice informații privind o persoană fizică identificată sau identificabilă („persoana vizată"); o persoană fizică identificabilă este o persoană care poate fi identificată, direct sau indirect, în special prin referire la un element de identificare, cum ar fi un nume, un număr de identificare, date de localizare, un identificator online, sau la unul sau mai multe elemente specifice, proprii identității sale fizice, fiziologice, genetice, psihice, economice, culturale sau sociale.</p>
          <p><strong><em>„prelucrare"</em></strong> înseamnă orice operațiune sau set de operațiuni efectuate asupra datelor cu caracter personal sau asupra seturilor de date cu caracter personal, cu sau fără utilizarea de mijloace automatizate, cum ar fi colectarea, înregistrarea, organizarea, structurarea, stocarea, adaptarea sau modificarea, extragerea, consultarea, utilizarea, divulgarea prin transmitere, diseminarea sau punerea la dispoziție în orice alt mod, alinierea sau combinarea, restricționarea, ștergerea sau distrugerea;</p>
          <p><strong>„operator"</strong> înseamnă persoana fizică sau juridică, autoritatea publică, agenția sau alt organism care, singur sau împreună cu altele, stabilește scopurile și mijloacele de prelucrare a datelor cu caracter personal; atunci când scopurile și mijloacele prelucrării sunt stabilite prin dreptul Uniunii sau dreptul intern, operatorul sau criteriile specifice pentru desemnarea acestuia pot fi prevăzute în dreptul Uniunii sau în dreptul intern;</p>
          <p><strong>„persoană împuternicită"</strong> înseamnă persoana fizică sau juridică, autoritatea publică, agenția sau alt organism care prelucrează datele cu caracter personal în numele operatorului;</p>
          <p>Vă asigurăm că datele dvs. cu caracter personal sunt prelucrate în mod legal, echitabil și transparent, doar pentru îndeplinirea scopurilor explicite care v-au fost aduse la cunoștință.</p>
          <p>LINCA ANDREI PERSOANĂ FIZICĂ AUTORIZATĂ în calitate de operator, prelucrează datele într-un mod care asigură securitatea adecvată a datelor cu caracter personal, inclusiv protecția împotriva prelucrării neautorizate sau ilegale și împotriva pierderii, a distrugerii sau a deteriorării accidentale, prin luarea de măsuri tehnice sau organizatorice corespunzătoare.</p>

          <h2 style={h2Style}>1.2. Datele dvs. cu caracter personal pe care le prelucrăm. Scopul. Temeiul. Durata Prelucrării</h2>
          <p>Colectăm de la dvs. doar acele date cu caracter personal care ne sunt necesare pentru a vă putea oferi posibilitatea de utilizare a paginii noastre web, pentru a putea onora comenzile dvs. și pentru a vă putea oferi acces la produsele noastre și pentru a vă putea ține la curent cu serviciile și ofertele noastre (marketing direct), în măsura în care acest lucru este permis de reglementările legale sau se realizează pe baza consimțământului dvs.</p>
          <p>În general prelucrăm următoarele date cu caracter personal ale dvs.:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- Nume și prenume</li>
            <li>- Număr de telefon</li>
            <li>- Adresă de e-mail</li>
            <li>- IP</li>
          </ul>
          <p>Fiecare categorie de date va fi colectată în scopuri determinate, explicite și legitime și nu sunt prelucrate ulterior într-un mod incompatibil cu aceste scopuri și vor fi pe o perioadă care nu depășește perioada necesară îndeplinirii scopurilor în care sunt prelucrate.</p>
          <p>Pentru a asigura principiul transparenței informațiilor la prelucrarea datelor dvs. cu caracter personal vă comunicăm în cele ce urmează modul în care prelucrăm datele tale, scopurile și temeiul juridic (baza legală) al activităților prin care prelucrăm datele tale.</p>

          <h2 style={h2Style}>2. REALIZAREA UNEI COMENZI</h2>
          <p>În momentul completării formularului de contact vă solicităm și colectăm de la dvs. numele, prenumele și adresa de e-mail.</p>
          <p>Aceste date cu caracter personal ne sunt necesare în scop contractual, pentru a-ți putea onora comenzile și a presta serviciile convenite. Temeiul prelucrării îl reprezintă obligația contractuală dintre părți astfel cum a fost ea stabilită prin Termeni și Condiții. În măsura în care nu sunteți de acord cu prelucrarea datelor dvs. LINCA ANDREI PERSOANĂ FIZICĂ AUTORIZATĂ nu va putea onora comanda dvs.</p>
          <p>Totodată datele dvs. cu caracter personal ne sunt necesare pentru a completa și livra facturile fiscale aferente produselor livrate. Datele dvs. de plată online nu vor fi accesibile si nici nu vor fi stocate de către LINCA ANDREI PERSOANĂ FIZICĂ AUTORIZATĂ.</p>
          <p>Datele dvs. cu caracter personal vor fi păstrate pe întreaga durată a raportului contractual precum și pe un termen de 3 ani de la data plasării ultimei comenzi acesta fiind termenul de prescripție.</p>
          <p>Pentru a ne putea executa la timp și conform obligațiile asumate, datele dvs. cu caracter personal vor fi divulgate partenerilor noștri contractuali de încredere, selectați în mod atent:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- furnizorul serviciului de stocare a datelor pe servere externe situat în România;</li>
            <li>- furnizorul serviciilor de contabilitate</li>
            <li>- furnizorul serviciilor de comunicări și transmiteri corespondență pe e-mail</li>
            <li>- furnizorul serviciilor de telefonie mobilă care ne ajută să ținem legătura cu tine, situat în România;</li>
            <li>- curieri cu care avem încheiat un raport contractual;</li>
            <li>- procesatorii serviciului de plăți online</li>
          </ul>
          <p>Datele dvs. prelucrate la momentul creării contului nu fac obiectul unei decizii bazate exclusiv pe prelucrarea automată, inclusiv crearea de profiluri și nu vor face obiectul unui transfer către o țară terță sau o organizație internațională.</p>

          <h2 style={h2Style}>3. SECURITATEA DATELOR DVS. CU CARACTER PERSONAL</h2>
          <p>Securitatea datelor dvs. cu caracter personal sunt o prioritate pentru noi. Te asigurăm de faptul că orice prelucrare a datelor se face cu respectarea principiilor garantate de Regulament și prelucrate într-un mod care asigură securitatea adecvată a datelor cu caracter personal, inclusiv protecția împotriva prelucrării neautorizate sau ilegale și împotriva pierderii, a distrugerii sau a deteriorării accidentale, prin luarea de măsuri tehnice sau organizatorice corespunzătoare, prin punerea în aplicare a unor politici interne adecvate de protecție a datelor.</p>
          <p>Acest site adoptă toate măsurile de securitate necesare protejării informațiilor personale ale utilizatorilor nostri. În momentul completării datelor personale pe site-ul nostru, informațiile vor fi protejate atât offline cât și online. Toate informațiile cu caracter personal vor fi prelucrate prin intermediul unor pagini securizate care folosesc sistemul de criptare SSL, marcate cu simbolul unui lacăt, poziționat în partea de jos a ferestrei de browser Microsoft Internet Explorer.</p>

          <h2 style={h2Style}>4. DREPTURILE DVS. ÎN CALITATE DE PERSOANĂ VIZATĂ</h2>
          <p>Regulamentul 679/2016 asigură protecția drepturilor și libertăților fundamentale ale persoanelor fizice și în special a dreptului acestora la protecția datelor cu caracter personal.</p>
          <p>În ceea ce privește datele dvs. cu caracter personal, aveți dreptul de a solicita exercitarea oricărui din următoarele drepturi în vederea garantării protecției datelor dvs. cu caracter personal:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- <strong>dreptul de a avea acces la datele dvs:</strong> puteți solicita să vi se comunice categoriile de date cu caracter personal care sunt prelucrate, scopul în care are loc prelucrarea, destinatarii cărora le-au fost sau vor fi comunicate, perioada pentru care se preconizează că vor fi stocate sau, dacă acest lucru nu este posibil, criteriile utilizate pentru a stabili această perioadă; existența unui proces decizional automatizat incluzând crearea de profiluri;</li>
            <li>- <strong>dreptul de a solicita rectificarea datelor:</strong> în situația în care există erori cu privire la datele care vă sunt prelucrate, aveți posibilitatea de a solicita corectarea sau completarea lor. Subscrisa vom comunica rectificarea fiecărui destinatar la care au fost transmise datele, cu excepția cazului în care acest lucru se dovedește imposibil sau presupune eforturi disproporționate;</li>
            <li>- <strong>dreptul de a solicita restricționarea prelucrării datelor:</strong> aveți dreptul de a solicita restricționarea prelucrării datelor în următoarele situații: dacă ați contestat exactitatea datelor, pentru o perioadă care ne permite să verificăm exactitatea datelor; dacă prelucrarea este ilegală, iar dvs. vă opuneți ștergerii datelor cu caracter personal, solicitând în schimb restricționarea utilizării lor; dacă subscrisa nu mai am nevoie de datele cu caracter personal în scopul prelucrării, dar le solicitați pentru constatarea, exercitarea sau apărarea unui drept în instanță; dacă v-ați opus prelucrării pentru intervalul de timp în care se verifică dacă drepturile legitime ale operatorului prevalează asupra drepturilor dvs.</li>
            <li>- <strong>dreptul de a solicita ștergerea datelor:</strong> puteți solicita ștergerea datelor prelucrate, dacă datele nu mai sunt necesare pentru îndeplinirea scopurilor pentru care au fost colectate sau prelucrate, dacă v-ați retras consimțământul și nu există niciun alt temei juridic pentru prelucrarea; dacă vă opuneți prelucrării și nu există motive legitime care să prevaleze în ceea ce privește prelucrarea; datele cu caracter personal au fost prelucrate ilegal; datele cu caracter personal trebuie șterse pentru respectarea unei obligații legale; datele cu caracter personal au fost colectate în legătură cu oferirea de servicii ale societății informaționale.</li>
            <li>- <strong>dreptul de a solicita transferul datelor (la portabilitatea datelor):</strong> puteți solicita transferul datelor dvs. către un alt operator dacă prelucrarea are la bază consimțământul dvs. și prelucrarea este una automată;</li>
            <li>- <strong>dreptul de a vă opune prelucrării:</strong> aveți dreptul să vă opuneți în orice moment prelucrării datelor dvs. în scop de marketing direct, inclusiv creării de profiluri, în acest caz datele dvs. vor fi șterse.</li>
            <li>- <strong>dreptul de a vă opune să faceți obiectul unor decizii automate bazate exclusiv pe prelucrarea automată, inclusiv profilare.</strong></li>
          </ul>
          <p>Toate aceste drepturi pot să fie exercitate printr-o simplă cerere adresată LINCA ANDREI PERSOANĂ FIZICĂ AUTORIZATĂ, în calitate de operator, la sediul nostru sau la adresa de email emb.tech.service@gmail.ro.</p>
          <p>În situația în care consideri că ți-au fost încălcate drepturile, ai posibilitatea să te adresezi cu o plângere Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal.</p>

          <h2 style={h2Style}>5. DATE DE CONTACT</h2>
          <p>Prezenta Politică se completează cu celelalte politici specifice ale LINCA ANDREI PERSOANĂ FIZICĂ AUTORIZATĂ și Termenii și Condițiile pe care le poți accesa de pe site-ul nostru. Orice schimbare a termenilor prezentei politici va fi comunicată către utilizatori prin e-mail, astfel încât aceștia să fie permanent informați cu privire la informațiile pe care le colectăm, cum le utilizăm și în ce circumstanțe, dacă există, le facem publice. Utilizatorii vor putea să fie sau nu de acord cu utilizarea informațiilor în alte scopuri. Vom utiliza informațiile în concordanță cu politica sub care au fost culese informațiile.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaConfidentialitate;
