import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <section
      className="relative h-[40vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/pBTr752X/istockphoto-652195062-612x612.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <Container className="relative z-10  text-start text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-start">
          Have questions or need help? We’re here to support you anytime.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold">
          Get in Touch
        </button>
      </Container>
    </section>
  );
};

export default Contact;
