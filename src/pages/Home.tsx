import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Stethoscope, Syringe, Heart, Activity, ClipboardCheck, MapPin, Quote } from "lucide-react";
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

  const testimonials = [
    {
      name: "Sarah Thompson",
      location: "Norwich, Norfolk",
      quote: "The team has been looking after my horses for over 5 years now. Their mobile service is incredibly convenient, and I trust them completely with my horses' health. The care is always thorough and professional.",
    },
    {
      name: "James Mitchell",
      location: "Bury St Edmunds, Suffolk",
      quote: "As an independent practice, they really put the horses first. No corporate pressure, just genuine care and expert advice. The pre-purchase examination they conducted was exceptionally detailed and helped me make an informed decision.",
    },
    {
      name: "Emma Richards",
      location: "Great Yarmouth, Norfolk",
      quote: "I love that they come to us - it makes such a difference for routine visits and emergencies. The vets are knowledgeable, compassionate, and always take time to explain everything clearly. Highly recommended!",
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
                Expert Horse Vets Norfolk & Suffolk
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95">
                Independent mobile veterinary practice bringing professional equine care to your yard. 24/7 emergency service and scheduled zone visits across Norfolk & Suffolk.
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
              Professional Care at Your Stable
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bring comprehensive veterinary care directly to your yard across Norfolk and Suffolk. As an independent practice, we focus on what matters most—your horse's health and wellbeing. No corporate pressures, just expert, personalised equine care with convenient scheduled zone visits.
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
              Comprehensive Equine Veterinary Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From routine care to advanced diagnostics—complete horse healthcare at your yard
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by horse owners across Norfolk and Suffolk
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote className="h-10 w-10 text-accent/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
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
                  Our veterinary team operates scheduled zone visits throughout Norfolk & Suffolk. Find out when we're in your area for convenient appointments.
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
            Register Your Horse Today
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join hundreds of satisfied horse owners across Norfolk and Suffolk who trust our veterinary practice. Experience expert, personalised equine care delivered at your yard.
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
