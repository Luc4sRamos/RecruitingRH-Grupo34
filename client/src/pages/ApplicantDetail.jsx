import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search'; 
import { Footer } from '../components/Footer';
import { getOneApplicant } from '../services/getOneApplicant';
import { Link, useParams } from 'react-router-dom';

function ApplicantDetailPage() {

    const [applicant, setApplicant] = useState({})
    const { applicantId } = useParams()

    useEffect(() => {
        const fetchApplicant = async () => {
            const data = await getOneApplicant(applicantId)
            setApplicant(data)
            console.log(data);
        }
        fetchApplicant()
    })
    const genders = [null, "Masculino", "Femenino", "No especificado"]

  return (
      <div className='dashboard'>
        <Header />
        <Search />
        {/*<!--Sección contenido--> */}
        <main className="content-wrap">

            <h1 className='mt-2 mb-4 text-center text-uppercase'> <u>Detalle de Aspirante</u></h1>
            { applicant.photo && 
                <div className="mt-4 mb-4">
                        <img src={applicant.photo.url} 
                        className='rounded-circle mx-auto d-block border border-secondary' 
                        style={{width: "200px", height: "200px"}}></img> 
                </div>
            }
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col" className="text-center">Informacion</th>
                    <th scope="col" className="text-center">Aspirante</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center">Nombre/s</td>
                    <td className="text-center">{applicant.name}</td>
                    </tr>
                    <tr>
                    <td className="text-center">Apellido/s</td>
                    <td className="text-center">{applicant.lastName}</td>
                    </tr>
                    <tr>
                    <td className="text-center">Email</td>
                    <td className="text-center">{applicant.email}</td>
                    </tr>
                    <tr>
                    <td className="text-center">Número de teléfono</td>
                    <td className="text-center">{applicant.phoneNumber}</td>
                    </tr>
                    <tr>
                    <td className="text-center">Perfil de Linkedin</td>
                    <td className="text-center"><Link to={applicant.urlLinkedin} className='text-decoration-none'>{applicant.urlLinkedin}</Link></td>
                    </tr>
                    <tr>
                    <td className="text-center">Fecha de Nacimiento</td>
                    <td className="text-center">{applicant.birthdate}</td>
                    </tr>
                    <tr>
                    <td className="text-center">Sexo</td>
                    <td className="text-center">{genders[applicant.gender_id]}</td>
                    </tr>
    
                </tbody>
            </table>

            <Footer />
            
        </main>
        {/* <!--Fin Sección contenido--> */}
      </div>
  )
}

export default ApplicantDetailPage