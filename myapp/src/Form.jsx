import React, { useState } from "react";
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    builderName: "",
    projectName: "",
    contactPersonName: "",
    email: "",
    phone: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    builderName,
    projectName,
    contactPersonName,
    email,
    phone,
    interest,
  } = formData;

  const disable =
    !builderName || !projectName || !contactPersonName || !email || !phone || !interest || isSubmitting;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const url =
      "https://script.google.com/macros/s/AKfycbw0fK3154Pz4C_htuTYhMOAftEyiW0y3wg4xQfojzisKAPiCx3gfs_GpsxAQB_45oJJMg/exec";

    const formBody = new URLSearchParams(formData);

    try {
      await fetch(url, {
        method: "POST",
        body: formBody,
      });

      alert("Form submitted successfully!");
      setFormData({
        builderName: "",
        projectName: "",
        contactPersonName: "",
        email: "",
        phone: "",
        interest: "",
      });

      // ✅ Auto-download the specific PDF based on interest
      const pdfMap = {
        Glasses: "2025 Glasses Catalogue.pdf",
        Picture: "2025 Picture Frames.pdf",
        Swarovaski: "2025 Swarovski x Rosenthal Catalogue.pdf",
        "Tea set": "Tea Sets.pdf",
        Vases: "2025 Vases catalogue All Brands.pdf",
        "Dinner sets": "Dinner sets.pdf",
      };

      const selectedPdf = pdfMap[interest];

      if (selectedPdf) {
        const link = document.createElement("a");
        link.href = `/${selectedPdf}`;
        link.download = selectedPdf;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    } catch (error) {
      alert("Failed to submit. Try again.");
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="form-header">
          <p>Fill the form and get our <span>Catalogue</span> instantly!</p> <br />
        </div>

        <input
          name="builderName"
          placeholder="Builder Name"
          value={builderName}
          onChange={handleChange}
          required
        />
        <input
          name="projectName"
          placeholder="Project Name"
          value={projectName}
          onChange={handleChange}
          required
        />
        <input
          name="contactPersonName"
          placeholder="Contact Person Name"
          value={contactPersonName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
          required
        />
        <select
          name="interest"
          value={interest}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Your Catalogue --</option>
          <option value="Glasses">Glasses</option>
          <option value="Picture">Picture Frames</option>
          <option value="Swarovaski">Swarovaski</option>
          <option value="X Rosanthal">Tea Sets</option>
          <option value="Vases">Vases</option>
          <option value="Dinner sets">Dinner sets</option>
        </select>

        <button type="submit" disabled={disable}>
          {isSubmitting ? "Submitting..." : "Submit & Get Catalogue"}
        </button>
      </form>

      {/* ✅ Brand Logo Slider Section */}
      <div className="brand-slider">
        <div className="brand-track">
          <img src="/brand1.png" alt="Brand 1" />
          <img src="/brand2.avif" alt="Brand 2" />
          <img src="/brand3.webp" alt="Brand 3" />
          <img src="/brand4.png" alt="Brand 4" />
          <img src="/brand5.png" alt="Brand 5" />
        </div>
      </div>
    </>
  );
};

export default Form;
