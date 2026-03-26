import React from "react";
import "../styles/certificaciones.css";

function Certificaciones() {

    return (

        <section className="certificaciones">

            <h2 className="titulo-cert">
                6. Certificaciones y Cursos
            </h2>

            <p className="subtitulo-cert">
                Formación técnica y especialización en sistemas y tecnología
            </p>

            <div className="cert-container">

                {/* CERTIFICACIONES */}

                <div className="certificaciones-row">

                    <div className="cert-node">
                        <img src="/certificaciones/ccst-network.jpg" alt="CCST Networking" />
                        <p>CCST Networking</p>
                    </div>

                    <div className="cert-node">
                        <img src="/certificaciones/ccst_cybersecurity_xl.jpg" alt="CCST Cybersecurity" />
                        <p>CCST Cybersecurity</p>
                    </div>

                    <div className="cert-node">
                        <img src="/certificaciones/databases.png" alt="Databases" />
                        <p>Databases</p>
                    </div>

                </div>


                {/* CURSOS */}

                <div className="courses-row">

                    <div className="course-node">
                        <span>🦺</span>
                        <p>PRL</p>
                    </div>

                    <div className="course-node">
                        <span>⚖️</span>
                        <p>Igualdad</p>
                    </div>

                </div>

            </div>

        </section>

    );

}

export default Certificaciones;