import Footer from "@/components/Footer";

const h2Style: React.CSSProperties = { fontWeight: 700, fontSize: 20, color: "#FFFFFF" };

const TermeniSiConditii = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", flexDirection: "column" }}>
      <div className="px-4 max-w-5xl mx-auto w-full" style={{ flex: 1, paddingTop: 60, paddingBottom: 40 }}>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 32, color: "#FFFFFF", marginBottom: 30 }}>
          TERMENI ȘI CONDIȚII
        </h1>

        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#CCCCCC", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
          <p className="mt-[30px]">Bine ați venit pe site-ul nostru. Prin accesarea și utilizarea acestui site, sunteți de acord cu următorii termeni și condiții.</p>

          <h2 style={h2Style}>1. DISPOZIȚII GENERALE</h2>
          <p>Utilizarea site-ului www.emb-tech.ro implică acceptarea prezentelor Termeni și Condiții de către utilizator.</p>
          <p>Acest document stabilește cadrul legal aplicabil utilizării site-ului și relației dintre utilizator și prestatorul de servicii.</p>

          <h2 style={h2Style}>2. IDENTITATEA PRESTATORULUI</h2>
          <p>Site-ul este operat de LINCA ANDREI PFA, cu sediul în str. Stirenului nr. 20, Onești, județul Bacău, CUI 42408855 (denumită în continuare „Prestatorul").</p>

          <h2 style={h2Style}>3. INFORMAȚII GENERALE</h2>
          <p>Site-ul www.emb-tech.ro are rol exclusiv informativ și prezintă serviciile oferite de către Prestator.</p>
          <p>Utilizarea site-ului și solicitarea serviciilor sunt destinate exclusiv persoanelor care au împlinit vârsta de 18 ani. Prin utilizarea site-ului, utilizatorul declară că îndeplinește această condiție.</p>
          <p>Informațiile prezentate pe site (texte, imagini, descrieri) au caracter orientativ și pot fi modificate fără notificare prealabilă.</p>
          <p>Imaginile utilizate pe site sunt cu titlu de prezentare și nu creează obligații contractuale.</p>
          <p>Furnizarea efectivă a serviciilor se realizează doar în urma unei comunicări directe între Prestator și client.</p>

          <h2 style={h2Style}>4. DREPTURI DE AUTOR ȘI PROPRIETATE INTELECTUALĂ</h2>
          <p>Conținutul site-ului este protejat de legislația privind drepturile de autor și proprietatea intelectuală.</p>
          <p>Este interzisă copierea, distribuirea, publicarea sau utilizarea conținutului fără acordul scris al Prestatorului.</p>
          <p>Utilizatorii nu dobândesc niciun drept asupra conținutului site-ului prin simpla accesare a acestuia.</p>

          <h2 style={h2Style}>5. CONFIDENȚIALITATE ȘI PROTECȚIA DATELOR</h2>
          <p>Prestatorul prelucrează datele cu caracter personal în conformitate cu legislația aplicabilă, inclusiv Regulamentul (UE) 2016/679 (GDPR).</p>
          <p>Datele furnizate de utilizatori sunt utilizate exclusiv pentru comunicare, ofertare și furnizarea serviciilor.</p>
          <p>Pentru detalii suplimentare, utilizatorii sunt invitați să consulte politica de confidențialitate disponibilă pe site.</p>

          <h2 style={h2Style}>6. INFORMAȚII DESPRE SERVICII ȘI PREȚURI</h2>
          <p>Site-ul nu afișează prețuri pentru serviciile prezentate.</p>
          <p>Informațiile referitoare la servicii au caracter exclusiv informativ și nu constituie o ofertă contractuală fermă.</p>
          <p>Prețurile serviciilor sunt stabilite individual, în funcție de cerințele fiecărui client.</p>
          <p>Oferta comercială este transmisă ulterior, în urma unei solicitări efectuate telefonic sau prin email.</p>
          <p>Prestatorul își rezervă dreptul de a modifica descrierile serviciilor în orice moment, fără notificare prealabilă.</p>

          <h2 style={h2Style}>7. SOLICITAREA ȘI CONFIRMAREA SERVICIILOR</h2>
          <p>Serviciile nu pot fi comandate direct prin intermediul site-ului.</p>
          <p>Solicitarea serviciilor se realizează prin:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- apel telefonic;</li>
            <li>- transmiterea unui mesaj prin formularul de contact sau email.</li>
          </ul>
          <p>În urma solicitării, Prestatorul va transmite clientului o ofertă personalizată, care va include detalii privind serviciile, termenii și costurile.</p>
          <p>Contractul între părți se consideră încheiat numai în momentul acceptării explicite a ofertei de către client, în scris (de exemplu, prin email).</p>
          <p>Prestatorul își rezervă dreptul de a refuza solicitările care nu pot fi onorate.</p>

          <h2 style={h2Style}>8. PLĂȚI ȘI LIMITĂRI</h2>
          <p>Metodele de plată acceptate sunt:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- ramburs (numerar la livrare/prestare, dacă este cazul);</li>
            <li>- transfer bancar, în contul comunicat clientului.</li>
          </ul>
          <p>Plata serviciilor se efectuează conform condițiilor stabilite și acceptate în oferta transmisă.</p>
          <p>Prestatorul depune toate eforturile pentru a furniza informații corecte și actualizate pe site, însă nu garantează lipsa erorilor.</p>
          <p>Prestatorul nu poate fi ținut responsabil pentru eventuale neconcordanțe sau interpretări ale informațiilor prezentate pe site.</p>
          <p>Utilizarea site-ului se face pe propria răspundere a utilizatorului.</p>

          <h2 style={h2Style}>9. POLITICA DE GARANȚIE</h2>
          <p>Prestatorul oferă exclusiv servicii, precum: reparații, înlocuire de componente, mentenanță și diagnosticare.</p>
          <p>Pentru serviciile prestate se acordă o garanție de 6 (șase) luni de la data finalizării intervenției și/sau predării echipamentului către client.</p>
          <p>Garanția acoperă exclusiv lucrările efectuate și componentele înlocuite de către Prestator.</p>
          <p>Garanția nu se aplică în următoarele situații:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- utilizare necorespunzătoare a echipamentului;</li>
            <li>- intervenții realizate de terți neautorizați;</li>
            <li>- deteriorări mecanice, electrice sau cauzate de factori externi (șocuri, lichide, variații de tensiune etc.);</li>
            <li>- uzură normală a componentelor.</li>
          </ul>
          <p>Pentru a beneficia de garanție, clientul are obligația de a notifica Prestatorul în perioada de garanție și de a pune la dispoziție echipamentul pentru verificare.</p>
          <p>În cazul în care se constată că problema reclamată este acoperită de garanție, remedierea se va face fără costuri suplimentare pentru client.</p>

          <h2 style={h2Style}>10. DREPTUL DE RETRAGERE ȘI ANULAREA SERVICIILOR</h2>
          <p>Clientul are dreptul de a solicita anularea serviciilor înainte de începerea efectivă a prestării acestora, fără costuri suplimentare.</p>
          <p>În conformitate cu prevederile O.U.G. nr. 34/2014 privind drepturile consumatorilor, clientul poate beneficia de dreptul de retragere în termen de 14 zile de la acceptarea ofertei, doar în situația în care prestarea serviciului nu a început.</p>
          <p>În cazul în care clientul solicită începerea prestării serviciilor înainte de expirarea termenului de 14 zile, acesta își exprimă acordul expres pentru începerea executării și recunoaște că își pierde dreptul de retragere după finalizarea completă a serviciului.</p>
          <p>Dacă retragerea intervine după începerea prestării serviciilor, clientul va datora contravaloarea serviciilor deja efectuate până la momentul notificării retragerii.</p>
          <p>Anularea sau retragerea se comunică Prestatorului:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- telefonic;</li>
            <li>- prin email, la adresa indicată pe site.</li>
          </ul>
          <p>Prestatorul își rezervă dreptul de a analiza fiecare solicitare de anulare în funcție de stadiul serviciului și de a comunica clientului eventualele costuri aferente.</p>

          <h2 style={h2Style}>11. PROCEDURA DE REZOLVARE A RECLAMAȚIILOR</h2>
          <p>Orice nemulțumire poate fi transmisă:</p>
          <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            <li>- telefonic la numărul: 0742533747;</li>
            <li>- prin email la: contact@epitafqr.ro.</li>
          </ul>
          <p>Reclamațiile vor fi soluționate în termen de maximum 3 zile lucrătoare.</p>
          <p>Părțile vor încerca soluționarea amiabilă a oricărei dispute.</p>

          <h2 style={h2Style}>12. MODIFICAREA TERMENILOR ȘI CONDIȚIILOR</h2>
          <p>Prestatorul își rezervă dreptul de a modifica oricând prezentul document.</p>
          <p>Versiunea actualizată va fi publicată pe site și va intra în vigoare de la data publicării.</p>
          <p>Continuarea utilizării site-ului reprezintă acceptarea modificărilor.</p>

          <h2 style={h2Style}>13. LIMITAREA RĂSPUNDERII</h2>
          <p>Prestatorul nu răspunde pentru eventuale daune directe sau indirecte rezultate din utilizarea site-ului.</p>
          <p>Prestatorul nu garantează funcționarea neîntreruptă sau fără erori a site-ului.</p>
          <p>Utilizatorii sunt responsabili pentru modul în care utilizează informațiile disponibile pe site.</p>

          <h2 style={h2Style}>14. FORȚĂ MAJORĂ</h2>
          <p>Niciuna dintre părți nu răspunde pentru neexecutarea obligațiilor cauzată de evenimente de forță majoră, conform legii.</p>
          <p>Partea care invocă forța majoră are obligația de a notifica cealaltă parte în termen de 5 zile.</p>

          <h2 style={h2Style}>15. LEGEA APLICABILĂ</h2>
          <p>Prezentul document este guvernat de legea română.</p>
          <p>Eventualele litigii vor fi soluționate pe cale amiabilă, iar în caz contrar de instanțele competente din România.</p>

          <h2 style={h2Style}>16. DISPOZIȚII FINALE</h2>
          <p>Accesarea site-ului implică acceptarea integrală a acestor Termeni și Condiții.</p>
          <p>Utilizatorii au obligația de a verifica periodic conținutul acestui document.</p>
          <p>Neacceptarea termenilor implică încetarea utilizării site-ului.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermeniSiConditii;
