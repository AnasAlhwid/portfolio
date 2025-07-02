import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
    const formRef = useRef(null);
    const [sent, setSent] = useState("static");
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSent("loading");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // The message has been sent successfully.
            setSent("sent");

            // Reset form and stop loading
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error); // Optional: show toast
            setSent("error");
        }
        finally {
            // Delay resetting the state back to "static" after 2 seconds (2000ms)
            setTimeout(() => {
                setSent("static");
            }, 2000);
        }
    };

    const sentText = {
        static: "Send Message",
        loading: "Sending...",
        sent: "Message Sent",
        error: "Error!",
    };
    const btnStyle = {
        static: "form-static-btn",
        loading: "form-loading-btn",
        sent: "form-sent-btn",
        error: "form-error-btn",
    };

    return (
        <div>
            <TitleHeader
                title="Get in Touch – Let’s Connect"
                sub="💬 Have questions or ideas? Let’s talk! 🚀"
            />
            <div className="grid grid-cols-1 gap-3 xl:gap-0 xl:grid-cols-12 pt-12 lg:pt-16">
                <div className="xl:col-span-5 min-h-96">
                    <div className="w-full h-full card-layout rounded-xl p-4 md:p-8">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="form-layout"
                        >
                            <div className="input-group">
                                <input
                                    className={`input ${form.name ? 'filled' : ''}`}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                />
                                <label htmlFor="name" className="user-label">Name</label>
                            </div>

                            <div className="input-group">
                                <input
                                    className={`input ${form.email ? 'filled' : ''}`}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                />
                                <label htmlFor="email" className="user-label">Email</label>
                            </div>

                            <div className="input-group">
                                <textarea
                                    className={`input resize-none ${form.message ? 'filled' : ''}`}
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                />
                                <label htmlFor="email" className="user-label">Message</label>
                            </div>

                            <button className={`form-submit-btn ${btnStyle[sent]} **:select-none`} type="submit">
                                <div className="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                                <span>{sentText[sent]}</span>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="xl:col-span-7 min-h-96 card-layout rounded-xl xl:ml-5">
                    <div className="bg-[#c1a362] w-full h-full hover:cursor-grab rounded-xl overflow-hidden">
                        <ContactExperience />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;