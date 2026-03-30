import heroImage from "@/assets/Website_Background.jpg";

const services = [
  "Mentenanță laptop",
  "Mentenanță PC",
  "Mentenanță consolă",
];

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

      {/* Services */}
      <section id="servicii" className="px-4 pb-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-card border border-card-border rounded-[15px] p-8 flex items-start justify-center min-h-[200px]"
            >
              <h3
                className="gradient-text text-center font-black text-[22px]"
                style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
              >
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
