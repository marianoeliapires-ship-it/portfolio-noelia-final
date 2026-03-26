import React from "react";
import soporteRemoto from "../assets/competencias/soporte-remoto.png";
import redes from "../assets/competencias/redes.png";
import virtualizacion from "../assets/competencias/virtualizacion.png";
import administracionSistemas from "../assets/competencias/administracion-sistemas.png";

const competencias = [
    {
        titulo: "Administración de sistemas",
        imagen: administracionSistemas,
        claseImagen: "img-admin",
        items: ["CMD", "PowerShell", "Active Directory", "Windows Server"],
    },
    {
        titulo: "Redes",
        imagen: redes,
        claseImagen: "img-redes",
        items: ["Configuración TCP/IP", "DNS", "DHCP"],
    },
    {
        titulo: "Virtualización",
        imagen: virtualizacion,
        claseImagen: "img-virtualizacion",
        items: ["VirtualBox", "VMware", "Creación de máquinas virtuales"],
    },
    {
        titulo: "Soporte remoto",
        imagen: soporteRemoto,
        claseImagen: "img-soporte",
        items: ["Asistencia técnica", "Acceso remoto", "Diagnóstico", "Resolución de incidencias"],
    },
];

const Competencias = () => {
    return (
        <section id="competencias" className="competencias-section">
            <div className="competencias-header">
                <h2 className="competencias-title">2. Herramientas</h2>
            </div>

            <div className="competencias-grid">
                {competencias.map((comp, index) => (
                    <article className="competencia-card antigravity-card" key={index}>
                        <div className="competencia-image-wrap">
                            <img
                                src={comp.imagen}
                                alt={comp.titulo}
                                className={`competencia-image ${comp.claseImagen}`}
                            />
                        </div>

                        <div className="competencia-content">
                            <h3>{comp.titulo}</h3>

                            <ul>
                                {comp.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Competencias;