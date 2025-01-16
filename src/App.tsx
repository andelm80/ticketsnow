import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ExploreShows from "./pages/ExploreShows";
import AboutUs from "./pages/AboutUs";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <header className="p-4 border-b">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="inline-block">
                <Logo />
              </Link>
              <nav className="space-x-6">
                <Link to="/explore" className="text-gray-600 hover:text-ticket-purple transition-colors">
                  Explore Shows
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-ticket-purple transition-colors">
                  About Us
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/show/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/explore" element={<ExploreShows />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;