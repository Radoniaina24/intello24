import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import facebook from "@/images/facebook.png"
import telephone from "@/images/telephone.png"
import mail from "@/images/mail.png"
import logo from "@/images/v3.png"
function Footer(props) {
    return (
        <footer className="footer bg-light py-6">
            <div className="container">
                <div className="row align-items-center text-center text-md-start ">
                   
                    <div className="col-md-4 my-3">
                         <ul className="list-unstyled">
                            <li className='fw-bold'>Adresse</li>
                            <li>60 RUE KASANGA TSARAFARITRA TSIMABZAZA</li>
                            <li>Antananarivo 101</li>
                            <li className='fw-bold'>Téléphone</li>
                            <li>
                                <Image src={telephone} alt='telephone' className='image-fluid'/> +261 34 74 822 83 / +261 34 29 429 88
                            </li>
                            <li className='fw-bold'>Email</li>
                            <li>
                                <Image src={mail} alt='telephone' className='image-fluid'/> intellotsimbazaza@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 my-3">
                       <ul className="list-unstyled">
                            <li className='fw-bold'>Adresse</li>
                            <li>Lycée Intello Tsimbazaza</li>
                            <li>Antananarivo 101</li>
                            <li className='fw-bold'>Téléphone</li>
                            <li>
                                <Image src={telephone} alt='telephone' className='image-fluid'/> +261 34 74 822 83 / +261 34 29 429 88
                            </li>
                            <li className='fw-bold'>Suivez nos actualités sur les réseaux sociaux</li>
                            <li>
                                <Image src={facebook} alt='telephone' className='image-fluid'/> Lycée Intello Tsimbazaza
                            </li>
                        </ul>
                    </div>
                     <div className="col-md-4 my-3 d-none d-md-block ext-center text-md-end ">
                        <Image src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;