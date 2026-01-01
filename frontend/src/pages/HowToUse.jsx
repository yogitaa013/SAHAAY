import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import howToUseImage from "../assets/howtouse-banner.jpg"; // Add your banner in assets

function HowToUse() {
  const [language, setLanguage] = useState("en"); // "en" for English, "hi" for Hindi

  const steps = {
    en: [
      "Create an account using Register.",
      "Login securely.",
      "Browse legal & healthcare resources.",
      "Filter resources by category or state.",
      "Bookmark important resources for later.",
      "Click 'Visit Website' to contact NGOs.",
      "Sahaay respects your privacy and does not share your data."
    ],
    hi: [
      "पंजीकरण (Register) का उपयोग करके एक खाता बनाएँ।",
      "सुरक्षित रूप से लॉगिन करें।",
      "कानूनी और स्वास्थ्य संसाधनों (legal & healthcare) को ब्राउज़ करें।",
      "श्रेणी (Category) या राज्य (State) द्वारा संसाधनों को फ़िल्टर करें।",
      "महत्वपूर्ण संसाधनों को बाद में देखने के लिए बुकमार्क करें।",
      "एनजीओ (NGO) से संपर्क करने के लिए 'Visit Website' पर क्लिक करें।",
      "Sahaay आपकी गोपनीयता का सम्मान करता है और आपका डेटा साझा नहीं करता।"
    ]
  };

  return (
    <>
      <Navbar />
      <div className="page-container howto-page">
        
        {/* Banner */}
        <div className="howto-banner">
          <img src={howToUseImage} alt="How To Use Banner" />
          <h1>How To Use Sahaay</h1>
        </div>

        {/* Language Toggle */}
        <div className="language-toggle">
          <button 
            className={language === "en" ? "active" : ""} 
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <button 
            className={language === "hi" ? "active" : ""} 
            onClick={() => setLanguage("hi")}
          >
            हिन्दी
          </button>
        </div>

       <div
  style={{
    maxWidth: "600px",
    margin: "30px auto", // centers the block horizontally
    padding: "20px",
    backgroundColor: "#f0f4f8", // light block color
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
  }}
>
  {steps[language].map((step, idx) => (
    <p key={idx} style={{ margin: "12px 0", fontSize: "18px", lineHeight: "1.6" }}>
      {idx + 1}. {step}
    </p>
  ))}
</div>
      </div>
      <Footer />
    </>
  );
}

export default HowToUse;
