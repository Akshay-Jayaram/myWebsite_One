import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { github, ln } from "../assets";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_d0pt3mc',
        'template_li9vywg',
        {
          from_name: form.name,
          to_name: "Akshay Jayaram",
          from_email: form.email,
          to_email: "akshayj1814@gmail.com",
          message: form.message,
        },
        'M2T6AgSkHAz1KMSf7'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Open to work</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='w-full flex'>
          <br className='sm:block hidden' />
          Actively seeking full-time positions.
        </div>

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover space-x-8 pt-5 pr-5'>
          <div
            onClick={() => window.open("https://www.linkedin.com/in/akshay-jayaram/", "_blank")}
            className='bg-[#7976D5] hover:bg-violet-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={ln}
              alt='source code'
              className='w-1/3 h-1/3 md:w-1/2 md:h-1/2 object-contain'
            />
          </div>
          <div
            onClick={() => window.open("https://github.com/Akshay-Jayaram", "_blank")}
            className='bg-[#7976D5] hover:bg-violet-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/3 h-1/3 md:w-1/2 md:h-1/2 object-contain'
            />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='relative mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Type your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Type your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#7976D5] hover:bg-violet-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
