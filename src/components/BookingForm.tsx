import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {  X } from "lucide-react"; // 👈 add X here
import {
Calendar,
Clock,
User,
Mail,
Phone,
MessageCircle,
Send,
CheckCircle,
AlertCircle,
} from "lucide-react";

import toast from "react-hot-toast";
const BookingForm = () => {
const initialFormData = {
name: "",
email: "",
phone: "",
service: "",
preferredDate: "",
preferredTime: "",
timezone: "",
challenges: "",
goals: "",
experience: "",
hearAbout: "",
};
const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
service: "",
preferredDate: "",
preferredTime: "",
timezone: "",
challenges: "",
goals: "",
experience: "",
hearAbout: "",
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState<{ [key: string]: string }>({});

const services = [
"Accountability Partner",
"Mental Strengthening",
"Confidence Building",
"Performance Outlook Maintenance",
"Elite Mentorship Program",
"Motivational Speaking Engagement",
"Confidence Building Workshop",
"Not sure yet - let's discuss",
];

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
if (errors[e.target.name]) {
setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
}
};

const handleSubmit = async (e) => {
e.preventDefault();
setIsSubmitting(true);

try {
await emailjs.send(
import.meta.env.VITE_EMAIL_SERVICE_ID,
import.meta.env.VITE_EMAIL_TEMPLATE_ID,
formData,
import.meta.env.VITE_EMAIL_PUBLIC_KEY_ID// replace with your EmailJS public key
);


setIsSubmitting(false);
setSubmitted(true);
setFormData(initialFormData)
toast.success("Congratulations! Your form is submitted")
} catch (error) {
console.error("EmailJS Error:", error);
setIsSubmitting(false);
toast.error("Something went wrong. Please try again.");
}
};




if (submitted) {
  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center relative">
          
          {/* ❌ Close Icon */}
          <button
            onClick={() => setSubmitted(false)}
            className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your discovery call request has been received. I'll be in
              touch within 24 hours to confirm your appointment and send you
              the meeting details.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                What happens next?
              </h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>
                    I'll review your submission and confirm your preferred
                    time slot
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>
                    You'll receive a calendar invite with meeting details
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>I'll send you a champion mindset assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


return (
<section
id="booking"
className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
>
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
{/* Header */}
<div className="text-center mb-12">
<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
Book Your Free
<span className="block leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
Champion Discovery Call
</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
Ready to develop your champion mindset? Let's connect and create
your winning game plan for success. Remember, reps remove all doubt - 
and this is where your champion journey begins.
</p>
</div>


    {/* Form */}
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <User className="w-5 h-5 text-emerald-600" />
              <span>Personal Information</span>
            </h3>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors ${
                  errors.name ? "border-red-400" : "border-gray-300"
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <div className="flex items-center space-x-1 mt-1 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.name}</span>
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors ${
                  errors.email ? "border-red-400" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="flex items-center space-x-1 mt-1 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.email}</span>
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number *
              </label>
        <PhoneInput
          country={"us"}
          value={formData.phone}
          onChange={(phone) => setFormData({ ...formData, phone })}
          inputClass="!w-full !h-12 !text-sm"
          inputStyle={{
            width: "100%",
            borderRadius: "0.5rem",
            border: "1px solid #D1D5DB",
          }}
          enableSearch={true}
          specialLabel={null}
          inputProps={{
            name: "phone",
          }}
          required
        />
              {errors.phone && (
                <div className="flex items-center space-x-1 mt-1 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.phone}</span>
                </div>
              )}
            </div>
          </div>

          {/* Scheduling Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span>Scheduling</span>
            </h3>

            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                required
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors ${
                  errors.preferredDate
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
              />
              {errors.preferredDate && (
                <div className="flex items-center space-x-1 mt-1 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.preferredDate}</span>
                </div>
              )}
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Interested Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                required
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors ${
                  errors.service ? "border-red-400" : "border-gray-300"
                }`}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <div className="flex items-center space-x-1 mt-1 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.service}</span>
                </div>
              )}
            </div>

            {/* How did you hear about us */}
            <div>
              <label
                htmlFor="hearAbout"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                How did you hear about me?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Friend/Colleague Referral</option>
                <option value="website">Your Website</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Full Width Questions */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>Tell Me About Yourself</span>
          </h3>

          {/* Current Challenges */}
          <div>
            <label
              htmlFor="challenges"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What challenges are you ready to dominate? *
            </label>
            <textarea
              id="challenges"
              name="challenges"
              required
              value={formData.challenges}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors resize-none ${
                errors.challenges ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Tell me about the obstacles you're ready to overcome..."
            />
            {errors.challenges && (
              <div className="flex items-center space-x-1 mt-1 text-red-600">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{errors.challenges}</span>
              </div>
            )}
          </div>

          {/* Goals */}
          <div>
            <label
              htmlFor="goals"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What victories do you want to achieve?
            </label>
            <textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors resize-none"
              placeholder="Describe your goals and what victory looks like to you..."
            />
          </div>

          {/* Coaching Experience */}
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Have you worked with a coach or therapist before?
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors"
            >
              <option value="">Select an option</option>
              <option value="no">No, this would be my first time</option>
              <option value="coach">
                Yes, I've worked with a coach before
              </option>
              <option value="therapist">
                Yes, I've worked with a therapist
              </option>
              <option value="both">Yes, I've worked with both</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center cursor-pointer space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-3 md:px-8 md:py-4 rounded-full font-semibold text-md md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            
            
              <>
                <Send className="w-5 h-5" />
                {/* Mobile text */}
                <span className="block md:hidden">Connect Now</span>
                {/* Desktop / Tablet text */}
                <span className="hidden md:block">
                  Book Your Free Discovery Call
                </span>
              </>
            
          </button>

          <p className="text-[12px] md:text-sm text-gray-500 mt-4">
            * This discovery call is completely free with no obligation.
            Let's create your winning game plan!
          </p>
        </div>
      </form>
    </div>
  </div>
</section>
);
};

export default BookingForm;