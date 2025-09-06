import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p>
              This Privacy Policy explains how I collect, use, and protect your personal information when you use my portfolio website. 
              I am committed to ensuring your privacy and protecting any personal information you share with me.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
            <p>I only collect the following information through the contact form:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
            <p>
              This information is collected solely for the purpose of responding to your inquiries and 
              maintaining communication regarding potential opportunities or collaborations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Use of Information</h2>
            <p>Your information is used exclusively for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Responding to your messages and inquiries</li>
              <li>Communicating about potential opportunities</li>
              <li>Maintaining a record of our correspondence</li>
            </ul>
            <p>
              I do not use your information for marketing purposes, automated messaging, or any form of 
              promotional communication. Your information is never sold, rented, or shared with third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p>
              Your data is protected through several security measures:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure form processing through Netlify</li>
              <li>Limited data collection and retention</li>
              <li>No storage of sensitive personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
            <p>
              This website does not use cookies or any form of tracking technology. 
              I maintain a simple, privacy-focused approach that respects your right to browse without being tracked.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Request access to your personal information</li>
              <li>Request correction or deletion of your information</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact me through the website's contact form.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me through the website's 
              contact form or directly at info@joseavalencia.dev.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};