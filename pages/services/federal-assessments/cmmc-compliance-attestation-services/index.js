
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import BtmSlide from "./BtmSlide";
import Head from "next/head";


function cmmccom(){
    return(
        <>
        <Head>
        <title>Accedere - CMMC Assessment</title>
        <meta name="twitter:title" content="CJIS Compliance Attestation Services | Accedere &amp; Company"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              
                                CMMC Assessment </h2>
                              <p className="text-white mt-4"> We are excited to be one for the first 
                              authorized C3PAOs and the first authorized firm of our type that performs SOC, 
                              ISO, FedRAMP, PCI, and HITRUST services to be authorized to perform CMMC assessments as 
                              many of our clients also participate as defense contractors and subcontractors that are subject
                               to DFARS and the associated requirements.
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
                                    <Image src="/helicopter-army-military-war-87011.webp" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0 align-items-center">
                            
                            <div className="col">
                                    <figure className="comon-sub-main2">
                                        <Image src="/pexels-photo.jpg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                What is CMMC? </h2>

                                <p className="mt-4"> The Cybersecurity Maturity Model Certification (CMMC) is a 
                                new framework with the objective of securing federal contract information (FCI)
                                 and controlled unclassified information (CUI) that is stored, processed, or transmitted by defense contractors and the entire defense industrial base (DIB). CMMC builds on the existing NIST SP 800-171 requirements and , in many cases, requires assessment
                                 by CMMC third-party assessor organizations (C3PAOs). </p>

                             

                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> The 3 Levels of CMMC </h2>
                            <p className="col-lg-9 mx-auto d-block text-center"> With the publication of CMMC 2.0 
                            and changes from CMMC 1.0 (see article here for details on the changes), there are now 3
                             levels within the CMMC Model. The model, along with its supporting documentation like 
                             assessment guides and scoping guides, does an excellent job presenting the domains and 
                             practices in a variety of digestible ways. There are some details that should be paid 
                             specific attention to within the information provided in the CMMC Model, 
                            including the different levels and their particulars.

                            </p>
                      
                            <BtmSlide/>
                       

                        
                    </div>
                </div>

            
          </div>
          <Footer/>
        </>
    );
}
export default cmmccom;