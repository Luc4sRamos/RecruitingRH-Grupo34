export async function applicantExist (dni, email) {
        const res = await fetch("http://localhost:3000/applicants")
        const data = await res.json()

        const applicants = data.data.applicantsList

        const dniExist = applicants.find(a => a.dni == dni)
        const emailExist = applicants.find(a => a.email == email)

        const errors = []

        if (dniExist) {
            errors.push("El dni ya se encuentra registrado")
        } 
        if (emailExist) {
            errors.push("El email ya se encuentra registrado")
        }

        return errors
}