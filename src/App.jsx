import Home from "./sections/Home.jsx";
import Projects from "./sections/Projects.jsx";
import NavBar from "./components/NavBar.jsx";
import SoftSkills from "./sections/SoftSkills.jsx";
import Education from "./sections/Education.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import {useEffect, useState} from "react";
import { useScrollSpy } from "./hooks/useScrollSpy.jsx";

const App = () => {

    // Handle NavBar height.
    const [navHeight, setNavHeight] = useState(0);

    const {
        homeRef,
        projectsRef,
        educationRef,
        skillsRef,
        contactRef,
    } = useScrollSpy({ navHeight });

    // Prevent image right click for saving.
    useEffect(() => {
        const handleContextMenu = (e) => {
            if (e.target.tagName === 'IMG') e.preventDefault();
        };
        window.addEventListener('contextmenu', handleContextMenu);
        return () => window.removeEventListener('contextmenu', handleContextMenu);
    }, []);

    return (
        <>
            {/* Navigation bar */}
            <NavBar onHeightChange={setNavHeight} />

            {/* Website's intro */}
            <section id="home" ref={homeRef}>
                <Home navHeight={navHeight} />
            </section>

            {/* Projects showcase */}
            <section id="projects" ref={projectsRef}>
                <Projects />
            </section>

            {/* Education showcase */}
            <section id="education" ref={educationRef}>
                <Education />
            </section>

            {/* Technical skills showcase */}
            <section id="skills" ref={skillsRef}>
                <TechStack />
            </section>

            {/* Soft skill showcase */}
            <section>
                <SoftSkills />
            </section>

            {/* Contact Section */}
            <section id="contact" ref={contactRef}>
                <Contact />
            </section>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default App
