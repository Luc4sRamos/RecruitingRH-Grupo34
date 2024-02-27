import { Person } from "./Person"
import { useEffect, useState } from "react"

export function Applicants() {
    const [applicants, setApplicants] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/applicants")
            .then(res => res.json())
            .then(data => setApplicants(data.data.applicantsList))
    }, [])
    console.log(applicants);
    return (
        <>
            {/* <!--Sección aspirantes--> */}
            <section className="content aspirantes">
                    <h2 className="mt-3">Aspirantes</h2>
                    <article className="person-boxes">
                        {
                            Array.isArray(applicants) && applicants.map((applicant, i) => 
                                <Person key={applicant.name + i} image={applicant.photo} name={applicant.name} lastName={applicant.lastName} profession={applicant.profession} />
                            )
                        }
                    </article>
            </section>
            {/* <!--Fin sección aspirantes-->*/}
        </>
    )
}