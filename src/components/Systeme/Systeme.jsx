import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
export default function Systeme() {
  return (
    <section className="" >
      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg-8 offset-lg-2'>
            <h3 className='lh-base text-primary p-0 m-0'>
              Nous mettons à votre disposition un
              <span> double système d&apos;éducation.</span>
            </h3>
            <hr className="hr-introduction"/>
          </div>
        </div>
      </div>
      <section id='projects' className='py-5 systeme'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-6 col-lg-4 mt-4 mt-md-0'>
              <h4 className="text-danger">Système educatif Francais</h4>
              <ul className='fs-5 list-unstyled'>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Préscolaire</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Primaire</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Collège</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Lycée</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Sessions Spéciales (Brevet - BACC)</li>
              </ul>
            </div>

            <div className='col-md-6 col-lg-4 mt-4 mt-md-0'>
              <h4 className="text-secondary">Système educatif Malagasy</h4>
              <ul className='fs-5 list-unstyled'>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>BEPC</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>BACC toutes séries</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Methodologie facile</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Professeurs expériementés</li>
                <li className="d-flex"><FontAwesomeIcon icon={faCheck} className={"text-warning fontAwesome mx-3"}/>Reconnu pour la réussite des élèves</li>
                {/* <button className='btn btn-outline-warning btn-sm mt-3'>
                  En savoir plus
                </button> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

{
}
