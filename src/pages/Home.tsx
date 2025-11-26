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
                Independent Equine Vets Serving Norfolk & Suffolk
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95">
                Proudly independent veterinary practice offering 24/7 emergency equine care. Professional, personalized service for your horses with no corporate constraints.
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
              Why Choose Our Independent Equine Practice?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an independent equine veterinary practice, Vet3 offers personalized care without corporate pressures. Our dedicated team of independent vets serves horses across Norfolk and Suffolk with 24/7 emergency support. We make decisions based solely on your horse's wellbeing, providing professional equine healthcare with genuine attention to each animal.
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
              Independent Equine Veterinary Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive, personalized equine care from independent vets who put your horse first
            </p>
          </div>
          
          {/* Mobile: Stacked full-width cards | Desktop: Horizontal split layout */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Featured Service - Takes full width on mobile, half on desktop */}
              <div className="md:w-1/2 bg-accent text-accent-foreground rounded-2xl p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-foreground/10 rounded-xl mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {services[0].title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {services[0].description}
                  </p>
                </div>
                <Button asChild variant="secondary" size="lg" className="w-full md:w-auto">
                  <a href="tel:01603123456">Call Emergency Line</a>
                </Button>
              </div>
              
              {/* Other Services - Stacked on mobile, stacked in right column on desktop */}
              <div className="md:w-1/2 flex flex-col gap-4">
                {services.slice(1).map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="bg-secondary rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Independent Equine Practice
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Register with Norfolk and Suffolk's trusted independent equine vets. Experience personalized, professional horse care without corporate constraints. Join hundreds of satisfied horse owners who choose independent veterinary service.
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
