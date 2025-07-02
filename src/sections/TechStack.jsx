import React, {useRef} from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {techStack} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";
import {useFrameSize} from "../hooks/useFrameSize.js";

const TechStack = () => {

    const sectionRef = useRef(null); // Referencing the projects section.
    const cardRefs = useRef([]); // Referencing the 1st project.

    const { frameRef, frameSize, updateFrameSize } = useFrameSize(); // Custom hook.

    // Clear and repopulate refs on render
    cardRefs.current = []

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el)
        }
    }

    useGSAP(() => {
        gsap.fromTo('.tech-card', {y: 50, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2, // The duration between each element.
            scrollTrigger: {
                trigger: '#skills', // Gets triggered once we reach the `skills` section.
                start: 'top center' // Start once reaching the `top center` of the screen.
            }
        });
    })

    return (
        <div>
            <TitleHeader
                title="My Preferred Tech Stack"
                sub="🤝 The Skills I Bring to the Table"
            />

            <div className="tech-layout py-12 lg:pt-16 lg:pb-10" ref={sectionRef}>
                {techStack.map((icon) => (
                    <div
                        className="tech-card card-layout **:select-none"
                        key={icon.name}
                        ref={addToRefs} // Dynamic refs.
                    >

                        {/* TOP: Image */}
                        <div
                            className="tech-card-image"
                            ref={frameRef}
                            onLoad={updateFrameSize}
                        >
                            {frameSize.width > 0 && frameSize.height > 0 && (
                                <img
                                    src={icon.imgPath}
                                    alt={icon.name}
                                    draggable="false"
                                    style={{
                                        width: "auto",
                                        height: `${frameSize.height * 1.15}px`,
                                    }}
                                />
                            )}
                        </div>

                        {/* Bottom: Card content */}
                        <div className="tech-card-content">

                            {/* Card title */}
                            <div className="tech-card-title">
                                <p className="hover-text">&nbsp;{icon.name}&nbsp;</p>
                                <span className="hover-line"></span>
                            </div>

                            {/* Card tags */}
                            <div className="tech-card-tags">
                                {icon.tags.map((tag, index) => (
                                    <span className="tech-card-tag" key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack
