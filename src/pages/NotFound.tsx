import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-merriweather text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="font-merriweather text-2xl md:text-3xl font-semibold text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist or may have been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/">
              <Button variant="temple" size="lg" className="w-full">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Button>
            </Link>
            <Button 
              variant="sacred" 
              size="lg" 
              className="w-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
