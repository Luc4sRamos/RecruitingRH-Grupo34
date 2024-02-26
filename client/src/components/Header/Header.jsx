import { faUser, faAddressCard, faList } from '@fortawesome/free-solid-svg-icons'
import logoDH from '../../assets/logo-dh.png'
import { Navbar } from './Navbar'

export function Header () {
    
    return (
        <>
            {/* Sección de acceso */}
            <header className="menu-wrap">
                <figure className="user">
                    <div className="user-avatar">
                    <img src={logoDH} alt="Logo Digital House	"></img>
                    </div>
                    <figcaption>
                    Digital House
                    </figcaption>
                </figure>
                <nav>
                    <section className="menu">
                    <h3>Opciones</h3>
                    <ul>
                        <Navbar icon={faUser} title={"Aspirantes"} />
                        <Navbar icon={faList} title={"Profesiones"} />
                        <Navbar icon={faAddressCard} title={"Postulate Aquí"} />
                    </ul>
                    </section>
            </nav>
            </header>
        </>
    )
}