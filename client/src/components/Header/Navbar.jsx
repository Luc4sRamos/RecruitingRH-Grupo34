import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar({icon, title}) {

    return (
        <li >
            <FontAwesomeIcon icon={icon} className='iconHeader'/>
                - {title}
        </li>
    )
}