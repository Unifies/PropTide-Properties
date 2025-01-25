import React from "react";
import LogoPng from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import "../../index.css";

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

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="px-4 md:px-20 bg-black text-white w-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-between items-center flex-wrap py-5 bg-transparent text-secondary"
      >
        <img className="cursor-pointer" src={LogoPng} alt="Real Estate Logo" />

        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5 text-secondary">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-1 px2 hover:text-blue"
                >
                  {menu.title}
                </a>
              </li>
            ))}

            <button className="primary-btn bg-gradient-to-r from-[#4066ff] to-[#2949c6]">
              Contact
            </button>
          </ul>
        </div>

        {/* Responsive Mobile Hamburger Menu Section */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl text-secondary cursor-pointer" />
        </div>
      </motion.div>

      {/* Menu Section */}
      <ResponsiveMenu open={open} />
    </nav>
  );
};

export default Header;
