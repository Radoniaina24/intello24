'use client';
import logo from '@/components/Navbar/image/v8.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
export default function Navbar() {
  function userScroll() {
    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.querySelector('#to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('navbar-sticky');
        toTopBtn?.classList.add('show');
      } else {
        navbar?.classList.remove('navbar-sticky');
        toTopBtn?.classList.remove('show');
      }
    });
  }
  useEffect(() => {
    userScroll();
  });
  const pahtname = usePathname();
  return (
    <nav className='navbar navbar-expand-lg fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' href='/'>
          <Image src={logo} alt='' width='' height='90' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul
            className='navbar-nav ms-auto text-center'
            style={{ fontSize: '.9rem', textTransform: 'uppercase' }}
          >
            <li className='nav-item'>
              <Link
                className={`nav-link  ${pahtname === '/' ? 'active-link' : ''}`}
                href='/'
              >
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link   ${
                  pahtname === '/about' ? 'active-link' : ''
                }`}
                href='/about'
              >
                À propos
              </Link>
            </li>
            <li className='nav-item dropdown custom-dropdown  text-dark'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Établissement
              </a>
              <ul className='dropdown-menu text-capitalize'>
                <li>
                  <Link className={`dropdown-item `} href='/ecole-primaire'>
                    Les écoles primaires
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className={`dropdown-item `} href='/college-et-lycee'>
                    Le collège-lycée
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Actualités
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`  btn btn-secondary btn-sm px-4 mx-4 fw-bold text-dark ${
                  pahtname === '/contact' ? 'active-link' : ''
                }`}
                href='#contact'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
