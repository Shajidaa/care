"use client";
import React, { useState } from "react";
import Container from "@/components/common/Container";
import Title from "@/components/Title";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "",
    message: "",
    preferredContact: "email"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceTypes = [
    "Baby Care",
    "Elderly Care", 
    "Patient Care",
    "Home Nursing",
    "Companion Care",
    "Respite Care",
    "General Inquiry"
  ];

  const urgencyLevels = [
    { value: "routine", label: "Routine (Within 48 hours)" },
    { value: "urgent", label: "Urgent (Within 24 hours)" },
    { value: "emergency", label: "Emergency (Immediate)" }
  ];

  const contactMethods = [
    { icon: "📧", title: "Email", value: "support@careservices.com", type: "email" },
    { icon: "📞", title: "Phone", value: "+1 (555) 123-4567", type: "phone" },
    { icon: "💬", title: "WhatsApp", value: "+1 (555) 123-4567", type: "whatsapp" },
    { icon: "🏥", title: "Emergency", value: "+1 (555) 911-CARE", type: "emergency" }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Emergency Services", hours: "24/7 Available" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        urgency: "",
        message: "",
        preferredContact: "email"
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200/50 pt-24 pb-12">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <Title>Contact Our Care Team</Title>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto mt-4">
            We're here to help you find the right care solution. Whether you need immediate assistance 
            or want to learn more about our services, our dedicated team is ready to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-2xl border border-base-300/50">
              <div className="card-body p-8">
                <h2 className="card-title text-2xl mb-6 text-primary">
                  Get in Touch
                </h2>

                {submitStatus === "success" && (
                  <div className="alert alert-success mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="alert alert-error mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Service Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Service Needed</span>
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="select select-bordered w-full"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency and Preferred Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Urgency Level</span>
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="select select-bordered w-full"
                      >
                        <option value="">Select urgency</option>
                        {urgencyLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Preferred Contact Method</span>
                      </label>
                      <div className="flex gap-4 mt-2">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === "email"}
                            onChange={handleInputChange}
                            className="radio radio-primary"
                          />
                          <span className="label-text ml-2">Email</span>
                        </label>
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === "phone"}
                            onChange={handleInputChange}
                            className="radio radio-primary"
                          />
                          <span className="label-text ml-2">Phone</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Message *</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered h-32 w-full"
                      required
                      placeholder="Please describe your care needs, any specific requirements, or questions you have..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="form-control">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary btn-lg w-full ${isSubmitting ? 'loading' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="card bg-base-100 shadow-xl border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="card-title text-xl mb-4 text-primary">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-base-200/50 transition-colors">
                      <div className="text-2xl">{method.icon}</div>
                      <div>
                        <div className="font-semibold text-base-content">
                          {method.title}
                        </div>
                        <div className="text-base-content/70">
                          {method.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card bg-base-100 shadow-xl border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="card-title text-xl mb-4 text-primary">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-base-300/30 last:border-b-0">
                      <span className="font-medium text-base-content">
                        {schedule.day}
                      </span>
                      <span className="text-base-content/70">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="card bg-error/10 border border-error/20">
              <div className="card-body p-6">
                <h3 className="card-title text-xl mb-4 text-error">
                  🚨 Emergency Care
                </h3>
                <p className="text-base-content/80 mb-4">
                  For immediate medical emergencies, call 911 first. For urgent care needs, contact our 24/7 emergency line.
                </p>
                <button className="btn btn-error btn-sm w-full">
                  Call Emergency Line
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="card bg-base-100 shadow-xl border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="card-title text-xl mb-4 text-primary">
                  📍 Our Location
                </h3>
                <div className="space-y-2">
                  <p className="text-base-content">
                    <strong>Care Services Headquarters</strong>
                  </p>
                  <p className="text-base-content/70">
                    123 Healthcare Avenue<br />
                    Medical District<br />
                    City, State 12345
                  </p>
                  <button className="btn btn-outline btn-sm mt-4 w-full">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-base-content mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Quick answers to common questions about our care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-lg border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="font-semibold text-lg mb-2">How quickly can you start care?</h3>
                <p className="text-base-content/70">
                  We can typically arrange care within 24-48 hours for routine needs, and same-day for urgent situations.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="font-semibold text-lg mb-2">Do you accept insurance?</h3>
                <p className="text-base-content/70">
                  Yes, we work with most major insurance providers. Contact us to verify your coverage.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="font-semibold text-lg mb-2">Are your caregivers licensed?</h3>
                <p className="text-base-content/70">
                  All our caregivers are licensed, bonded, and undergo thorough background checks and training.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300/50">
              <div className="card-body p-6">
                <h3 className="font-semibold text-lg mb-2">What areas do you serve?</h3>
                <p className="text-base-content/70">
                  We provide services throughout the metropolitan area. Contact us to confirm availability in your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
