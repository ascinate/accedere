
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill, BsDash } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

import Head from "next/head";

export default function rbiaudit() {
  return (
    <div>
    
    <Head>
            <title>Accedere - RBI / Data Localization Audit</title>
            <meta name="keywords" content="India Assessments ISO 27001, ISO 27701, ISO 27001 Certification Cost, ISO 27002, ISO 20000, ISO 22301 Accedere"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       RBI / Data Localization Audit</h2>

                       <p className="text-white"> Over the past years, ithas become imperative for Banks
                        to audit their IT environment due to the increased use of modern and complex technologies
                         which in turn increases the risk of cyber crimes and inefficient IT management systems.Hence, 
                         RBI has issued its guidelines which need to be followed by Banks to assure them of their 
                         effective implementation of internal controls and risk management by conducting timely Information 
                         Security Audits.
                       </p>

                       <p className="text-white"> Since we&apos;re CERT-In empaneled auditors, our team has the relevant
                        experience and expertise to help you. We can conductaudits of your Banks IT Infrastructure 
                        including security audits, application controls,
                        information system audits of your entire IT network and infrastructure.  </p>


                   </div>
                   <div className="col">
                       <figure className="comon-banner-img risk-1">
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

                        
                    <h5> We can help you with complete guidance to stay compliant with RBI&apos;s guidelines 
                    in the following ways: </h5>
                  
                  <ul className="list-unstyled crm-india blue-arrow mt-4">
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                	Help you determine planning in effective methodologies
                  </span>
                   </li>
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                  	Guidance on oversight of IT activities with unbiased and objective point of view
                  </span>
                  </li>
                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                   Evaluation of critical operating / business activities and internal controls against its effectiveness 
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                   Evaluation of the organizations compliance efforts focused on IT related policies and procedures
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                   Identification of areas with ineffective controls / vulnerabilities
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                   	Recommendations for corrective actions to remediate the vulnerabilities
                  </span>
                  </li>

                  <li> 
                  <span className="conmo-icon">
                  <FaAngleRight/>
                  </span>
                  <span>
                    Constant monitoring to ensure effective management 
                  and implementation of the controls and required actions
                  </span>
                  </li>

                  
                  
              
                 
                  </ul>
                  <p> On April 8, 2018, RBI issued to Banks a notification which specified mandates of storage of 
                  all end to end data transactions. Data localization is basically a government mandate for storing 
                  all the user data which is collected 
                  within each jurisdiction on the servers across the entire country. </p>
                  <p> System providers are required to submit System Audit Reports (SAR) as per this mandate on a 
                  regular basis to comply with RBI&apos;s guidelines. These audits can only be conducted by CERT-In 
                  empaneled auditors and the 
                  audit reports should be submitted to RBI periodically. </p>

                  <p> Since we&apos;re CERT-In empaneled auditors, we can conduct your audits and provide 
                  you with SAR in order to stay 
                  complaint with RBI&apos;s guidelines. </p>
                      
                    </div>
                    

                  

                    

                  


                    
                </div> 
            </div>
         </div>


   

    </div>
        
    <Footer/>
    </div>
  )
}
