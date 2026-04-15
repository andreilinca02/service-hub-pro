import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/Website_Background.jpg";
import { Mail, Phone, Instagram } from "lucide-react";
import Footer from "@/components/Footer";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import phoneIcon from "@/assets/phone-icon.png";

const services = [
  { title: "Reparații", desc: "diagnosticare și reparație PCB-uri, plăci de bază, mufe, înlocuire de componente, upgradeuri și optimizări", link: "/servicii#reparatii-hardware" },
  { title: "Mentenanță laptop/PC", desc: "curățare profesională interioară, înlocuire pastă termoconductoare, verificare ventilatoare și airflow, remediere erori hardware", link: "/servicii#mentenanta-laptop-pc" },
  { title: "Mentenanță consolă", desc: "curățare profesională interioară, înlocuire pastă termoconductoare, verificare ventilatoare și airflow" },
  { title: "Software", desc: "instalare/optimizare sistem de operare, update/rescriere BIOS, drivere, instalare diverse software" },
];

const errorStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: 12,
  color: "#ef4444",
  marginTop: 5,
};

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [errors, setErrors] = useState<{ email?: string; mesaj?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { email?: string; mesaj?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = "Te rog introdu o adresă de email validă";
    }
    if (!mesaj.trim()) {
      newErrors.mesaj = "Te rog completează mesajul";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
    }
  };

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
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "#DCDCDC" }}
        >
          Servicii
        </a>
      </header>

      {/* Hero */}
      <section
        id="acasa"
        className="w-full flex flex-col items-center justify-center"
        style={{ minHeight: "calc(100vh - 60px)" }}
      >
        <img
          src={heroImage}
          alt="EMB-TECH"
          className="w-full max-w-5xl object-contain px-4"
          style={{ transform: "scale(1.3225)", position: "relative", zIndex: 1 }}
        />
        <a
          href="mailto:contact@emb-tech.ro"
          className="px-8 py-2.5 text-base border border-foreground bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            borderRadius: 21,
            marginTop: 65,
            position: "relative",
            zIndex: 3,
          }}
        >
          Contact
        </a>

        {/* Contact Actions Group */}
        <div
          className="flex flex-col items-center justify-center"
          style={{ marginTop: 100, position: "relative", zIndex: 3 }}
        >
          {/* Phone Call Action */}
          <a
            href="tel:0777777777"
            className="flex items-center justify-center cursor-pointer"
            style={{ transition: "all 0.25s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 10px rgba(137,189,205,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <img src={phoneIcon} alt="Phone" style={{ width: 40, height: 40 }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, color: "#DCDCDC", marginLeft: 12 }}>
              Sună-mă
            </span>
          </a>

          {/* WhatsApp Action */}
          <a
            href="https://wa.me/40777777777"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center cursor-pointer"
            style={{ marginTop: 12, transition: "all 0.25s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 10px rgba(137,189,205,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <img src={whatsappIcon} alt="WhatsApp" style={{ width: 40, height: 40 }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, color: "#DCDCDC", marginLeft: 12 }}>
              Scrie-mi pe WhatsApp
            </span>
          </a>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="px-4 pb-20 max-w-5xl mx-auto" style={{ marginTop: 40 }}>
        <h2
          className="gradient-text text-center font-black text-[24px] mb-10"
          style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
        >
          Servicii
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-card-border rounded-[15px] p-8 flex flex-col items-center min-h-[200px] cursor-pointer"
              style={{
                backgroundColor: "#161617",
                transition: "transform 0.25s ease, background-color 0.25s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.backgroundColor = "#222224"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.backgroundColor = "#161617"; }}
              onClick={() => { if (service.link) navigate(service.link); }}
            >
              <h3
                className="gradient-text text-center font-black text-[20px]"
                style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-center mt-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "#DCDCDC",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Soluții Development Section */}
      <section className="px-4 pb-20 max-w-5xl mx-auto" style={{ marginTop: 30 }}>
        <h2
          className="gradient-text text-center font-black text-[24px] mb-10"
          style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
        >
          Soluții Development
        </h2>
        <div className="flex justify-center">
          <div
            className="border border-card-border rounded-[15px] p-8 flex flex-col items-center min-h-[200px] w-full md:max-w-[calc(50%-10px)] cursor-pointer"
            style={{
              backgroundColor: "#161617",
              transition: "transform 0.25s ease, background-color 0.25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.backgroundColor = "#222224"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.backgroundColor = "#161617"; }}
          >
            <h3
              className="gradient-text text-center font-black text-[20px]"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              Automotive
            </h3>
            <p
              className="text-center mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 15,
                color: "#DCDCDC",
              }}
            >
              platforme AUTOSAR, comunicații CAN/Ethernet, diagnostică, RTOS, debugging
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 mx-auto mt-[60px]" style={{ maxWidth: 1200, paddingTop: 100, paddingBottom: 0, marginTop: -80 }}>
        <h2
          className="gradient-text text-center font-black text-[24px] mb-0"
          style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
        >
          Contact
        </h2>
        <p
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 15,
            color: "#DCDCDC",
            marginTop: 10,
            marginBottom: 30,
            lineHeight: 1.6,
          }}
        >
          Trimite-mi un mesaj cu ceea ce ai nevoie.
          <br />
          <span style={{ display: "inline-block", marginTop: 8 }}>
            După ce primesc mesajul tău, îți voi răspunde cu următorii pași și o cotație individuală.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch" style={{ gap: 20 }}>
          {/* Left - Contact Form */}
          <div
            className="w-full flex flex-col"
            style={{
              backgroundColor: "#161617",
              border: "1px solid hsl(var(--card-border))",
              borderRadius: 20,
              padding: 35,
            }}
          >
            <div className="flex flex-col flex-1 justify-center" style={{ gap: 20 }}>
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#DCDCDC", display: "block", marginBottom: 6 }}>Nume și Prenume (opțional)</label>
                <input
                  type="text"
                  placeholder="Nume și prenume"
                  className="w-full text-foreground placeholder:text-muted-foreground placeholder:text-[12px] focus:outline-none focus:border-primary"
                  style={{
                    height: 52,
                    background: "hsl(var(--form-input-bg))",
                    border: "1px solid hsl(var(--form-border))",
                    borderRadius: 12,
                    paddingLeft: 15,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 16,
                  }}
                />
              </div>
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#DCDCDC", display: "block", marginBottom: 6 }}>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(prev => ({ ...prev, email: undefined })); }}
                  className="w-full text-foreground placeholder:text-muted-foreground placeholder:text-[12px] focus:outline-none focus:border-primary"
                  style={{
                    height: 52,
                    background: "hsl(var(--form-input-bg))",
                    border: errors.email ? "1px solid #ef4444" : "1px solid hsl(var(--form-border))",
                    borderRadius: 12,
                    paddingLeft: 15,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 16,
                  }}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#DCDCDC", display: "block", marginBottom: 6 }}>Mesaj</label>
                <textarea
                  placeholder="Mesaj"
                  value={mesaj}
                  onChange={(e) => { setMesaj(e.target.value); if (errors.mesaj) setErrors(prev => ({ ...prev, mesaj: undefined })); }}
                  className="w-full text-foreground placeholder:text-muted-foreground placeholder:text-[12px] focus:outline-none focus:border-primary resize-none"
                  style={{
                    height: 150,
                    background: "hsl(var(--form-input-bg))",
                    border: errors.mesaj ? "1px solid #ef4444" : "1px solid hsl(var(--form-border))",
                    borderRadius: 12,
                    paddingLeft: 15,
                    paddingTop: 15,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 16,
                  }}
                />
                {errors.mesaj && <p style={errorStyle}>{errors.mesaj}</p>}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-primary-foreground hover:brightness-110 transition-all cursor-pointer"
                style={{
                  height: 60,
                  border: "1px solid white",
                  borderRadius: 20,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 18,
                }}
              >
                Trimite
              </button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div
            className="w-full flex flex-col"
            style={{
              backgroundColor: "#161617",
              border: "1px solid hsl(var(--card-border))",
              borderRadius: 20,
              padding: 35,
            }}
          >
            <div className="flex flex-col flex-1 justify-center" style={{ gap: 20 }}>
              <h2
                className="gradient-text font-black text-[24px]"
                style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
              >
                Contactează-mă mai ușor
              </h2>

              <div
                style={{
                  background: "hsl(var(--form-input-bg))",
                  border: "1px solid hsl(var(--form-border))",
                  borderRadius: 15,
                  padding: 20,
                  minHeight: 100,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "#DCDCDC",
                }}
              >
                <p style={{ marginBottom: 10 }}>Furnizați modelul exact al dispozitivului (de exemplu, o placă, un laptop, un controller, un modul).</p>
                <p style={{ marginBottom: 10 }}>Spuneți-mi dacă dispozitivul a fost servisat, reparat sau deschis anterior.</p>
                <p>Descrieți simptomele și un scurt istoric (de exemplu, cădere, contact cu lichide, supratensiune).</p>
              </div>

              <div
                className="flex items-center"
                style={{
                  height: 57,
                  background: "hsl(var(--contact-box-bg))",
                  border: "1px solid hsl(var(--contact-box-border))",
                  borderRadius: 12,
                  paddingLeft: 15,
                  gap: 15,
                }}
              >
                <Mail size={20} className="text-foreground shrink-0" />
                <span className="text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, color: "#DCDCDC" }}>
                  emb.tech.service@gmail.com
                </span>
              </div>

              <div
                className="flex items-center"
                style={{
                  height: 57,
                  background: "hsl(var(--contact-box-bg))",
                  border: "1px solid hsl(var(--contact-box-border))",
                  borderRadius: 12,
                  paddingLeft: 15,
                  gap: 15,
                }}
              >
                <Phone size={20} className="text-foreground shrink-0" />
                <span className="text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, color: "#DCDCDC" }}>
                  0777777777
                </span>
              </div>

              <div
                className="flex items-center"
                style={{
                  height: 57,
                  background: "hsl(var(--contact-box-bg))",
                  border: "1px solid hsl(var(--contact-box-border))",
                  borderRadius: 12,
                  paddingLeft: 15,
                  gap: 15,
                }}
              >
                <Instagram size={20} className="text-foreground shrink-0" />
                <span className="text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, color: "#DCDCDC" }}>
                  @emb.tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
