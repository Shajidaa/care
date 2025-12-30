import React from "react";
import Container from "./Container";
import CBtn from "../Buttons/CBtn";

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
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl my-3 text-start">
          Have questions or need help? We’re here to support you anytime.
        </p>

        <CBtn href={"contact"} buttonText="Get in Touch"></CBtn>
      </Container>
    </section>
  );
};

export default Contact;
