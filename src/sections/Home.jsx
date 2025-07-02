import {personalImg, homeText, homeImg, homeSlider} from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {useFrameSize} from "../hooks/useFrameSize.js";

const Home = ({ navHeight }) => {

    const { frameRef, frameSize, updateFrameSize } = useFrameSize(); // Custom hook.

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo('.home-text h1, .home-text h2, .home-text h3',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.5,
                ease: 'power2.inOut'
            }
        )

        tl.fromTo('.home-button',
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut'
            }
        )

        tl.fromTo('.home-figure',
            {
                x: 50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut'
            }
        )
    })

    return (
        <div
            className="home-layout **:select-none"
            style={{
                // Fit The `Home` layout to (100vh - navbar).
                marginTop: navHeight,
                height: `calc(100dvh - ${navHeight}px)`,
            }}
        >
            <div className="absolute size-full top-0 -left-0">
                <img
                    src={homeImg.url}
                    alt={homeImg.alt}
                    draggable="false"
                    className="w-[70%] opacity-20 mask-radial-from-80% mask-r-from-20% mask-b-from-20%"
                />
            </div>

            {/* LEFT | TOP: Text, Text Slider, and Button */}
            <header className="home-header">
                <div className="home-text">
                    <h1>
                        {homeText.name}
                    </h1>
                    <h2>
                        {homeText.title}
                    </h2>
                    <h2 className="slide-wrapper">
                        <span>AKA</span>
                        <span className="slide">
                            <span className="wrapper">
                                {homeSlider.map((word) => (
                                    <span
                                        key={word.text}
                                        className="flex items-center gap-1 pb-3">
                                        <img src={word.imgPath} alt={word.text} />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h2>
                </div>
                <Button id="button" text="View Projects" className="home-button"/>
            </header>

            {/* RIGHT | BOTTOM: Image */}
            <figure className="home-figure">
                <div className="galaxy-card" ref={frameRef} onLoad={updateFrameSize}/>

                {/* Render only if frame size is ready */}
                {frameSize.width > 0 && frameSize.height > 0 && (
                    <div
                        className="galaxy-card-content"
                        style={{
                            width: `${frameSize.width * 0.95}px`,
                            height: `${frameSize.height * 0.95}px`,
                        }}
                    >
                        <div className="z-1 prevent-img">
                            <img
                                src={personalImg}
                                alt="Personal Photo"
                                draggable="false"
                                className="object-cover"
                                style={{
                                    width: `${frameSize.width}px`,
                                    height: `${frameSize.height}px`,
                                    filter: "brightness(1.1) contrast(1.2) saturate(0) invert(11%) sepia(15%)"
                                }}
                            />
                        </div>
                    </div>
                )}
            </figure>
        </div>
    )
}
export default Home
