import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { toast } from "react-toastify";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
      setShowMessage(true);
      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully 🎉");
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
      toast.error("Failed to send message ❌. Please try again later.");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 ">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit " disabled={loading} >
                  <div className={`cta-button group ${loading && 'opacity-50  cursor-not-allowed'}`}>
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
        {showMessage && (
          <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-black-100 p-6 rounded-xl z-50">
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-4xl font-extrabold rounded-4xl bg-green-400 text-center w-16 h-16 flex items-center justify-center">
                ✔
              </h1>
              <h2>Thank you for contacting us.</h2>
              <p>
                We appreciate that you've taken the time to reach out to us.
              </p>
              <p>We'll get back to you very soon!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
