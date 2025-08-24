import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Calendar, 
  Users, 
  Star, 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail,
  Zap,
  Shield,
  Target
} from "lucide-react";

interface LandingPageProps {
  onStartApp: () => void;
}

const LandingPage = ({ onStartApp }: LandingPageProps) => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-hero" />,
      title: "Total Focus",
      description: "Organize your tasks by priority and maintain focus on what really matters to achieve your goals."
    },
    {
      icon: <Zap className="h-8 w-8 text-hero" />,
      title: "Super Fast",
      description: "Intuitive and responsive interface that allows you to add, edit and complete tasks in seconds."
    },
    {
      icon: <Shield className="h-8 w-8 text-hero" />,
      title: "Secure Data",
      description: "Your data is protected with the highest security and real-time synchronization."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Project Manager",
      content: "TaskFlow revolutionized my productivity! Now I can organize all team tasks in a simple and efficient way.",
      rating: 5
    },
    {
      name: "John Santos",
      role: "Freelancer",
      content: "Finally found a task app that's really easy to use. The interface is clean and has no unnecessary features.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Student",
      content: "Perfect for organizing my studies! TaskFlow helps me stay focused and track my daily progress.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for personal use",
      features: [
        "Up to 50 tasks",
        "Basic synchronization",
        "Email support",
        "Responsive interface"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For busy professionals",
      features: [
        "Unlimited tasks",
        "Team collaboration",
        "Advanced reports",
        "Priority support",
        "Integrations",
        "Automatic backup"
      ],
      highlighted: true
    },
    {
      name: "Team",
      price: "$49",
      period: "/month",
      description: "For teams and companies",
      features: [
        "Everything in Pro",
        "User management",
        "Detailed analytics",
        "Custom API",
        "24/7 support",
        "Team training"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-muted py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            ⚡ New: Version 2.0 available!
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-hero to-accent bg-clip-text text-transparent">
            TaskFlow
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate tool to organize your tasks and boost your productivity. 
            Simple, fast and powerful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onStartApp}
              size="lg"
              variant="hero"
              className="text-lg px-8 py-6 shadow-[var(--shadow-hero)] hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-muted transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            ✨ Over 10,000 users have already organized their lives with TaskFlow
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why choose TaskFlow?</h2>
            <p className="text-xl text-muted-foreground">
              Features designed to maximize your productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow duration-300 border-2 hover:border-hero/20">
                  <CardContent className="pt-0">
                    <div className="mb-6 flex justify-center">
                      <div className="p-3 bg-secondary rounded-full">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What our users say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people who transformed their productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-0">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-hero text-hero" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Choose your plan</h2>
            <p className="text-xl text-muted-foreground">
              Flexible options for every need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative ${
                  plan.highlighted 
                    ? 'border-2 border-hero shadow-[var(--shadow-hero)] scale-105' 
                    : 'shadow-[var(--shadow-card)]'
                } hover:shadow-lg transition-all duration-300`}>
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-hero text-hero-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <Button 
                      className="w-full mb-6"
                      variant={plan.highlighted ? "hero" : "outline"}
                      size="lg"
                    >
                      {plan.name === "Free" ? "Start Free" : "Subscribe Now"}
                    </Button>
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hero flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-hero">TaskFlow</h3>
              <p className="text-primary-foreground/80 mb-4">
                The ultimate tool to organize your tasks and boost your productivity.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-hero hover:bg-primary-foreground/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-hero hover:bg-primary-foreground/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-hero hover:bg-primary-foreground/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-hero transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-hero transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-hero transition-colors">API</a></li>
                <li><a href="#" className="hover:text-hero transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-hero transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-hero transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-hero transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-hero transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@taskflow.com
                </p>
                <p>+1 (555) 999-9999</p>
                <p>San Francisco, CA - USA</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;