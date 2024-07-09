export default function Systeme() {
  return (
    <section className='bg-primary py-6 '>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg-8 offset-lg-2'>
            <h3 className='lh-base'>
              Nous mettons à votre disposition un
              <span> double système d&apos;éducation.</span>
            </h3>
            <h4 className='text-warning'>Francais et Malagasy</h4>
          </div>
        </div>
      </div>
      <section id='projects' className='projects py-6'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-6 col-lg-4 mt-4 mt-md-0'>
              <h4>Système educatif Francais</h4>
              <ul className='text-white fs-5'>
                <li>Préscolaire</li>
                <li>Primaire</li>
                <li>Collège</li>
                <li>Lycée</li>
                <li>Sessions Spéciales (Brevet - BACC)</li>
                <button className='btn btn-outline-warning btn-sm mt-3'>
                  En savoir plus
                </button>
              </ul>
            </div>

            <div className='col-md-6 col-lg-4 mt-4 mt-md-0'>
              <h4>Système educatif Malagasy</h4>
              <ul className='text-white fs-5'>
                <li>BEPC</li>
                <li>BACC toutes séries</li>
                <li>Methodologie facile</li>
                <li>Professeurs expériementés</li>
                <li>Reconnu pour la réussite des élèves</li>
                <button className='btn btn-outline-warning btn-sm mt-3'>
                  En savoir plus
                </button>
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
