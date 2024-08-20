import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSquare } from "@fortawesome/free-solid-svg-icons";
export default function Primaire() {
  return (
    <section className="primaire bg-light">
      <div className="container">
        <div className="row mb-6">
          <div className="col-lg-6">
            <h3 class="mb-4 text-secondary">Notre école</h3>
            <hr className="hr-heading" />
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={"text-warning fontAwesome me-2"}
                />
                <p className="m-0">Ayant un environnement propre et sécurisé</p>
              </li>
              <li className="d-flex mb-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={"text-warning fontAwesome me-2"}
                />
                <p className="m-0">
                  Etant a l&apos;écoute des attents des parents pour les enfants
                  ayant des difficultés scolaire
                </p>
              </li>
              <li className="d-flex mb-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={"text-warning fontAwesome me-2"}
                />
                <p className="m-0">
                  Enseigante prête à s&apos;occuper et à entreprendre des
                  suivies pour améliore le niveau de chaque élève en dificulré
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h4> Pour les cas spécial de certains enfants</h4>
            <hr className="hr-introduction" />
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li className="d-flex">
                <FontAwesomeIcon
                  icon={faSquare}
                  className={"text-primary fontAwesome me-2"}
                />
                <p className="m-0">Remise à niveau</p>
              </li>
              <li className="d-flex ">
                <FontAwesomeIcon
                  icon={faSquare}
                  className={"text-primary fontAwesome me-2"}
                />
                <p className="m-0">
                  Enseignant spécialisé dans les matières de base:
                </p>
              </li>
              <li className="d-flex ms-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={"text-danger fontAwesome me-2"}
                />
                <p className="m-0">Françcais</p>
              </li>
              <li className="d-flex ms-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={"text-danger fontAwesome me-2"}
                />
                <p className="m-0">Mathematiques</p>
              </li>
              <li className="d-flex ms-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={"text-danger fontAwesome me-2"}
                />
                <p className="m-0">Anglais</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
