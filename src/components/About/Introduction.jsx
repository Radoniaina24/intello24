// import etudiante from '@/images/etudiante.jpg';
import professeur from '@/images/Miraille.jpeg';
import Image from 'next/image';
export default function About() {
  return (
    <section id='introduction' className='intro bg-light py-6'>
      <div className='container'>
        <div className='about'>
          <div className='row mt-5 align-items-center justify-content-center'>
            <div className=' col-12 col-md-6 col-lg-8'>
              <Image
                src={professeur}
                alt='logo'
                className='shadow rounded img-fluid'
                width={'600'}
              />
            </div>
            <div className='col-12 col-md-6 col-lg-4 mt-4 mt-md-0'>
              <h2>Message du Principal</h2>
              <p>
                Offrir une éducation de qualité accessible à tous, en promouvant
                l&apos;excellence académique, la pensée critique et le
                développement personnel.
              </p>
            </div>
          </div>
          <div className='row mt-5 align-items-center justify-content-center'>
            <div className='col-12 col-md-6 col-lg-4 mt-4 mt-md-0'>
              <h2>Vision et valeurs</h2>
              <ul className='fs-5'>
                <li>Bienveillance</li>
                <li>Respect</li>
                <li>Responsabilité</li>
                <li>Assiduité</li>
                <li>Divertissement</li>
              </ul>
            </div>
            <div className=' col-12 col-md-6 col-lg-8 text-end'>
              {/* <Image
                src={etudiante}
                alt='logo'
                className='shadow rounded img-fluid'
                width={'600'}
              /> */}
            </div>
          </div>
        </div>

        <div className='row py-5 my-5'>
          <div className='col-lg-8 offset-lg-2 text-center'>
            <h2>ÉQUIPE PÉDAGOGIQUE</h2>
            <p className='fs-5'>
              Paragraphe. Vous pouvez le modifier et ajouter votre texte.
              Double-cliquez ici ou cliquez sur « Modifier le texte » pour
              ajouter votre contenu et personnaliser la police.
            </p>
          </div>
        </div>

        <div className='row text-center'>
          <div className='col-md-3'>
            <h4>M. Richard</h4>
            <p>PRINCIPAL</p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>

          <div className='col-md-3'>
            <h4>Mme. Petit</h4>
            <p>PRINCIPAL ADJOINTE</p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>

          <div className='col-md-3'>
            <h4>Mme. Martin</h4>
            <p>PARENT D&apos;ÉLÈVES</p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>

          <div className='col-md-3'>
            <h4>Mme. Aubry</h4>
            <p>SECRETAIRE</p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>

          <div className='col-md-3'>
            <h4>Mme. Faure</h4>
            <p>
              PROFESSEURE - <br />
              SCIENCES SOCIALES
            </p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>

          <div className='col-md-3'>
            <h4>M. Lefebvre</h4>
            <p>
              PROFESSEUR -<br /> MATH
            </p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>

          <div className='col-md-3'>
            <h4>Mme. Perrot</h4>
            <p>
              PROFESSEURE -<br /> EPS
            </p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>

          <div className='col-md-3'>
            <h4>Mme. Gautier</h4>
            <p>
              PROFESSEURE -<br />
              SCIENCE
            </p>
            <p>info@monsite.fr</p>
            <p>01 23 45 67 89</p>
          </div>
        </div>
      </div>
    </section>
  );
}
