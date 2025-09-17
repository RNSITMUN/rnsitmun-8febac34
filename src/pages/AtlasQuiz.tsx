import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AtlasQuiz = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-black/80 py-16 sm:py-24">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/atlas-bg.jpg')] bg-cover bg-center opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Atlas Quiz 2025
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Gear up for the biggest intercollegiate quiz at{" "}
            <strong>RNSIT</strong> – test your knowledge, compete with
            the brightest, and win exciting rewards!
          </p>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {/* Date */}
          <Card className="bg-black/40 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Date</h3>
              <p className="text-white/70">24th September 2025</p>
            </CardContent>
          </Card>

          {/* Venue */}
          <Card className="bg-black/40 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Venue</h3>
              <p className="text-white/70">RNSIT Campus</p>
            </CardContent>
          </Card>

          {/* Entry Fee */}
          <Card className="bg-black/40 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Entry Fee</h3>
              <p className="text-white/70">₹60 per team</p>
            </CardContent>
          </Card>

          {/* Prize Pool */}
          <Card className="bg-black/40 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Prize Pool</h3>
              <p className="text-white/70">₹50,000+</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            className="btn-lusion inline-flex items-center justify-center"
          >
            Register Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AtlasQuiz;
