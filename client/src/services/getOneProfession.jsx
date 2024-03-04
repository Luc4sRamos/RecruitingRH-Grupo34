import { URL_API } from "../constants/url"


export async function getOneProfession(professionId) {
    const res = await fetch(`${URL_API}/professions/${professionId}`)
    const data = await res.json()
    const profession= data.data

    return profession
}