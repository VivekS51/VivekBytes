import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;
        let width = 0;

        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3, // Tilt slightly to show more
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [20.5937, 78.9629], size: 0.1 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005; // Slower rotation
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        setTimeout(() => canvasRef.current.style.opacity = '1');
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full h-full pb-10">
            <canvas
                ref={canvasRef}
                style={{ width: "100%", height: "100%", maxWidth: "600px", aspectRatio: 1, opacity: 0, transition: 'opacity 1s ease' }}
            />
        </div>
    );
}
