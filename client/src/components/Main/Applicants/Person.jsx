import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Person({image, name, lastName, profession}) {

    return (
        <>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="box-avatar">
                    <img src={image} alt="Gloria"></img> 
                </div>
                <div className="box-bio">
                    <h2 className="bio-name">{name} {lastName}</h2>
                    <p className="bio-position">{profession}</p>
                </div>
                <div className="box-actions">
                    <button>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faComment} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </div>
            </div>
        </>
    )
}