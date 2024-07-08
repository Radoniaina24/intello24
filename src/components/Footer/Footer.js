import facebook from '@/images/facebook.png';
import mail from '@/images/mail.png';
import telephone from '@/images/telephone.png';
import Image from 'next/image';
function Footer(props) {
  return (
    <footer className='footer bg-dark text-white py-6 mt-5'>
      <div className='container'>
        <div className='row  text-center text-md-start '>
          {/* <div className='col-md-4 my-3 d-none d-md-block  text-md-start '>
            <Image src={logo} alt='logo' />
          </div> */}
          <div className='col-md-4 col-lg-3 my-3'>
            <ul className='list-unstyled'>
              <li className='fw-bold'>Adresse</li>
              <li>60 RUE KASANGA TSARAFARITRA TSIMABZAZA</li>
              <li>Antananarivo 101</li>
            </ul>
          </div>
          <div className='col-md-4 col-lg-3 my-3'>
            <ul className='list-unstyled'>
              <li className='fw-bold'>Téléphone</li>
              <li>
                <Image
                  src={telephone}
                  alt='telephone'
                  className='image-fluid'
                />{' '}
                +261 34 74 822 83 / +261 34 29 429 88
              </li>
            </ul>
          </div>
          <div className='col-md-4 col-lg-3 my-3'>
            <ul className='list-unstyled'>
              <li className='fw-bold'>Email</li>
              <li>
                <Image
                  src={mail}
                  alt='telephone'
                  className='image-fluid me-2 text-light'
                />{' '}
                intellotsimbazaza@gmail.com
              </li>
            </ul>
          </div>
          <div className='col-md-4 col-lg-3 my-3'>
            <ul className='list-unstyled'>
              <li className='fw-bold'>
                Suivez nos actualités sur les réseaux sociaux
              </li>
              <li>
                <Image
                  src={facebook}
                  alt='telephone'
                  className='image-fluid me-2'
                />{' '}
                Lycée Intello Tsimbazaza
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
