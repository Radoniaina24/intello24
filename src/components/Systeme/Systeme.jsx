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
      <section id='projects' class='projects py-6'>
        <div class='container'>
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
  /* 

            <div class='col-md-4'>
              <div class='card border-0 shadow'>
                {/* <Image
                  src={francais}
                  alt='Systeme francais'
                  className='img-fluid'
                /> 
                <div class='card-body'>
                  <h4 class='card-title'>Système educatif Malagasy</h4>
                  <ul className='list-unstyled'>
                    <li className='list-item'>
                      <input
                        class='form-check-input me-1'
                        type='checkbox'
                        value=''
                        checked
                        id='firstCheckbox'
                      />
                      BEPC
                    </li>
                    <li>
                      <input
                        class='form-check-input me-1'
                        type='checkbox'
                        value=''
                        checked
                        id='firstCheckbox'
                      />
                      BACC toutes séries
                    </li>

                    <button className='btn btn-outline-primary btn-sm mt-3'>
                      En savoir plus
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div> */
}
