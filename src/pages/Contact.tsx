import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Sri Sri Muneswara Temple & Welfare Trust", "Near Main Temple Road", "Tirupati, Andhra Pradesh, India"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@muneswaratrust.org"]
    },
    {
      icon: Clock,
      title: "Temple Timings",
      details: ["Morning: 6:00 AM - 12:00 PM", "Evening: 4:00 PM - 9:00 PM"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder - form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-temple-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We welcome your inquiries, suggestions, and participation in our 
            spiritual and welfare activities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-temple transition-shadow text-center">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-merriweather text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-sacred">
              <CardHeader>
                <CardTitle className="font-merriweather text-2xl text-primary">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        required 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Enter message subject" 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message here..." 
                      required 
                      className="mt-1 h-32"
                    />
                  </div>
                  
                  <Button type="submit" variant="temple" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="shadow-sacred">
              <CardHeader>
                <CardTitle className="font-merriweather text-2xl text-primary">
                  Find Us
                </CardTitle>
                <p className="text-muted-foreground">
                  Visit our temple located in the heart of Tirupati.
                </p>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-muted rounded-lg flex items-center justify-center">
                  {/* Placeholder for Google Map */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.864343801733!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0c0c0c0c0c%3A0x0!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Temple Location Map"
                  ></iframe>
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-merriweather font-semibold text-primary mb-2">
                    Visiting Information
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Parking available on temple premises</li>
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Public transportation nearby</li>
                    <li>• Prasadam distribution daily</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-foreground mb-6">
            Visit Our Temple
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Join us for daily prayers, special ceremonies, and community events. 
            All are welcome to experience the divine peace and participate in our activities.
          </p>
          <div className="space-x-4">
            <Button variant="temple" size="xl">
              Plan Your Visit
            </Button>
            <Button variant="sacred" size="xl">
              Join Our Events
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;