import React, {useRef} from 'react'
import { gsap  } from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {useFrameSize} from "../hooks/useFrameSize.js";
import {projects} from "../constants/index.js";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

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
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3 * index,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%', // Start when the top of the card is near the bottom of the screen.
                    },
                    onComplete: () => {
                        gsap.set(card, { clearProps: 'transform' }); // Remove inline transform
                    },
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []); // Dependency array. Means run only once when a component mounts.

    return (
        <div>
            <TitleHeader
                title="Projects"
                sub="🖥️ Top Notch Projects"
            />

            <div className="projects-layout section-padding-y" ref={sectionRef}>
                {projects.map((card) => (
                    <div
                        className="project-card card-layout"
                        key={card.alt}
                        ref={addToRefs} // Dynamic refs.
                    >

                        {/* TOP: Image */}
                        <div
                            className="project-card-image **:select-none"
                            ref={frameRef}
                            onLoad={updateFrameSize}
                        >
                            {frameSize.width > 0 && frameSize.height > 0 && (
                                <div
                                    className="w-full h-full flex justify-center items-center"
                                >
                                    {/* Image 2 */}
                                    <div className="-rotate-6 translate-y-2 translate-x-1">
                                        <img
                                            src={card.imgPath[1].imgVersion}
                                            alt={card.alt}
                                            draggable="false"
                                            className="border border-antique-brass"
                                            style={{
                                                width: `${frameSize.width * card.imgPath[1].size}px`,
                                                height: "auto",
                                            }}
                                        />
                                    </div>

                                    {/* Image 1 */}
                                    <div className="rotate-6 -translate-y-2 -translate-x-1 z-1">
                                        <img
                                            src={card.imgPath[0].imgVersion}
                                            alt={card.alt}
                                            draggable="false"
                                            className="border border-antique-brass"
                                            style={{
                                                width: `${frameSize.width * card.imgPath[0].size}px`,
                                                height: "auto",
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom: Card content */}
                        <div className="project-card-content">

                            <div>
                                {/* Card title */}
                                <p className="project-card-title">{card.title}</p>

                                {/* Card description */}
                                <h5 className="project-card-description">{card.description}</h5>
                            </div>

                            {/* Card content: BOTTOM PART*/}
                            <div className="project-card-content-bottom **:select-none">

                                {/* Card tags */}
                                <div className="project-card-tags">
                                    {card.tags.map((tag, index) => (
                                        <span className="project-card-tag" key={index}>
                                    {tag}
                                </span>
                                    ))}
                                </div>

                                <div className="project-card-divider"/>

                                {/* Card footer */}
                                <div className="project-card-footer">
                                    <a
                                        className="project-card-button"
                                        href={card.repos}
                                        target="_blank"
                                    >
                                        <img
                                            src="/images/footer/github.png"
                                            alt="GitHub"
                                            draggable="false"
                                            className="z-2"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects
