import { URL_API } from "../constants/url"

export async function getOneApplicant(applicantId) {
    const res = await fetch(`${URL_API}/applicants/${applicantId}`)
    const data = await res.json()
    const applicant = data.data.applicant

    return applicant
}