import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    phone: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_88m7xyr",
        "template_h2k8kfg",
        form,
        "b0qWNb7WdlaScudB_"
      )
      .then(() => {
        alert("Message Sent ✅");
        setForm({
          from_name: "",
          phone: "",
          from_email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed ❌ Try again");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-light mb-10 border-b pb-4">
          get in touch
        </h2>

        <form onSubmit={sendEmail} className="space-y-6">
          
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              name="from_name"
              placeholder="your name"
              value={form.from_name}
              onChange={handleChange}
              required
              className="border-b border-gray-400 p-2 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={form.phone}
              onChange={handleChange}
              className="border-b border-gray-400 p-2 outline-none"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="email"
              name="from_email"
              placeholder="email"
              value={form.from_email}
              onChange={handleChange}
              required
              className="border-b border-gray-400 p-2 outline-none"
            />

            <textarea
              name="message"
              placeholder="tell me about your idea or ask a question"
              value={form.message}
              onChange={handleChange}
              rows="1"
              required
              className="border-b border-gray-400 p-2 outline-none resize-none"
            />
          </div>

          {/* Recaptcha + Button */}
          <div className="flex items-center justify-between mt-6">
            
            {/* Fake Recaptcha UI */}
            <div className="border p-4 w-72 flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-sm">I'm not a robot</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="border px-8 py-3 hover:bg-black hover:text-white transition"
            >
              {loading ? "sending..." : "get in touch"}
            </button>
          </div>
        </form>

        {/* Contact Info Bottom */}
        {/* Contact Info Bottom */}
<div className="grid md:grid-cols-4 gap-10 mt-20 text-sm">
  
  <div>
    <p className="font-semibold">location</p>
    <p>Andhra Pradesh, Vijayawada</p>
  </div>

  <div>
    <p className="font-semibold">email</p>
    <a 
      href="mailto:srpht4700@gmail.com"
      className="hover:underline"
    >
      srpht4700@gmail.com
    </a>
  </div>

  <div>
    <p className="font-semibold">phone</p>
    <a 
      href="tel:+916304427432"
      className="hover:underline"
    >
      +91 63044 27432
    </a>
  </div>

  <div>
    <p className="font-semibold">instagram</p>
    <a
      href="https://instagram.com/shotbysr_23"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline block"
    >
      shotbysr_23
    </a>

    <a
      href="https://instagram.com/sr_photography_23"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline block"
    >
      sr_photography_23
    </a>
  </div>

</div>

      </div>
    </section>
  );
}