import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Stethoscope, Syringe, Heart, Activity, ClipboardCheck, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StaffCard from "@/components/StaffCard";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-equine-photo.jpg";

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
      icon: Stethoscope,
      title: "Routine Visits and Examinations",
      description: "Comprehensive health checks to monitor your horse's overall wellbeing.",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Complete vaccination programs to protect against common equine diseases.",
    },
    {
      icon: Activity,
      title: "Dentistry",
      description: "Advanced motorised dentistry and wolf tooth removal for optimal oral health.",
    },
    {
      icon: Heart,
      title: "Reproductive Services",
      description: "Complete breeding management including AI services and health monitoring.",
    },
    {
      icon: ClipboardCheck,
      title: "Pre Purchase Examination",
      description: "Thorough independent examinations and radiography for horses being purchased.",
    },
    {
      icon: Activity,
      title: "Lameness Workups",
      description: "Complete diagnostic assessment including radiography and ultrasonography at your yard.",
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
                Fully Mobile Independent Equine Vets
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95">
                Proudly independent, fully mobile veterinary practice offering 24/7 emergency equine care. Regular zone visits across Norfolk & Suffolk. Professional, personalised service—we come to you.
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
              Fully Mobile Independent Equine Vets
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a fully mobile independent equine veterinary practice, we bring professional care directly to your yard. With organised zone visits across Norfolk and Suffolk, our independent vets provide convenient, accessible equine healthcare. We come to you, offering personalised service without corporate pressures—making decisions based solely on your horse's wellbeing.
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
              Comprehensive, personalised equine care from independent vets who put your horse first
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg leading-tight pt-2">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Zone Visit Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Are We In Your Area?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're fully mobile independent vets with regular zone visits across Norfolk & Suffolk. Check our zone schedule to see when we visit your area.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/zone-visit" className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    View Zone Map & Schedule
                  </Link>
                </Button>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground mb-2">
                    Not sure which zone you're in?
                  </p>
                  <a
                    href="tel:01603123456"
                    className="text-lg font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <Phone className="h-5 w-5" />
                    Call us: 01603 123 456
                  </a>
                </div>
              </div>
            </div>
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
            Register with Norfolk and Suffolk's trusted independent equine vets. Experience personalised, professional horse care without corporate constraints. Join hundreds of satisfied horse owners who choose independent veterinary service.
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
