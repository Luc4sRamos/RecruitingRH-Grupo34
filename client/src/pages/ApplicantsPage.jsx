import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search'; 
import { Applicants } from '../components/Main/Applicants/Applicants'

function ApplicantsPage() {

  return (
      <div className='dashboard'>
        <Header />
        <Search />
        {/*<!--Sección contenido--> */}
        <main className="content-wrap">
            <Applicants />
        </main>
        {/* <!--Fin Sección contenido--> */}
      </div>
  )
}

export default ApplicantsPage
