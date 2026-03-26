import React, { useEffect, useRef } from "react";
import "../styles/metodologia.css";

function Metodologia() {

    const ref = useRef(null)

    useEffect(() => {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("metodo-visible")

                    }

                })

            },

            { threshold: 0.4 }

        )

        observer.observe(ref.current)

    }, [])

    return (

        <section className="metodologia" ref={ref}>

            <h2 className="metodo-titulo">
                7. Metodología de Trabajo
            </h2>

            <div className="metodo-linea">

                <div className="paso">
                    <div className="circulo">🧠</div>
                    <h3>Planificación</h3>
                    <p>Consulta de documentación oficial antes de aplicar configuraciones o tecnologías.</p>
                </div>

                <div className="paso">
                    <div className="circulo">⚙️</div>
                    <h3>Ejecución</h3>
                    <p>Desarrollo por iteraciones cortas con objetivos claros y entregables funcionales.</p>
                </div>

                <div className="paso">
                    <div className="circulo">🔎</div>
                    <h3>Verificación</h3>
                    <p>Validación de configuraciones y comprobación del funcionamiento correcto.</p>
                </div>

                <div className="paso">
                    <div className="circulo">📄</div>
                    <h3>Documentación</h3>
                    <p>Registro de configuraciones, incidencias y soluciones para mantenimiento futuro.</p>
                </div>

            </div>

            <p className="metodo-frase">
                <span className="typewriter">
                    Mi enfoque es comprender antes de ejecutar, validar antes de entregar y documentar para mantener
                </span>
            </p>

        </section>

    )

}

export default Metodologia