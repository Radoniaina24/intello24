import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone, faSms } from '@fortawesome/free-solid-svg-icons';
function Footer(props) {
  return (
    <footer className='footer text-white py-6 bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4' data-aos="fade-down">
            <p className='lead text-secondary fw-bold '>MENU DU SITE</p>
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

          <div className='col-12 col-md-4' data-aos="fade-down">
            <p className='lead text-secondary fw-bold'>CONTACT</p>
            <ul className='list-unstyled'>
              <li className='list-item'>
                60 RUE KASANGA TSARAFARITRA TSIMABZAZA
              </li>
              <li className='list-item'>Antananarivo 101</li>
              <li className='list-item'>
                <FontAwesomeIcon icon={faPhone} className={"text-primary fontAwesome"}/> 
                <span className='ms-1'>+261 34 74 822 83 / +261 34 29 429 88</span>
              </li>
              <li className='list-item'>
                <FontAwesomeIcon icon={faMailBulk} className={"text-primary fontAwesome"}/> 
                 <span className='ms-1'>intellotsimbazaza@gmail.com</span>
               </li>
            </ul>
          </div>

          <div className='col-12 col-md-4' data-aos="fade-down">
            <p className='lead text-secondary fw-bold'>RESTER CONNECTÉ·E</p>
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
