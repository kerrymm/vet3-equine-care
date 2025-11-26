import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StaffCard from "@/components/StaffCard";

const About = () => {
  const allStaff = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Veterinarian",
      bio: "With over 20 years of equine veterinary experience, Sarah specializes in sports medicine and emergency care. She founded Vet3 to provide independent, high-quality care to horses across Norfolk & Suffolk.",
    },
    {
      name: "Dr. James Anderson",
      role: "Senior Veterinarian",
      bio: "James is a specialist in equine reproduction and internal medicine with 15 years of experience. His compassionate approach and dedication to continuous learning make him a valued member of our team.",
    },
    {
      name: "Emily Roberts",
      role: "Veterinary Nurse",
      bio: "Emily brings 10 years of veterinary nursing experience to Vet3. She's passionate about providing exceptional nursing care and building strong relationships with our clients and their horses.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Veterinarian",
      bio: "Michael specializes in equine lameness and diagnostic imaging. With 12 years of experience, he combines the latest technology with traditional veterinary principles for optimal outcomes.",
    },
    {
      name: "Lucy Thompson",
      role: "Veterinary Nurse",
      bio: "Lucy is dedicated to patient care and client education. Her gentle approach and attention to detail ensure every horse receives the best possible nursing support.",
    },
    {
      name: "Dr. Rebecca Foster",
      role: "Veterinarian",
      bio: "Rebecca has 8 years of experience in equine dentistry and preventive care. She believes in proactive health management to keep horses performing at their best.",
    },
    {
      name: "Tom Williams",
      role: "Practice Manager",
      bio: "Tom manages our day-to-day operations and client services. With a background in equine management, he understands the needs of horse owners and ensures smooth communication.",
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
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our experienced team of veterinary professionals is dedicated to providing the highest
              standard of equine care across Norfolk and Suffolk. With 24/7 on-call emergency
              support, we're here whenever you need us.
            </p>
          </div>
        </div>
      </section>

      {/* All Staff */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allStaff.map((staff) => (
              <StaffCard key={staff.name} {...staff} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Expert Equine Care
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Our team is ready to provide exceptional care for your horses. Register today to access
            our comprehensive veterinary services.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/register">Register Your Horse</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
