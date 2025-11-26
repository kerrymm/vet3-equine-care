import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Registration Received",
      description: "Thank you for registering. We'll be in touch shortly to confirm your details.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Register Your Horse
              </h1>
              <p className="text-lg text-muted-foreground">
                Join Vet3 Equine Care to access our comprehensive veterinary services across
                Norfolk & Suffolk.
              </p>
            </div>

            {/* Form Card */}
            <Card>
              <CardHeader>
                <CardTitle>Horse Registration Form</CardTitle>
                <CardDescription>
                  Please provide the following information to register your horse with our practice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Owner Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Owner Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="altPhone">Alternative Phone</Label>
                        <Input id="altPhone" type="tel" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea id="address" required rows={3} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Town/City *</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postcode">Postcode *</Label>
                        <Input id="postcode" required />
                      </div>
                    </div>
                  </div>

                  {/* Horse Information */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-semibold text-foreground">Horse Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="horseName">Horse Name *</Label>
                        <Input id="horseName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="breed">Breed</Label>
                        <Input id="breed" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age *</Label>
                        <Input id="age" type="number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sex">Sex *</Label>
                        <Input id="sex" required placeholder="e.g., Mare, Gelding" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="color">Color</Label>
                        <Input id="color" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="microchip">Microchip Number</Label>
                      <Input id="microchip" />
                    </div>
                  </div>

                  {/* Previous Veterinary Practice */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-semibold text-foreground">Previous Veterinary Practice</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="previousVet">Previous Veterinary Practice Name</Label>
                        <Input id="previousVet" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="previousVetContact">Previous Veterinary Practice Contact Number</Label>
                        <Input id="previousVetContact" type="tel" />
                      </div>
                    </div>
                  </div>

                  {/* Consent and Permissions */}
                  <div className="space-y-4 pt-6 border-t">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="permission" required />
                      <Label htmlFor="permission" className="text-sm font-normal leading-relaxed cursor-pointer">
                        Do we have permission to contact the previous practice and request your horse's clinical history?
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="consent" required />
                      <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
                        I agree to your Terms & Conditions and Privacy Policy
                      </Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
