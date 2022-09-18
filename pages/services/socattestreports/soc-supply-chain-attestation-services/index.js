
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";
import Head from "next/head";


function socsupplychain(){
    return(
        <>
        <Head>
        <title>Accedere - SOC for Supply Chain </title>
        <meta name="twitter:title" content="SOC for Supply Chain | Accedere &amp; Company"/>
        
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              SOC for Supply Chain </h2>
                              <p className="text-white mt-4"> OC for Supply Chain is the most recent SOC reporting
                               option addition to the AICPA&apos;s Suite of SOC Services. This report is designed to
                                provide relevant information to organizations up and down their supply chain, 
                                and is specifically designed for all industries and stakeholders 
                              seeking to manage supply chain risks.
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
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Why SOC for Supply Chain? </h2>
                                <p className="mt-4"> The SOC for Supply Chain report provides a direct option for
                                 organizations that previously relied on vendor questionnaire responses because service
                                  provider assessment reports (SOC 1, SOC 2, SOC 3, many PCI ROCs, etc.) 
                                were unavailable for use by suppliers.</p>

                                
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
export default socsupplychain;