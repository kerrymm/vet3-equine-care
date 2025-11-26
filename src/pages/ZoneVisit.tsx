import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Calendar } from "lucide-react";

const ZoneVisit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Zone Enquiry Received",
      description: "Thank you for your enquiry. We'll contact you with zone visit information.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const zones = [
    {
      name: "Zone A - North Norfolk",
      areas: "Cromer, Sheringham, North Walsham",
      days: "Monday & Thursday",
    },
    {
      name: "Zone B - Norwich & Surrounds",
      areas: "Norwich, Wymondham, Dereham",
      days: "Tuesday & Friday",
    },
    {
      name: "Zone C - South Norfolk",
      areas: "Diss, Thetford, Attleborough",
      days: "Wednesday",
    },
    {
      name: "Zone D - Suffolk North",
      areas: "Lowestoft, Beccles, Bungay",
      days: "Monday & Thursday",
    },
    {
      name: "Zone E - Suffolk South",
      areas: "Ipswich, Stowmarket, Bury St Edmunds",
      days: "Tuesday & Friday",
    },
    {
      name: "Zone F - Suffolk Coast",
      areas: "Southwold, Aldeburgh, Woodbridge",
      days: "Wednesday",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Zone Visit Schedule
              </h1>
              <p className="text-lg text-muted-foreground">
                We organise regular visits to designated zones across Norfolk & Suffolk to provide
                efficient service to our clients.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="mb-12">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground mb-2">
                        Zone Visit Map
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Interactive map showing our coverage zones across Norfolk & Suffolk
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Zone Cards */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Our Visit Zones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zones.map((zone) => (
                  <Card key={zone.name}>
                    <CardHeader>
                      <CardTitle className="text-lg">{zone.name}</CardTitle>
                      <CardDescription>{zone.areas}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-accent font-medium">
                        <Calendar className="h-4 w-4" />
                        {zone.days}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Information and Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Information */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>About Zone Visits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      To provide efficient service across the region, we organise our routine visits
                      by geographic zones. This allows us to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>Reduce travel time and costs</li>
                      <li>Provide more predictable appointment scheduling</li>
                      <li>Serve more clients in each area</li>
                      <li>Maintain competitive pricing</li>
                    </ul>
                    <p className="pt-4">
                      <strong className="text-foreground">Emergency services</strong> are available
                      24/7 regardless of zone schedules.
                    </p>
                    <p>
                      <strong className="text-foreground">Not sure which zone you're in?</strong>{" "}
                      Use the enquiry form to let us know your location, and we'll provide details
                      about your zone visit schedule.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Enquiry Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Zone Enquiry</CardTitle>
                    <CardDescription>
                      Not sure about your zone? Send us your details and we'll help.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="zoneName">Name *</Label>
                        <Input id="zoneName" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zoneEmail">Email *</Label>
                        <Input id="zoneEmail" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zonePhone">Phone Number *</Label>
                        <Input id="zonePhone" type="tel" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zonePostcode">Postcode *</Label>
                        <Input id="zonePostcode" required placeholder="e.g., NR1 1AA" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zoneAddress">Full Address</Label>
                        <Textarea id="zoneAddress" rows={2} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zoneMessage">Additional Information</Label>
                        <Textarea
                          id="zoneMessage"
                          rows={3}
                          placeholder="Let us know if you have any specific questions or requirements"
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Enquiry"}
                      </Button>
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

export default ZoneVisit;
