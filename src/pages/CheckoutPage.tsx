import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  newsletter: z.boolean().default(false),
});

type CustomerDetails = z.infer<typeof formSchema>;

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { state: { show } = {} } = useLocation();
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const form = useForm<CustomerDetails>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      newsletter: false,
    },
  });

  const handleNewsletterSignup = () => {
    if (newsletterEmail) {
      console.log("User signed up for newsletter from modal:", newsletterEmail);
      toast.success("Successfully signed up for newsletter!");
      setShowNewsletterModal(false);
    }
  };

  if (!show) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">No show selected</h2>
        <Button onClick={() => navigate("/")} className="bg-ticket-blue text-white">
          Back to Shows
        </Button>
      </div>
    );
  }

  const onSubmit = async (data: CustomerDetails) => {
    try {
      console.log("Form data:", data);
      if (data.newsletter) {
        console.log("User signed up for newsletter:", data.email);
        toast.success("Successfully signed up for newsletter!");
        navigate("/");
      } else {
        setNewsletterEmail(data.email);
        setShowNewsletterModal(true);
      }
    } catch (error) {
      toast.error("Failed to place order");
      console.error("Order submission error:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto py-12 max-w-2xl">
        <Button 
          onClick={() => navigate(-1)}
          className="mb-8 bg-ticket-blue text-white hover:opacity-90"
        >
          ← Back
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-muted-foreground">Purchasing tickets for {show.title}</p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <p>Show: {show.title}</p>
            <p>Date: {show.date}</p>
            <p>Time: {show.time}</p>
            <p className="font-bold mt-2">Price: {show.price}</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Newsletter</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Sign up for our newsletter to receive updates about upcoming shows and exclusive offers.
                      </p>
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-ticket-blue text-white hover:opacity-90"
              >
                Complete Purchase
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <Dialog open={showNewsletterModal} onOpenChange={setShowNewsletterModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Don't Miss Out on Exclusive Offers!</DialogTitle>
            <DialogDescription className="pt-4 space-y-4">
              <p>Join our newsletter and get:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Early access to ticket sales</li>
                <li>Exclusive discounts on upcoming shows</li>
                <li>Behind-the-scenes content</li>
                <li>Artist interviews and updates</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setShowNewsletterModal(false);
                navigate("/");
              }}
            >
              No thanks
            </Button>
            <Button
              className="bg-ticket-blue text-white hover:opacity-90"
              onClick={handleNewsletterSignup}
            >
              Sign Up
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutPage;