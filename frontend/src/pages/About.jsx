import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBanner from "../assets/about-image.jpg"; // Add banner image in src/assets
import supportImage from "../assets/support.webp"; // Example image
import legalImage from "../assets/legal.webp";
import healthcareImage from "../assets/healthcare.jpg";

function About() {
  return (
    <>
      <Navbar />
      <div className="page-container about-page">
        
        {/* Banner */}
        <div className="about-banner">
          <img src={aboutBanner} alt="About Sahaay Banner" />
          <h1>About Sahaay 🌈</h1>
        </div>

        {/* Who We Are */}
        <div className="about-content">
          <img className="about-image" src={supportImage} alt="Support" />
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              <strong>Sahaay</strong> is a safe and inclusive platform dedicated to
              transgender and gender-diverse individuals in India. We provide easy access 
              to verified legal, healthcare, and social support resources.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower the transgender community by bridging the gap 
              between individuals and trusted organizations, helping everyone access 
              the services they deserve with dignity and safety.
            </p>
          </div>
          <img className="about-image" src={legalImage} alt="Legal Support" />
        </div>

        {/* Our Services */}
        <div className="about-content">
          <img className="about-image" src={healthcareImage} alt="Healthcare" />
          <div className="about-text">
            <h2>Our Services</h2>
            <ul>
              <li>✔ Verified legal assistance for gender & name changes</li>
              <li>✔ Access to transgender-friendly healthcare providers</li>
              <li>✔ Information about social welfare schemes and NGOs</li>
              <li>✔ Easy-to-use mobile & desktop-friendly interface</li>
              <li>✔ Bookmark resources for quick access</li>
            </ul>
          </div>
        </div>

        {/* How We Help */}
        <div className="about-content">
          <div className="about-text">
            <h2>How We Help</h2>
            <p>
              Sahaay ensures all users can navigate the platform with confidence. 
              Our simple design, large fonts, and clear categories make it easy for 
              everyone to find the help they need, from legal advice to healthcare support.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-content">
          <h2>Join Sahaay Today</h2>
          <p>
            Whether you're seeking guidance or want to share verified resources, 
            Sahaay welcomes you. Together, we can create a more inclusive world 🌈
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
