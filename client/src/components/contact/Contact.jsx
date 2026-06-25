import { FaGithub, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { useState } from "react";
import "./contact.css";
// `${import.meta.env.VITE_API_URL}/api/contact`;
// ("https://portfolio-2026-novo.onrender.com/api/contact");
// ("http://localhost:3000/api/contact");
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // setSuccess(false);
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setButtonText("Sending...");

    try {
      const res = await fetch(
        "https://portfolio-2026-novo.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        },
      );

      if (res.ok) {
        setSuccess(true);
        setButtonText("✓ Sent!");

        // reset form after animation starts
        setTimeout(() => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, 1200);

        // hide success UI after a bit
        setTimeout(() => {
          setSuccess(false);
          setButtonText("Send Message");
        }, 2500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Let’s Work Together</h2>

          <p>
            I’m currently open to junior web developer roles, internships, and
            freelance opportunities.
          </p>

          <div className="contact-details">
            <p>📧 ecmabta8@gmail.com</p>
            <p>📍 San Fernando, Pampanga, Philippines</p>
            <p>💼 Available for hire / train</p>
          </div>

          <div className="contact-social">
            <a href="https://github.com/eiman8/">
              <FaGithub fontSize={"1.5rem"} />
            </a>
            <a href="https://www.linkedin.com/in/eimanson-maybituin-a3a5a8157/">
              <FaLinkedin fontSize={"1.5rem"} />
            </a>
            <a href="https://www.facebook.com/eimanson.maybituin.9/">
              <FaSquareFacebook fontSize={"1.5rem"} />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <div className="form-error">{error}</div>}
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              if (error) setError("");
            }}
          />

          <textarea
            placeholder="Tell me about your project..."
            rows="18"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (error) setError("");
            }}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={success ? "sent-button" : ""}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                <span>Sending...</span>
              </>
            ) : (
              buttonText
            )}
          </button>

          {/* {success && (
            <div className="success-overlay">
              <div className="checkmark-wrapper">
                <svg className="checkmark" viewBox="0 0 52 52">
                  <circle
                    className="checkmark-circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark-check"
                    fill="none"
                    d="M14 27l7 7 17-17"
                  />
                </svg>

                <p>Message Sent!</p>
              </div>
            </div>
          )} */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
