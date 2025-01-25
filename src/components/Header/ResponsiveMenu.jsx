import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Residencies",
    link: "/",
  },
  {
    id: 2,
    title: "Our Values",
    link: "#",
  },
  {
    id: 3,
    title: "Contact Us",
    link: "#",
  },
  {
    id: 4,
    title: "Get Started",
    link: "#",
  },
];

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="responsiveMenu md:hidden"
        >
          <div className="flex flex-col justify-center absolute right-0 w-[300px] px-7 py-6 bg-black gap-5 rounded-bl-2xl z-20">
            <ul className="flex flex-col justify-center items-center gap-5 text-secondary">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className=" py-1 px2  hover:text-blue">
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
            <button className="secondary-btn item">Contact</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
