
import Image from "next/image";
import { BsXDiamondFill, BsDash,  } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";

import Head from "next/head";


function pdf1(){
    return(
        <>
          <Head>
             <title>Accedere -ISO 27701 Certification</title>
             <meta name="twitter:title" content="ISO 27701 Certification &amp; Assessments | Schellman &amp; Company"/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
          <div className="special-divn"></div> 

            <div className="pdf-div1 mt-5">
               <div className="container">
                 <div className="comon-padf d-flex align-items-center">
                      <figure>
                        <Image src="/pdf1.png" 
                        alt="am" layout="fill" />
                     </figure>
                        <span></span>
                 </div>
                  
               </div>
            </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default pdf1;