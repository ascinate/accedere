
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill, BsDash } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

import Head from "next/head";

export default function safehost() {
  return (
    <div>
    
    <Head>
            <title>Accedere - Safe-to-Host Applications Audit </title>
            <meta name="keywords" content="India Assessments ISO 27001, ISO 27701, ISO 27001 Certification Cost, ISO 27002, ISO 20000, ISO 22301 Accedere"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       Safe<BsDash/>to<BsDash/>Host Applications Audit </h2>
                     

                       <p className="text-white"> Safe to host audits are conducted to recognize servers and encrypted 
                       communication which is held between the services and clients. Safe to host certification helps to 
                       build client&apos;s 
                       trust in your company as being a safe and reliable hosting firm.</p>

                       <p className="text-white"> As CERT-In empaneled auditors we can perform security tests and
                        auditof your information / network infrastructure to ensure that its safe to host including 
                        Network security testing, Web security testing, Mobile application security 
                       testing, Website testing etc. </p>


                      

                    
     
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
                        <figure className="comon-banner-img risk-1">
                            <Image src="/coustomer.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">

                        
                    <p> Once we complete the audits for safe to host, our suggestions would incorporate 
                    remediation actions which when implemented would certify your application as safe to host. 
                    Our team has the relevant expertise to identify and recognize the vulnerabilities in your
                     application and provide you with the right
                     guidance to remediate those vulnerabilities. </p>

                     <p> Upon successful completion of the initial audit, re-test is conducted to ensure that all the 
                     vulnerabilities identified in the initial audit have been remediated and the application is ready
                      and safe to host. Based on the results of re-test and remediation actions, Safe-to-Host Certificate
                       will be issued to your organization indicating
                      that your application is certified and safe to host.</p>

                      <p> Periodic audits for safe to host certificates need to be conducted to ensure its validity and compliance with security mandates. We offer the most reliable audits for safe to host certificates 
                      to many businesses and hosting companies alike.  </p>
                  
                 
                    </div>
                    

                  

                    

                  


                    
                </div> 
            </div>
         </div>


   

    </div>
        
    <Footer/>
    </div>
  )
}
