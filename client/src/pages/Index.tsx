import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import TaskList from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [showApp, setShowApp] = useState(false);

  if (showApp) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Button
              onClick={() => setShowApp(false)}
              variant="outline"
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Landing Page
            </Button>
          </motion.div>
          <TaskList />
        </div>
      </div>
    );
  }

  return <LandingPage onStartApp={() => setShowApp(true)} />;
};

export default Index;
