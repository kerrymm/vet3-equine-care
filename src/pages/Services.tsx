import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import {
  Stethoscope,
  Heart,
  Activity,
  Syringe,
  FileText,
  Phone,
  Clock,
  Shield,
  Pill,
  Microscope,
  Ambulance,
  ClipboardCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ambulance,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency veterinary services for urgent situations.",
    },
    {
      icon: Stethoscope,
      title: "Routine Health Checks",
      description: "Comprehensive examinations to monitor your horse's overall health.",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Complete vaccination programs to protect against common equine diseases.",
    },
    {
      icon: Activity,
      title: "Lameness Evaluation",
      description: "Diagnostic assessment and treatment for mobility issues.",
    },
    {
      icon: FileText,
      title: "Pre-Purchase Exams",
      description: "Thorough examinations for horses being considered for purchase.",
    },
    {
      icon: Heart,
      title: "Reproduction Services",
      description: "Breeding management and reproductive health services.",
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "On-site and external laboratory testing for accurate diagnosis.",
    },
    {
      icon: Pill,
      title: "Dental Care",
      description: "Professional equine dentistry for optimal oral health.",
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Proactive health management to prevent future issues.",
    },
    {
      icon: ClipboardCheck,
      title: "Health Certificates",
      description: "Documentation for travel, competitions, and insurance purposes.",
    },
    {
      icon: Phone,
      title: "Telephone Consultation",
      description: "Expert advice available via phone for non-emergency concerns.",
    },
    {
      icon: Clock,
      title: "Zone Visits",
      description: "Scheduled visits to designated zones across Norfolk & Suffolk.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Equine Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From emergency care to routine check-ups, we provide a full range of veterinary
              services to keep your horses healthy and happy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-muted-foreground">
                Our emergency line is available 24/7 for urgent veterinary care.
              </p>
            </div>
            <Button asChild size="lg" className="flex-shrink-0">
              <a href="tel:01603123456" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 01603 123 456
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Register for Our Services
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join the Vet3 family and give your horses access to comprehensive, professional
            veterinary care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/register">Register Your Horse</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/zone-visit">Check Your Zone</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
