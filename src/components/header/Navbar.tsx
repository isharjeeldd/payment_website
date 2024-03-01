import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { container } from "../../styles";
import "./nav.css"

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            if (window.scrollY > 0) {
                document.querySelector('#navigationBar')?.classList.add('onScrollNav');
            }
            else {
                document.querySelector('#navigationBar')?.classList.remove('onScrollNav');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="navigationBar" className="fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 z-[999] h-fit w-full bg-opacity-30">
            <div className={`${container}`}>
                <div className={`w-full flex py-4 justify-between items-center navbar`}>
                    <img src={logo} alt="hoobank" className={`w-[150px] h-[50px] transition-all ease-in-out duration-300 ${isScrolled ? "onScrollLogo" : ""}`} />
                    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle(!toggle)}
                        />

                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                        >
                            <ul className="list-none flex justify-end items-start flex-1 flex-col">
                                {navLinks.map((nav, index) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                            } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                        onClick={() => setActive(nav.title)}
                                    >
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;