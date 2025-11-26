import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-gray max-w-none">
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vet3 Equine Care Limited is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information necessary to provide veterinary services, including:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Your name, contact details, and address</li>
                  <li>Details about your horses including medical history</li>
                  <li>Payment and billing information</li>
                  <li>Communication records with our practice</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Provide veterinary services and care for your horses</li>
                  <li>Maintain medical records and treatment history</li>
                  <li>Process payments and manage billing</li>
                  <li>Communicate with you about appointments and services</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Specialist veterinary services when referrals are necessary</li>
                  <li>Insurance companies with your consent for claims processing</li>
                  <li>Regulatory bodies as required by law</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Access your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions about this privacy policy or to exercise your rights, please contact us at{" "}
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

export default Privacy;
