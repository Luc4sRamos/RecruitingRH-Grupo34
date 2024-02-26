export function Professions() {

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
                        <button type="button" className="list-group-item list-group-item-action text-center">Administrador</button>
                        <button type="button" className="list-group-item list-group-item-action text-center">Técnico de sonido</button>
                        <button type="button" className="list-group-item list-group-item-action text-center">Profesor</button>
                        <button type="button" className="list-group-item list-group-item-action text-center">Linguista</button>
                    </div>
                </section>
            {/* <!--Fin sección profesiones--> */}
        </>
    )
}