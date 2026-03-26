import "../styles/contacto.css"
import qr from "../assets/qr.png"

import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contacto() {

    return (

        <section>

            <h2 className="tech-title text-[42px] mb-12">
                8. Contacto
            </h2>

            <div className="contact-card">

                <div className="contact-inner">

                    {/* FRONT */}

                    <div className="contact-front">

                        <div className="contact-name">
                            NOELIA PIRES
                        </div>

                        <div className="contact-role">
                            ADMINISTRADORA DE SISTEMAS EN FORMACIÓN
                        </div>

                        <div className="contact-info">
                            <p>📞 628 299 463</p>
                            <p>✉️ marianoeliapires@gmail.com</p>
                            <p>📍 Lugones, Asturias</p>
                        </div>

                        <p className="contact-hint">
                            Pasa el cursor para ver más
                        </p>

                    </div>


                    {/* BACK */}

                    <div className="contact-back">

                        <div className="qr-container">

                            <img src={qr} alt="QR portfolio" />

                            <div className="qr-scan"></div>

                        </div>

                        <div className="contact-social">

                            <a
                                href="https://github.com/marianoeliapires-ship-it"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                        <a
                            className="email-button"
                            href="mailto:marianoeliapires@gmail.com"
                        >
                            Enviar Email
                        </a>

                    </div>

                </div>

            </div>

        </section>

    )

}