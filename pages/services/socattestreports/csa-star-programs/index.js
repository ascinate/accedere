
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";
import Head from "next/head";


function csastar(){
    return(
        <>
        <Head>
            <title>Accedere - Csa Star Programs</title>
            <meta name="twitter:title" content="CSA STAR Attestation and Certification | Accedere &amp; Company"/>
          
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              CSA STAR Programs </h2>
                              <p className="text-white mt-4"> Recognizing assurance requirements and maturity 
                              levels of cloud service providers (CSPs).
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
                                    <Image src="/soc-2.jpg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5 flex-column-reverse flex-lg-row">
                            
                           <div className="col">
                                    <figure className="mn-big-div2 risk-1">
                                        <Image src="/soc2-1.jpg" alt="about"
                                        
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Why the CSA STAR Programs? </h2>
                                <p className="mt-4"> STAR Program is a publicly available registry designed to
                                 recognize assurance requirements and maturity levels of cloud service providers (CSPs). 
                                 Prior to issuing the guidance for STAR Certification and STAR Attestation, a CSP could only
                                  perform a self-assessment, which meant completing the Consensus Assessments Initiative 
                                  questionnaire (CAIQ) 
                                and making the responses publicly available on the CSA Register.</p>

                                
                            </div>
                           
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">

                            <div className="col-lg-12">
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Certification or Attestation? </h2>
                                <h5> Schellman is the only firm that can offer both CSA STAR Certification and Attestation 
                                services to CSPs allowing companies
                                 to decrease internal costs and increase efficiencies.</h5>
                                 <ul className="list-unstyled mt-4">
                                    <li>
                                    <span> <BsXDiamondFill/> </span>
                                    <span>
                                     <h5 > 
                                     Certification</h5>
                                     <p> The CSA STAR Certification is a third party independent assessment of the security of a
                                      CSP that leverages the requirements of the ISO/IEC 27001:2013 (ISO 27001) management 
                                      system standard together with the CSA Cloud Controls Matrix (CCM) version 3.0.1. In order to 
                                      achieve the STAR Certification, a CSP must already have an active ISO 27001 certification or 
                                      have the STAR Certification assessment 
                                     performed in tandem with an ISO 27001 certification review.</p>
                                    </span>
                                    </li>
                                    <li>
                                        <span> <BsXDiamondFill/> </span>
                                        <span>
                                        <h5 > 
                                        Attestation</h5>
                                        <p>The CSA STAR Attestation is a third party independent assessment of the security 
                                        of a CSP. CSA STAR Attestation is a collaboration between the CSA and the 
                                         Institute of CPAs (AICPA) to provide guidance for CPA firms (or service auditors) to 
                                         conduct STAR Attestations using criteria from the AICPA Trust Services Principles (TSP) and the 
                                         Cloud Control Matrix (CCM). This assessment utilizes the SOC 2 framework to report on the 
                                         suitability of the design and operating effectiveness of a CSP&apos;s controls relevant to
                                          the applicable TSPs (which include Security, Availability, Confidentiality, 
                                             Integrity, and Privacy) and the suitability of the design and operating effectiveness 
                                        of its controls in meeting the criteria in the CSA CCM.</p>
                                        </span>
                                     </li>
                                 </ul>

                                
                            </div>
                           
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> Our Process </h2>
                            <p className="col-lg-9 mx-auto d-block text-center"> We begin each project with your end goals in mind and to provide
                                preparation for future key project activities. Effective communication
                                and timely coordination of project planning activities are central 
                                to our methodology with our clients.

                            </p>
                      
                            <ComonSlide/>
                       

                        
                    </div>
                </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default csastar;