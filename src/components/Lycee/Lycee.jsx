import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faSquare} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import person from "@/images/person.jpg"
export default function Lycee() {
  return(
  <section  className='lycee my-5'>
    <div className="container">
      <div className="row mb-6">
        <div class="col-lg-6">
          <div class="image-container d-flex justify-content-center">
             <Image src={person} alt="Notre école" className="img-fluid rounded "/>
          </div>
        </div>
        <div className="col-lg-6">
          <h4 class="mb-4 text-danger">
            Systeme éducatif français
          </h4>
          
          <ul className="list-unstyled">
          <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-danger fontAwesome me-2"}/>
              <p className='m-0'>
                Qualité de l&apos;enseignement avec méthodoligie adaptée
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-danger fontAwesome me-2"}/>
              <p className='m-0'>
                Professeur expérimenté Aide et soutien 
                aux élèves en difficulté scolaire (session spéciale)
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-danger fontAwesome me-2"}/>
              <p className='m-0'>
                Reconnu pour les réussites des
                élèves aux exament officiels
                de brevet et de Baccalauréat (série SL et STMG)
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-danger fontAwesome me-2"}/>
              <p className='m-0'>
                Assurance aux élèves lors de la préparation des inscriptions aux
                différentes universités francaises (Par cours Sup)
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mb-6">
        <div className="col-lg-6">
          <h4 class="mb-4 text-secondary">
            Systeme éducatif Malagasy
          </h4>
          <ul className="list-unstyled">
          <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-secondary fontAwesome me-2"}/>
              <p className='m-0'>
                Professeurs expérimentés
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-secondary fontAwesome me-2"}/>
              <p className='m-0'>
                Méthodologie facile à comprendre et à assimiler pour les élèves
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-secondary fontAwesome me-2"}/>
              <p className='m-0'>
              Reconnu pour les réussites des élèves aux examens
              officiels BEPC et Baccalauréat(toutes séries)
              </p>
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <div class="image-container d-flex justify-content-center">
             <Image src={person} alt="Notre école" className="img-fluid rounded "/>
          </div>
        </div>
      </div>

      <div className="row mb-6">
        <div class="col-lg-6">
          <div class="image-container d-flex justify-content-center">
             <Image src={person} alt="Notre école" className="img-fluid rounded "/>
          </div>
        </div>
        <div className="col-lg-6">
          <h4 class="mb-4 text-primary">
            Classe intermédiaires (Système éducatif français)
          </h4>
          <ul className="list-unstyled">
          <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-primary fontAwesome me-2"}/>
              <p className='m-0'>
                Existance du classe intermediaire <span className="text-secondary fw-bold">(6e, 5e, 4e et 2nde)</span> 
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-primary fontAwesome me-2"}/>
              <p className='m-0'>
                Réussite assurée à la fin de l&apos;année scolaire
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-primary fontAwesome me-2"}/>
              <p className='m-0'>
                  Enseignement avec méthodologie rigoureuse
              </p>
            </li>
          </ul>
        </div>
      </div>

        <div className="row text-center">
          <div className="col-lg-8 offset-lg-2">
            <h3 className="text-success">Session spéciale intello</h3>
            <hr className="hr-introduction"/>
          </div>
        </div>
        <ul className="list-unstyled">
          <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-primary fontAwesome me-2"}/>
              <p className='m-0'>
                Mecredi après-midi, dimanche matin et/ou soir 
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-primary fontAwesome me-2"}/>
              <p className='m-0'>
                Pour ceux qui n&apos;on pas le temps 
                de suivre les heures normales le cours en salle
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-primary fontAwesome me-2"}/>
              <p className='m-0'>
                Inscription à l&apos;examen officiel brevet 
                épreuve anticipées et au baccaluréat 
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className={"text-primary fontAwesome me-2"}/>
              <p className='m-0'>
              Assistante lors de la préparation des inscriptions
              aux différentes universités français (Par cours Sup)
              </p>
            </li>
          </ul>
    </div>
  </section>
  )
  ;
}

{/* 
   
 
    4-Session spéciale intello
    <p>Mecredi après-midi, dimanche matin et/ou soir</p>
    <p>
      Pour ceux qui n&apos;on pas le temps 
      de suivre les heures normales le cours en salle
    </p>
    <p>Réussite assurée</p>
    <p>Professeur expérimenté</p>
    <p>
      Inscription à l&apos;examen officiel brevet 
      épreuve anticipées et au baccaluréat 
    </p>
    <p>
      Assistante lors de la préparation des inscriptions
       aux différentes universités français (Par cours Sup)
    </p> */}