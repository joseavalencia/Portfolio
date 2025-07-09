import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";


export const ContactSection = () => {
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      // Show loading toast
      toast.promise(
        // Your form submission logic here (e.g., API call)
        new Promise((resolve) => {
          setTimeout(resolve, 1500);
        }),
        {
          loading: 'Sending message...',
          success: 'Message sent successfully!',
          error: 'Failed to send message.',
        }
      );

      // Reset form
      e.target.reset();
    }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30"> 
      <div className="container mx-auto max-w-5xl"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> 
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "} 
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a 
                    href="mailto:jovalencia1102@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jovalencia1102@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "} 
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "} 
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco Bay Area
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/jose-valencia-42322b1a8/" target="_blank"> 
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6"> 
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Jose Valencia"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="jose@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Write your message here..."
                />
              </div>

              <button 
                type="submit" 
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
