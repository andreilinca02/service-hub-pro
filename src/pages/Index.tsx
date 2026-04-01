import heroImage from "@/assets/Website_Background.jpg";
import { Mail, Phone, Instagram } from "lucide-react";

const services = [
  { title: "Reparații", desc: "diagnosticare și reparație PCB-uri, plăci de bază, mufe, înlocuire de componente, upgradeuri și optimizări" },
  { title: "Mentenanță laptop/PC", desc: "curățare profesională interioară, înlocuire pastă termoconductoare, verificare ventilatoare și airflow, remediere erori hardware" },
  { title: "Mentenanță consolă", desc: "curățare profesională interioară, înlocuire pastă termoconductoare, verificare ventilatoare și airflow" },
  { title: "Software", desc: "instalare/optimizare sistem de operare, update/rescriere BIOS, drivere, instalare diverse software" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-center gap-6 py-5">
        <a
          href="#acasa"
          className="px-6 py-2 bg-background text-foreground font-light text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
        >
          Acasă
        </a>
        <a
          href="#servicii"
          className="px-6 py-2 bg-background text-foreground font-light text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
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
          className="px-10 py-3 text-lg font-light border border-foreground bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: 300,
            borderRadius: 25,
            marginTop: 25,
            position: "relative",
            zIndex: 3,
          }}
        >
          Contact
        </a>
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
                  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 300,
                  fontSize: 18,
                  color: "#FFFFFF",
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
                fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: 18,
                color: "#FFFFFF",
              }}
            >
              platforme AUTOSAR, comunicații CAN/Ethernet, diagnostică, RTOS, debugging
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 mx-auto" style={{ maxWidth: 1200, paddingTop: 100, paddingBottom: 100, marginTop: 150 }}>
        <h2
          className="gradient-text text-center font-black text-[24px] mb-0"
          style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
        >
          Contact
        </h2>
        <p
          className="text-center"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: 300,
            fontSize: 16,
            color: "#FFFFFF",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          &nbsp;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch" style={{ gap: 20 }}>
          {/* Left - Contact Form */}
          <div
            className="w-full flex flex-col"
            style={{
              background: "hsl(var(--form-bg))",
              border: "1px solid hsl(var(--form-border))",
              borderRadius: 20,
              padding: 35,
            }}
          >
            <div className="flex flex-col flex-1 justify-center" style={{ gap: 20 }}>
              <input
                type="text"
                placeholder="Nume și Prenume (Opțional)"
                className="w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                style={{
                  height: 52,
                  background: "hsl(var(--form-input-bg))",
                  border: "1px solid hsl(var(--form-border))",
                  borderRadius: 12,
                  paddingLeft: 15,
                  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                style={{
                  height: 52,
                  background: "hsl(var(--form-input-bg))",
                  border: "1px solid hsl(var(--form-border))",
                  borderRadius: 12,
                  paddingLeft: 15,
                  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                }}
              />
              <textarea
                placeholder="Mesaj"
                className="w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                style={{
                  height: 150,
                  background: "hsl(var(--form-input-bg))",
                  border: "1px solid hsl(var(--form-border))",
                  borderRadius: 12,
                  paddingLeft: 15,
                  paddingTop: 15,
                  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                }}
              />
              <button
                className="w-full bg-primary text-primary-foreground hover:brightness-110 transition-all cursor-pointer"
                style={{
                  height: 60,
                  border: "1px solid white",
                  borderRadius: 20,
                  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
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
              background: "hsl(var(--form-bg))",
              border: "1px solid hsl(var(--form-border))",
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
                }}
              />

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
                <span className="text-foreground" style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontSize: 16 }}>
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
                <span className="text-foreground" style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontSize: 16 }}>
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
                <span className="text-foreground" style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontSize: 16 }}>
                  @emb.tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
