import Header from "./sections/Header"
import PerfilTecnico from "./sections/PerfilTecnico"
import Competencias from "./sections/Competencias"
import Herramientas from "./sections/Herramientas"
import Proyectos from "./sections/Proyectos"
import Experiencia from "./sections/Experiencia"
import Certificaciones from "./sections/Certificaciones"
import Metodologia from "./sections/Metodologia"
import Contacto from "./sections/Contacto"

import ThemeToggle from "./components/ThemeToggle"

function App() {

  return (

    <>

      {/* BOTÓN DARK / LIGHT */}
      <ThemeToggle />

      <main>

        <section>
          <Header />
        </section>

        <section>
          <PerfilTecnico />
        </section>

        <section>
          <Competencias />
        </section>

        <section>
          <Herramientas />
        </section>

        <section>
          <Proyectos />
        </section>

        <section>
          <Experiencia />
        </section>

        <section>
          <Certificaciones />
        </section>

        <section>
          <Metodologia />
        </section>

        <section>
          <Contacto />
        </section>

      </main>

    </>

  )

}

export default App