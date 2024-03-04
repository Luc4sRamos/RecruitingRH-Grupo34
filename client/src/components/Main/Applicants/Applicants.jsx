import { Person } from "./Person"
import { useEffect, useState } from "react"
import { getAllApplicants } from "../../../services/getAllApplicants"

export function Applicants() {
    const [applicants, setApplicants] = useState()

    useEffect(() => {
        const fetchProfessions = async () => {
            const professionsList = await getAllApplicants()
            setApplicants(professionsList)
        }
        fetchProfessions()
      }
    , [])
    
    return (
        <>
            {/* <!--Sección aspirantes--> */}
            <section className="content aspirantes">
                    <h2 className="mt-3">Aspirantes</h2>
                    <article className="person-boxes">
                        {
                            Array.isArray(applicants) && applicants.map((applicant, i) => 
                                <Person key={applicant.name + i} id={applicant.id} image={applicant.photo.url} name={applicant.name} lastName={applicant.lastName} profession={applicant.profession} />
                            )
                        }
                    </article>
            </section>
            {/* <!--Fin sección aspirantes-->*/}
        </>
    )
}