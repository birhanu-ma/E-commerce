import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import MapEmbed from "../components/MapEmbed";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Form from '../components/Form'

const Contact = () => {
  return (
    <section>
      <Navigation />
      <div className="relative flex">
        <img className="relative z-0 h-70  w-full " src="/img/about/banner.png" alt="" />
        <div className="absolute inset-0 flex justify-center items-center flex-col z-5">
          <h1 className="text-white text-[clamp(1rem,5vw,3rem)]">Let Us Talk</h1>
          <p className="text-white text-[clamp(1rem,2vw,1.5rem)]">Leave a message we love hear from you</p>
        </div>
      </div>

      <div className="flex flex-col mb-20 md:flex-row mx-10">
        <div className="w-full flex flex-col px-5 shadow-lg h-80  my-10 mr-10 ">
          <h1 className="text-[clamp(1rem,5vw,3rem)]">Get In Touch</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <span className="inline-flex items-center space-x-2 my-2">
            <FaPhoneAlt />
            <p className="m-0">+251 912 34 56 78</p>
          </span>
          <span className="inline-flex items-center space-x-2 my-2">
            <FaEnvelope />
            <p className="m-0">birdsfalkdl@afoid.c0m</p>
          </span>
          <span className="inline-flex items-center space-x-2 my-2">
            <IoLocation />
            <p className="m-0">
              8465 Beahan Roads, Kaydencester, Louisiana - 59129, Indonesia
            </p>
          </span>
          <span className="inline-flex items-center space-x-2 my-2">
            <FaPhoneAlt />
            <p className="m-0">Get In Touch</p>
          </span>
        </div>
        <MapEmbed />
      </div>
      <div className="text-[clamp(1rem,2vw,1.5rem)] px-15">
        <h1>Leave a message we love hear from you</h1>
      </div>

      <Form/>
      <NewsLetter/>
      <Footer/>
    </section>
  );
};

export default Contact;
