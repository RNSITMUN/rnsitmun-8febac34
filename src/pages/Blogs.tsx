import Layout from "@/components/layout/Layout";

const Blogs = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Enhanced Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto safe-area-inset-top">
              {/* Enhanced Boxed section */}
              <div className="card-lusion bg-card hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.1)]">
                <div className="text-center mb-8 sm:mb-12">
                  <h1 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    What is{" "}
                    <span className="text-gradient-lusion">MUN?</span>
                  </h1>

                  <p className="font-inter text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12">
                    Model United Nations (MUN) is a simulation of the real United Nations where students take on the roles of delegates representing different countries. They come together to debate global issues, draft resolutions, and learn the art of diplomacy, public speaking, and critical thinking.
                  </p>

                  <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6 font-inter">Why should you join?</h2>
                    <ul className="space-y-4 text-left max-w-3xl mx-auto">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground font-inter">Speak up.</span>
                          <span className="text-muted-foreground font-inter"> Sharpen your public speaking and confidence.</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground font-inter">Think global.</span>
                          <span className="text-muted-foreground font-inter"> Understand international relations and policy.</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground font-inter">Collaborate.</span>
                          <span className="text-muted-foreground font-inter"> Negotiate with fellow delegates, build consensus.</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground font-inter">Stand out.</span>
                          <span className="text-muted-foreground font-inter"> Boost your resume with strong communication and leadership skills.</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-foreground font-inter">Make friends.</span>
                          <span className="text-muted-foreground font-inter"> Meet people from other departments and make unforgettable memories.</span>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-8 sm:mt-10 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                      <p className="text-center text-lg sm:text-xl font-semibold text-foreground font-inter leading-relaxed">
                        Whether you're new or experienced, MUN is your chance to step into the shoes of a global leader — and the best part? 
                        <span className="text-gradient-lusion block sm:inline mt-2 sm:mt-0 sm:ml-2">
                          It's happening right here at RNSIT.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blogs;
