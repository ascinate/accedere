
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill, BsDash } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

import Head from "next/head";

export default function indiaassessments() {
  return (
    <div>
    
    <Head>
            <title>Accedere - Aadhar Audit – UIDAI AUA & KUA</title>
            <meta name="keywords" content="India Assessments ISO 27001, ISO 27701, ISO 27001 Certification Cost, ISO 27002, ISO 20000, ISO 22301 Accedere"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       Aadhar Audit <BsDash/> UIDAI AUA & KUA  </h2>
                       <h3 className="text-white my-3"> Aadhar Audit <BsDash/> UIDAI AUA & KUA</h3>

                       <p className="text-white"> Any firm which wants to get empaneled as KUA (KYC User Agency) or AUA
                        (Aadhaar Authentication Services) must get their security assessment done and achieve their 
                       compliance certification only from a CERT-In empaneled auditor.</p>

                       <p className="text-white"> As per the UIDAI guidelines in India, client applications need to be audited 
                       only by CERT-In empaneled auditors and AUA&apos;s and KUA&apos;s need to ensure that they get
                        their operations audited and submit that audit report to UIDAI on an annual basis 
                        and need basis to ensure compliance
                        as per UIDAI&apos;s requirements and standards. </p>

                        <p className="text-white"> Since we&apos;re empaneled auditors with CERT-In we can audit and assess your
                         information security environment, its risks, and controls over such information 
                         security assets and information on a periodic basis as per
                         UIDAI&apos;s security audit and compliance requirements. </p>

                      

                    
     
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img ison-sp1">
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

                        
                    <h5> UIDAI&apos;s latest policy on Information Security for all AUA&apos;s and KUA&apos;s mandates
                    the following domains and controls of 
                   information security which need to be audited:</h5>
                  
                  <ul className="list-unstyled crm-india blue-arrow mt-4">
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    Access Control
                  </span>
                   </li>
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    Asset Management
                  </span>
                  </li>
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    Change Management
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    Communications
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                     Compliance
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    Cryptography
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    HR - Human Resources
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                     Information Security Incident Management
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                      Operations Security
                  </span>
                  </li>

                  
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                     Password Policy
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                     Physical and Environmental Security
                  </span>
                  </li>
                 
                  </ul>
                      
                    </div>
                    

                  

                    

                  


                    
                </div> 
            </div>
         </div>


   

    </div>
        
    <Footer/>
    </div>
  )
}
