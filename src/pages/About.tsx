import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Target, Users, Heart } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Calendar,
      title: "Temple Rituals & Festivals",
      description: "Conduct temple rituals and festivals with devotion and traditional authenticity."
    },
    {
      icon: Heart,
      title: "Social Service Events",
      description: "Organize health camps, food donation drives, and community welfare programs."
    },
    {
      icon: Users,
      title: "Educational Aid",
      description: "Provide educational assistance and support to underprivileged children."
    },
    {
      icon: Target,
      title: "Cultural Promotion",
      description: "Promote cultural values and spiritual teachings for community enrichment."
    }
  ];

  const keyMembers = [
    {
      name: "Sri Ramesh Varma",
      position: "Founder & Chairman",
      initials: "RV",
      description: "Leading the trust with vision and dedication since its inception."
    },
    {
      name: "Smt. Lakshmi Devi",
      position: "Secretary",
      initials: "LD",
      description: "Managing administrative affairs and community outreach programs."
    },
    {
      name: "Sri Prakash Rao",
      position: "Treasurer",
      initials: "PR",
      description: "Overseeing financial management and transparent fund utilization."
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-temple-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-6">
            About Our Trust
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Learn about our history, mission, and the dedicated team working towards 
            spiritual and social welfare.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
                Our History
              </h2>
            </div>
            
            <Card className="shadow-sacred">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-3 mt-1">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-merriweather text-xl font-semibold text-primary mb-4">
                      Founded in 2015
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Founded in 2015, the Sri Sri Muneswara Trust Temple & Welfare Trust has been 
                      actively engaged in temple activities and community welfare programs. What started 
                      as a small initiative to preserve spiritual traditions has grown into a comprehensive 
                      organization serving the community through various welfare programs, educational 
                      assistance, and cultural preservation efforts.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                      Over the years, our trust has organized numerous festivals, conducted regular temple 
                      rituals, and implemented various social service programs that have positively impacted 
                      hundreds of families in our community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Objectives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our trust is built on four fundamental pillars that guide all our activities 
              and community service initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-temple transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <objective.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-merriweather text-lg">
                      {objective.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Members Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-6">
              Key Members
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated individuals who lead our trust with wisdom, compassion, 
              and unwavering commitment to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyMembers.map((member, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-temple transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-20 w-20 bg-primary text-primary-foreground text-2xl font-bold">
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="font-merriweather text-xl">{member.name}</CardTitle>
                  <p className="text-secondary font-semibold">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              To create a harmonious community where spiritual growth and social welfare 
              go hand in hand, fostering an environment of compassion, service, and 
              cultural preservation for future generations.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;