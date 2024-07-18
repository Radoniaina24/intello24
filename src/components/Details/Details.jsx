import diplome from '@/images/mission.png';
import Image from 'next/image';
export default function Details() {
  return (
    <section className='mission my-3 pb-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6'>
            <h3 className='text-uppercase text-secondary'>Notre mission</h3>
            <hr className="hr-heading" />
            <p className='lead'>
              Transmettre le savoir et les compétences nécessaires aux élèves
              pour s&apos;épanouir personnellement et s&apos;insérer dans la
              société, en favorisant leur développement intellectuel, moral et ...
              {/* civique. Ils contribuent également à l&apos;égalité des chances en
              offrant à tous les élèves les moyens de réussir leur parcours
              scolaire et de devenir des citoyens responsables et engagés. */}
            </p>
            <button className='btn btn-secondary btn-sm text-light'>Lire plus</button>
          </div>
          <div className='col-12 col-md-6'>
            <Image
              src={diplome}
              alt='diplome'
              className='img-fluide w-100 h-100'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
