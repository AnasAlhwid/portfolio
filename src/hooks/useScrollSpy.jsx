import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useScrollSpy = ({ navHeight }) => {
    const marginTop = navHeight ? -navHeight : "0px";

    const [homeRef, homeInView, homeEntry] = useInView({
        rootMargin: `${marginTop}px 0px -99% 0px`,
        threshold: 0,
    });
    const [projectsRef, projectsInView, projectsEntry] = useInView({
        rootMargin: `${marginTop}px 0px -99% 0px`,
        threshold: 0,
    });
    const [educationRef, educationInView, educationEntry] = useInView({
        rootMargin: `${marginTop}px 0px -99% 0px`,
        threshold: 0,
    });
    const [skillsRef, skillsInView, skillsEntry] = useInView({
        rootMargin: `${marginTop}px 0px -99% 0px`,
        threshold: 0,
    });
    const [contactRef, contactInView, contactEntry] = useInView({
        rootMargin: `${marginTop - 50}px 0px -99% 0px`,
        threshold: 0,
    });

    useEffect(() => {
        const visibilityMap = [
            { id: "home", inView: homeInView, entry: homeEntry },
            { id: "projects", inView: projectsInView, entry: projectsEntry },
            { id: "education", inView: educationInView, entry: educationEntry },
            { id: "skills", inView: skillsInView, entry: skillsEntry },
            { id: "contact", inView: contactInView, entry: contactEntry },
        ];

        for (const section of visibilityMap) {
            if (section.inView && section.entry?.isIntersecting) {
                window.history.replaceState(null, "", `#${section.id}`);
                break;
            }
        }
    }, [
        homeInView,
        projectsInView,
        educationInView,
        skillsInView,
        contactInView,
        homeEntry,
        projectsEntry,
        educationEntry,
        skillsEntry,
        contactEntry
    ]);

    return {
        homeRef,
        projectsRef,
        educationRef,
        skillsRef,
        contactRef,
    };
};
