import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search'; 
import { Link } from 'react-router-dom'; 

function NotFound() {

  return (
      <div className='dashboard'>
        <Header />
        <Search />
        {/*<!--Sección contenido--> */}
        <main className="content-wrap d-flex align-items-center flex-column">
            <div className='d-flex display-2 justify-content-center align-items-center'>
                Error 404
            </div>
            <div className='d-flex h2 justify-content-center text-center mb-4'>
                Pagina no encontrada
            </div>
            <div>
                    <Link to={"/"}>
                        <button type="button" className="btn btn-primary btn-md">Volver al Inicio</button>
                    </Link>    
            </div>

        </main>
        {/* <!--Fin Sección contenido--> */}
      </div>
  )
}


export default NotFound