import React from 'react'

// A component for navigating to a section.
const SectionNav = ( { name, link, styles, children } ) => {
    return (
        <a
            onClick={(e) => {
            const target = document.getElementById(name.toLowerCase());

            if(target) {
                e.preventDefault(); // Prevent the browser to reload when the element is clicked.
                const offset = window.innerHeight * 0.10; // Leave a bit of space at the top of the screen.

                const top = (target.getBoundingClientRect().top + window.scrollY) - offset;

                window.scrollTo({ top, behavior: 'smooth' });

                window.history.pushState(null, '', link);
            }
        }}
            className={styles}
            href={link}
        >
            {children}
        </a>
    )
}
export default SectionNav
