import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-merriweather font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 font-roboto">
              <p>Sri Sri Muneswara Temple & Welfare Trust</p>
              <p>Near Main Temple Road</p>
              <p>Tirupati, Andhra Pradesh, India</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@muneswaratrust.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-merriweather font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 font-roboto">
              <p><a href="/about" className="hover:text-secondary transition-colors">About Us</a></p>
              <p><a href="/documents" className="hover:text-secondary transition-colors">Documents</a></p>
              <p><a href="/donation" className="hover:text-secondary transition-colors">Donations</a></p>
              <p><a href="/contact" className="hover:text-secondary transition-colors">Contact</a></p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-merriweather font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/20 text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/20 text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/20 text-primary-foreground"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center font-roboto">
          <p>&copy; 2025 Sri Sri Muneswara Trust Temple & Welfare Trust | info@muneswaratrust.org</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;