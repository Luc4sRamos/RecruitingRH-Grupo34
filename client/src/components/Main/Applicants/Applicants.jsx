import foto1 from "../../../assets/img/foto1.jpg"
import foto2 from "../../../assets/img/foto2.jpg"
import foto3 from "../../../assets/img/foto3.jpg"
import foto4 from "../../../assets/img/foto4.jpg"
import { Person } from "./Person"

export function Applicants() {

    return (
        <>
            {/* <!--Sección aspirantes--> */}
            <section className="content aspirantes">
                    <h2 className="mt-3">Aspirantes</h2>
                    <article className="person-boxes">
                        <Person image={foto1} name={"Gloria"} lastName={"Medina"} profession={"Administrador"} />
                        <Person image={foto2} name={"Daniel"} lastName={"Fuentes"} profession={"Tecnico de sonido"} />
                        <Person image={foto3} name={"Tim"} lastName={"Tim"} profession={"Linguista"} />
                        <Person image={foto4} name={"Rocio"} lastName={"Carle"} profession={"Profesor"} />
                    </article>
            </section>
            {/* <!--Fin sección aspirantes-->*/}
        </>
    )
}