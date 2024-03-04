import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search'; 
import { getOneProfession } from '../services/getOneProfession';
import { useParams } from 'react-router-dom';
import { Person } from '../components/Main/Applicants/Person';
import { Footer } from '../components/Footer';

function ProfessionDetailPage() {

    const [profession, setProfession] = useState({})
    const { professionId } = useParams()
    
    useEffect(() => {
        const fetchProfession = async () => {
            const data = await getOneProfession(professionId)
            setProfession(data)
            console.log(data);
        }
        fetchProfession()
    }, [professionId])

  return (
      <div className='dashboard'>
        <Header />
        <Search />
        {/*<!--Sección contenido--> */}
        <main className="content-wrap">

            <section className="content aspirantes">
                    <h1 className='mt-2 text-center text-uppercase'> <u>{profession.profession}</u></h1>
                    <h3 className='mt-3'><u className=''>Total de Aspirantes:</u> {profession.totalApplicants} </h3>

                    {profession.applicantsList > 0 && <h3 className="mt-4 mb-4"><u>Lista de Aspirantes</u></h3>}
                    <article className="person-boxes">
                        {
                            Array.isArray(profession.applicantsList) && profession.applicantsList.map((applicant, i) => 
                                <Person key={applicant.name + i} id={applicant.id} image={applicant.photo.url} name={applicant.name} lastName={applicant.lastName} profession={profession.profession} />
                            )
                        }
                    </article>
            </section>
            <Footer />
            
        </main>
        {/* <!--Fin Sección contenido--> */}
      </div>
  )
}

export default ProfessionDetailPage
