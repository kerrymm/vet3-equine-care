import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "Thank you for your enquiry. We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a question or need assistance? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                        <p className="text-sm text-muted-foreground mb-2">24/7 Emergency Line</p>
                        <a
                          href="tel:01603123456"
                          className="text-accent hover:text-accent/80 font-medium"
                        >
                          01603 123 456
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground mb-2">Only 8:30am - 5:30pm</p>
                        <a
                          href="https://wa.me/441603123456"
                          className="text-accent hover:text-accent/80 font-medium"
                        >
                          01603 123 456
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          For general enquiries
                        </p>
                        <a
                          href="mailto:info@vet3equine.co.uk"
                          className="text-accent hover:text-accent/80 font-medium break-all"
                        >
                          info@vet3equine.co.uk
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Location</h3>
                        <p className="text-sm text-muted-foreground">
                          Serving Norfolk & Suffolk
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Emergency services available 24/7
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Office hours: Mon-Fri, 9am-5pm
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contactFirstName">First Name *</Label>
                          <Input id="contactFirstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactLastName">Last Name *</Label>
                          <Input id="contactLastName" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Email Address *</Label>
                        <Input id="contactEmail" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Phone Number</Label>
                        <Input id="contactPhone" type="tel" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" required rows={6} />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We aim to respond to all enquiries within 24 hours during office hours. For
                        urgent matters, please call our 24/7 emergency line.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
