
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill, BsDash } from "react-icons/bs";
import Head from "next/head";

export default function indiaassessments() {
  return (
    <div>
    
    <Head>
            <title>Accedere - India Cert-In Assessments</title>
            <meta name="keywords" content="India Assessments ISO 27001, ISO 27701, ISO 27001 Certification Cost, ISO 27002, ISO 20000, ISO 22301 Accedere"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       India Cert-In Assessments  </h2>
                       <h3 className="text-white my-3"> Aadhar Audit <BsDash/> UIDAI AUA & KUA</h3>
                       
                       <ul className="list-unstyled color-list">
                       <li> 
                       <span className="conmo-icon">
                       <BsXDiamondFill/>
                       </span>
                       <span>
                       As per the UIDAI guidelines in India, client applications need to be audited only by CERT-In empaneled auditors and that audit report is to be submitted to UIDAI.
                       </span>
                        </li>
                       <li> 
                       <span className="conmo-icon">
                       <BsXDiamondFill/>
                       </span>
                       <span>
                       AUA&apos;s and KUA&apos;s need to ensure that they get their operations audited annually if they want to comply with the standard and specifications of UIDAI.
                       </span>
                       </li>
                       <li> 
                       <span className="conmo-icon">
                       <BsXDiamondFill/>
                       </span>
                       <span>
                       Since we&apos;re empaneled auditors with CERT-In we can audit and assess your information security environment, its risks, 
                       and controls over such information security assets and information.
                       </span>
                       </li>
                      
                    </ul>

                    
     
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/ad-socl-1.jpg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
             
                <h2 className="comon-head-main text-center"> India Cert-In Assessments </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 indian-se-div row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-reporting-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  Safe-to-Host Applications Audit
                               </h5>
                              
                              
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-1-type-2-compliance-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> RBI / Data Localization Audit</h5>
                              
                               
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-2-type-2-compliance-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SEBI Directive Audit  </h5>
                               
                               
                          </div>
                      </Link>
                    </div>

                  

                    

                  


                    
                </div> 
            </div>
         </div>

   

    </div>
        
    <Footer/>
    </div>
  )
}
