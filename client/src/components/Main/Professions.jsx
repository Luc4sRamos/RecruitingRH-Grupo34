import { useEffect, useState } from "react"


export function  Professions () {

    const [professions, setProfessions] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/professions")
            .then(res => res.json())
            .then(data => setProfessions(data.data.professionsList))
    }, [])

    return (
        <>
            {/*<!--Sección de profesiones--> */}
                <section className="content profesiones">
                    <h2 className="mt-3">Profesiones</h2>
                    <div className="list-group shadow-sm p-3 mb-5 rounded">
                        <h4 className="list-group-item list-group-item-action active text-center"
                            aria-current="true">
                            Listado de Profesiones
                        </h4>
                        {
                            Array.isArray(professions) && professions.map((profession, i) => 
                                <button key={profession.name + i} type="button" className="list-group-item list-group-item-action text-center">
                                    {profession.name}
                                </button>
                            )
                        }

                    </div>
                </section>
            {/* <!--Fin sección profesiones--> */}
        </>
    )
}