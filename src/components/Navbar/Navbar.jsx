'use client';
import logo from '@/components/Navbar/image/v8.png';
import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <nav className='navbar navbar-expand-lg sticky-top navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <Image src={logo} alt='' width='' height='90' />
        </a>
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
            className='navbar-nav mx-auto text-center'
            style={{ fontSize: '.9rem', textTransform: 'uppercase' }}
          >
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/about'>
                À propos
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#services'>
                Admissions
              </a>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/education'>
                Éducation
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Actualités
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-outline-secondary px-4 mx-4'
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

// function userScroll(){
//     const navbar = document.querySelector('.navbar');
//     window.addEventListener('scroll', ()=>{
//         if(window.scrollY > 50){
//             navbar.classNameList.add("bg-dark")
//             navbar.classNameList.add("navbar-sticky")
//         }else{
//             navbar.classNameList.remove("bg-dark")
//             navbar.classNameList.remove("navbar-sticky")
//         }
//     })
// }
// useEffect(()=>{
//     userScroll()
// })
