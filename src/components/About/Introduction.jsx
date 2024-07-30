// import etudiante from '@/images/etudiante.jpg';
import professeur from "@/images/Miraille.jpeg";
import testimonial1 from "@/images/testimonial-1.jpg";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import signature from "@/images/signature.png";
export default function About() {
  return (
    <section id="introduction" className=" introduction bg-light py-3">
      <div className="container">
        <div className="about">
          <div
            className="col-lg-8 offset-lg-2 text-center"
            data-aos="zoom-in-down"
            data-aos-duration="4000"
          >
            <h3 className="text-center ">
              Accueil du chef d&apos;établissement
            </h3>
            <hr className="hr-heading" />
          </div>
          <div className="row my-6 align-items-center justify-content-center">
            <div
              className="col-12 col-md-12 col-lg-6"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <Image
                src={professeur}
                alt="logo"
                className="shadow-lg rounded img-fluid"
              />
            </div>
            <div
              className="col-12 col-md-12 col-lg-6 mt-4 mt-md-0"
              data-aos="fade-down"
              data-aos-duration="4000"
            >
              <p className="fw-bold">
                Chers parents, chers élèves, chers collègues,
              </p>
              <p>
                C&apos;est avec une grande joie que je vous retrouve
                aujourd&apos;hui. Notre école est bien plus qu&apos;un simple
                lieu d&apos;apprentissage ; c&apos;est un foyer où chacun
                d&apos;entre nous peut grandir, s&apos;épanouir et se
                construire.
              </p>
              <p>
                Notre ambition commune est de former des citoyens éclairés,
                responsables et bienveillants.
              </p>
              <p className="fw-bold">
                <Image
                  src={signature}
                  alt="signature"
                  width={"90"}
                  height={"90"}
                  className="ms-3"
                />
              </p>
              <p className="fw-bold">Madame Mireille, Directrice</p>
            </div>
          </div>
        </div>

        <div className="row py-5 mb-5">
          <div
            className="col-lg-8 offset-lg-2 text-center"
            data-aos="fade-in"
            data-aos-duration="4000"
          >
            <h3 className="text-uppercase">Mission et Vision</h3>
            <hr className="hr-success" />
          </div>
          <div className="first" data-aos="fade-left" data-aos-duration="4000">
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
          </div>

          <div
            className="second"
            data-aos="fade-right"
            data-aos-duration="4000"
          >
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
                  leurs aspirations professionnelles pour faire des choix
                  éclairés pour leur avenir.
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
        </div>

        <div className="row py-5 my-5">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h3>ÉQUIPE PÉDAGOGIQUE</h3>
            <hr className="hr-introduction" />
            <p className="fs-5">
              Paragraphe. Vous pouvez le modifier et ajouter votre texte.
              Double-cliquez ici ou cliquez sur « Modifier le texte » pour
              ajouter votre contenu et personnaliser la police.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-transparent border-0 text-center mb-3">
              <div className="card-image">
                <Image
                  src={testimonial1}
                  alt=""
                  className="rounded-circle"
                  width="120"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Great Design</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-transparent border-0 text-center mb-3">
              <div className="card-image">
                <Image
                  src={testimonial1}
                  alt=""
                  className="rounded-circle"
                  width="120"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Great Design</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-transparent border-0 text-center mb-3">
              <div className="card-image">
                <Image
                  src={testimonial1}
                  alt=""
                  className="rounded-circle"
                  width="120"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Great Design</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
