import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar({icon, title}) {

    return (
        <li>
            <a href="#">
            <FontAwesomeIcon icon={icon} className='iconHeader'/>
                - {title}
            </a>
        </li>
    )
}