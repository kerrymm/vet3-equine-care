import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Stethoscope,
  Heart,
  Activity,
  Syringe,
  FileText,
  Phone,
  Fingerprint,
  Zap,
  Microscope,
  Ambulance,
  ClipboardCheck,
  Share,
  Flower,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Routine Visits and Examinations",
      description: "Comprehensive health checks and examinations to monitor your horse's overall wellbeing and catch any issues early.",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Complete vaccination programs to protect your horse against common equine diseases and maintain immunity.",
    },
    {
      icon: Fingerprint,
      title: "Equine Passport and Microchipping",
      description: "Full passport services and microchipping to ensure your horse meets all legal requirements and identification standards.",
    },
    {
      icon: Activity,
      title: "Dentistry",
      description: "Advanced motorised dentistry including routine dental care, wolf tooth removal, and comprehensive oral health management.",
    },
    {
      icon: Activity,
      title: "Castrations",
      description: "Professional castration services performed to the highest standards with appropriate aftercare and pain management.",
    },
    {
      icon: Heart,
      title: "Reproductive Services and Artificial Insemination (AI)",
      description: "Complete breeding management including AI services, pregnancy diagnosis, and reproductive health monitoring.",
    },
    {
      icon: ClipboardCheck,
      title: "Pre Purchase Examination (PPE) and Pre-Purchase Radiography",
      description: "Thorough independent examinations and radiography for horses being considered for purchase, providing detailed health assessments.",
    },
    {
      icon: Activity,
      title: "Onsite Lameness Workups",
      description: "Complete diagnostic assessment including radiography and ultrasonography to identify and treat mobility issues at your yard.",
    },
    {
      icon: Zap,
      title: "Extracorporeal Shockwave Therapy and Class IV Laser Treatment",
      description: "Advanced therapeutic treatments for injury recovery, pain management, and enhanced healing using cutting-edge technology.",
    },
    {
      icon: Microscope,
      title: "Medical Workups",
      description: "Comprehensive diagnostic investigations including blood work and clinical assessments for complex medical cases.",
    },
    {
      icon: Stethoscope,
      title: "Respiratory Endoscopy",
      description: "Advanced endoscopic examination of the respiratory tract to diagnose breathing issues and airway conditions.",
    },
    {
      icon: Microscope,
      title: "Gastroscopy",
      description: "Internal examination of the stomach to diagnose ulcers and other gastrointestinal conditions affecting your horse's health.",
    },
    {
      icon: FileText,
      title: "Export Certification",
      description: "Complete documentation and health certification for horses traveling internationally, ensuring all requirements are met.",
    },
    {
      icon: Share,
      title: "Referrals",
      description: "Access to specialist referral services when advanced or specialized treatment is required for your horse.",
    },
    {
      icon: Ambulance,
      title: "Fully Mobile Diagnostics",
      description: "Comprehensive diagnostic equipment brought directly to your yard including imaging, laboratory, and assessment tools.",
    },
    {
      icon: Flower,
      title: "Home Euthanasia for Small Animals",
      description: "Compassionate end-of-life care for small animals in the comfort of their home. Available by appointment only.",
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
              Fully Mobile Independent Equine Vets - Norfolk & Suffolk
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a fully mobile independent equine veterinary practice, we bring comprehensive horse care directly to your yard. With regular zone visits across Norfolk and Suffolk, our independent mobile vets deliver professional, personalised equine healthcare wherever you are. From 24/7 emergency care to routine check-ups, we come to you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AccordionItem 
                    key={service.title} 
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <span className="font-semibold text-foreground">{service.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-muted-foreground leading-relaxed pl-14">
                        {service.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
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
            Register with Independent Equine Vets
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join horse owners across Norfolk and Suffolk who trust our independent veterinary practice. Experience comprehensive, personalised equine care from professional independent vets who prioritise your horse's wellbeing above all else.
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
