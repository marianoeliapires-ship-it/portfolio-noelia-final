import React from "react";
import "../styles/experiencia.css";

function Experiencia() {

    return (

        <section className="experiencia">

            <h2 className="titulo-experiencia">
                5. EXPERIENCIA & SOPORTE IT
            </h2>

            <p className="subtitulo-experiencia">
                Atención al usuario · Resolución de incidencias · Trabajo estructurado
            </p>


            <div className="timeline">

                <div className="linea"></div>

                <div className="item">

                    <div className="nodo"></div>

                    <div className="contenido">

                        <p className="rol">Resolutions Generalist</p>
                        <p className="empresa">IKEA · 2025</p>

                        <ul className="tareas">
                            <li>Gestión y resolución de incidencias</li>
                            <li>Registro y seguimiento de casos mediante herramientas digitales</li>
                            <li>Comunicación directa con clientes en situaciones complejas</li>
                        </ul>

                    </div>

                </div>


                <div className="item">

                    <div className="nodo"></div>

                    <div className="contenido">

                        <p className="rol">Dependienta · Atención al cliente</p>
                        <p className="empresa">Cinesa · 2014–2025</p>

                        <ul className="tareas">
                            <li>Trabajo en entornos exigentes</li>
                            <li>Aplicación de procedimientos establecidos</li>
                            <li>Coordinación con equipos y resolución de problemas en tiempo real</li>
                        </ul>

                    </div>

                </div>


                <div className="item">

                    <div className="nodo"></div>

                    <div className="contenido">

                        <p className="rol">Soporte IT</p>
                        <p className="empresa">Competencias aplicadas al soporte técnico</p>

                        <ul className="tareas">
                            <li>Diagnóstico estructurado de problemas</li>
                            <li>Priorización y organización de tareas</li>
                            <li>Comunicación clara con el usuario</li>
                            <li>Adaptación a nuevas herramientas</li>
                            <li>Trabajo siguiendo documentación y procesos</li>
                        </ul>

                    </div>

                </div>

            </div>




        </section>

    );

}

export default Experiencia;