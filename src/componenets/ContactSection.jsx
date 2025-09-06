import { Mail, Phone, MapPin, Linkedin, Send, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";


export const ContactSection = () => {
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      
      try {
        // Submit to Netlify's form endpoint
        const response = await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams([...formData, ['form-name', 'contact']]).toString()
        });
        
        if (response.ok) {
          toast.success('Message sent successfully!');
          e.target.reset(); // Reset the form
        } else {
          toast.error('Failed to send message. Please try again.');
        }
      } catch (error) {
        toast.error('Failed to send message. Please try again.');
        console.error('Form submission error:', error);
      }
    }

  return (
    <section id="contact" className="py-16 px-4 relative bg-secondary/30"> 
      <div className="container mx-auto max-w-5xl"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm open to exciting opportunities in front-end, full-stack development, and software engineering. Whether you're interested in my work, have a project in mind, or just want to connect about technology, I'd love to hear from you!
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
                    href="mailto:info@joseavalencia.dev" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@joseavalencia.dev
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
                    Bay Area, California
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/jose-valencia-42322b1a8/" 
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                > 
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/joseavalencia" 
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                > 
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            > 
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <input name="bot-field" />
              </div>
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                > 
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                > 
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                > 
                  Message
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
