import React, {useRef} from 'react'

const GlowCard = ({ card, index }) => {
    const cardRefs = useRef([]); // At the start it will be empty ref

    const handleMouseMove = (index) => (e) => {
        // Get which card the mouse is on.
        const card = cardRefs.current[index];
        if(!card) return; // If the card exist then exit.

        // Get the mouse position relative to the card.
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Calc the angle from the center of the card.
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        // Adjust the angle.
        angle = (angle + 360) % 360;

        // Set the angle as a CSS variable.
        card.style.setProperty('--start', angle + 60);
    }

    return (
        <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-layout timeline-card rounded-xl p-6 md:p-10">
            <div className="mb-5">
                <h4 className="text-white-50">{card.about}</h4>
            </div>
            <div className="flex flex-col items-center **:select-none">
                <img
                    src={card.imgPath}
                    alt={card.title}
                    draggable="false"
                    className="w-[40%] xl:w-full"
                    style={{
                        minWidth: `${card.imgMinWidth}rem`,
                        maxWidth: `${card.imgMaxWidth}rem`,
                    }}
                />
            </div>
        </div>
    )
}
export default GlowCard
