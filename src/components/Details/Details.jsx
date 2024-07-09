import diplome from '@/images/diplome.jpg';
import Image from 'next/image';
export default function Details() {
  return (
    <section className='mission my-6'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6'>
            <h3>Notre mission</h3>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab soluta velit? Consequatur molestiae totam, ipsum eligendi sed,
              exercitationem nam aut explicabo ullam porro sapiente sunt quas
              perspiciatis voluptatum a.
            </p>
            <button className='btn btn-outline-primary '>Lire plus</button>
          </div>
          <div className='col-12 col-md-6'>
            <Image
              src={diplome}
              alt='diplome'
              className='img-fluide rounded shadow w-100 h-100'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
