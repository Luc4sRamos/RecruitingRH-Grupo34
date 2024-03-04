import { URL_API } from "../constants/url"

export async function getAllApplicants() {
    const res = await fetch(`${URL_API}/applicants`)
    const data = await res.json()
    const applicantsList = data.data.applicantsList

    return applicantsList
}