"use client";
import React from "react";

function Contact() {
  return (
    <section className="bg-black relative min-h-screen flex items-center justify-center">
      <div
        id="contact"
      >
        <h1 className="text-3xl text-white font-bold underline">
          Contact Page
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 z-10">
        <img src="/bg.png" alt="" />
      </div>
    </section>
  );
}

export default Contact;
