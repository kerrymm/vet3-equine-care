import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StaffCard from "@/components/StaffCard";
import { Instagram } from "lucide-react";

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
              Meet Your Equine Veterinary Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our experienced veterinary professionals bring expert care directly to your stable across Norfolk and Suffolk. As an independent practice, we make every decision based on your horse's best interests—never corporate targets. With scheduled zone visits and 24/7 emergency support, we're here whenever you need us.
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

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Follow Our Journey
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Stay connected with Vet3 Equine on Instagram for behind-the-scenes moments, 
              helpful tips, and updates from the field.
            </p>
            <Button asChild variant="outline">
              <a 
                href="https://instagram.com/vet3equine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                @vet3equine
              </a>
            </Button>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((post) => (
              <a
                key={post}
                href="https://instagram.com/vet3equine"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-muted rounded-lg overflow-hidden group relative hover:opacity-90 transition-opacity"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Instagram className="h-12 w-12 text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors" />
                </div>
                {/* Placeholder for Instagram images - these will be replaced with actual feed */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-sm">
                  Post {post}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Connect your Instagram account to display live posts from @vet3equine
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Expert Horse Care?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Register today for professional equine healthcare delivered by experienced vets who prioritize your horse's wellbeing above all else.
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
