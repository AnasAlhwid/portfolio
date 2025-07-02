import React from 'react'
import {credit, social} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer **:select-none">
            <div className="socials">
                {social.map((img) =>
                    // Using ternary.
                    img.name === 'github' ? (
                        // Wrap the `|` and the `<a>` tag without adding an extra DOM element.
                        <React.Fragment key={img.url}>
                            <span>|</span>
                            <a
                                className="icon"
                                target="_blank"
                                href={img.url}
                            >
                                <img src={img.imgPath} alt={img.name} />
                            </a>
                        </React.Fragment>
                    ) : (
                        <a
                            className="icon"
                            target="_blank"
                            href={img.url}
                            key={img.url}
                        >
                            <img
                                src={img.imgPath}
                                alt={img.name}
                                draggable="false"
                            />
                        </a>
                    )
            )}
            </div>

            <div className="flex flex-col justify-center">
                <p className="credit">
                    © {new Date().getFullYear()} {credit} | All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer
