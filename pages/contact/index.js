/* eslint-disable */
// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("vishal");

  const handleSubmit = (e) => {
    try {
      axios
        .post(`http://localhost:3000/api/hello`, {
          name: name,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-30 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Do you wanna go <span className=" text-accent">Coffee.</span> me
            then write Yes below input box
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* group */}
            <form className="flex gap-x-6 w-full">
              <input
                type="text"
                value={name}
                placeholder="yes/no"
                className="input"
                onChange={(event) => setName(event.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
                className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group-[]:"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                  let's talk{" "}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300  absolute text-[22px]" />
              </button>
            </form>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
