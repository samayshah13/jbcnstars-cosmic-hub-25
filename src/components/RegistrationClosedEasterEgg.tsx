import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertTriangle, Clock, XCircle, Calendar } from "lucide-react";

interface RegistrationClosedEasterEggProps {
  variant?: "default" | "outline" | "ghost";
  className?: string;
  size?: "default" | "sm" | "lg";
}

const RegistrationClosedEasterEgg = ({ 
  variant = "default", 
  className = "",
  size = "default" 
}: RegistrationClosedEasterEggProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sadMessages = [
    "The early bird gets the worm... and you weren't early! 🐛",
    "Time waits for no one, not even mathematicians! ⏰",
    "You missed it by THIS much! (Infinitesimally small, but still missed!) 📐",
    "Math fact: Registration deadline < Current time = Sorry! 😅",
  ];

  const randomMessage = sadMessages[Math.floor(Math.random() * sadMessages.length)];

  return (
    <>
      <Button 
        variant={variant}
        className={className}
        size={size}
        onClick={() => setIsOpen(true)}
      >
        Register Now
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md border-2 border-destructive/50">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Clock className="w-20 h-20 text-destructive animate-pulse" />
                <XCircle className="w-10 h-10 text-destructive absolute -top-2 -right-2 animate-bounce" />
              </div>
            </div>
            <DialogTitle className="text-2xl text-center font-black text-destructive">
              🚨 TOO LATE! 🚨
            </DialogTitle>
            <DialogDescription className="text-center space-y-4 pt-4">
              <div className="text-lg font-semibold text-foreground">
                Registration is Closed!
              </div>
              
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                <p className="text-sm text-foreground-muted mb-3">
                  {randomMessage}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Registration Deadline: October 5th, 2025</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  But don't worry! 💫
                </p>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Stay tuned for next year's competition! Follow us for updates and be among the first to register for JBCN Stars 2026.
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                  variant="outline"
                >
                  I'll Be Ready Next Time! 💪
                </Button>
                <p className="text-xs text-center text-muted-foreground italic">
                  "Better late than never... except for registrations!" 😉
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegistrationClosedEasterEgg;
