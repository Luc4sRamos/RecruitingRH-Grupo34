import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search'; 
import { Professions } from '../components/Main/Professions'
import { Footer } from '../components/Footer';

function ProfessionPage() {

  return (
      <div className='dashboard'>
        <Header />
        <Search />
        {/*<!--Sección contenido--> */}
        <main className="content-wrap">
            <Professions />
            <Footer />
        </main>
        {/* <!--Fin Sección contenido--> */}
      </div>
  )
}

export default ProfessionPage
