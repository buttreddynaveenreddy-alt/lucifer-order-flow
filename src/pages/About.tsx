import { Card } from "@/components/ui/card";
import { Info, Code, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">
          <Info className="inline mr-2" />
          About Lucifer Catering
        </h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">
          Learn more about our platform
        </p>

        <div className="space-y-6">
          <Card className="p-8 animate-slide-up">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lucifer Catering is a college project that demonstrates a modern, 
                  dynamic food ordering system. We aim to showcase how web technologies 
                  can create seamless user experiences for food delivery services.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built with modern web technologies to ensure a smooth and responsive 
                  user experience:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>React & TypeScript for type-safe development</li>
                  <li>Tailwind CSS for beautiful, responsive design</li>
                  <li>LocalStorage for client-side data persistence</li>
                  <li>React Router for seamless navigation</li>
                  <li>Shadcn UI for consistent component design</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Browse 50+ menu items with filtering options</li>
                  <li>Add items to cart with quantity management</li>
                  <li>Real-time order tracking with status updates</li>
                  <li>Admin portal for order management</li>
                  <li>Responsive design for all devices</li>
                  <li>Smooth animations and transitions</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-hero text-white animate-scale-in">
            <h2 className="text-2xl font-semibold mb-2">A Note on Implementation</h2>
            <p className="leading-relaxed opacity-90">
              This is a frontend-only demonstration project. All data is stored locally 
              in your browser using localStorage. In a production environment, this would 
              be connected to a backend server with a proper database for persistent storage 
              and real-time updates across multiple users.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
