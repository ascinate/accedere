
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsXDiamondFill } from "react-icons/bs";
import Head from "next/head";

export default function aicpasocreports() {
  return (
    <div>
    <Head>
        <title>Accedere - SOC Attest Reports</title>
        <meta name="description" content="Accedere is the leading Cybersecurity services company offers SOC compliance certification in North America and globally for Type 2 SOC 2, SOC 2 Type II, SOC Compliance, SOC 1 SOC 2 Report, SOC for Cybersecurity."/>
        <meta name="keywords" content="Type 2 SOC 2, SOC 2 Type II, SOC Compliance, SOC 2 Report, SOC For Cybersecurity, SOC Report, SOC 1 Reports, Accedere.io"/>
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       SOC Examinations & Attestations  </h2>
                       <h5 className="text-white"> Build trust and confidence with your customers and 
                       their auditors with an independent SOC 1, SOC 2, or SOC 3 examination.
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
                <p className="text-center col-lg-7 mx-auto"> Schellman & Company is a fully licensed, accredited CPA firm and affiliate of Schellman
                 that helps organizations examine and report on controls, allowing you to better 
                respond to and meet the expectations of user entities.</p>
                <h2 className="comon-head-main text-center"> Founded and grown through experience </h2>
                <p className="text-center col-lg-7 mx-auto"> SOC Examinations are what we were founded on and through the years have expanded our capabilities to meet the market&apos;s growing needs to build trust and confidence: </p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/socattestreports/soc-1-compliance-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC 1 / SSAE 18 Examination
                               </h5>
                               <p> Present a strong position to your customers regarding your control environment 
                               relevant to processes that impact the controls over financial reporting.
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/socattestreports/soc2examination">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC 2 Examination </h5>
                               <p>Meet a broad set of reporting needs about the
                                controls at your service organization.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/socattestreports/soc3examination">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC 3 Examination </h5>
                               <p>
                               Report on the operational controls pertaining to the suitability 
                               of design and operating effectiveness of controls.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/soc-supply-chain-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC for Supply Chain </h5>
                               <p>Provide relevant information to clients up and down their supply chain, specifically designed for
                                all industries and stakeholders seeking to manage supply risks.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/soc-cybersecurity-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SOC for Cybersecurity </h5>
                               <p>SOC for Cybersecurity reports include a description of your cybersecurity 
                               risk management program
                                and a set of benchmarks that we will evaluate your program against.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/c5-attestation-services">
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
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/csa-star-programs">
                          <div className="comon-services-part">
                              <figure>
                                  <Image src="/5074591.svg"
                                  layout="fill"
                                  />
                              </figure>
                              <h5> CSA STAR Programs </h5>
                              <p>Recognizes assurance requirements and maturity levels of cloud service providers in a publicly available registry
                              </p> 
                              <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>


                    
                </div> 
            </div>
         </div>

         <div className="comon-next-gray-bg py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                    <div className="col">
                        <figure className="right-img-nm ison-sp1">
                            <Image src="/ad-comon1.jpg"
                            layout="fill"/>
                        </figure>
                    </div>
                    <div className="col">
                        <h2 className="comon-head-main">   
                        A variety of assessments to meet your needs </h2>
                        <p>Our team of specialists can provide any of the following to complete your SOC Examinations.
                        </p>
                        <ul className="list-unstyled crm-lisst-2">
                            <li>
                               <span className="conmo-icon">
                               <BsXDiamondFill/>
                               </span>
                               <div className="right-cont">
                                <h5> Readiness Assessment </h5>
                                <p> Schellman performs readiness assessments that enable your organization to assess
                                 your current control environment against the requisite control objectives or criteria. 
                                 Our purpose is to provide clients with actionable intelligence about their preparedness 
                                and overall readiness to promote successful examinations.</p>
                               </div>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <div className="right-cont">
                                <h5> Type 1 Report </h5>
                                <p> Schellman performs &apos;Type 1&apos; SOC examinations when management requires a 
                                report on the service organization&apos;s operational controls pertaining to the
                                 suitability of the design of controls intended to meet control objectives or 
                                criteria identified as of a point in time.</p>
                               </div>
                            </li>
                            <li>
                               <span className="conmo-icon">
                                   <BsXDiamondFill/>
                               </span>
                               <div className="right-cont">
                                <h5> Type 2 Report </h5>
                                <p> Schellman performs &apos;Type 2&apos; SOC examinations when management requires a report on the
                                 service organization&apos;s operational controls pertaining to the suitability of the design 
                                 and operating effectiveness of controls intended to meet the 
                                control objectives or criteria identified over a specific period of time.</p>
                               </div>
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
