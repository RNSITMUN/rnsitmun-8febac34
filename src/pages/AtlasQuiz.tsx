import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, Users, Trophy, Calendar, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  participantName: z.string().min(2, "Participant name must be at least 2 characters"),
  contactNumber: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  streamOfStudy: z.string().min(2, "Stream of study is required"),
  representsRNSIT: z.boolean(),
  institutionName: z.string().optional(),
  teamName: z.string().min(3, "Team name must be at least 3 characters"),
  paymentScreenshot: z.any().refine((files) => files?.length > 0, "Payment screenshot is required"),
}).refine((data) => {
  if (!data.representsRNSIT && !data.institutionName) {
    return false;
  }
  return true;
}, {
  message: "Institution name is required if not representing RNSIT",
  path: ["institutionName"],
});

type FormData = z.infer<typeof formSchema>;

const AtlasQuiz = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      participantName: "",
      contactNumber: "",
      streamOfStudy: "",
      representsRNSIT: false,
      institutionName: "",
      teamName: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Upload payment screenshot to Supabase Storage
      const file = data.paymentScreenshot[0];
      const fileName = `${Date.now()}_${file.name}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('payment_screenshots')
        .upload(fileName, file);

      if (uploadError) {
        throw new Error('Failed to upload payment screenshot');
      }

      // For now, we'll use the existing search_queries table as a workaround
      // In production, you would create a proper atlas_registrations table
      const { error: insertError } = await supabase
        .from('search_queries')
        .insert({
          query: `Atlas Registration: ${data.teamName}`,
          timestamp: new Date().toISOString(),
        });

      if (insertError) {
        throw new Error('Failed to submit registration');
      }

      toast({
        title: "Registration Successful!",
        description: "Your Atlas Quiz registration has been submitted successfully.",
      });

      form.reset();
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const representsRNSIT = form.watch("representsRNSIT");

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Atlas Intercollege Quiz</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-inter tracking-tight">
              Register for <span className="text-gradient-lusion">Atlas Quiz</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Join us for an exciting intercollege quiz competition. Test your knowledge, compete with brilliant minds, and win amazing prizes!
            </p>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <Card className="bg-black/40 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Date</h3>
                  <p className="text-white/70">Coming Soon</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Venue</h3>
                  <p className="text-white/70">RNSIT Campus</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Entry Fee</h3>
                  <p className="text-white/70">₹60 per team</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registration Form */}
          <Card className="max-w-2xl mx-auto bg-black/90 border-primary/30 backdrop-blur-lg shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Registration Form</CardTitle>
              <p className="text-white/70">Fill in your details to register for Atlas Quiz</p>
            </CardHeader>
            
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="participantName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Participant Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter participant name"
                            className="bg-black/50 border-primary/30 text-white placeholder:text-white/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Contact Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter 10-digit mobile number"
                            className="bg-black/50 border-primary/30 text-white placeholder:text-white/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="streamOfStudy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Stream of Study</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Computer Science, Mechanical, etc."
                            className="bg-black/50 border-primary/30 text-white placeholder:text-white/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="representsRNSIT"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-primary/30"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-white">
                            Does the team represent RNSIT?
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {!representsRNSIT && (
                    <FormField
                      control={form.control}
                      name="institutionName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Institution Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your institution name"
                              className="bg-black/50 border-primary/30 text-white placeholder:text-white/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Team Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter a catchy team name"
                            className="bg-black/50 border-primary/30 text-white placeholder:text-white/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="paymentScreenshot"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel className="text-white">Payment Screenshot (₹60)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="file"
                              accept="image/*"
                              className="bg-black/50 border-primary/30 text-white file:bg-primary file:text-white file:border-0 file:rounded-md file:px-3 file:py-1"
                              onChange={(e) => onChange(e.target.files)}
                              {...field}
                            />
                            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                          </div>
                        </FormControl>
                        <p className="text-xs text-white/60">
                          Upload screenshot of your ₹60 payment transaction
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,47,251,0.4)]"
                  >
                    {isSubmitting ? "Submitting..." : "Register Now"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AtlasQuiz;