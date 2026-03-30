import heroImage from "@/assets/Website_Background.jpg";
import { Mail, Phone, Instagram } from "lucide-react";

const servicesRow1 = ["Mentenanță laptop", "Mentenanță PC", "Mentenanță consolă"];
const servicesRow2 = ["Reparații", "Software"];
const developmentBoxes = ["Automotive"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-center gap-6 py-5">
        <a
          href="#acasa"
          className="px-6 py-2 border border-background bg-background text-foreground font-light text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
        >
          Acasă
        </a>
        <a
          href="#servicii"
          className="px-6 py-2 border border-background bg-background text-foreground font-light text-sm tracking-wide hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
        >
          Servicii
        </a>
      </header>

      {/* Hero */}
      <section
        id="acasa"
        className="w-full flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        <img
          src={heroImage}
          alt="EMB-TECH"
          className="w-full max-w-5xl object-contain px-4"
          style={{ transform: "scale(1.3225)" }}
        />
      </section>

      {/* CTA */}
      <section className="flex justify-center" style={{ marginTop: 25 }}>
        <a
          href="mailto:contact@emb-tech.ro"
          className="px-10 py-3 text-lg font-light border border-foreground bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, borderRadius: 25 }}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesRow1.map((service) => (
            <div
              key={service}
              className="bg-card border border-card-border rounded-[15px] p-8 flex items-start justify-center min-h-[200px]"
            >
              <h3
                className="gradient-text text-center font-black text-[20px]"
                style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
              >
                {service}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[66%] mx-auto">
          {servicesRow2.map((service) => (
            <div
              key={service}
              className="bg-card border border-card-border rounded-[15px] p-8 flex items-start justify-center min-h-[200px]"
            >
              <h3
                className="gradient-text text-center font-black text-[20px]"
                style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
              >
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Soluții Development Section */}
      <section className="px-4 pb-20 max-w-5xl mx-auto" style={{ marginTop: 25 }}>
        <h2
          className="gradient-text text-center font-black text-[24px] mb-10"
          style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
        >
          Soluții Development
        </h2>
        <div className="flex justify-center">
          {developmentBoxes.map((item) => (
            <div
              key={item}
              className="bg-card border border-card-border rounded-[15px] p-8 flex items-start justify-center min-h-[200px] w-full max-w-[calc(33.333%-1rem)]"
            >
              <h3
                className="gradient-text text-center font-black text-[20px]"
                style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 mx-auto mt-[150px]" style={{ maxWidth: 1200, paddingTop: 100, paddingBottom: 100 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center" style={{ gap: 60 }}>
          {/* Left - Contact Form */}
          <div
            className="w-full"
            style={{
              background: "hsl(0 0% 6.7%)",
              border: "1px solid hsl(0 0% 16.5%)",
              borderRadius: 20,
              padding: "35px",
            }}
          >
            <div className="flex flex-col" style={{ gap: 20 }}>
              <input
                type="text"
                placeholder="Nume și Prenume (Opțional)"
                className="w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                style={{
                  height: 52,
                  background: "hsl(0 0% 5.1%)",
                  border: "1px solid hsl(0 0% 16.5%)",
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
                  background: "hsl(0 0% 5.1%)",
                  border: "1px solid hsl(0 0% 16.5%)",
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
                  background: "hsl(0 0% 5.1%)",
                  border: "1px solid hsl(0 0% 16.5%)",
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
                  marginTop: 0,
                  border: "1px solid white",
                  borderRadius: 30,
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
          <div className="flex flex-col" style={{ gap: 22 }}>
            <h2
              className="gradient-text font-black text-[24px]"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              Contactează-mă mai ușor
            </h2>

            {/* Description placeholder box */}
            <div
              style={{
                background: "hsl(0 0% 6.7%)",
                border: "1px solid hsl(0 0% 16.5%)",
                borderRadius: 15,
                padding: 20,
                minHeight: 100,
              }}
            />

            {/* Email */}
            <div
              className="flex items-center"
              style={{
                height: 57,
                background: "hsl(var(--card))",
                border: "1px solid hsl(0 0% 16.5%)",
                borderRadius: 12,
                paddingLeft: 15,
                gap: 15,
              }}
            >
              <Mail size={20} className="text-foreground shrink-0" />
              <span
                className="text-foreground"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontSize: 16 }}
              >
                emb.tech.service@gmail.com
              </span>
            </div>

            {/* Phone */}
            <div
              className="flex items-center"
              style={{
                height: 57,
                background: "hsl(var(--card))",
                border: "1px solid hsl(0 0% 16.5%)",
                borderRadius: 12,
                paddingLeft: 15,
                gap: 15,
              }}
            >
              <Phone size={20} className="text-foreground shrink-0" />
              <span
                className="text-foreground"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontSize: 16 }}
              >
                0777777777
              </span>
            </div>

            {/* Instagram */}
            <div
              className="flex items-center"
              style={{
                height: 57,
                background: "hsl(var(--card))",
                border: "1px solid hsl(0 0% 16.5%)",
                borderRadius: 12,
                paddingLeft: 15,
                gap: 15,
              }}
            >
              <Instagram size={20} className="text-foreground shrink-0" />
              <span
                className="text-foreground"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontSize: 16 }}
              >
                @emb.tech
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
