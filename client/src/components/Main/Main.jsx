import { Presale } from "./Presale" 
import { Applicants } from "./Applicants/Applicants" 
import { Professions } from "./Professions" 

export function Main () {

    return (
        <>
            {/*<!--Sección contenido--> */}
            <main className="content-wrap">
                
                <Presale />
                <Applicants />
                <Professions />
                
            </main>
            {/* <!--Fin Sección contenido--> */}
        </>
    )
}