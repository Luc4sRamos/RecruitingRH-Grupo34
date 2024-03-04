import { Presale } from "./Presale" 
import { Applicants } from "./Applicants/Applicants" 
import { Professions } from "./Professions" 
import { Footer } from "../Footer"


export function Main () {

    return (
        <>
            {/*<!--Sección contenido--> */}
            <main className="content-wrap">
                
                <Presale />
                <Applicants />
                <Professions />
                <Footer />
            </main>
            {/* <!--Fin Sección contenido--> */}
        </>
    )
}