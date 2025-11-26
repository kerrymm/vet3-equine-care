import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms & Conditions
            </h1>

            <div className="prose prose-gray max-w-none">
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These terms and conditions govern your use of the services provided by Vet3 Equine Care Limited. By engaging our services, you agree to be bound by these terms.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vet3 Equine Care provides mobile veterinary services for equine animals across Norfolk and Suffolk. Our services include routine examinations, emergency care, vaccinations, and specialized treatments as outlined on our Services page.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Appointments and Cancellations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Appointments should be made in advance where possible. Cancellations must be made at least 24 hours before the scheduled appointment. Late cancellations may incur a charge.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment is due at the time of service unless otherwise agreed in advance. We accept various payment methods including bank transfer, credit/debit cards, and insurance claims where applicable.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Emergency Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our 24/7 emergency service is available for registered clients. Emergency call-out charges apply in addition to treatment costs.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While we take every care in providing veterinary services, we cannot guarantee specific outcomes. Our liability is limited to the extent permitted by law and our professional indemnity insurance.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms and conditions, please contact us at{" "}
                  <a href="mailto:info@vet3equine.co.uk" className="text-accent hover:underline">
                    info@vet3equine.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
