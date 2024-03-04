import { URL_API } from "../constants/url"

export async function getAllProfessions() {
    const res = await fetch(`${URL_API}/professions`)
    const data = await res.json()
    const professionsList = data.data.professionsList

    return professionsList
}