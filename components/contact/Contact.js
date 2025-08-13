"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../TitleHeader";
import ContactExperience from "../models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-5 flex justify-center px-5 md:px-10 md:mt-40 mt-20 md:mb-52">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-16">
          {/* Left Form */}
          <div className="xl:col-span-5">
            <div className="flex justify-center items-center border border-gray-400 bg-white/5 backdrop-blur-sm rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your name?"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 backdrop-blur-md text-white border border-gray-700bg-[#282828] border-[#414141]
 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email address?"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 backdrop-blur-md text-white border border-gray-700bg-[#282828] border-[#414141]
 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 backdrop-blur-md text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-4 text-white rounded-lg bg-white/5 backdrop-blur-md flex justify-center items-center relative cursor-pointer overflow-hidden group"
                >
                  <div className="absolute -right-10 origin-center top-1/2 -translate-y-1/2 
                    w-[120%] h-[120%] group-hover:w-10 group-hover:h-10 group-hover:right-10
                    rounded-full bg-[linear-gradient(135deg,_#6DB5D6,_#2D7373,_#012D2D)] transition-all duration-500" />
                  <p className="z-10">{loading ? "Sending..." : "Send Message"}</p>
                  <div className="group-hover:bg-[linear-gradient(135deg,_#6DB5D6,_#2D7373,_#012D2D)] size-10 rounded-full absolute right-10 top-1/2 
                    -translate-y-1/2 flex justify-center items-center overflow-hidden">
                    <img src="/arrow-down.svg" alt="arrow" />
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Right Model */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
