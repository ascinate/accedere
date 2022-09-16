
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";
import Head from "next/head";


function socybersc(){
    return(
        <>
        
        <Head>
            <title>Accedere - SOC for Cybersecurity </title>
            <meta name="description" content="SOC 1,2,3 Compliance Auditor,SOC 2 Auditor,SOC Auditor,GDPR CCPA Privacy Auditor,ISO 27001 Auditor,ISO 27701 Auditor"/>
            <meta name="keywords" content="Privacy Auditors, SOC 2 for privacy Auditor, SOC Auditors, Service Auditors, SOX Auditors, SSAE 16 auditors, SSAE 18 Auditors, SOC 2 Auditors, SOC 1 Auditors, SAS 70 SOC Auditors, SSAE 16 Auditors, SOC 1 Type 2 Auditors, SOC 2 Type 2 Auditors, CCPA Auditors, Privacy auditors, cloud security alliance auditors, PCAOB Auditors, CPA Auditors, ISO-ISMS auditors, ISO 27001 Auditors, Cloud CCSK, CCM 4, CCAK, Colorado SOC Auditors"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              SOC for Cybersecurity </h2>
                              <p className="text-white mt-4"> In April of 2017, the AICPA introduced its cybersecurity risk
                               management reporting framework as an essential addition to the System and Organization 
                               Controls (SOC) suite of service offerings. SOC for Cybersecurity reports include a
                                description of your cybersecurity risk management program and a set 
                              of benchmarks that we will evaluate your program against.
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
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Why a SOC Cybersecurity Assessment? </h2>
                                <p className="mt-4"> SOC for Cybersecurity reports are designed to help organizations 
                                communicate meaningful information about the effectiveness of their cybersecurity risk 
                                management program and controls, in the form of a CPA firm&apos;s independent attestation report. 
                                 for Cybersecurity report users may include senior management, 
                                boards of directors, analysts, investors and business partners.</p>

                                
                            </div>
                           
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div mt-5">
                    <div className="container">
                          <h2 className="comon-head-main mt-5 mt-lg-0 text-center"> What to expect for your SOC Examination </h2>
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
export default socybersc;