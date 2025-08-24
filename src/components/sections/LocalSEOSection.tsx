import { MapPin, Users, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocalSEOSection = () => {
  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* India-focused heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bangalore's Premier <span className="text-gradient-lusion">MUN Society</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading Model United Nations society in Karnataka, serving students across Bangalore and South India with world-class diplomatic training and international relations education.
          </p>
        </div>

        {/* Location-specific cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="card-lusion">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Located in Bangalore</h3>
              <p className="text-sm text-muted-foreground">
                RNS Institute of Technology, Channasandra, Bangalore - 560098, Karnataka, India
              </p>
            </CardContent>
          </Card>

          <Card className="card-lusion">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">500+ Active Members</h3>
              <p className="text-sm text-muted-foreground">
                Largest MUN society in Karnataka with students from across Bangalore colleges
              </p>
            </CardContent>
          </Card>

          <Card className="card-lusion">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Regular Events</h3>
              <p className="text-sm text-muted-foreground">
                Monthly MUN conferences and diplomatic training sessions in Bangalore
              </p>
            </CardContent>
          </Card>

          <Card className="card-lusion">
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Award Winning</h3>
              <p className="text-sm text-muted-foreground">
                Best MUN Society in Karnataka - recognized by leading educational institutions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* India-specific content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose RNSIT MUN in Bangalore?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Top MUN Society in Karnataka:</strong> Leading Model United Nations society in Bangalore with proven track record
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">All-India Recognition:</strong> Participants from RNSIT MUN compete in national MUN conferences across India
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Bangalore Network:</strong> Strong connections with top colleges and MUN societies across Karnataka
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Industry Connections:</strong> Alumni working in diplomatic missions, NGOs, and international organizations across India
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Join Bangalore's Best MUN Community
            </h3>
            <p className="text-muted-foreground mb-4">
              Located in the heart of Bangalore's educational hub, RNSIT MUN provides unparalleled opportunities for students interested in international relations, diplomacy, and global affairs.
            </p>
            <p className="text-muted-foreground mb-4">
              Our society regularly hosts inter-college MUN conferences, bringing together the brightest minds from across Karnataka and South India to discuss pressing global issues.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-primary font-medium">
                🎯 Next Major Event: Inter-Karnataka MUN Championship 2025 - Register Now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSection;