import { Button } from "@/components/ui/button";
import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 ">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground mb-4">
          hardly working 🤞 - Doing what is doable
        </p>

        <p className="text-muted-foreground mt-4">
          &copy; 2025 Adeloye Adetayo, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
