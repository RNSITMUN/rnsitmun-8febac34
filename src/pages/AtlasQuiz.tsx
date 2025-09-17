import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, Users, Trophy, Calendar, MapPin, QrCode } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  participant1Name: z.string().min(2, "Participant 1 name must be at least 2 characters"),
  participant1Contact: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  teamSize: z.enum(["1", "2"], { required_error: "Please select team size" }),
  participant2Name: z.string().optional(),
  participant2Contact: z.string().optional(),
  streamOfStudy: z.string().min(2, "Stream of study is required"),
  representsRNSIT: z.boolean(),
  institutionName: z.string().optional(),
  teamName: z.string().min(3, "Team name must be at least 3 characters"),
  agreedTerms: z.boolean().refine((val) => val === true, "You must agree to terms and conditions"),
  paymentScreenshot: z.any().refine((files) => files?.length > 0, "Payment screenshot is required"),
}).refine((data) => {
  if (data.teamSize === "2") {
    return data.participant2Name && data.participant2Name.length >= 2 &&
           data.participant2Contact && /^[6-9]\d{9}$/.test(data.participant2Contact);
  }
  return true;
}, {
  message: "Participant 2 details are required for team of 2",
  path: ["participant2Name"],
}).refine((data) => {
  if (!data.representsRNSIT) {
    return data.institutionName && data.institutionName.length >= 2;
  }
  return true;
}, {
  message: "Institution name is required when not representing RNSIT",
  path: ["institutionName"],
});

type FormData = z.infer<typeof formSchema>;

const AtlasQuiz = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      participant1Name: "",
      participant1Contact: "",
      teamSize: "1",
      participant2Name: "",
      participant2Contact: "",
      streamOfStudy: "",
      representsRNSIT: false,
      institutionName: "",
      teamName: "",
      agreedTerms: false,
    },
  });

  const teamSize = form.watch("teamSize");
  const representsRNSIT = form.watch("representsRNSIT");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Upload payment screenshot to Supabase Storage
      const file = data.paymentScreenshot[0];
      const fileName = `${Date.now()}_${file.name}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('atlas-payment-proofs')
        .upload(fileName, file);

      if (uploadError) {
        throw new Error('Failed to upload payment screenshot');
      }

      // Get public URL for the uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('atlas-payment-proofs')
        .getPublicUrl(fileName);

      // Insert registration data into atlas_registrations table
      const { error: insertError } = await supabase
        .from('atlas_registrations')
        .insert({
          participant1_name: data.participant1Name,
          participant1_contact: data.participant1Contact,
          participant2_name: data.teamSize === "2" ? data.participant2Name : null,
          participant2_contact: data.teamSize === "2" ? data.participant2Contact : null,
          stream_of_study: data.streamOfStudy,
          is_rnsit: data.representsRNSIT,
          institution_name: data.representsRNSIT ? null : data.institutionName,
          team_name: data.teamName,
          team_size: parseInt(data.teamSize),
          agreed_terms: data.agreedTerms,
          payment_amount: 60,
          payment_proof_url: publicUrl,
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
                    name="participant1Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Participant 1 Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter participant 1 name"
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
                    name="participant1Contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Participant 1 Contact Number</FormLabel>
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
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Team Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-primary/30 text-white">
                              <SelectValue placeholder="Select team size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Team of 1</SelectItem>
                            <SelectItem value="2">Team of 2</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {teamSize === "2" && (
                    <>
                      <FormField
                        control={form.control}
                        name="participant2Name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Participant 2 Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter participant 2 name"
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
                        name="participant2Contact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Participant 2 Contact Number</FormLabel>
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
                    </>
                  )}

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
                    name="agreedTerms"
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
                            I agree to the terms and conditions
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Payment Section */}
                  <div className="space-y-4 p-4 border border-primary/30 rounded-lg bg-black/30">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <QrCode className="w-5 h-5" />
                      Go to Payment – Scan the QR below to pay ₹60
                    </h3>
                    
                    <div className="flex justify-center">
                      <div className="bg-white p-4 rounded-lg">
                        <img 
                          src="/atlas-payment-qr.png" 
                          alt="Payment QR Code - ₹60" 
                          className="w-48 h-48 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                            e.currentTarget.alt = 'Payment QR Code (Please add atlas-payment-qr.png to public folder)';
                          }}
                        />
                      </div>
                    </div>
                    
                    <p className="text-center text-sm text-white/70">
                      Upload screenshot of your payment confirmation after paying ₹60
                    </p>
                    
                    <FormField
                      control={form.control}
                      name="paymentScreenshot"
                      render={({ field: { onChange, value, ...field } }) => (
                        <FormItem>
                          <FormLabel className="text-white">Payment Screenshot</FormLabel>
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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
