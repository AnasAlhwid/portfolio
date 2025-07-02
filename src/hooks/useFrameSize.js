// useFrameSize.js
import { useRef, useState, useEffect } from "react";

export function useFrameSize() {
    const frameRef = useRef(null);
    const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });

    const updateFrameSize = () => {
        if (frameRef.current) {
            const rect = frameRef.current.getBoundingClientRect();
            setFrameSize({
                width: rect.width,
                height: rect.height,
            });
        }
    };

    useEffect(() => {
        updateFrameSize();
        window.addEventListener("resize", updateFrameSize);
        return () => window.removeEventListener("resize", updateFrameSize);
    }, []);

    return { frameRef, frameSize, updateFrameSize };
}
