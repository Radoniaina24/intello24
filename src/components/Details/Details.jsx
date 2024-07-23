"use client"
import diplome from '@/images/mission.png';
import Image from 'next/image';
import Svg from '../Hero/Svg';
export default function Details() {
  return (
    <section className='mission mb-3 pb-5'>
      <div className='transformation'>
          <Svg/>
        </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6' data-aos='fade-right' data-aos-duration="4000">
            <h3 className='text-uppercase text-secondary '>Notre mission</h3>
            <hr className="hr-heading" />
            <p className='lead' >
              Transmettre le savoir et les compétences nécessaires aux élèves
              pour s&apos;épanouir personnellement et s&apos;insérer dans la
              société, en favorisant leur développement intellectuel, moral et ...
              {/* civique. Ils contribuent également à l&apos;égalité des chances en
              offrant à tous les élèves les moyens de réussir leur parcours
              scolaire et de devenir des citoyens responsables et engagés. */}
            </p>
            <button className='btn btn-secondary btn-sm fw-bold' data-bs-toggle="modal" data-bs-target="#mission">
              Lire plus
            </button>
          </div>
          <div className='col-12 col-md-6' data-aos='fade-down' data-aos-duration="4000">
            <Image
              src={diplome}
              alt='diplome'
              className='img-fluide w-100 h-100'
            />
          </div>
        </div>
      </div>


      <div className="modal fade" id="mission" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-secondary" id="staticBackdropLabel">Notre mission</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Transmettre le savoir et les compétences nécessaires aux élèves
              pour s&apos;épanouir personnellement et s&apos;insérer dans la
              société, en favorisant leur développement intellectuel, moral et 
              civique. Ils contribuent également à l&apos;égalité des chances en
              offrant à tous les élèves les moyens de réussir leur parcours
              scolaire et de devenir des citoyens responsables et engagés.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
