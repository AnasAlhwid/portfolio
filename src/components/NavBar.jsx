import {logo, navLinks} from "../constants/index.js";
import React, {useCallback, useEffect, useRef, useState} from "react";
import SectionNav from "./SectionNav.jsx";

const NavBar = ({ onHeightChange }) => {

    // For knowing when it's been scrolled.
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    const updateHeight = useCallback(() => {
        if (navRef.current && typeof onHeightChange === 'function') {
            const rect = navRef.current.getBoundingClientRect();
            const height = rect.bottom; // From top of viewport to bottom of nav
            onHeightChange(height); // Send height from top to bottom
        }
    }, [onHeightChange]);

    // At the start or when the component get mounted.
    useEffect(() => {
        const handleScroll =  () => {
            setScrolled(window.scrollY > 10);
        }
        const handleResize = () => {
            updateHeight(); // update height on resize
        };

        // Add event listener to the window.
        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleResize);

        // Initial update
        updateHeight();

        // Cleaning the event listener.
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener("resize", handleResize);
        }
    }, [updateHeight]);

    return (
        <header
            className={`navbar ${scrolled ? `scrolled` : `not-scrolled`} **:select-none`}
            ref={navRef}
        >
            <div className="inner">
                    <a className="logo" href="#home">
                        <img
                            src={logo.url}
                            alt={logo.alt}
                            draggable="false"
                        />
                    </a>

                <nav className="desktop"> {/* Only appears in desktop */}
                    <ul>
                        {navLinks.map(({ link, name }) => (

                            <li key={name} className="group">

                                {/* NavBar List */}
                                <SectionNav name={name} link={link}>
                                    <div>
                                        <span>{name}</span>
                                        <span className="underline"/>
                                    </div>
                                </SectionNav>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button */}
                <SectionNav name="contact" link="#contact" styles="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </SectionNav>
            </div>
        </header>
    )
}
export default NavBar
