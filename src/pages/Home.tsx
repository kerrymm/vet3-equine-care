import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StaffCard from "@/components/StaffCard";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-equine.jpg";

const Home = () => {
  const topStaff = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Veterinarian",
      bio: "20+ years of equine veterinary experience with a focus on sports medicine and emergency care.",
    },
    {
      name: "Dr. James Anderson",
      role: "Senior Veterinarian",
      bio: "Specialist in equine reproduction and internal medicine, committed to compassionate care.",
    },
    {
      name: "Emily Roberts",
      role: "Veterinary Nurse",
      bio: "Dedicated to providing exceptional nursing care and client support for all equine patients.",
    },
  ];

  const services = [
    {
      icon: Shield,
      title: "Emergency Care",
      description: "24/7 on-call emergency veterinary services for your peace of mind.",
    },
    {
      icon: Clock,
      title: "Routine Check-ups",
      description: "Regular health assessments to keep your horses in optimal condition.",
    },
    {
      icon: Phone,
      title: "Consultation",
      description: "Expert advice and guidance for all your equine care needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <img
            src={heroImage}
            alt="Professional equine veterinary care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Expert Equine Care Across Norfolk & Suffolk
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95">
                Independent veterinary team providing 24/7 on-call support for your horses
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/register">Register Your Horse</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  <a href="tel:01603123456" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 24/7 Support
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Independent Equine Specialists
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vet3 Equine Care is an independent team of dedicated veterinary professionals serving
              the Norfolk and Suffolk region. We're available 24/7 with on-call emergency support
              to ensure your horses receive the best possible care, whenever they need it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-secondary rounded-2xl max-w-2xl mx-auto">
            <Phone className="h-8 w-8 text-accent flex-shrink-0" />
            <div className="text-center sm:text-left">
              <div className="font-semibold text-foreground mb-1">24/7 Emergency Support</div>
              <a
                href="tel:01603123456"
                className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
              >
                01603 123 456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced veterinary professionals dedicated to your horse's health and wellbeing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {topStaff.map((staff) => (
              <StaffCard key={staff.name} {...staff} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Meet the Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive equine veterinary care tailored to your horse's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Register Your Horse?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join our community of horse owners across Norfolk & Suffolk who trust Vet3 for their
            equine care needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/register">Register Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
