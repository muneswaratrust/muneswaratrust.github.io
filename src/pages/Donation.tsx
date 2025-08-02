import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import qrCode from "@/assets/qr-code.png";
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  Heart,
  Users,
  BookOpen,
  Calendar,
  CheckCircle
} from "lucide-react";

const Donation = () => {
  const donationMethods = [
    {
      icon: Smartphone,
      title: "UPI Payment",
      description: "Quick and secure payment using UPI",
      details: "muneswaratrust@upi"
    },
    {
      icon: Building,
      title: "Bank Transfer",
      description: "Direct bank transfer for larger donations",
      details: "IFSC: SBIN0001234"
    },
    {
      icon: CreditCard,
      title: "Online Payment",
      description: "Credit/Debit card payments",
      details: "Secure payment gateway"
    }
  ];

  const donationCategories = [
    {
      icon: Calendar,
      title: "Temple Rituals",
      description: "Support daily prayers, special ceremonies, and festival celebrations",
      suggested: "₹501, ₹1,001, ₹2,501"
    },
    {
      icon: Heart,
      title: "Welfare Programs", 
      description: "Health camps, food distribution, and community service initiatives",
      suggested: "₹1,001, ₹2,501, ₹5,001"
    },
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Educational assistance for underprivileged children",
      suggested: "₹2,501, ₹5,001, ₹10,001"
    },
    {
      icon: Users,
      title: "General Fund",
      description: "Overall trust activities and infrastructure development",
      suggested: "Any amount"
    }
  ];

  const bankDetails = {
    bankName: "State Bank of India",
    accountName: "Sri Sri Muneswara Trust Temple & Welfare Trust",
    accountNo: "1234567890",
    ifsc: "SBIN0001234",
    upiId: "muneswaratrust@upi"
  };

  const benefits = [
    "80G tax exemption certificate provided",
    "Regular updates on fund utilization",
    "Inclusion in temple prayer lists",
    "Invitation to special events",
    "Annual donor recognition"
  ];

  const handleDonateNow = () => {
    // Placeholder for UPI link
    alert("Redirecting to UPI payment... (This is a placeholder for actual UPI link)");
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-temple-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-6">
            Make a Donation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Support our sacred mission of spiritual service and community welfare. 
            Your contributions help us serve the community and preserve our traditions.
          </p>
        </div>
      </section>

      {/* Quick Donation Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* QR Code and Quick Donation */}
              <Card className="shadow-temple">
                <CardHeader className="text-center">
                  <CardTitle className="font-merriweather text-2xl text-primary">
                    Quick Donation
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Scan QR code or use UPI ID for instant donation
                  </p>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="flex justify-center">
                    <img 
                      src={qrCode} 
                      alt="Donation QR Code" 
                      className="w-48 h-48 border-2 border-primary/20 rounded-lg shadow-sacred"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      UPI ID: {bankDetails.upiId}
                    </Badge>
                    
                    <Button 
                      onClick={handleDonateNow}
                      variant="temple" 
                      size="xl" 
                      className="w-full"
                    >
                      <Smartphone className="mr-2 h-5 w-5" />
                      Donate Now via UPI
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bank Details */}
              <Card className="shadow-temple">
                <CardHeader>
                  <CardTitle className="font-merriweather text-2xl text-primary">
                    Bank Details
                  </CardTitle>
                  <p className="text-muted-foreground">
                    For direct bank transfers and larger donations
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Bank Name:</span>
                      <span className="text-muted-foreground">{bankDetails.bankName}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Account Name:</span>
                      <span className="text-muted-foreground text-right">
                        {bankDetails.accountName}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Account No:</span>
                      <span className="text-muted-foreground font-mono">
                        {bankDetails.accountNo}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">IFSC Code:</span>
                      <span className="text-muted-foreground font-mono">
                        {bankDetails.ifsc}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Important Note:</h4>
                    <p className="text-sm text-muted-foreground">
                      Please share your donation receipt via WhatsApp at +91 98765 43210 
                      or email to info@muneswaratrust.org for tax exemption certificate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
              Donation Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the category that resonates with your heart and support specific initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donationCategories.map((category, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-temple transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-merriweather text-xl">
                      {category.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Suggested amounts:</span>
                    <Badge variant="outline">{category.suggested}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
              Payment Methods
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple secure ways to make your donation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donationMethods.map((method, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-temple transition-shadow text-center">
                <CardHeader>
                  <div className="bg-secondary text-secondary-foreground rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <method.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-merriweather text-lg">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-sm">
                    {method.details}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Benefits */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-foreground mb-6">
                Donor Benefits
              </h2>
              <p className="text-lg text-foreground">
                Your generosity is acknowledged and appreciated in multiple ways
              </p>
            </div>

            <Card className="shadow-temple">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold mb-6">
            Every Contribution Matters
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hands with us in our sacred mission. Your donation, however small, 
            creates a significant impact in preserving traditions and serving humanity.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={handleDonateNow}
              variant="gold" 
              size="xl"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button variant="sacred" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donation;