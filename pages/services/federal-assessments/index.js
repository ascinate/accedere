
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function federalassessments() {
  return (
    <div>
    
    <Head>
            <title>Accedere - Federal Assessments</title>
            <meta name="description" content="Learn more about how Schellman &amp;amp; Company&amp;s team of experts can help you with your f assessderalement needs."/>
      </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       Federal Assessments  </h2>
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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/federal-assessments/fedramp-compliance-attestation-services">
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
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/federal-assessments/cmmc-compliance-attestation-services">
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
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/federal-assessments/fisma-nist-attestation-services">
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
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/federal-assessments/cjis-compliance-attestation-services">
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
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/federal-assessments/cjis-compliance-attestation-services">
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
                               <span className="btn"> read more <BsArrowRightShort/> </span>
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
