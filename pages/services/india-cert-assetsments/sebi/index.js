
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill, BsDash } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

import Head from "next/head";

export default function sebiudit() {
  return (
    <div>
    
    <Head>
            <title>Accedere - SEBI Directive Audit</title>
            <meta name="keywords" content="India Assessments ISO 27001, ISO 27701, ISO 27001 Certification Cost, ISO 27002, ISO 20000, ISO 22301 Accedere"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       SEBI Directive Audit </h2>

                       <p className="text-white"> SEBI (Securities and Exchange Board of India) regulates the securities 
                       market of India and is owned by the Government of India.  As per SEBI&apos;s guidelines the following 
                       are necessary 
                       compliances for brokers on cyber security audit:
                       </p>


                   </div>
                   <div className="col">
                       <figure className="comon-banner-img need1">
                          <Image src="/ad-socl-1.jpg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
             
                
               
                <div className="row row-cols-1 row-cols-sm-2 indian-se-div row-cols-lg-2 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                        <figure className="comon-banner-img ison-sp1">
                            <Image src="/coustomer.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">

                  <ul className="list-unstyled crm-india blue-arrow mt-0">
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                   Stockbrokers / Brokers need to make sure that all the Electronic Communication (ECN) 
                  which is sent via emails should be signed digitally, it should be encrypted, it shouldn&apos;t be 
                  tamper-able, and
                   it should be in compliance with the IT Act, 2000.
                  </span>
                   </li>
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    The books of accounting and all relevant records should be maintained as per the 
                  guidelines of Securities Exchange Board of India Act, 1992.
                  </span>
                  </li>
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                  	The audit is necessary to ensure that the internal controls, processes, and procedures have 
                  been implemented adequately and are also being followed correctly to ensure compliance 
                  with the requirements 
                  of Securities Exchange Board of India Act, 1992.
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                  	The securities law provisions, guidelines, directives, and additional circulars issued by 
                  Securities 
                  Exchange Board of India Act, 1992 should be complied with.
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    The provisions, directives and circulars by stock exchanges should be complied with.
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                   The investor of the securities market should be as per SEBI guidelines 
                  </span>
                  </li>

            
                  </ul>
                  <p> Since we&apos;re CERT-In empaneled auditors, our team has the relevant experience and 
                  expertise to help you. We can conduct audits of your IT Infrastructure including security 
                  audits, application controls,
                   information system audits of your entire IT network and infrastructure. </p>
                
                      
                    </div>
                    

                  

                    

                  


                    
                </div> 
            </div>
         </div>


   

    </div>
        
    <Footer/>
    </div>
  )
}
