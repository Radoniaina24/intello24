import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle, faSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function Primaire() {
  const school = [
    { texte: "Ayant un environnement propre et sécurisé" },
    {
      texte:
        " Etant a l'écoute des attents des parents pour les enfants ayant des difficultés scolaires",
    },
    { texte: "Ayant un environnement propre et sécurisé" },
  ];
  const specials = [
    { texte: "Remise à niveau" },
    {
      texte:
        "Enseignant spécialisé dans les matières de base: Mathematique, Anglais, Francais",
    },
  ];
  return (
    <section className="primaire bg-light">
      <div className="container">
        <div className="">
          <h3 class="mb-4 text-secondary">Notre école</h3>
          <hr className="hr-heading" />
        </div>
        <div className="row mb-6">
          <div className="col-lg-6">
            <ul className="list-unstyled">
              {school.map((item, index) => (
                <li className="d-flex mb-3" key={index}>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={"text-secondary  me-2"}
                      width={15}
                      height={15}
                    />
                  </div>
                  <p className="m-0">{item.texte}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Class />
        <div className="row">
          <div className="col-lg-6">
            <h4> Pour les cas spécials de certains enfants</h4>
            <hr className="hr-introduction" />
            <ul className="list-unstyled d-flex flex-column gap-2">
              {specials.map((item, index) => (
                <li className="d-flex align-items-center" key={index}>
                  <div>
                    <FontAwesomeIcon
                      icon={faSquare}
                      className={"text-primary me-2"}
                      width={15}
                      height={15}
                    />
                  </div>
                  <p className="m-0">{item.texte}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Class() {
  const CLASSES = [
    { classe: "PS et MS" },
    { classe: "GS" },
    { classe: "CP" },
    { classe: "CE1" },
    { classe: "CE2" },
    { classe: "CM1" },
    { classe: "CM2" },
  ];
  return (
    <section className="matière my-5">
      <div>
        <h3 class="mb-5 text-secondary text-center">Classe</h3>
        <div className="row justify-content-center gap-3">
          {CLASSES.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card border-0 shadow rounded">
                <div className="card-body text-center">
                  <div>
                    <h3 className="mb-0 text">{item.classe}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
