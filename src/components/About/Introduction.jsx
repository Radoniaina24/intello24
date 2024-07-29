// import etudiante from '@/images/etudiante.jpg';
import professeur from "@/images/Miraille.jpeg";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
export default function About() {
  return (
    <section id="introduction" className=" introduction bg-light py-3">
      <div className="container">
        <div className="about">
          <h3 className="text-center">Accueil du chef d&apos;établissement</h3>
          <div className="row my-6 align-items-center justify-content-center">
            <div className="col-12 col-md-12 col-lg-6">
              <Image
                src={professeur}
                alt="logo"
                className="shadow-lg rounded img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6 mt-4 mt-md-0">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam veritatis architecto, error tenetur sed sit commodi
                perferendis officiis consequatur? Ex ducimus facere excepturi
                totam obcaecati nobis ipsum beatae veritatis dolorem. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
                veritatis architecto, error tenetur sed sit commodi perferendis
              </p>
              <p>
                Laboriosam veritatis architecto, error tenetur sed sit commodi
                perferendis officiis consequatur? Ex ducimus facere excepturi
                totam obcaecati nobis ipsum beatae veritatis dolorem.
              </p>
              <p className="fw-bold">Singnature</p>
              <p className="fw-bold">Madame Miraille, Directrice</p>
            </div>
          </div>
        </div>

        <div className="row py-5 mb-5">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h3>Mission et Vision</h3>
            <hr className="hr-success" />
          </div>
          <h5 className="text-success">Épanouissement personnel</h5>
          <hr className="hr-success2 mx-2" />
          <ul className="list-unstyled">
            <li>
              <h6 className="mb-1">
                <FontAwesomeIcon
                  icon={faCircle}
                  className={"text-primary fontAwesome me-2"}
                />
                Développement des compétences académiques:
              </h6>
              <p className="ms-4">
                Maîtrise des savoirs fondamentaux dans différentes matières,
                comme la lecture, l&apos;écriture, les mathématiques, les
                sciences et les langues.
              </p>
            </li>
            <li>
              <h6 className="mb-1">
                <FontAwesomeIcon
                  icon={faCircle}
                  className={"text-secondary fontAwesome me-2"}
                />
                Acquisition de compétences générales:
              </h6>
              <p className="ms-4">
                Pensée critique, résolution de problèmes, communication
                efficace, travail en équipe et adaptabilité.
              </p>
            </li>

            <li>
              <h6 className="mb-1">
                <FontAwesomeIcon
                  icon={faCircle}
                  className={"text-danger fontAwesome me-2"}
                />
                Épanouissement personnel et social:
              </h6>
              <p className="ms-4">
                Cultiver la confiance en soi, le respect de soi et des autres,
                la responsabilité, la citoyenneté et la conscience
                interculturelle.
              </p>
            </li>
          </ul>
          <h5 className="text-secondary">Préparation à la vie future</h5>
          <hr className="hr-heading mx-2" />
          <ul className="list-unstyled">
            <li>
              <h6 className="mb-1">
                {" "}
                <FontAwesomeIcon
                  icon={faCircle}
                  className={"text-secondary fontAwesome me-2"}
                />
                Orientation scolaire et professionnelle:
              </h6>
              <p className="ms-4">
                Aider les élèves à identifier leurs forces, leurs intérêts et
                leurs aspirations professionnelles pour faire des choix éclairés
                pour leur avenir.
              </p>
            </li>
            <li>
              <h6 className="mb-1">
                <FontAwesomeIcon
                  icon={faCircle}
                  className={"text-danger fontAwesome me-2"}
                />
                Préparation à l&apos;enseignement supérieur:
              </h6>
              <p className="ms-4">
                Doter les élèves des compétences et des connaissances
                nécessaires pour réussir dans les études supérieures.
              </p>
            </li>

            <li>
              <h6 className="mb-1">
                {" "}
                <FontAwesomeIcon
                  icon={faCircle}
                  className={"text-success fontAwesome me-2"}
                />
                Entrée dans le monde du travail:
              </h6>
              <p className="ms-4">
                Préparer les élèves à entrer dans le monde du travail et à
                devenir des membres actifs et contributifs de la société.
              </p>
            </li>
          </ul>
        </div>

        <div className="row py-5 my-5">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2>ÉQUIPE PÉDAGOGIQUE</h2>
            <p className="fs-5">
              Paragraphe. Vous pouvez le modifier et ajouter votre texte.
              Double-cliquez ici ou cliquez sur « Modifier le texte » pour
              ajouter votre contenu et personnaliser la police.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
