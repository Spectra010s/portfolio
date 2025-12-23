import { Button } from "@/components/ui/button";
import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  
  return (
    <footer className="py-16 px-6 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">
            hardly working 🤞 - Doing what is doable
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/Spectra010s" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://x.com/spectra010s" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://t.me/spectra010s" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
                    <p className="text-muted-foreground mt-4">
            &copy; 2025 Adeloye Adetayo, All rights reserved.
          </p>
        </div>
      </footer>
      )
}