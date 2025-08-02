import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Users } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      title: "Trust Brochure",
      description: "Comprehensive information about our trust, its objectives, and activities.",
      filename: "trust-brochure.pdf",
      size: "2.5 MB",
      lastUpdated: "January 2025",
      icon: FileText,
      category: "Information"
    },
    {
      title: "Annual Report",
      description: "Detailed report of our activities, achievements, and financial statements for the year.",
      filename: "annual-report.pdf",
      size: "8.2 MB",
      lastUpdated: "December 2024",
      icon: Calendar,
      category: "Reports"
    },
    {
      title: "Donation Form",
      description: "Official form for making donations to support our temple and welfare activities.",
      filename: "donation-form.pdf",
      size: "450 KB",
      lastUpdated: "November 2024",
      icon: Users,
      category: "Forms"
    }
  ];

  const handleDownload = (filename: string) => {
    // Placeholder for download functionality
    alert(`Downloading ${filename}... (This is a placeholder - actual file download would happen here)`);
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-temple-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-6">
            Documents & Resources
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Access important documents, reports, and forms related to our 
            trust activities and services.
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-temple transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <doc.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-medium">
                        {doc.category}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="font-merriweather text-xl">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{doc.description}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>File Size:</span>
                      <span className="font-medium">{doc.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Updated:</span>
                      <span className="font-medium">{doc.lastUpdated}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleDownload(doc.filename)}
                    variant="temple" 
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-sacred">
              <CardHeader className="text-center">
                <CardTitle className="font-merriweather text-2xl text-primary">
                  Document Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-merriweather font-semibold text-lg text-primary mb-3">
                      Document Access
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• All documents are available for free download</li>
                      <li>• PDF format for easy viewing and printing</li>
                      <li>• Regularly updated with latest information</li>
                      <li>• Available in multiple languages upon request</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-merriweather font-semibold text-lg text-primary mb-3">
                      Document Updates
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Annual reports published yearly</li>
                      <li>• Trust brochure updated as needed</li>
                      <li>• Forms reviewed and updated quarterly</li>
                      <li>• Notifications sent for major updates</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-merriweather font-semibold text-lg text-primary mb-3">
                    Need Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    If you have trouble downloading any document or need additional information, 
                    please don't hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="temple">
                      Contact Support
                    </Button>
                    <Button variant="sacred">
                      Request Documents
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-merriweather font-semibold text-primary mb-3">
                Legal Notice
              </h3>
              <p className="text-sm text-muted-foreground">
                All documents provided are official publications of Sri Sri Muneswara Trust Temple & Welfare Trust. 
                These documents are provided for informational purposes and may be subject to copyright. 
                Redistribution requires written permission from the trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documents;