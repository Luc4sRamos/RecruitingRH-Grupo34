import { useState } from "react"

export function Form () { 
    const [validated, setValidated] = useState("row g-2 needs-validation");
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated("row g-2 needs-validation")
        }
    
        setValidated("row g-2 needs-validation was-validated");
    };
    

    return (
        <>
            {/*<!--Sección contenido--> */}
            <main className="content-wrap">

            <h2>Postulación de Aspirante</h2>
            <form className={validated} onSubmit={handleSubmit} noValidate>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationCustom01" required minLength={2} maxLength={50}></input>
                    <div className="invalid-feedback">
                        Inserte su nombre. Limite de 50 letras
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationCustom02" required minLength={2} maxLength={50}></input>
                    <div className="invalid-feedback">
                        Inserte su apellido. Limite de 50 letras
                    </div>
                </div>
                <div className="col-mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group has-validation">
                    <input type="email" className="form-control" id="email" aria-describedby="inputGroupPrepend" required></input>
                    <div className="invalid-feedback">
                        Inserte un email valido.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">DNI</label>
                    <input type="number" className="form-control" id="validationCustom03" required max={9999999999}></input>
                    <div className="invalid-feedback">
                        Inserte su DNI. 
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">Número de teléfono</label>
                    <input type="number" className="form-control" id="validationCustom04" required max={9999999999}></input>
                    <div className="invalid-feedback">
                        Inserte su numero de teléfono. Máximo 10 cifras
                    </div>
                </div>
                <div className="col-mb-3">
                    <label htmlFor="validationCustom05" className="form-label">URL de Linkedin</label>
                    <input type="text" className="form-control" id="validationCustom05" required></input>
                    <div className="invalid-feedback">
                        Inserte la url de su perfil de Linkedin
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom06" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="validationCustom06" required ></input>
                    <div className="invalid-feedback">
                        Inserte su fecha de nacimiento. 
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom07" className="form-label">Sexo</label>
                    <select className="form-select" id="validationCustom07" required>
                    <option selected disabled value="">Seleccione su sexo</option>
                    <option value={4}>Masculino</option>
                    <option value={5}>Femenino</option>
                    <option value={6}>Prefiero no decirlo</option>
                    </select>
                    <div className="invalid-feedback">
                        Seleccione una opción.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom07" className="form-label">Profesión</label>
                    <select className="form-select" id="validationCustom07" required>
                    <option selected disabled value="">Seleccione su Profesión</option>
                    <option value={4}>Administrador</option>
                    <option value={5}>Tecnico de sonido</option>
                    <option value={6}>Linguista</option>
                    </select>
                    <div className="invalid-feedback">
                        Seleccione una opción.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom08" className="form-label">Foto del aspirante *(opcional)</label>
                    <input type="file" className="form-control" id="validationCustom08" accept=".jpg, .jpeg, .png"></input>
                    <div className="invalid-feedback">
                        Debe ser .jpg, .jpeg o .png
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Aceptar los terminos y condiciones
                    </label>
                    <div className="invalid-feedback">
                        Es necesario aceptar los terminos y condiciones.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" >Enviar solicitud</button>
                </div>
            </form>

            </main>
            {/* <!--Fin Sección contenido--> */}

        </>
    )
    
}