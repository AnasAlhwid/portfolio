const Button = ({ className, id, text }) => {
    return (
        <a
            onClick={(e) => {
                const target = document.getElementById('projects');

                if(target && id) {
                    e.preventDefault(); // Prevent the browser to reload when the element is clicked.
                    const offset = window.innerHeight * 0.10; // Leave a bit of space at the top of the screen.

                    const top = (target.getBoundingClientRect().top + window.scrollY) - offset;

                    window.scrollTo({ top, behavior: 'smooth' });

                    window.history.pushState(null, '', '#projects');
                }
            }}
            className={`${className ?? ''} cta-wrapper`}
            href="#projects"
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/home/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    )
}
export default Button
