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
      bio: "With over 20 years of equine veterinary experience, Sarah specialises in sports medicine and emergency care. She founded Vet3 as an independent practice to provide personalised, high-quality equine care free from corporate pressures—putting horses first across Norfolk & Suffolk.",
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
      bio: "Michael specialises in equine lameness and diagnostic imaging. With 12 years of experience, he combines the latest technology with traditional veterinary principles for optimal outcomes.",
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
              Meet Our Fully Mobile Independent Equine Veterinary Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a proudly independent, fully mobile equine veterinary practice, our team comes directly to your yard with regular zone visits across Norfolk and Suffolk. We make every decision based on your horse's best interests—not corporate profit margins. Our experienced independent mobile vets provide the highest standard of personalised equine care wherever you are. With 24/7 on-call emergency support, we're here whenever you need us.
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
            Experience Independent Equine Veterinary Excellence
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Our independent veterinary team is ready to provide exceptional, personalised care for your horses. Register today to access professional equine healthcare from vets who answer only to you and your horse's needs.
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
