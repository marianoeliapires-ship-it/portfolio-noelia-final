import Reveal from "../components/reveal";
import "../styles/3ctecnicas.css";
import tools from "../assets/tools.png";


export default function Herramientas() {
    return (
        <section className="min-h-screen flex justify-center text-white px-6 pt-20 pb-20">
            <div className="c3-container">

                <Reveal>
                    <h2 className="c3-title">3. Competencias Técnicas</h2>
                </Reveal>

                <div className="c3-layout">



                    {/* IZQUIERDA */}
                    <div className="c3-side">

                        <Reveal>
                            <div className="c3-block">
                                <h3>Administración de Sistemas</h3>
                                <ul>
                                    <li>CMD</li>
                                    <li>Powershell</li>
                                    <li>Active Directory</li>
                                    <li>Windows Server</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="c3-block">
                                <h3>Redes</h3>
                                <ul>
                                    <li>Configuración TCP/IP</li>
                                    <li>DNS / DHCP</li>
                                    <li>DHCP</li>
                                </ul>
                            </div>
                        </Reveal>

                    </div>

                    {/* CENTRO */}
                    <div className="c3-core">
                        <div className="c3-node">
                            <img src={tools} alt="core" />
                        </div>
                    </div>

                    {/* DERECHA */}
                    <div className="c3-side">

                        <Reveal>
                            <div className="c3-block">
                                <h3>Virtualización</h3>
                                <ul>
                                    <li>VirtualBox</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="c3-block">
                                <h3>Soporte Remoto</h3>
                                <ul>
                                    <li>Escritorio Remoto</li>
                                </ul>
                            </div>
                        </Reveal>

                    </div>

                </div>
            </div>
        </section>
    );
}