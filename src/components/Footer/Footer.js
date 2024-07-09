import Link from 'next/link';

function Footer(props) {
  return (
    <footer className='footer bg-dark text-white py-6 mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <p className='lead'>MENU DU SITE</p>
            <ul className='list-unstyled'>
              <li className='list-item'>
                <Link className='nav-link' href='/'>
                  Accueil
                </Link>
              </li>
              <li className='list-item'>
                <Link className={`nav-link `} href='/about'>
                  À propos
                </Link>
              </li>
              <li className='list-item'>
                <Link className={`nav-link `} href='/education'>
                  Éducation
                </Link>
              </li>
              <li className='list-item'>
                <Link className={`nav-link`} href='contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-12 col-md-4'>
            <p className='lead'>CONTACT</p>
            <ul className='list-unstyled'>
              <li className='list-item'>
                60 RUE KASANGA TSARAFARITRA TSIMABZAZA
              </li>
              <li className='list-item'>Antananarivo 101</li>
              <li className='list-item'>
                Tel: +261 34 74 822 83 / +261 34 29 429 88
              </li>
              <li className='list-item'>intellotsimbazaza@gmail.com</li>
            </ul>
          </div>

          <div className='col-12 col-md-4'>
            <p className='lead'>RESTER CONNECTÉ·E</p>
            <ul className='list-unstyled'>
              <li className='list-item'>
                Suivez nos actualités sur les réseaux sociaux
              </li>
              <li className='list-item'>Facebook: Lycée Intello Tsimbazaza</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
