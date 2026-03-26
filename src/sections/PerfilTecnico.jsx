import React from "react";
import fotoPerfil from "../assets/foto-perfil.jpg";
import qr from "../assets/qr.png";

const PerfilTecnico = () => {
    return (
        <section className="perfil-section">

            <h2 className="perfil-title">1. Perfil Técnico</h2>

            <div className="perfil-container">

                {/* TARJETA TEXTO */}
                <div className="perfil-card">

                    <p>
                        Soy estudiante de Administración de Sistemas Informáticos en Red con
                        una trayectoria marcada por la constancia, la adaptación y el
                        aprendizaje continuo. A lo largo de mi formación he trabajado en
                        implantación de sistemas operativos, virtualización y administración
                        de entornos Windows Server, configurando dominios y gestionando
                        Active Directory en escenarios cliente-servidor.
                    </p>

                    <p>
                        Me interesa comprender cómo se conectan infraestructura y aplicación,
                        por lo que actualmente amplío mis competencias en tecnologías web,
                        buscando desarrollar un perfil técnico completo y versátil.
                    </p>

                    <p>
                        Valoro la organización, la responsabilidad y la capacidad de
                        resolver problemas desde una perspectiva estructurada y práctica.
                    </p>

                </div>

                {/* FOTO + QR */}
                <div className="flip-card">

                    <div className="flip-card-inner">

                        <div className="flip-card-front">
                            <img src={fotoPerfil} alt="Foto perfil Noelia Pires" />
                        </div>

                        <div className="flip-card-back">
                            <img src={qr} alt="QR Portfolio" />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default PerfilTecnico;