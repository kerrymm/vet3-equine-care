import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vet3 Equine Care</h3>
            <p className="text-sm opacity-90 mb-4">
              Professional horse veterinary services delivered at your stable. Serving Norfolk & Suffolk with 24/7 emergency support and scheduled visits throughout the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/zone-visit" className="opacity-90 hover:opacity-100 transition-opacity">
                  Zone Visit
                </Link>
              </li>
              <li>
                <Link to="/register" className="opacity-90 hover:opacity-100 transition-opacity">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="opacity-90 hover:opacity-100 transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">24/7 Emergency</div>
                  <a href="tel:01603123456" className="opacity-90 hover:opacity-100">
                    01603 123 456
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a href="https://wa.me/441603123456" className="opacity-90 hover:opacity-100">
                    01603 123 456
                  </a>
                  <div className="text-xs opacity-75 mt-0.5">Only 8:30am - 5:30pm</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@vet3equine.co.uk"
                  className="opacity-90 hover:opacity-100 break-all"
                >
                  info@vet3equine.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Norfolk & Suffolk</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-xs opacity-75 mb-4 leading-relaxed">
            <p>
              Vet3 Equine Care Limited is an Introducer Appointed Representative of Agria Pet Insurance Ltd who administer the insurance and is authorised and regulated by the Financial Conduct Authority, Financial Services Register Number 496160. Agria Pet Insurance is registered and incorporated in England and Wales with registered number 04258783. Registered office: First Floor, Blue Leanie, Walton Street, Aylesbury, Buckinghamshire, HP21 7QW. Agria insurance policies are underwritten by Agria Försäkring.
            </p>
          </div>
          <div className="text-center text-sm opacity-90">
            <p>&copy; {new Date().getFullYear()} Vet3 Equine Care. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
