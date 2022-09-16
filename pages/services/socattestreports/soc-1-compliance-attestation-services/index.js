
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "./components/ComonSlide";
import Head from "next/head";


function socreportingservices(){
    return(
        <>
        <Head>
            <title>Accedere - SOC 1 / SSAE 18 Examination</title>
            <meta name="description" content="Accedere is the leading Cybersecurity services company offers SOC compliance certification in North America and globally for Type 2 SOC 2, SOC 2 Type II, SOC Compliance, SOC 1 SOC 2 Report, SOC for Cybersecurity."/>
            <meta name="keywords" content="Type 2 SOC 2, SOC 2 Type II, SOC Compliance, SOC 2 Report, SOC For Cybersecurity, SOC Report, SOC 1 Reports, Accedere.io"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              SOC 1 / SSAE 18 </h2>
                              <p className="text-white mt-4"> The SOC 1 report helps organizations 
                              present a strong position to their customers regarding their control
                               environment relevant to processes that impact the client&apos;s 
                              controls over financial reporting.</p>

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
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Why a SOC 1 Assessment? </h2>
                                <p className="mt-4"> For many organizations, their financial statements will be the only
                                 story told regarding the performance of their business. SOC 1 reporting helps those
                                  organizations gain trust that their outsourced business partners are also doing their 
                                  part to protect the 
                                organization&apos;s financial reporting processes.</p>

                                
                            </div>
                            <div className="col">
                                 <figure className="mn-big-div2">
                                        <Image src="/soc2-1.jpg" alt="about"
                                        width={700}
                                        height={900}
                                        layout="responsive"
                                        />
                                </figure>
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
export default socreportingservices;