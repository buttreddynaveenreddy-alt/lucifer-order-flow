import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Utensils, Clock, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Lucifer Catering
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Multicuisine Delights for Your College Events
            </p>
            <Link to="/menu">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🍕</div>
          <div className="absolute bottom-20 right-20 text-8xl">🍔</div>
          <div className="absolute top-1/2 left-1/4 text-6xl">🍜</div>
          <div className="absolute bottom-1/3 right-1/3 text-6xl">🍗</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-card shadow-card animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ Dishes</h3>
              <p className="text-muted-foreground">
                Wide variety of veg and non-veg options to choose from
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card shadow-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Track your order in real-time with live updates
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-muted-foreground">
                Fresh ingredients and authentic recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our extensive menu and place your order in just a few clicks
          </p>
          <Link to="/menu">
            <Button size="lg" className="text-lg px-8">
              View Full Menu
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
