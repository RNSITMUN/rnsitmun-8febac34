import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

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
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <Globe className="w-16 h-16 text-mun-primary mx-auto mb-6" />
          <h1 className="text-6xl font-bold font-playfair text-mun-dark mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6 font-opensans">Oops! This diplomatic channel doesn't exist</p>
          <Button asChild className="bg-mun-primary hover:bg-mun-secondary">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
