import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const TermsConditions = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website (joseavalencia.dev), you agree to be bound by these 
              Terms and Conditions. If you disagree with any part of these terms, you may not access the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, 
              and code, is my intellectual property and is protected by copyright laws. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use my work without proper attribution</li>
              <li>Claim my work as your own</li>
              <li>Modify or distribute my work without permission</li>
              <li>Use my work for commercial purposes without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with or disrupt the website's functionality</li>
              <li>Submit spam or automated messages through the contact form</li>
              <li>Harass, abuse, or harm others through the website</li>
              <li>Transmit malicious code or attempt to hack the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Contact Form Usage</h2>
            <p>
              The contact form is provided for legitimate communication purposes only. By using the contact form, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and truthful information</li>
              <li>Not send spam or automated messages</li>
              <li>Not use the form for harassment or abuse</li>
              <li>Accept that I may decline to respond to any message</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Disclaimer</h2>
            <p>
              This website is provided "as is" without any warranties, express or implied. I do not 
              guarantee the accuracy, completeness, or reliability of the content. Your use of the 
              website is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              I shall not be liable for any damages arising from your use or inability to use this 
              website. This includes direct, indirect, incidental, consequential, and punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              I reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the website after changes 
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State 
              of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              For any questions about these Terms and Conditions, please contact me through the 
              website's contact form or at info@joseavalencia.dev.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
