import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import templeBanner from "@/assets/temple-banner.jpg";
import { Calendar, Heart, Users, BookOpen } from "lucide-react";

const Index = () => {
  const newsUpdates = [
    {
      date: "January 15, 2025",
      title: "Makar Sankranti Celebration",
      description: "Special prayers and prasadam distribution on the auspicious day of Makar Sankranti."
    },
    {
      date: "January 10, 2025",
      title: "Medical Camp Organized",
      description: "Free health checkup camp conducted for underprivileged community members."
    },
    {
      date: "December 25, 2024",
      title: "Annual Festival Celebrations",
      description: "Grand festival celebrations with traditional rituals and cultural programs."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${templeBanner})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-merriweather text-4xl md:text-6xl font-bold mb-6">
            Sri Sri Muneswara Trust
          </h1>
          <h2 className="font-merriweather text-2xl md:text-3xl mb-6 text-secondary">
            Temple & Welfare Trust
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Dedicated to preserving spiritual traditions, conducting temple rituals, 
            organizing festivals, and serving society through welfare initiatives.
          </p>
          <div className="space-x-4">
            <Button variant="temple" size="xl">
              Explore Our Mission
            </Button>
            <Button variant="sacred" size="xl">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-sacred-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
              Welcome to Our Sacred Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SRI SRI MUNESWARA TRUST TEMPLE & WELFARE TRUST is dedicated to preserving 
              spiritual traditions, conducting temple rituals, organizing festivals, and 
              serving society through welfare initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Sacred Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our mission is to blend spirituality and service—providing temple services, 
              cultural preservation, educational assistance, and community welfare programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-sacred hover:shadow-temple transition-shadow">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-merriweather">Temple Rituals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Daily prayers, special ceremonies, and festival celebrations
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sacred hover:shadow-temple transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-merriweather">Welfare Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Health camps, food distribution, and community service
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sacred hover:shadow-temple transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-merriweather">Cultural Preservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Preserving traditions and promoting spiritual teachings
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sacred hover:shadow-temple transition-shadow">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-merriweather">Education Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Educational assistance for underprivileged children
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
              News & Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest temple events and community welfare activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsUpdates.map((news, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-temple transition-shadow">
                <CardHeader>
                  <p className="text-sm text-secondary font-semibold">{news.date}</p>
                  <CardTitle className="font-merriweather text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-temple-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold mb-6">
            Join Our Sacred Mission
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Support our temple activities and welfare programs. Your contributions help us 
            serve the community and preserve our spiritual heritage.
          </p>
          <div className="space-x-4">
            <Button variant="gold" size="xl">
              Make a Donation
            </Button>
            <Button variant="sacred" size="xl">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
