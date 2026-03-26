import { useEffect, useRef } from "react";

export default function ParticlesBackground() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        for (let i = 0; i < 90; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                size: Math.random() * 2
            });
        }

        function animate() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.fillStyle = "#00ffd5";

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

            });

            for (let i = 0; i < particles.length; i++) {

                for (let j = i + 1; j < particles.length; j++) {

                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {

                        ctx.strokeStyle = "rgba(0,255,213,0.15)";
                        ctx.lineWidth = 1;

                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();

                    }

                }

            }

            requestAnimationFrame(animate);

        }

        animate();

    }, []);

    return (

        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1
            }}
        />

    );

}