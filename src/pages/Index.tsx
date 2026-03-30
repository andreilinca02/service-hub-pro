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
      <section id="acasa" className="w-full px-4 flex justify-center">
        <img
          src={heroImage}
          alt="EMB-TECH"
          className="w-full max-w-5xl object-contain rounded"
        />
      </section>

      {/* CTA */}
      <section className="flex justify-center py-12">
        <a
          href="mailto:contact@emb-tech.ro"
          className="px-10 py-3 text-lg font-light border border-foreground bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, borderRadius: 25 }}
        >
          Contact
        </a>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="px-4 pb-20 max-w-5xl mx-auto mt-[150px]">
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
      <section className="px-4 pb-20 max-w-5xl mx-auto mt-[50px]">
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
      <section className="px-4 pb-20 max-w-5xl mx-auto mt-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Contact Form */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nume si Prenume (Opțional)"
              className="w-full bg-card border border-card-border rounded-[10px] px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-card border border-card-border rounded-[10px] px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-card border border-card-border rounded-[10px] px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
            />
            <div>
              <button
                className="px-10 py-3 text-lg font-light border border-foreground bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, borderRadius: 25 }}
              >
                Trimite
              </button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col gap-4">
            <h2
              className="gradient-text font-black text-[24px]"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              Contactează-mă mai ușor
            </h2>

            {/* Description placeholder box */}
            <div className="bg-card border border-card-border rounded-[10px] p-6 min-h-[80px]" />

            {/* Email */}
            <div className="bg-card border border-card-border rounded-[10px] px-5 py-4 flex items-center gap-4">
              <Mail size={20} className="text-foreground shrink-0" />
              <span
                className="text-foreground text-[16px]"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
              >
                emb.tech.service@gmail.com
              </span>
            </div>

            {/* Phone */}
            <div className="bg-card border border-card-border rounded-[10px] px-5 py-4 flex items-center gap-4">
              <Phone size={20} className="text-foreground shrink-0" />
              <span
                className="text-foreground text-[16px]"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
              >
                0777777777
              </span>
            </div>

            {/* Instagram */}
            <div className="bg-card border border-card-border rounded-[10px] px-5 py-4 flex items-center gap-4">
              <Instagram size={20} className="text-foreground shrink-0" />
              <span
                className="text-foreground text-[16px]"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300 }}
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
