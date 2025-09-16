import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-foreground mb-8">
            RNSIT MUN Society
          </h1>
          <p className="text-lg text-center text-muted-foreground">
            Testing minimal version - if you see this, the basic import works!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
