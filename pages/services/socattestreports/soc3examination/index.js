
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import ComonSlide from "../../../componets/ComonSlide";
import Head from "next/head";


function soc2examination(){
    return(
        <>

        <Head>
            <title>Accedere - SOC 3 Examination </title>
            <meta name="description" content="Learn more about how Accedere &amp; Company’s team of experts can help you with your SOC 3 examination needs."/>
            
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              SOC 3 Examination </h2>
                              <p className="text-white mt-4"> SOC 3 reports are designed to meet the needs of current 
                              customers and potential customers regarding controls at a service organization related 
                              to the Trust Service Principles but
                               may not have the need or use of a SOC 2 report.
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
                                <h2 className="comon-head-main mt-5 mt-lg-0"> What is a SOC 3 Report? </h2>
                                <p className="mt-4"> A SOC 3 report is a brief report that can be publicly
                                 distributed, on a website for example, to provide your customers and potential customers an
                                 independent examination of the organization&apos;s security controls.</p>

                                
                            </div>
                            <div className="col">
                                 <figure className="mn-big-div2 risk-1">
                                        <Image src="/soc2-1.jpg" alt="about"
                                       
                                        layout="fill"
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
export default soc2examination;