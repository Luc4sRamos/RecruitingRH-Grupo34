import { faUser, faAddressCard, faList } from '@fortawesome/free-solid-svg-icons'
import logoDH from '../../assets/logo-dh.png'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

export function Header () {
    
    return (
        <>
            {/* Sección de acceso */}
            <header className="menu-wrap">
                <figure className="user">
                    <div className="user-avatar">
                    <Link to={"/"}><img src={logoDH} alt="Logo Digital House	"></img></Link>
                    
                    </div>
                    <figcaption>
                    Digital House
                    </figcaption>
                </figure>
                <nav>
                    <section className='menu'>
                        <h3>Opciones</h3>
                        <ul className=''>
                            <Link to={"/applicants"}>
                                <Navbar icon={faUser} title={"Aspirantes"} />
                            </Link>
                            <Link to={"/professions"}>
                                <Navbar icon={faList} title={"Profesiones"} />
                            </Link>
                            <Link to={"/postulation"}>
                                <Navbar icon={faAddressCard} title={"Postulate Aquí"} />
                            </Link>
                        </ul>
                    </section>
                </nav>
            </header>
        </>
    )
}