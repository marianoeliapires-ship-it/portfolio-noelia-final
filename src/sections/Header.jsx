import ParticlesBackground from "../components/ParticlesBackground";
import { useEffect, useState } from "react";

export default function Header() {

    const text = "NOELIA PIRES";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {

        let i = 0;

        const typing = setInterval(() => {

            setDisplayText(text.slice(0, i));

            i++;

            if (i > text.length) {
                clearInterval(typing);
            }

        }, 120);

        return () => clearInterval(typing);

    }, []);

    return (

        <div className="h-screen flex items-center justify-center text-white relative">

            <ParticlesBackground />

            <div className="relative z-10 text-center">

                <h1 className="text-[80px] font-bold tech-title terminal-title">

                    {displayText}
                    <span className="cursor">|</span>

                </h1>

                <h2 className="text-[28px] mt-4">
                    ADMINISTRADORA DE SISTEMAS EN FORMACIÓN
                </h2>

                <p className="mt-2 tracking-widest code-style">
                    REDES · SOPORTE IT · TECNOLOGÍAS WEB
                </p>

            </div>

        </div>

    )

}
