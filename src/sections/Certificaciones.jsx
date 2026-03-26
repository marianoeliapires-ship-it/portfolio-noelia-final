import React from "react";
import "../styles/certificaciones.css";

// 🔥 IMPORTAR IMÁGENES (CLAVE)
import ccstNetwork from "../assets/certificaciones/ccst-network.jpg";
import ccstCyber from "../assets/certificaciones/ccst_cybersecurity_xl.jpg";
import databases from "../assets/certificaciones/databases.png";

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
                        <img src={ccstNetwork} alt="CCST Networking" />
                        <p>CCST Networking</p>
                    </div>

                    <div className="cert-node">
                        <img src={ccstCyber} alt="CCST Cybersecurity" />
                        <p>CCST Cybersecurity</p>
                    </div>

                    <div className="cert-node">
                        <img src={databases} alt="Databases" />
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