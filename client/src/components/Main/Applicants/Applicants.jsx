import { Person } from "./Person"
import { useEffect, useState } from "react"

export function Applicants() {
    const [applicants, setApplicants] = useState()

    useEffect(() => {
        apiApplicantsFetch()
    }, [])

    const apiApplicantsFetch = async () => {
        const res = await fetch("http://localhost:3000/applicants")
        const data = await res.json()
        setApplicants(data.data.applicantsList)
    }
    
    return (
        <>
            {/* <!--Sección aspirantes--> */}
            <section className="content aspirantes">
                    <h2 className="mt-3">Aspirantes</h2>
                    <article className="person-boxes">
                        {
                            Array.isArray(applicants) && applicants.map((applicant, i) => 
                                <Person key={applicant.name + i} image={applicant.photo.url} name={applicant.name} lastName={applicant.lastName} profession={applicant.profession} />
                            )
                        }
                    </article>
            </section>
            {/* <!--Fin sección aspirantes-->*/}
        </>
    )
}