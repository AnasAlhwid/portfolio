import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {education} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Must register the plugin.

const Education = () => {

    useGSAP(() => {
        // Moving the card from left to right.
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            })
        })

        // The timeline animation.
        gsap.to('.timeline', {
            transformOrigin: "bottom bottom",
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".timeline",
                start: 'top center',
                end: 'bottom center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress
                    })
                }
            }
        })

        // Fading the right text
        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%'
                }
            })
        })
    }, []);

    return (
        <div>
            <TitleHeader
                title="Education"
                sub="📖 My Educational Journey"
            />

            <div className="education-layout section-padding-y">
                {education.map((card, index) => (
                    /* Each Education Total Info */
                    <div key={card.title} className="education-card-wrapper">

                        {/* Glow Card */}
                        <div className="xl:w-2/6 z-3">
                            <GlowCard card={card} index={index}/>
                        </div>

                        {/* Timeline and Information */}
                        <div className="xl:w-4/6">

                            {/* Timeline */}
                            <div className="timeline-wrapper **:select-none">
                                <div className="timeline z-2"/>
                                <div className="gradient-line z-0"/>
                            </div>

                            {/* Content Wrapper */}
                            <div className="expText z-1 flex gap-5 md:gap-10 xl:gap-15 relative">

                                {/* Timeline's Logo */}
                                <div className="timeline-logo *:select-none">
                                    <img
                                        src={card.logoPath}
                                        alt="logo"
                                        draggable="false"
                                        className="size-4 md:size-12 object-contain"
                                    />
                                </div>

                                {/* Title, Date, List Title, and Learnings */}
                                <div className="cursor-default">
                                    <h3 className="text-antique-brass">{card.title}</h3>
                                    <h4 className="py-5 text-white-50">
                                        🗓️{card.date}
                                    </h4>
                                    <h4 className="text-antique-brass italic">
                                        Key Learnings
                                    </h4>
                                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white">
                                        {card.learnings.map((learning) => (
                                            <li key={learning}>
                                                <h4>{learning}</h4>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Education
