"use client";

import { FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "general",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    
    // In production, you'd send form data to an API or server route
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiry: "general",
          message: ""
        });
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-gray-700 mb-1 block">Name *</span>
          <Input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            placeholder="Your Name" 
            className="w-full transition-all duration-200 focus:ring-amber-500 focus:border-amber-500" 
          />
        </label>
        
        <label className="block">
          <span className="text-sm font-medium text-gray-700 mb-1 block">Email *</span>
          <Input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="Your Email" 
            className="w-full transition-all duration-200 focus:ring-amber-500 focus:border-amber-500" 
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-gray-700 mb-1 block">Phone (Optional)</span>
          <Input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number" 
            className="w-full transition-all duration-200 focus:ring-amber-500 focus:border-amber-500" 
          />
        </label>
        
        <label className="block">
          <span className="text-sm font-medium text-gray-700 mb-1 block">Inquiry Type</span>
          <select 
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          >
            <option value="general">General Inquiry</option>
            <option value="quote">Request Quote</option>
            <option value="consultation">Consultation</option>
            <option value="support">Support</option>
          </select>
        </label>
      </div>
      
      <label className="block">
        <span className="text-sm font-medium text-gray-700 mb-1 block">Message *</span>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project or inquiry..."
          className="w-full min-h-[120px] transition-all duration-200 focus:ring-amber-500 focus:border-amber-500"
        />
      </label>
      
      <div className="mt-6">
        <Button 
          type="submit" 
          disabled={submitting || success} 
          className={`w-full sm:w-auto relative ${success ? "bg-green-600 hover:bg-green-700" : "bg-black hover:bg-gray-800"} transition-colors duration-200`}
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : success ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Message Sent!
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
