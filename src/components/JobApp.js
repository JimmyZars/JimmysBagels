import React, { useState } from "react";
import "../styles/JobApp.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  startDate: "",
  experience: "",
  availability: [],
  additionalInfo: "",
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function JobApplication() {
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvailability = (day) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter((d) => d !== day)
        : [...prev.availability, day],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.availability.length === 0) {
      setMessage("Please select at least one available day.");
      return;
    }

    setSubmitting(true);

    try {
      // Replace this with your actual backend endpoint.
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setMessage("Application submitted successfully!");
      setFormData({ ...initialForm });
    } catch (error) {
      setMessage("Unable to submit your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="application-container">
      <div className="application-header">
        <h1>Join Our Team</h1>
        <p>
          Interested in working at Jimmy's Bagels? Complete the application
          below!
        </p>
      </div>

      <form className="application-form" onSubmit={handleSubmit}>
        <h2>Personal Information</h2>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
            />
          </div>
        </div>

        <h2>Employment Information</h2>

        <div className="form-group">
          <label htmlFor="position">Position Applying For *</label>

          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select a Position</option>
            <option value="Line Cook">Line Cook</option>
            <option value="Cashier/Barista">Cashier / Barista</option>
            <option value="Either">Either Position</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Earliest Available Start Date *</label>

          <input
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate}
            min={new Date().toLocaleDateString("en-CA")}
            onChange={handleChange}
            required
          />
        </div>

        <h2>Availability</h2>
        <p>Select all days you are available to work.</p>

        <div className="availability-grid">
          {days.map((day) => (
            <label className="day-option" key={day}>
              <input
                type="checkbox"
                checked={formData.availability.includes(day)}
                onChange={() => handleAvailability(day)}
              />
              <span>{day}</span>
            </label>
          ))}
        </div>

        <h2>Work Experience</h2>

        <div className="form-group">
          <label htmlFor="experience">
            Tell us about your previous work experience
          </label>

          <textarea
            id="experience"
            name="experience"
            rows="5"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Previous jobs, responsibilities, and relevant experience..."
          />
        </div>

        <h2>Additional Information</h2>

        <div className="form-group">
          <label htmlFor="additionalInfo">
            Why would you like to work at Jimmy's Bagels?
          </label>

          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Tell us a little about yourself..."
          />
        </div>

        <button
          type="submit"
          className="application-submit"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>

        {message && (
          <p className="application-message" role="status">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}

export default JobApplication;
