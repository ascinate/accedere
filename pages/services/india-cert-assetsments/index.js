
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function indiaassessments() {
  return (
    <div>
    
    <Head>
            <title>Accedere - India Assessments</title>
            <meta name="keywords" content="ISO 27001, ISO 27701, ISO 27001 Certification Cost, ISO 27002, ISO 20000, ISO 22301 Accedere"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       India Assessments  </h2>
                       <h5 className="text-white"> While many 3PAOs and C3PAOs are historical government 
                       contractors and consultants, Schellman primarily provides independent assessment 
                       services to cloud providers, contractors, and the commercial entities supporting the government. 
                       Additionally, our clients often work in conjunction with SOC 2, 
                       PCI, and other compliance initiatives.
                       </h5>
     
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
             
                <h2 className="comon-head-main text-center"> Our Federal Service Offerings </h2>
                <p className="text-center col-lg-7 mx-auto"> Staying in front of industry trends, Schellman is always adding and refining our IT audit and compliance offerings: </p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-reporting-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  FedRAMP
                               </h5>
                               <p>
                               Schellman is an accredited 3PAO in accordance with the FedRAMP 
                               requirements. FedRAMP is a program that allows cloud service 
                               providers to meet security requirements so agencies may outsource
                                with confidence.
                             
                               </p>
                              
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
                               <h5> CMMC / NIST SP 800-171 </h5>
                               <p> Schellman is one of the first C3PAOs cleared by the CMMC Accreditation Body due
                                to our experience performing
                                FedRAMP Assessments for Civilian and DoD Environments.
                               </p> 
                               
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
                               <h5> FISMA/NIST </h5>
                               <p>While only government agencies can be FISMA compliant, Schellman performs 
                               both independent attestations and gap assessments against the NIST 800-53 standards,
                                which are the detailed requirements behind FISMA.
                             
                               </p> 
                               
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc2cloud">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> ITAR </h5>
                               <p>Assessments against the applicable controls for the International Trafficking of Arms Regulation 
                               (ITAR) and other types of export control requirements.
                               </p> 
                               
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc2privacy">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> CJIS
                               </h5>
                               <p> Assessments against the applicable controls for the
                                Criminal Justice Information Services (CJIS) Security 
                                Policy found on the FBI website

                               </p> 
                              
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc4cyber">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1067263.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  C5 Attestation </h5>
                               <p>Better develop transparent and trusted relationships between
                                yourselves and your cloud customers.
                               </p> 
                              
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/aicpasocreports/soc-supply-chain">
                          <div className="comon-services-part">
                              <figure>
                                  <Image src="/5074591.svg"
                                  layout="fill"
                                  />
                              </figure>
                              <h5> CSA STAR Programs </h5>
                              <p>Recognizes assurance requirements and maturity levels of cloud service providers in a publicly available registry
                              </p> 
                              
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
