import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const show = location.state?.show;

  console.log("Checkout page loaded with show:", show);

  const form = useForm<CustomerDetails>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: CustomerDetails) => {
    console.log("Form submitted with data:", data);
    toast.success("Order placed successfully!");
    navigate("/");
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

  return (
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
          <p className="text-muted-foreground">
            Purchasing tickets for {show.title}
          </p>
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
  );
};

export default CheckoutPage;